"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/ContactUs.module.css';

export default function ContactUs() {
  const [style, setStyle] = useState({
    articleBoxMargin: '3cm',
    articleBoxPadding: '0',
    imgWidth: '10cm',
    imgHeight: '6cm',
    h1FontSize: 'inherit',
    h4FontSize: 'inherit',
    textSectionH1FontSize: '2.5em',
    textSectionH2FontSize: '1.5em',
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 576) {
        setStyle({
          articleBoxMargin: '0.5cm',
          articleBoxPadding: '1cm',
          imgWidth: '100%',
          imgHeight: 'auto',
          h1FontSize: '1.2em',
          h4FontSize: '0.9em',
          textSectionH1FontSize: '1.5em',
          textSectionH2FontSize: '1em'
        });
      } else if (width <= 768) {
        setStyle({
          articleBoxMargin: '1cm',
          articleBoxPadding: '0',
          imgWidth: '100%',
          imgHeight: 'auto',
          h1FontSize: '1.5em',
          h4FontSize: '1em',
          textSectionH1FontSize: '2em',
          textSectionH2FontSize: '1.2em'
        });
      } else if (width <= 992) {
        setStyle({
          articleBoxMargin: '2cm',
          articleBoxPadding: '0',
          imgWidth: '8cm',
          imgHeight: '5cm',
          h1FontSize: 'inherit',
          h4FontSize: 'inherit',
          textSectionH1FontSize: '2.5em',
          textSectionH2FontSize: '1.5em'
        });
      } else {
        setStyle({
          articleBoxMargin: '3cm',
          articleBoxPadding: '0',
          imgWidth: '10cm',
          imgHeight: '6cm',
          h1FontSize: 'inherit',
          h4FontSize: 'inherit',
          textSectionH1FontSize: '2.5em',
          textSectionH2FontSize: '1.5em'
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.contactUsContainer}>
      <div className={styles.textSection} style={{ fontSize: style.textSectionH1FontSize }}>
        <h5>GET IN TOUCH</h5>
        <h1 style={{ fontSize: style.textSectionH1FontSize }}>Let&apos;s work together <br />just drop me an email</h1>
        <h2 style={{ fontSize: style.textSectionH2FontSize }}>hello@tanus.com</h2>
      </div>
      <div className={styles.formSection}>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">
              <span className={styles.icon}><i className="fa fa-user" style={{ color: 'purple' }}></i></span>
              Name
            </label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">
              <span className={styles.icon}><i className="fa fa-envelope" style={{ color: 'purple' }}></i></span>
              Email
            </label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">
              <span className={styles.icon}><i className="fas fa-pencil-alt" style={{ color: 'purple', fontSize: '24px' }}></i></span>
              Your Message
            </label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}
