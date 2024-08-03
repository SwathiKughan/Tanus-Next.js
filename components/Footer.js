"use client"; // Indicates client-side rendering

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Footer.module.css'; // Import CSS module for scoped styles

const Footer = () => {
  const [isClient, setIsClient] = useState(false); // State to check if the component is mounted
  const [style, setStyle] = useState({
    footerPadding: '2cm 4cm',
    footerPartMargin: '1cm 5cm',
    footerPartPadding: '0',
  });

  useEffect(() => {
    setIsClient(true); // Set isClient to true when component mounts

    const adjustFooterStyles = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 576) {
        setStyle({
          footerPadding: '1cm 0.5cm',
          footerPartMargin: '0.5cm 0.5cm',
          footerPartPadding: '0.4cm',
        });
      } else if (screenWidth < 768) {
        setStyle({
          footerPadding: '1cm 1cm',
          footerPartMargin: '1cm 1cm',
          footerPartPadding: '0.5cm',
        });
      } else if (screenWidth < 992) {
        setStyle({
          footerPadding: '2cm 2cm',
          footerPartMargin: '1cm 2cm',
          footerPartPadding: '0',
        });
      } else {
        setStyle({
          footerPadding: '2cm 4cm',
          footerPartMargin: '1cm 5cm',
          footerPartPadding: '0',
        });
      }
    };

    adjustFooterStyles(); // Run on component mount
    window.addEventListener('resize', adjustFooterStyles);

    return () => {
      window.removeEventListener('resize', adjustFooterStyles);
    };
  }, []);

  // Conditional rendering to ensure the component only renders on the client side
  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <>
      <div className={styles.footer} style={{ padding: style.footerPadding }}>
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
      <div className={styles.footerPart} style={{ margin: style.footerPartMargin, padding: style.footerPartPadding }}>
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
