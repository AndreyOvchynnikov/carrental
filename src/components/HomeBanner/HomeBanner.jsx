import Container from 'components/Container';
import s from './HomeBanner.module.css';

const HomeBanner = () => {
    
    return (
        <section className={s.bannerSection}>
            <Container>
                <div className={s.bannerContent}>
                    <div className={s.bannerContentText}>
                        <h2>Save big with our cheap car rental!</h2>
                        <p>
                            Top Airports. Local Suppliers. <span>24/7</span> Support.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HomeBanner;