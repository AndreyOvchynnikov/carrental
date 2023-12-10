import s from './BookCarModalForm.module.css';

const BookCarModalForm = ({ onSubmit }) => {

    return (
        <form className={s.form} onSubmit={onSubmit}>
            <div className={s.formGrid}>
                <label>
                    First Name <b>*</b>
                    <input
                        type="text" name="firstName"
                        placeholder="Enter your first name"
                        minLength="2"
                        required
                    />
                    <span>This field is required.</span>
                </label>
                
                <label>
                    Last Name <b>*</b>
                    <input
                        type="text" name="lastName"
                        placeholder="Enter your last name"
                        minLength="2"
                        required
                    />
                    <span>This field is required.</span>
                </label>

                <label>
                    Phone Number <b>*</b>
                    <input
                        type="tel" name="tel"
                        placeholder="Enter your phone number"
                        required
                    />
                    <span>This field is required.</span>
                </label>

                <label>
                    Age <b>*</b>
                    <input
                        type="number"
                        name="age"
                        placeholder="18"
                        min="18"
                        required
                    />
                    <span>This field is required.</span>
                </label>
                
                <label className={s.email}>
                    Email <b>*</b>
                    <input
                        type="email" name="email"
                        placeholder="Enter your email address"
                        required
                    />
                    <span>This field is required.</span>
                </label>
                
                <label className={s.address}>Address
                    <input
                        type="text" name="address"
                        placeholder="Enter your street address"
                    />
                </label>
                <label>City
                    <input
                        type="text" name="city"
                        placeholder="Enter your city"
                    />
                </label>
                
                <label>Zip Code
                    <input
                        type="text" name="zipCode"
                        placeholder="Enter your zip code"
                    />
                </label>
            </div>

            <label className={s.formCheckbox}>
                <input type="checkbox" name="checkbox" />
                <span>Please send me latest news and updates</span>
            </label>

            <div className={s.reserveButton}>
                <button>Reserve Now</button>
            </div>
        </form>
    )
};

export default BookCarModalForm;
 