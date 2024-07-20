"use client"; // If you use client-side specific code

// app/Header.js

import React, { useEffect } from 'react';
import styles from '../styles/Header.module.css'; // Import CSS module for styling

const Header = () => {
  useEffect(() => {
    const textCol = document.querySelector('.col-md-5');
    const imgCol = document.querySelector('.img-col img');

    // Function to handle screen resizing
    function handleResize() {
      if (window.innerWidth < 768) { // Bootstrap's md breakpoint
        textCol.style.padding = '2cm 1cm';
        textCol.style.textAlign = 'center';
        imgCol.style.marginLeft = '0';
        imgCol.style.marginTop = '1cm';
      } else if (window.innerWidth < 576) { // Bootstrap's sm breakpoint
        textCol.style.padding = '1cm 1cm';
      } else {
        textCol.style.padding = '5cm 1cm';
        textCol.style.textAlign = 'left';
        imgCol.style.marginLeft = '1cm';
        imgCol.style.marginTop = '1cm';
      }
    }

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
        <div className={`col-md-5 ${styles.textCol}`}>
          <h6 style={{ textAlign: 'left' }}>AI CONTACT CENTER</h6>
          <h1>Your Intelligent Chat Companion</h1>
          <h5>Transforming Conversations, Simplifying Interactions</h5><br />
          <div className="free-trial">
            <a className="nav-link" href="#">Start your free trial</a><br />
          </div>
          <div className="round-border"><br />
            <i className="fa fa-check-square">&emsp;No Credit Card Required</i>
            <i className="fa fa-check-square">&emsp;Full access to our software</i>
            <i className="fa fa-check-square">&emsp;Cancel at any time</i>
          </div>
        </div>
        <div className={`col-md-7 img-col ${styles.imgCol}`}><br /><br /><br />
          <img src="https://angular.envytheme.com/tanus/assets/images/banners/banner1.png" alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Header;

