import { useAuthContext } from 'components/context/authContext';
import RegisterModal from 'components/RegisterModal';
import LogInModal from 'components/LogInModal';
import s from './AuthNav.module.css';

const AuthNav = () => {

    const {
        showRegisterModal,
        setShowRegisterModal,
        showLogInModal,
        setShowLogInModal
    } = useAuthContext();

    return (
        <>
            <ul className={s.authButtons}>
                <li>
                    <button
                        className={s.logInBtn}
                        type="button"
                        onClick={() => setShowLogInModal(!showLogInModal)}
                    >Log In</button>
                </li>
                <li>
                    <button
                        className={s.registerBtn}
                        type="button"
                        onClick={() => setShowRegisterModal(!showRegisterModal)}
                    >
                        Register</button>
                </li>
            </ul>
            {showLogInModal && <LogInModal />}
            {showRegisterModal && <RegisterModal />}
        </>
    )
};

export default AuthNav;