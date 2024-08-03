"use client";
import { useEffect } from 'react';
import Image from 'next/image'; // Import Image component
import styles from '../styles/ContactUs.module.css';

export default function ContactUs() {
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const articleBox = document.querySelector('.articleBox');
      const images = document.querySelectorAll('.articles img');
      const h1 = document.querySelector('.articles h1');
      const h4s = document.querySelectorAll('.articles h4');

      if (articleBox) {
        if (width <= 576) {
          articleBox.style.marginLeft = '0.5cm';
          articleBox.style.marginRight = '0.5cm';
          articleBox.style.padding = '1cm';
          images.forEach(img => {
            img.style.width = '100%';
            img.style.height = 'auto';
          });
          h1.style.fontSize = '1.2em';
          h4s.forEach(h4 => h4.style.fontSize = '0.9em');
        } else if (width <= 768) {
          articleBox.style.marginLeft = '1cm';
          articleBox.style.marginRight = '1cm';
          images.forEach(img => {
            img.style.width = '100%';
            img.style.height = 'auto';
          });
          h1.style.fontSize = '1.5em';
          h4s.forEach(h4 => h4.style.fontSize = '1em');
        } else if (width <= 992) {
          articleBox.style.marginLeft = '2cm';
          articleBox.style.marginRight = '2cm';
          images.forEach(img => {
            img.style.width = '8cm';
            img.style.height = '5cm';
          });
        } else {
          articleBox.style.marginLeft = '3cm';
          articleBox.style.marginRight = '3cm';
          images.forEach(img => {
            img.style.width = '10cm';
            img.style.height = '6cm';
          });
          h1.style.fontSize = 'inherit';
          h4s.forEach(h4 => h4.style.fontSize = 'inherit');
        }
      }

      const textSectionH1 = document.querySelector(`.${styles.textSection} h1`);
      const textSectionH2 = document.querySelector(`.${styles.textSection} h2`);
      
      if (width <= 576) {
        textSectionH1.style.fontSize = '1.5em';
        textSectionH2.style.fontSize = '1em';
      } else if (width <= 768) {
        textSectionH1.style.fontSize = '2em';
        textSectionH2.style.fontSize = '1.2em';
      } else {
        textSectionH1.style.fontSize = '2.5em';
        textSectionH2.style.fontSize = '1.5em';
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
      <div className={styles.textSection}>
        <h5>GET IN TOUCH</h5>
        <h1>Let's work together <br />just drop me an email</h1>
        <h2>hello@tanus.com</h2>
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
