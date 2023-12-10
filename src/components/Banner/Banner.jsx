import { IconPhone } from "@tabler/icons-react";
import Container from "components/Container";
import s from './Banner.module.css';

const Banner = () => {

    return (
        <section className={s.banner}>
            <div className={s.bannerOverlay}></div>
                <Container>
                    <div className={s.bannerContent}>
                        <h2>Book a car by getting in touch with us</h2>
                        <div className={s.bannerContentPhone}>
                            <IconPhone width={40} height={40} />
                            <h3>(123) 456-7869</h3>
                        </div>
                    </div>
                </Container>         
        </section>
    );
};

export default Banner;