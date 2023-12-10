import { IconQuote } from "@tabler/icons-react";
import Container from "components/Container";
import { testimonialsData } from '../../data/testimonialsData';
import s from './Testimonials.module.css';


const Testimonials = () => {
    
    return (

        <section className={s.testimonialsSection}>
            <Container>
                <div className={s.testimonialsContent}>
                    <div className={s.testimonialsContentTitle}>
                        <h4>Reviewed by People</h4>
                        <h2>Client's Testimonials</h2>
                        <p>
                            Discover the positive impact we've made on the our clients by
                            reading through their testimonials. Our clients have experienced
                            our service and results, and they're eager to share their
                            positive experiences with you.
                        </p>
                    </div>

                    <ul className={s.allTestimonials}>
                        {testimonialsData.map((user, index) => {
                            const { userName, photo, city, review } = user;
                            return (
                                <li key={index} className={s.allTestimonialsBox}>
                                    <div className={s.quotesIcon}>
                                        <IconQuote width={60} height={60} />
                                    </div>
                                    <p>{review}</p>
                                    <div className={s.allTestimonialsBoxName}>
                                        <div className={s.allTestimonialsBoxNameProfile}>
                                            <img src={photo} alt="user avatar" />
                                            <div>
                                                <h4>{userName}</h4>
                                                <p>{city}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;
