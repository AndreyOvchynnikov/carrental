import Container from 'components/Container';
import appstoreImg from '../../images/download/appstore.svg';
import googleappImg from '../../images/download/googleapp.svg';
import s from './Download.module.css';
import { useInView } from 'react-intersection-observer';

const Download = () => {

  const { ref: linksRef, inView: linksIsVisible } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const { ref: textRef, inView: textIsVisible } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  })

  return (
    
    <section className={s.downloadSection}>
      <Container>
        <div ref={textRef} className={s.downloadText}>
          <h2 className={textIsVisible ? s.downloadTextH2Anim : s.downloadTextH2}>
            Download our app to get most out of it
          </h2>
          <p className={textIsVisible ? s.downloadTextPAnim : s.downloadTextP}>
            Thrown shy denote ten ladies though ask saw. Or by to he going
            think order event music. Incommode so intention defective at
            convinced. Led income months itself and houses you.
          </p>
          <div ref={linksRef} className={s.downloadTextBtns}>
            <img
              className={linksIsVisible? s.downloadTextBtnsImgAnim : s.downloadTextBtnsImg}
              alt="googleapp" src={googleappImg} />
            <img
              className={linksIsVisible? s.downloadTextBtnsImgAnim : s.downloadTextBtnsImg}
              alt="appstore" src={appstoreImg} />
          </div>
        </div>
      </Container>
    </section>

  );
};

export default Download;
