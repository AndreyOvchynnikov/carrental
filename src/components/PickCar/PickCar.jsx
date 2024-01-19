import { useState } from "react";
import CarBox from "../CarBox";
import Container from "components/Container";
import { carDATA } from "../../data/CarData";
import { useInView } from 'react-intersection-observer';
import s from './PickCar.module.css';

const startCarID = carDATA[0].id;

const PickCar = () => {
  const [activeCarId, setactiveCarId] = useState(startCarID);
    
  const handleClick = (event) => {
    setactiveCarId(event.target.name);
  }

  const animationOptions = {
    triggerOnce: true,
    rootMargin: '-100px 0px',
  }

  const { ref: titleRef, inView: titleIsVisible } = useInView(animationOptions);
  const { ref: carContent, inView: carContentIsVisible } = useInView({
    triggerOnce: true,
    rootMargin: '400px 0px',
  });

  return (
  
    <section className={s.pickSection}>
      <Container>
        <div className={s.pickContainer}>
          <div ref={titleRef} className={s.pickContainerTitle}>
            <h3 className={titleIsVisible? s.pickContainerTitleH3Anim : s.pickContainerTitleH3}>Vehicle Models</h3>
            <h2 className={titleIsVisible? s.pickContainerTitleH2Anim : s.pickContainerTitleH2}>Our rental fleet</h2>
            <p className={titleIsVisible? s.pickContainerTitlePAnim : s.pickContainerTitleP}>
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>
          <div ref={carContent} className={carContentIsVisible? s.pickContainerCarContentAnim : s.pickContainerCarContent}>
            <ul className={s.pickBox}>
              {carDATA.map(car => {
                const { name: carName, id } = car;
                return (
                  <li key={id}>
                    <button
                      type="button"
                      name={id}
                      onClick={handleClick}
                      className={activeCarId === id ? s.coloredButton : ""}
                    >
                      {carName}
                    </button>
                  </li>
                );
              })}
            </ul>
            <CarBox carID={activeCarId} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PickCar;