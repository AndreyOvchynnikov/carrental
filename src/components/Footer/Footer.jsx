import { IconMail, IconPhoneCall } from "@tabler/icons-react";
import Container from "components/Container";
import { companyLinks } from '../../data/footerData';
import s from './Footer.module.css';

const Footer = () => {
  
    return (
    
      <footer className={s.footerSection}>
        <Container>
          <div className={s.footerWpapper}>
              <div className={s.contacts}>
                <h3 className={s.title}>Car R<span>ental</span></h3>
                <p>We offers a big range of vehicles for
                  all your driving needs.
                  We have the perfect car to meet your needs.
                </p>
                <a href="/">
                  <span className={s.icon}><IconPhoneCall /></span>
                  (123) -456-789
                </a>
                <a href="/">
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
                <form className={s.footerForm}>
                  <input type="email" placeholder="Enter Email Address" name="email" />
                  <button type="submit" onClick={e => e.preventDefault()}>Submit</button>
                </form>
              </div>
          </div>
        </Container>
      </footer>

  );
}

export default Footer;
