import Container from 'components/Container';
import SelectCar from '../../images/plan/icon1.png';
import Contact from '../../images/plan/icon2.png';
import Drive from '../../images/plan/icon3.png';
import { useInView } from 'react-intersection-observer';
import s from './PlanTrip.module.css';

const PlanTrip = () => {

    const { ref: titleRef, inView: titleIsVisible } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    const { ref: imgRef, inView: imgIsVisible } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    })
    
    return (
      
        <section className={s.planSection}>
            <Container>
                <div className={s.planContainer}>
                    <div className={s.planContainerTitle}>
                        <h3>Plan your trip now</h3>
                        <h2 ref={titleRef} className={titleIsVisible ? s.animationTitle : s.planSectionTitle}>Quick & easy car rental</h2>
                    </div>
                    <div className={s.planContainerBoxes}>
                        <div ref={imgRef} className={s.planContainerBoxesBox}>
                            <img className={imgIsVisible ? s.planContainerBoxesBoxImgRotate : s.planContainerBoxesBoxImg}
                                src={SelectCar}
                                alt="icon_img" />
                            <h3>Select Car</h3>
                            <p>
                                We offers a big range of vehicles for all your driving needs.
                                We have the perfect car to meet your needs
                            </p>
                        </div>
                        <div className={s.planContainerBoxesBox}>
                            <img className={imgIsVisible ? s.planContainerBoxesBoxImgRotate : s.planContainerBoxesBoxImg}
                                src={Contact}
                                alt="icon_img" />
                            <h3>Contact Operator</h3>
                            <p>
                                Our knowledgeable and friendly operators are always ready to
                                help with any questions or concerns
                            </p>
                        </div>
                        <div className={s.planContainerBoxesBox}>
                            <img className={imgIsVisible ? s.planContainerBoxesBoxImgRotate : s.planContainerBoxesBoxImg}
                                src={Drive}
                                alt="icon_img" />
                            <h3>Let's Drive</h3>
                            <p>
                                Whether you're hitting the open road, we've got you covered
                                with our wide range of cars
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PlanTrip;