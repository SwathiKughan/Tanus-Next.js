"use client"; // If you use client-side specific code

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Header.module.css'; // Import CSS module for styling

const Header = () => {
  const [layoutStyle, setLayoutStyle] = useState({
    textColPadding: '5cm 1cm',
    textColTextAlign: 'left',
    imgColMarginLeft: '1cm',
    imgColMarginTop: '1cm'
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 576) { // Bootstrap's sm breakpoint
        setLayoutStyle({
          textColPadding: '1cm 1cm',
          textColTextAlign: 'center',
          imgColMarginLeft: '0',
          imgColMarginTop: '1cm'
        });
      } else if (screenWidth < 768) { // Bootstrap's md breakpoint
        setLayoutStyle({
          textColPadding: '2cm 1cm',
          textColTextAlign: 'center',
          imgColMarginLeft: '0',
          imgColMarginTop: '1cm'
        });
      } else {
        setLayoutStyle({
          textColPadding: '5cm 1cm',
          textColTextAlign: 'left',
          imgColMarginLeft: '1cm',
          imgColMarginTop: '1cm'
        });
      }
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.landingPage}>
      <div className="row">
        <div className={`col-md-5 ${styles.textCol}`} style={{ padding: layoutStyle.textColPadding, textAlign: layoutStyle.textColTextAlign }}>
          <h6>AI CONTACT CENTER</h6>
          <h1>Your Intelligent Chat Companion</h1>
          <h5>Transforming Conversations, Simplifying Interactions</h5><br />
          <div className="free-trial">
            <a className={styles.defaultButton} href="#">Start your free trial</a>
          </div>
          <div className="round-border"><br />
            <i className="fa fa-check-square">&emsp;No Credit Card Required</i>
            <i className="fa fa-check-square">&emsp;Full access to our software</i>
            <i className="fa fa-check-square">&emsp;Cancel at any time</i>
          </div>
        </div>
        <div className={`col-md-7 ${styles.imgCol}`} style={{ marginLeft: layoutStyle.imgColMarginLeft, marginTop: layoutStyle.imgColMarginTop }}><br /><br /><br />
          <Image 
            src="/assets/images/banners/banner1.png" 
            alt="Banner" 
            layout="responsive" 
            width={1200} // Adjust width as needed
            height={800} // Adjust height as needed
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
