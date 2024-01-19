import Container from 'components/Container';
import s from './HomeBanner.module.css';
import { useInView } from 'react-intersection-observer';

const HomeBanner = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    })
    
    return (
        <section className={s.bannerSection}>
            <Container>
                <div ref={ref} className={s.bannerContent}>
                    <div className={s.bannerContentText}>
                        <h2 className={inView ? s.bannerTitleAnim : s.bannerTitle}>
                            Save big with our cheap car rental!
                        </h2>
                        <p className={inView ? s.bannerTextAnim : s.bannerText}>
                            Top Airports. Local Suppliers. <span>24/7</span> Support.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HomeBanner;