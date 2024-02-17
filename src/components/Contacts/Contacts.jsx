import { useState, useEffect } from "react";
import { IconMail, IconMailOpened, IconPhone, IconLocation } from "@tabler/icons-react";
import Container from "components/Container";
import ModalMessage from "components/ModalMessage";
import s from './Contacts.module.css';


const Contacts = () => {

    const [showQuestionMessage, setShowQuestionMessage] = useState(false);
    const toogleMessage = () => setShowQuestionMessage(!showQuestionMessage);
    const questionMessage = "Thank you for your question! We will contact you.";

    useEffect(() => {
    
        if (showQuestionMessage) {
            document.body.style.cssText = `
            overflow: hidden;
            padding-right: ${window.innerWidth - document.body.offsetWidth}px;
        `
            return;
        };
        document.body.style.cssText = '';
    
    }, [showQuestionMessage]);

    const handleSubmit = (event) => {
        event.preventDefault();
        toogleMessage();
        event.target.reset();
    };

    return (
        <>
            {showQuestionMessage &&
                <ModalMessage
                    text={questionMessage}
                    closeButton={toogleMessage}
                />}
            <section className={s.contactsSection}>
                <Container>
                    <div className={s.contactsWrapper}>
                        <div className={s.contactsText}>
                            <h2>Need additional information?</h2>
                            <p>
                                A multifaceted professional skilled in multiple fields of
                                research, development as well as a learning specialist. Over 15
                                years of experience.
                            </p>
                            <ul className={s.contactsList}>
                                <li className={s.contactsListItem}>
                                    <a href="tel:(123) 456-7869">
                                        <div className={s.linkBox}>
                                            <IconPhone />
                                            <p>(123) 456-7869</p>
                                        </div>
                                    </a>
                                </li>
                                <li className={s.contactsListItem}>
                                    <a href="mailto:carrental@carmail.com">
                                        <div className={s.linkBox}>
                                            <IconMail />
                                            <p>carrental@carmail.com</p>
                                        </div>
                                    </a>
                                </li>
                                <li className={s.contactsListItem}>
                                    <a href="https://maps.app.goo.gl/Hjmq1reyND2wgqPF7">
                                        <div className={s.linkBox}>
                                            <IconLocation />
                                            <p>New York, USA</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <form className={s.contactForm} onSubmit={handleSubmit}>
                            <label>
                                Full Name <b>*</b>
                                <input
                                    type="text"
                                    placeholder='John Smith'
                                    className={s.contactFormInput}
                                    required
                                    minLength="2"
                                />
                            </label>
                        
                            <label>
                                Email <b>*</b>
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    className={s.contactFormInput}
                                    required
                                />
                            </label>
    
                            <label>
                                Tell us about it <b>*</b>
                                <textarea
                                    placeholder="Write Here.."
                                    className={s.contactFormTextArea}
                                    required
                                ></textarea>
                            </label>
                
                            <button
                                type="submit"
                                className={s.contactFormButton}
                            >
                                <IconMailOpened />
                                &nbsp; Send Message
                            </button>
                        </form>
                    </div>
                </Container>
            </section>
        
        </>
        
    );
};

export default Contacts;