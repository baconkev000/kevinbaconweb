
import './styles.css'
import { useState } from 'react';
import * as Validation from "./validation"; // Import validation functions from validation.js


function FormPage() {
  const [showForm, setShowForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [howFound, setHowFound] = useState([]);
    const [comments, setComments] = useState("");
      const states = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];
  
  const toggleForm = () => {
    setShowForm(!showForm);
    setShowThankYou(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isFirstNameValid = Validation.checkRequired(firstName);
    const isLastNameValid = Validation.checkRequired(lastName);
    const isAddressValid = Validation.checkRequired(address);
    const isCityValid = Validation.checkRequired(city);
    const isStateValid = Validation.checkRequired(state) && Validation.checkState(state);
    const isZipValid = Validation.checkRequired(zip) && Validation.checkFormat(zip, /^\d{5}$/);
    const isPhoneValid = Validation.checkRequired(phone) && Validation.checkFormat(phone, /^\d{10}$/);
    const isEmailValid = Validation.checkRequired(email) && Validation.checkFormat(email, /^\S+@\S+\.\S+$/);
    const isHowFoundValid = Validation.checkRequired(howFound);
    if (
      isFirstNameValid &&
      isLastNameValid &&
      isAddressValid &&
      isCityValid &&
      isStateValid &&
      isZipValid &&
      isPhoneValid &&
      isEmailValid &&
      isHowFoundValid
    ) {
      setShowForm(false);
      setShowThankYou(true);
    } else {
      alert("Please fill in all required fields correctly.");
    }
  };
    
    const handleCheckboxChange = (event, value) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setHowFound([...howFound, value]);
    } else {
      setHowFound(howFound.filter(item => item !== value));
    }
  };
    return (
        <div className='content-body'>
            <button onClick={toggleForm} className={`${showThankYou ? "hidden" : ""}`}>Fill out visitors form</button>
                    <section className={`form-section ${showForm ? "" : "hidden"}`}>
        <h2>Visitor Form</h2>
        <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <label htmlFor="state">State:</label>
        <select
          id="state"
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="" disabled>Select a State</option>
          {states.map((stateCode) => (
            <option key={stateCode} value={stateCode}>
              {stateCode}
            </option>
          ))}
        </select>

          <label htmlFor="zip">ZIP:</label>
          <input
            type="text"
            id="zip"
            required
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div>
            <p>How did you find my page?</p>
            <label>
              <input
                type="checkbox"
                value="Internet"
                checked={howFound.includes("Internet")}
                onChange={(e) => handleCheckboxChange(e, "Internet")}
              />
              Internet
            </label>
            <label>
              <input
                type="checkbox"
                value="Friend"
                checked={howFound.includes("Friend")}
                onChange={(e) => handleCheckboxChange(e, "Friend")}
              />
              Friend
            </label>
            <label>
              <input
                type="checkbox"
                value="Google"
                checked={howFound.includes("Google")}
                onChange={(e) => handleCheckboxChange(e, "Google")}
              />
              Google
            </label>
          </div>

          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            rows="4"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>

          <button id="submitBtn" type="submit">Submit</button>
        </form>
      </section>

      <section className={`thank-you ${showThankYou ? "" : "hidden"}`}>
        <h2>Thank You for Visiting!</h2>
      </section>
        </div>
    )
}

export default FormPage;