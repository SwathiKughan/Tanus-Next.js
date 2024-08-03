"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const navbarTogglerRef = useRef(null);
  const navbarCollapseRef = useRef(null);

  useEffect(() => {
    const navbarToggler = navbarTogglerRef.current;
    const navbarCollapse = navbarCollapseRef.current;

    // Toggle navbar on click
    const handleTogglerClick = () => {
      if (navbarCollapse) {
        navbarCollapse.classList.toggle('show');
      }
    };

    const handleNavLinkClick = () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    };

    const handleResize = () => {
      if (navbarCollapse && window.innerWidth >= 992) { // Bootstrap's lg breakpoint
        navbarCollapse.classList.remove('show');
      }
    };

    if (navbarToggler) {
      navbarToggler.addEventListener('click', handleTogglerClick);
    }

    document.querySelectorAll('.nav-link').forEach(navLink => {
      navLink.addEventListener('click', handleNavLinkClick);
    });

    window.addEventListener('resize', handleResize);

    // Cleanup event listeners on component unmount
    return () => {
      if (navbarToggler) {
        navbarToggler.removeEventListener('click', handleTogglerClick);
      }
      document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.removeEventListener('click', handleNavLinkClick);
      });
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
      <a className="navbar-brand" href="#" style={{ color: 'white' }}>
        <Image
          src="https://angular.envytheme.com/tanus/assets/images/logo2.svg"
          alt="Logo"
          width={110}
          height={50}
          className="d-inline-block align-text-top"
        />
      </a>
      <button
        ref={navbarTogglerRef}
        className="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        ref={navbarCollapseRef}
        className={`collapse navbar-collapse ${styles.navbarCollapse}`}
        id="navbarNav"
      >
        <ul className={`navbar-nav ms-auto ${styles.navbarNav}`}>
          <li className="nav-item">
            <a className={styles.defaultButton1} aria-current="page" href="#">Home</a>
          </li>&emsp;
          <li className="nav-item">
            <a className={styles.defaultButton1} href="#about">About Us</a>
          </li>&emsp;
          <li className="nav-item">
            <a className={styles.defaultButton1} href="#features">Features</a>
          </li>&emsp;
          <li className="nav-item">
            <a className={styles.defaultButton1} href="#pricing">Pricing</a>
          </li>&emsp;
          <li className="nav-item">
            <a className={styles.defaultButton1} href="#testimonials">Testimonials</a>
          </li>&emsp;
          <li className="nav-item">
            <a className={styles.defaultButton1} href="#article-box">Blog</a>
          </li>&emsp;
          <li className="nav-item">
            <a className={styles.defaultButton1} href="#contact">Contact Us</a>
          </li>&emsp;
          <li className="nav-item1">
            <a className={styles.defaultButton} href="#pricing">Get Started</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
