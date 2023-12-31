import { useState } from "react";
import { IconCar, IconMapPinFilled, IconCalendarEvent } from "@tabler/icons-react";
import BookCarMessage from "components/BookCarMessage";
import BookCarModal from "components/BookCarModal";
import Container from "components/Container";
import s from './BookCar.module.css';

const BookCar = () => {

  const [showBookMessage, setShowBookMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  
  const requiredFieldsMessage = "All fields must be required!";
  const correctTimeMessage = "Please set the correct dates!";
  const toggleMessage = () => setShowBookMessage(!showBookMessage);

  const [bookInfo, setbookInfo] = useState("");
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const { carId, pickUp, dropOff, pickTime, dropTime } = event.target.elements;
    const values = [carId.value, pickUp.value, dropOff.value, pickTime.value, dropTime.value];
    const filteredValues = values.filter(value => !value.includes("Select"));
      
    const actualDate = new Date().getTime();
    const pickDate = new Date(pickTime.value).getTime();
    const dropDate = new Date(dropTime.value).getTime();
   
    if (filteredValues.length !== values.length) {
      setMessageText(requiredFieldsMessage);
      setShowBookMessage(true);
      return;
    }

    if (pickDate < actualDate || pickDate > dropDate) {
      setMessageText(correctTimeMessage);
      setShowBookMessage(true);
      return;
    }

    setbookInfo({
      carId: carId.value,
      pickUp: pickUp.value,
      dropOff: dropOff.value,
      pickTime: pickTime.value,
      dropTime: dropTime.value,
    });
    setShowModal(true);
    event.target.reset();
  };

  return (
    <>
      <section id="booking-section" className={s.bookSection}>
        {showModal && <BookCarModal
          bookInfo={bookInfo}
          toggleModal={toggleModal}
        />}
        <Container>
          <div className={s.bookContent}>
            <div className={s.bookContentBox}>
              <h2>Book a car</h2>
              {showBookMessage &&
                <BookCarMessage text={messageText} toggleMessage={toggleMessage} />}
              <form className={s.boxForm} onSubmit={handleSubmit}>

                <div className={s.boxFormCarType}>
                  <label>
                    <IconCar /> &nbsp; Select Your Car
                    Type &nbsp; <b>*</b>
                    <select name="carId" defaultValue="">
                      <option>Select your car type</option>
                      <option value="carAudi">Audi A1 S-Line</option>
                      <option value="carGolf">VW Golf 6</option>
                      <option value="carToyota">Toyota Camry</option>
                      <option value="carBMW">BMW 320</option>
                      <option value="carMB">Mercedes-Benz GLK</option>
                      <option value="carPassat">VW Passat</option>
                    </select>
                  </label>
                </div>

                <div className={s.boxFormCarType}>
                  <label>
                    <IconMapPinFilled /> &nbsp; Pick-up Location
                    &nbsp; <b>*</b>
                    <select name="pickUp" defaultValue="">
                      <option>Select pick up location</option>
                      <option>New York</option>
                      <option>Chicago</option>
                      <option>Los Angeles</option>
                      <option>Las Vegas</option>
                      <option>Houston</option>
                    </select>
                  </label>
                </div>

                <div className={s.boxFormCarType}>
                  <label>
                    <IconMapPinFilled /> &nbsp; Drop-of Location
                    &nbsp; <b>*</b>
                    <select name="dropOff" defaultValue="">
                      <option>Select drop off location</option>
                      <option>New York</option>
                      <option>Chicago</option>
                      <option>Los Angeles</option>
                      <option>Las Vegas</option>
                      <option>Houston</option>
                    </select>
                  </label>
                </div>

                <div className={s.boxFormCarTime}>
                  <label htmlFor="picktime">
                    <IconCalendarEvent /> &nbsp; Pick-up Time
                    &nbsp; <b>*</b>
                    <input
                      name="pickTime"
                      type="date"
                      required
                    />
                  </label>
                </div>
                              
                <div className={s.boxFormCarTime}>
                  <label htmlFor="droptime">
                    <IconCalendarEvent /> &nbsp; Drop-of Time
                    &nbsp; <b>*</b>
                    <input
                      name="dropTime"
                      type="date"
                      required
                    />
                  </label>
                </div>
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </Container>
        
      </section>
    </>
  );
};

export default BookCar;
