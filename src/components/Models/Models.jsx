import { useState } from "react";
import { IconCar, IconStar } from "@tabler/icons-react";
import Container from "components/Container";
import ModelsModal from "components/ModelsModal";
import { carDATA } from "data/CarData";
import s from "./Models.module.css";


const Models = () => {

  const [showModelsModal, setShowModelsModal] = useState(false);
  const toggleModelsModal = () => setShowModelsModal(!showModelsModal);

  return (
    <>
      {showModelsModal && <ModelsModal
        toggleModelsModal={toggleModelsModal}
      />}
      <section className="models-section">
      <Container>
        <ul className={s.modelsWrapper}>
          {carDATA.map(car => {
            const { id, name: carName, price, imgBox, mark,
              model, doors, transmission, fuel } = car;
            return (
              <li key={id} className={s.li}>
                <div className={s.carBox}>
                  <div className={s.carImgBox}>
                    <img src={imgBox} alt={carName} />
                  </div>
                  <div className={s.carDescription}>
                    <div className={s.namePrice}>
                      <div className={s.namePart}>
                        <p>{mark}</p>
                        <span>
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                        </span>
                      </div>
                      <div className={s.pricePart}>
                        <h4>${price}</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className={s.carDetails}>
                      <div className={s.carDetail}>
                        <IconCar />
                        <p>{model}</p>
                      </div>
                      <div className={s.carDetail}>
                        <p className={s.pRight}>{doors}</p>
                        <IconCar />
                      </div>
                      <div className={s.carDetail}>
                        <IconCar />
                        <p>{transmission}</p>
                      </div>
                      <div className={s.carDetail}>
                        <p className={s.pRight}>{fuel}</p>
                        <IconCar />
                      </div>
                    </div>
                    <button type="button"
                      onClick={() => toggleModelsModal()}
                      className={s.carButton}
                    >
                      Book Ride
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
    </>
    
  )
};

export default Models;