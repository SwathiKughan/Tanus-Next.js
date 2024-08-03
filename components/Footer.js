"use client"; // If you use client-side specific code

// components/Footer.js
import { useEffect } from 'react';
import Image from 'next/image'; // Import Image component
import styles from '../styles/Footer.module.css'; // Import CSS module for scoped styles

const Footer = () => {
  useEffect(() => {
    const adjustFooterStyles = () => {
      const footer = document.querySelector(`.${styles.footer}`);
      const footerPart = document.querySelector(`.${styles.footerPart}`);
      const screenWidth = window.innerWidth;

      if (footer && footerPart) {
        if (screenWidth < 576) {
          footer.style.padding = '1cm 0.5cm';
          footerPart.style.margin = '0.5cm 0.5cm';
          footerPart.style.padding = '0.4cm';
        } else if (screenWidth < 768) {
          footer.style.padding = '1cm 1cm';
          footerPart.style.margin = '1cm 1cm';
          footerPart.style.padding = '0.5cm';
        } else if (screenWidth < 992) {
          footer.style.padding = '2cm 2cm';
          footerPart.style.margin = '1cm 2cm';
        } else {
          footer.style.padding = '2cm 4cm';
          footerPart.style.margin = '1cm 5cm';
        }
      }
    };

    // Run the function on page load and on window resize
    window.addEventListener('load', adjustFooterStyles);
    window.addEventListener('resize', adjustFooterStyles);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('load', adjustFooterStyles);
      window.removeEventListener('resize', adjustFooterStyles);
    };
  }, []);

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <Image
              src="https://angular.envytheme.com/tanus/assets/images/logo2.svg"
              alt="Logo"
              width={100} // Adjust width and height as needed
              height={50} // Adjust width and height as needed
            />
            <br /><br />
            <a href="#"><i className={`fa fa-facebook-official fa-2x ${styles.icon}`}></i></a>&emsp;
            <a href="#"><i className={`fa fa-xing-square fa-2x ${styles.icon}`}></i></a>&emsp;
            <a href="#"><i className={`fa fa-linkedin-square fa-2x ${styles.icon}`}></i></a>&emsp;
          </div>
          <div className={styles.footerSection}>
            <h3>Office Address</h3>
            <h6>8207 Market Street #2007</h6>
            <h6>San Francisco, AP 9417 USA</h6>
          </div>
          <div className={styles.footerSection}>
            <h3>Customer Support</h3>
            <h6><span className={styles.email}>Email:</span> hello@tanus.com</h6>
            <h6><span className={styles.phone}>Phone:</span> +1 444-545-7595</h6>
          </div>
          <div className={styles.footerSection}>
            <h3>Business Hours</h3>
            <h6>Monday to Friday: 9:00 AM - 5:00 PM</h6>
            <h6>Saturday and Sunday: Closed</h6>
          </div>
        </div>
      </div>
      <div className={styles.footerPart}>
        <h6>
          ©<b className={styles.brand}>Tanus</b> All Rights Reserved by <span className={styles.theme}>EnvyTheme</span>
          <span className={styles.footerLinks}>
            <a href="#">Terms & Conditions</a>&emsp;<a href="#">Privacy Policy</a>
          </span>
        </h6>
      </div>
    </>
  );
};

export default Footer;
