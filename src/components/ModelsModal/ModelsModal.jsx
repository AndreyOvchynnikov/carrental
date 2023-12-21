import { useState, useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import ModalMessage from "components/ModalMessage";
import s from './ModelsModal.module.css';


const ModelsModal = ({ toggleModelsModal }) => {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const [showModelsModalMessage, setShowModelsModalMessage] = useState(false);
    const successMessageText = "Thank you! Our manager will contact you soon.";

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowModelsModalMessage(!showModelsModalMessage);
    }

    return (
        <>
            {showModelsModalMessage &&
                <ModalMessage
                    text={successMessageText}
                    closeButton={toggleModelsModal}
                />}
            <div className={s.overlay}>
                <div className={s.modalContainer}>
                    <div className={s.modalTitle} >
                        <h2>Contact information</h2>
                        <button
                            className={s.closeButton}
                            type="button"
                            onClick={toggleModelsModal}
                        >
                            <IconX />
                        </button>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className={s.form}
                    >
                        <label className={s.label}>
                            Name <b>*</b>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                aria-label="Input for your name"
                                minLength="2"
                                required
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
                                required
                                className={s.input}
                            />
                            <span>This field is required.</span>
                        </label>
                        <label className={s.label}>
                            Phone Number <b>*</b>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your phone number"
                                aria-label="Input for your phone number"
                                required
                                className={s.input}
                                
                            />
                            <span>This field is required.</span>
                        </label>
                        <button type="submit" className={s.formButton}>Send Request</button>
                    </form>
                </div>
            </div>
        </>
    )
};

export default ModelsModal;