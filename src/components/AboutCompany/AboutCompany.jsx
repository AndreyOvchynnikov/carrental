import Container from 'components/Container';
import aboutMain from '../../images/about/about-main.jpg';
import box1 from '../../images/about/icon1.png';
import box2 from '../../images/about/icon2.png';
import box3 from '../../images/about/icon3.png';
import s from './AboutCompany.module.css';


const AboutCompany = () => {

    return (
        
        <Container>
            <div className={s.aboutCompanySection}>
                <img
                    className={s.image}
                    src={aboutMain}
                    alt="car-renting"
                />
                <div className={s.text}>
                    <h3>About Company</h3>
                    <h2>You start the engine and your adventure begins</h2>
                    <p>
                        Certain but she but shyness why cottage. Guy the put instrument
                        sir entreaties affronting. Pretended exquisite see cordially the
                        you. Weeks quiet do vexed or whose. Motionless if no to
                        affronting imprudence no precaution. My indulged as disposal
                        strongly attended.
                    </p>
                    <ul className={s.icons}>
                        <li className={s.iconsBox}>
                            <img src={box1} alt="car-icon" />
                            <div className={s.iconsBoxText}>
                                <h4>20</h4>
                                <p>Car Types</p>
                            </div>
                        </li>
                        <li className={s.iconsBox}>
                            <img src={box2} alt="car-icon" />
                            <div className={s.iconsBoxText}>
                                <h4>85</h4>
                                <p>Rental Outlets</p>
                            </div>
                        </li>
                        <li className={s.iconsBox}>
                            <img src={box3} alt="car-icon" className={s.lastFk} />
                            <div className={s.iconsBoxText}>
                                <h4>75</h4>
                                <p>Repair Shop</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default AboutCompany;