import { carDATA } from "data/CarData";
import s from './CarBox.module.css';
import { useState } from "react";

const CarBox = ({ carID }) => {
  const [showLoader, setShowLoader] = useState(true);

  const selectedCar = carDATA.find(car => car.id === carID);
  const { price, img, model, mark, year, doors, air, transmission, fuel } = selectedCar;

  const carProperties = [
    { "Model": model },
    { "Mark": mark },
    { "Year": year },
    { "Doors": doors },
    { "AC": air },
    { "Transmission": transmission },
    { "Fuel": fuel }
  ];

  return (
    
    <div className={s.boxCars}>
      <div className={s.pickCar}>
        {showLoader && <span className={s.loader}></span>}
        <img src={img} alt="car_img" onLoad={() => setShowLoader(false)} />
      </div>
      <div className={s.pickWrapper}>
        <table className={s.pickDescription}>
          <thead className={s.pickDescriptionPrice}>
            <tr>
              <th><span>${price}</span>  / rent per day</th>
            </tr>
          </thead>
          <tbody className={s.pickDescriptionTable}>
            {carProperties.map((property, index) => {
              return (
                <tr key={index} className={s.pickDescriptionTableCol}>
                  <td>{Object.keys(property)}</td>
                  <td>{Object.values(property)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <a className={s.ctaBtn} href="#booking-section">
          Reserve Now
        </a>
      </div>
    </div>
  );
};

export default CarBox;
