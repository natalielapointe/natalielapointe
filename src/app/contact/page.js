'use client'

import React, { useRef, Fragment, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_h90vfhm', 'template_s37ji4q', form.current, {
        publicKey: 'H1nFGiS8r65V6Ikjp',
      })
      .then(
        () => {
          setSubmitted(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="background-white" id="contact">
      <div className="body-padding">
        <h1 className="gradient-text">Contact Me</h1>
        {submitted && <p>Thank you for reaching out! I'll  get back to you soon.</p>}
        <form ref={form} onSubmit={sendEmail} className="body-text-font flex-column">
          <div className="form-field">
            <label>Name</label>
            <input type="text" name="user_name" />
          </div>
          <div className="form-field">
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>
          <div className="form-field">
            <label>Message</label>
            <textarea name="message" />
          </div>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;