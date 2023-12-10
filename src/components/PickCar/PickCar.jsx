import { useState } from "react";
import CarBox from "../CarBox";
import Container from "components/Container";
import { carDATA } from "../../data/CarData";
import s from './PickCar.module.css';

const startCarID = carDATA[0].id;

const PickCar = () => {
  const [activeCarId, setactiveCarId] = useState(startCarID);
    
  const handleClick = (event) => {
    setactiveCarId(event.target.name);
  }

  return (
  
    <section className={s.pickSection}>
      <Container>
        <div className={s.pickContainer}>
          <div className={s.pickContainerTitle}>
            <h3>Vehicle Models</h3>
            <h2>Our rental fleet</h2>
            <p>
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