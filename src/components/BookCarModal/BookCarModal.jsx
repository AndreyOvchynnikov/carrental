import { useEffect, useState } from "react";
import { IconX, IconMapPinFilled, IconInfoCircleFilled } from "@tabler/icons-react";
import BookCarModalForm from '../BookCarModalForm';
import ModalMessage from "components/ModalMessage";
import { carDATA } from '../../data/CarData';
import s from './BookCarModal.module.css';


const BookCarModal = ({ bookInfo, toggleModal }) => {

  useEffect(() => {
        document.body.style.cssText = `
            overflow: hidden;
            padding-right: ${window.innerWidth - document.body.offsetWidth}px;
        `;
        return () => {
            document.body.style.cssText = '';
        };
    }, []);

  const successMessage = "Check your email to confirm an order!";
  const [showBookModalMessage, setShowBookModalMessage] = useState(false);

  const { carId, pickUp, dropOff, pickTime, dropTime } = bookInfo;
  const selectedCar = carDATA.find(car => car.id === carId);
  const { name: carName, img } = selectedCar;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowBookModalMessage(!showBookModalMessage);
    event.target.reset();
  };

  
  return (
    <>
      {showBookModalMessage && <ModalMessage text={successMessage} closeButton={toggleModal} />}
      <div className={s.modalOverlay}>
      <div className={s.bookingModal}>
        <div className={s.bookingModalTitle}>
          <h2>Complete Reservation</h2>
          <IconX onClick={toggleModal} />
        </div>
        <div className={s.bookingModalMessage}>
          <h4>
            <IconInfoCircleFilled /> Upon completing this reservation enquiry,
            you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        <div className={s.bookingModalCarInfo}>
          <div className={s.datesDiv}>
            <h5>Location & Date</h5>
              
            <div className={s.bookingModalCarInfoDates}>
              <IconMapPinFilled />
              <label>
                <span>Pick-Up Date & Time</span>
                <span className={s.inputSpan}>{pickTime} /{" "}
                  <input type="time" className={s.inputTime} />
                </span>
              </label>
            </div>
              
            <div className={s.bookingModalCarInfoDates}>
              <IconMapPinFilled />
              <label>
                <span>Drop-Off Date & Time</span>
                <span className={s.inputSpan}>{dropTime} /{" "}
                  <input type="time" className={s.inputTime} />
                </span>
              </label>
            </div>

            <div className={s.bookingModalCarInfoDates}>
              <IconMapPinFilled />
              <div>
                <h6>Pick-Up Location</h6>
                <p className={s.inputSpan}>{pickUp}</p>
              </div>
            </div>

            <div className={s.bookingModalCarInfoDates}>
              <IconMapPinFilled />
              <div>
                <h6>Drop-Off Location</h6>
                <p className={s.inputSpan}>{dropOff}</p>
              </div>
            </div>
          </div>
            
          <div className={s.bookingModalCarInfoModel}>
            <h5>
              <span>Car -</span> {carName}
            </h5>
            <img src={img} alt="car_img" />
          </div>
        </div>

        <div className={s.bookingModalPersonInfo}>
          <h4>Personal Information</h4>
          <BookCarModalForm onSubmit={handleFormSubmit} />
        </div>
      </div>
    </div>
    </>
    
  )
};

export default BookCarModal;
