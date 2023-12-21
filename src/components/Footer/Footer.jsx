import { useState } from "react";
import { IconMail, IconPhoneCall } from "@tabler/icons-react";
import Container from "components/Container";
import ModalMessage from "components/ModalMessage";
import { companyLinks } from '../../data/footerData';
import s from './Footer.module.css';

const Footer = () => {

  const [showFooterMessage, setShowFooterMessage] = useState(false);
  const submitMessage = "You have successfully subscribed! Please, check your email.";

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    toogleMessage();
  };

  const toogleMessage = () => setShowFooterMessage(!showFooterMessage)
  
  return (
    <>
      {showFooterMessage &&
        <ModalMessage text={submitMessage}
          closeButton={toogleMessage}
        />}
      <footer className={s.footerSection}>
        <Container>
          <div className={s.footerWpapper}>
            <div className={s.contacts}>
              <h3 className={s.title}>Car R<span>ental</span></h3>
              <p>We offers a big range of vehicles for
                all your driving needs.
                We have the perfect car to meet your needs.
              </p>
              <a href="tel:(123) 456-7869">
                <span className={s.icon}><IconPhoneCall /></span>
                (123) -456-789
              </a>
              <a href="mailto:carrental@carmail.com">
                <span className={s.icon}><IconMail /></span>
                carrental@gmail.com
              </a>
            </div>
            <div className={s.company}>
              <h3 className={s.title}>Company</h3>
              <ul className={s.companyList}>
                {companyLinks.map((item, index) => {
                  const { link, href } = item;
                  return (
                    <li key={index}>
                      <a href={href}>{link}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className={s.working}>
              <h3 className={s.title}>Working Hours</h3>
              <p>Mon - Fri: 9:00AM - 9:00PM</p>
              <p>Sat: 9:00AM - 19:00PM</p>
              <p>Sun: Closed</p>
            </div>
            <div className={s.subscription}>
              <h3 className={s.title}>Subscription</h3>
              <p>Subscribe your Email address for latest news & updates.</p>
              <form className={s.footerForm} onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter Email Address" name="email" required />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </Container>
      </footer>
    </>
      

  );
};

export default Footer;
