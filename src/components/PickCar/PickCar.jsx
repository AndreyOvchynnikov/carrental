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

  const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

  return (
  
    <section className={s.pickSection}>
      <Container>
        <div className={s.pickContainer}>
          <div ref={ref} className={s.pickContainerTitle}>
            <h3 className={inView? s.pickContainerTitleH3Anim : s.pickContainerTitleH3}>Vehicle Models</h3>
            <h2 className={inView? s.pickContainerTitleH2Anim : s.pickContainerTitleH2}>Our rental fleet</h2>
            <p className={inView? s.pickContainerTitlePAnim : s.pickContainerTitleP}>
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>
          <div className={s.pickContainerCarContent}>
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