import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      window.alert('Please enter a valid email address.');
    } else {
      setEmail('');
      setMessage('');
      setName('');
      window.alert("Thanks for the message! I'll reach back out shortly.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="
        d-flex
        flex-row
        justify-content-center
        align-items-center
        customSizing
        pt-2
        mt-4
        pb-2
        mb-5
        mt-5
        p-4
        pb-5
        linksContainer
        extraFadeLight
        row
        curvedCorners
        "
        id="links"
      >
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <h2 className="mt-3">Contact Me:</h2>
          <h2 className="mt-3 phone">(865) 809-8085</h2>
          <h2 className="mt-1">
            <a href="mailto:abby.castelow@gmail.com" className="email">
              abby.castelow@gmail.com
            </a>
          </h2>
        </div>

        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              name="name"
              value={name}
              className="form-control"
              id="exampleInputEmail1"
              onChange={handleInputChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              name="email"
              value={email}
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleInputChange}
            />
          </div>
          <div class="form-group mb-3">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              name="message"
              value={message}
              class="form-control"
              id="exampleFormControlTextarea1"
              onChange={handleInputChange}
              rows="3"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
