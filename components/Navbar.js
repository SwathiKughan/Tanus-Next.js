"use client";

// components/Navbar.js

import React, { useEffect } from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import styles from '../styles/Navbar.module.css'; // Import CSS module for styling

const Navbar = () => {
  useEffect(() => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    // Toggle navbar on click
    navbarToggler.addEventListener('click', () => {
      navbarCollapse.classList.toggle('show');
    });

    // Close the navbar when a link is clicked (for mobile view)
    document.querySelectorAll('.nav-link').forEach(navLink => {
      navLink.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      });
    });

    // Function to handle screen resizing
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        // Bootstrap's lg breakpoint
        navbarCollapse.classList.remove('show');
      }
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listeners on component unmount
    return () => {
      navbarToggler.removeEventListener('click', () => {});
      document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.removeEventListener('click', () => {});
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
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${styles.navbarCollapse}`} id="navbarNav">
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
