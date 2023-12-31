import { Link } from "react-router-dom";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";
import Container from "components/Container";
import BgShape from "../../images/hero/hero-bg.png";
import HeroCar from "../../images/hero/main-car.png";
import s from './Hero.module.css';

const Hero = () => {

    const bookBtn = () => {
        document.querySelector("#booking-section").scrollIntoView();
    };

    const learnBtn = () => {
        document.querySelector("#choose-us").scrollIntoView();
    }
   
    return (
        <section id="home" className={s.heroSection}>
            <Container>
                <img className={s.bgShape} src={BgShape} alt="bg-shape" />
                <div className={s.heroContent}>
                    <div className={s.heroContentText}>
                        <h4>Plan your trip now</h4>
                        <h1>
                            Save <span>big</span> with our car rental
                        </h1>
                        <p>
                            Rent the car of your dreams. Unbeatable prices, unlimited miles,
                            flexible pick-up options and much more.
                        </p>
                        <ul className={s.heroContentBtns}>
                            <li>
                                <Link
                                    onClick={bookBtn}
                                    className={s.heroContentBtnLeft}
                                >
                                    Book Ride &nbsp; <IconCircleCheck />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={s.heroContentBtnRight}
                                    onClick={learnBtn}
                                >
                                    Learn More &nbsp; <IconChevronRight />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <img
                        src={HeroCar}
                        alt="car-img"
                        className={s.heroContentCarImg}
                    />
                </div>
            </Container>
        </section>
    );
};

export default Hero;
