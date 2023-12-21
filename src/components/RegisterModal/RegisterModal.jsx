import { useEffect, useState } from 'react';
import { IconX } from "@tabler/icons-react";
import { useAuthContext } from 'components/context/authContext';
import ModalMessage from 'components/ModalMessage';
import s from './RegisterModal.module.css';

const RegisterModal = () => {

    const { showRegisterModal, setShowRegisterModal, registerSubmit, setIsLoading } = useAuthContext();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const registerErrorMessage = "This name or email is already in use!";
    const [showRegisterMessage, setShowRegisterMessage] = useState(false);
    const toogleMessage = () => setShowRegisterMessage(!showRegisterMessage);

    const registerModalSubmit = async (event) => {
        try {
            await registerSubmit(event);
        } catch (error) {
            setShowRegisterModal(true);
            setIsLoading(false);
            toogleMessage();
        }
    };
    
    return (
        <>
            {showRegisterMessage && <ModalMessage text={registerErrorMessage} closeButton={toogleMessage} />}
            <div className={s.overlay}>
                <div className={s.modalContainer}>
                    <div className={s.modalTitle} >
                        <h2>Create your account</h2>
                        <button
                            className={s.closeButton}
                            type="button"
                            onClick={() => setShowRegisterModal(!showRegisterModal)}
                        >
                            <IconX />
                        </button>
                    </div>
                    <form onSubmit={registerModalSubmit} className={s.form}>
                        <label className={s.label}>
                            Name <b>*</b>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                aria-label="Input for your name"
                                minLength="2"
                                className={s.input}
                            />
                            <span>This field is required.</span>
                        </label>
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
                        <button type="submit" className={s.formButton}>Create account</button>
                    </form>
                </div>
            </div>
        </>
        
    )
};

export default RegisterModal;
