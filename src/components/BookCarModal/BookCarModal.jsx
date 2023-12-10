import { IconX, IconMapPinFilled, IconInfoCircleFilled } from "@tabler/icons-react";
import { carDATA } from '../../data/CarData';
import BookCarModalForm from '../BookCarModalForm';
import { useEffect, useState } from "react";
import s from './BookCarModal.module.css';


const BookCarModal = ({ bookInfo, toggleModal, setShowMessage, setMessageStatus, setMessageText }) => {

  const [completeMessage, setCompleteMessage] = useState(false);
  const successMessage = "Check your email to confirm an order";

  const { carId, pickUp, dropOff, pickTime, dropTime } = bookInfo;
  const selectedCar = carDATA.find(car => car.id === carId);
  const { name: carName, img } = selectedCar;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setCompleteMessage(!completeMessage);
    setMessageText(successMessage);
    setMessageStatus(true);
    setShowMessage(true);
    event.target.reset();
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [])

  return (
    <>
      {completeMessage &&
        <div className={s.overlay}>
          <div className={s.successMessage}>
            <p>Your request has been sent successfully!</p>
            <button type="button" onClick={toggleModal}>OK</button>
          </div>
        </div>}
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
