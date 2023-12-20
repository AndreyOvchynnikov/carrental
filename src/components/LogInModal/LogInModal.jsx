import { useEffect, useState } from 'react';
import { IconX } from "@tabler/icons-react";
import { useAuthContext } from 'components/context/authContext';
import ModalMessage from 'components/ModalMessage';
import s from './LogInModal.module.css';

const LogInModal = () => {

    const { showLogInModal, setShowLogInModal, logInSubmit, setIsLoading } = useAuthContext();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const logInErrorMessage = "Error! Please check your login or password";
    const [showLogInMessage, setShowLogInMessage] = useState(false);
    const toogleMessage = () => setShowLogInMessage(!showLogInMessage)

    const logInModalSubmit = async (event) => {
        
        try {
            await logInSubmit(event);
        } catch (error) {
            setShowLogInModal(true);
            setIsLoading(false);
            toogleMessage();
        }
    }

    return (
        <>
            {showLogInMessage && <ModalMessage text={logInErrorMessage} closeButton={toogleMessage} />}
            <div className={s.overlay}>
                <div className={s.modalContainer}>
                    <div className={s.modalTitle} >
                        <h2>Login to your account</h2>
                        <button
                            className={s.closeButton}
                            type="button"
                            onClick={() => setShowLogInModal(!showLogInModal)}
                        >
                            <IconX />
                        </button>
                    </div>
                    <form onSubmit={logInModalSubmit} className={s.form}>
                        <label className={s.label}>
                            Email <b>*</b>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                aria-label="Input for your email"
                                className={s.input}
                            />
                            <span>This field is required.</span>
                        </label>
                        <label className={s.label}>
                            Password <b>*</b>
                            <input
                                type="password"
                                name="password"
                                placeholder="Should be at least 8 characters"
                                aria-label="Input for your password"
                                minLength="8"
                                className={s.input}
                            />
                            <span>This field is required.</span>
                        </label>
                        <button type="submit" className={s.formButton}>Log in</button>
                    </form>
                </div>
            </div>
        </>
    )
};

export default LogInModal;