'use client'

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [formFailed, setFormFailed] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [dots, setDots] = useState('.');

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setDots((prev) => (prev.length < 3 ? prev + '.' : '.'));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [loading]);

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

const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm('service_h90vfhm', 'template_s37ji4q', form.current, {
        publicKey: 'H1nFGiS8r65V6Ikjp',
      });
      setSubmitted(true);
    } catch (error) {
      console.error('FAILED...', error.text);
      setFormFailed(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="background-white flex-column" id="contact">
      <h1  tabIndex="0" className="gradient-text">Contact Me</h1>
      <div className="contact-form-wrapper">
        {submitted && <p id="formSubmitMessage">Thank you for reaching out! <br /> I'll get back to you soon.</p>}
        {formFailed && <p className="error-message">Oops, something went wrong! <br /> Send me an email at: hello@natalielapointe.com</p>}
        {!submitted && (
          <form ref={form} onSubmit={sendEmail} className="body-text-font flex-column">
            <div className="form-field">
              <label for="user_name">Name</label>
              <input type="text" name="user_name" id="user_name"/>
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div className="form-field">
              <label for="user_email">Email</label>
              <input type="email" name="user_email" id="user_email"/>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-field">
              <label for="message">Message</label>
              <textarea name="message" id="message" />
              {errors.message && <p className="error-message">{errors.message}</p>}
            </div>
            <div className="button-outline">
              <button 
                type="submit" 
                id="submitButton" 
                className="gradient-text pixel-corners--wrapper"
                aria-label={!loading ? "send" : "sending"}
              >
                {!loading 
                  ? 'Send'.split('').map((letter, index) => (
                      <span key={index}>{letter}</span>
                    ))
                  : `Sending${dots}`}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactUs;