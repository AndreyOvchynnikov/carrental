import Container from "components/Container";
import box1 from "../../images/chooseUs/icon1.png";
import box2 from "../../images/chooseUs/icon2.png";
import box3 from "../../images/chooseUs/icon3.png";
import { IconChevronRight } from "@tabler/icons-react";
import s from './ChooseUs.module.css';

const ChooseUs = () => {
  return (
    
    <section className={s.chooseSection}>
      <Container>
        <div className={s.chooseContainer}>
          <div className={s.textContainer}>
            <div className={s.textContainerLeft}>
              <h4>Why Choose Us</h4>
              <h2>Best valued deals you will ever find</h2>
              <p>
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value
                for your money, so you can enjoy top-quality services and
                products without breaking the bank. Our deals are designed to
                give you the ultimate renting experience, so don't miss out on
                your chance to save big.
              </p>
              <a href="#home">
                Find Details &nbsp;
                <IconChevronRight />
              </a>
            </div>
            <ul className={s.textContainerRight}>
              <li className={s.textContainerRightBox}>
                <img src={box1} alt="car-img" />
                <div className={s.textContainerRightBoxText}>
                  <h4>Cross Country Drive</h4>
                  <p>
                    Take your driving experience to the next level with our
                    top-notch vehicles for your cross-country adventures.
                  </p>
                </div>
              </li>
              <li className={s.textContainerRightBox}>
                <img src={box2} alt="coin-img" />
                <div className={s.textContainerRightBoxText}>
                  <h4>All Inclusive Pricing</h4>
                  <p>
                    Get everything you need in one convenient, transparent
                    price with our all-inclusive pricing policy.
                  </p>
                </div>
              </li>
              <li className={s.textContainerRightBox}>
                <img src={box3} alt="coin-img" />
                <div className={s.textContainerRightBoxText}>
                  <h4>No Hidden Charges</h4>
                  <p>
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
    
  );
};

export default ChooseUs;
