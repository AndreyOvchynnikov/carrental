import { IconQuote } from "@tabler/icons-react";
import Container from "components/Container";
import { testimonialsData } from '../../data/testimonialsData';
import s from './Testimonials.module.css';
import { useInView } from "react-intersection-observer";


const Testimonials = () => {

    const { ref: titleRef, inView: titleIsVivsible } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    const {ref: testimonialsRef, inView: testimonialsIsVisible } = useInView({
        triggerOnce: true,
        rootMargin: '300px 0px',
    });
    
    return (

        <section className={s.testimonialsSection}>
            <Container>
                <div className={s.testimonialsContent}>
                    <div ref={titleRef} className={s.testimonialsContentTitle}>
                        <h4
                            className={titleIsVivsible ? s.testimonialsContentTitleH4Anim : s.testimonialsContentTitleH4}
                        >
                            Reviewed by People
                        </h4>
                        <h2
                           className={titleIsVivsible ? s.testimonialsContentTitleH2Anim : s.testimonialsContentTitleH2} 
                        >
                            Client's Testimonials
                        </h2>
                        <p className={titleIsVivsible ? s.testimonialsContentTitleTextAnim : s.testimonialsContentTitleText}>
                            Discover the positive impact we've made on the our clients by
                            reading through their testimonials. Our clients have experienced
                            our service and results, and they're eager to share their
                            positive experiences with you.
                        </p>
                    </div>

                    <ul ref={testimonialsRef}
                        className={testimonialsIsVisible? s.allTestimonialsAnim : s.allTestimonials}>
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
