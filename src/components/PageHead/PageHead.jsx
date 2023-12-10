import { Link } from "react-router-dom";
import Container from "components/Container"
import s from './PageHead.module.css';

const PageHead = ({ pageName }) => {
    
  return (
    
      <section className={s.pageHeadSection}>
          <div className={s.pageHeadOverlay}>
            <Container>
                  <div className={s.pageHeadText}>
                    <h3>{pageName}</h3>
                    <p>
                        <Link to="/">Home</Link> / {pageName}
                    </p>
                </div>
            </Container>
        </div> 
      </section>
  );
}

export default PageHead;
