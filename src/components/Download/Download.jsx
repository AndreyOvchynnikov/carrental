import Container from 'components/Container';
import appstoreImg from '../../images/download/appstore.svg';
import googleappImg from '../../images/download/googleapp.svg';
import s from './Download.module.css';

const Download = () => {
  return (
    
      <section className={s.downloadSection}>
        <Container>
            <div className={s.downloadText}>
            <h2>Download our app to get most out of it</h2>
            <p>
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
              <div className={s.downloadTextBtns}>
              <img alt="googleapp" src={googleappImg} />
              <img alt="appstore" src={appstoreImg} />
            </div>
          </div>
        </Container>
      </section>

  );
}

export default Download;
