import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setName(e.value);
    setMail(e.value);
    setMessage(e.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setMail("");
    setMessage("");
  };

  return (
    <>
      <div className='contact'>
        <h1>
          Thanks for taking the time to reach out.{" "}
          <span> How can I help you today?</span>
        </h1>
        <div className='contact-form'>
          <form action='POST' data-netlify='true'>
            <div className='contact-upper-container'>
              <div className="name-container">
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={handleChange}
                />
                </div>
              <div className="mail-container">
              <label htmlFor='email'>E-mail:</label>
              <input
                type='text'
                id='email'
                name='email'
                value={mail}
                onChange={handleChange}
                />
                </div>
            </div>
            <div className='contact-lower-container'>
              <label htmlFor='message'>Message:</label>
              <textarea
                name='message'
                id='message'
                cols='30'
                rows='10'
                value={message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='contact-buttons'>
              <input type='submit' value='Submit' onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
