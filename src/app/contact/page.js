'use client'

import React, { useRef, Fragment, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');

    const newErrors = {};

    if (!name || name.trim() === '') {
      newErrors.name = 'Name is required.';
    }
    if (!email || email.trim() === '') {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!message || message.trim() === '') {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
        {submitted && <p id="formSubmitMessage">Thank you for reaching out! <br /> I'll get back to you soon.</p>}
        {!submitted && (
          <form ref={form} onSubmit={sendEmail} className="body-text-font flex-column">
            <div className="form-field">
              <label>Name</label>
              <input type="text" name="user_name" />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div className="form-field">
              <label>Email</label>
              <input type="email" name="user_email" />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-field">
              <label>Message</label>
              <textarea name="message" />
              {errors.message && <p className="error-message">{errors.message}</p>}
            </div>
            <button type="submit" id="submitButton" className="gradient-text pixel-corners--wrapper">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;