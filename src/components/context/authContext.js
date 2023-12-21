import { createContext, useContext, useState, useEffect } from "react";
import { register, logout, refreshUser, logIn} from '../api';

const Context = createContext();

export const AuthContext = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showLogInModal, setShowLogInModal] = useState(false);
    const [token, setToken] = useState("");
    const [userName, setUserName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const refreshPage = async () => {
            const localToken = JSON.parse(localStorage.getItem('token'));
        
            if (!localToken) {
                return;
            };
            setIsLoading(true);
            const responce = await refreshUser(localToken);
            setUserName(responce.name);
            setToken(localToken);
            setIsLogin(true);
            setIsLoading(false);
        }
        refreshPage();

    }, []);


    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));
    }, [token]);

    
    const registerSubmit = async (event) => {

        event.preventDefault();
        const formData = event.target.elements;
        const values = {
            name: formData.name.value,
            email: formData.email.value,
            password: formData.password.value,
        };

        setIsLoading(true);
        const responce = await register(values);
        setToken(responce.token);
        setUserName(responce.user.name);
        setShowRegisterModal(!showRegisterModal);
        setIsLogin(!isLogin);
        setIsLoading(false);
    };

    const logInSubmit = async (event) => {
        
        event.preventDefault();
        const formData = event.target.elements;
        const values = {
            email: formData.email.value,
            password: formData.password.value,
        };

        setIsLoading(true);
        const responce = await logIn(values);
        setToken(responce.token);
        setUserName(responce.user.name);
        setShowLogInModal(false);
        setIsLogin(!isLogin);
        setIsLoading(false);
    };

    const userLogout = async () => {

        setIsLoading(true);
        await logout();
        setToken("");
        setUserName("");
        setShowLogInModal(false);
        setShowRegisterModal(false);
        setIsLogin(!isLogin);
        setIsLoading(false);

    };


    return (
        <Context.Provider
            value={{

                isLogin,
                setIsLogin,
                showRegisterModal,
                setShowRegisterModal,
                showLogInModal,
                setShowLogInModal,
                registerSubmit,
                userName,
                userLogout,
                isLoading,
                setIsLoading,
                logInSubmit,
            }}
        >
            {children}
        </Context.Provider>
    )
};

export const useAuthContext = () => useContext(Context);

