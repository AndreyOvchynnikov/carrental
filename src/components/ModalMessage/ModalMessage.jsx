import { createPortal } from "react-dom";
import s from './ModalMessage.module.css';

const modalMessagePortal = document.querySelector("#modal-message-root");

const ModalMessage = ({ text, closeButton }) => {

    return createPortal(
        
        <div className={s.overlay}>
            <div className={s.wrapper}>
                <div className={s.message}>
                    <p>{text}</p>
                    <button type="button" onClick={closeButton}>OK</button>
                </div>
            </div>
        </div>, modalMessagePortal

    )
};

export default ModalMessage;