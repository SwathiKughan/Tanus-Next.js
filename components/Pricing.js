// pages/Pricing.js
"use client";
import React, { useEffect } from 'react';
import styles from '../styles/Pricing.module.css';

const Pricing = () => {
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const container = document.querySelector('.container');
      const plans = document.querySelectorAll('.box-plan');

      if (width <= 576) {
        container.style.marginBottom = '1cm';
        plans.forEach(plan => {
          plan.style.width = '100%';
          plan.style.margin = '10px 0';
          plan.style.padding = '20px';
        });
      } else if (width <= 768) {
        container.style.marginBottom = '1cm';
        plans.forEach(plan => {
          plan.style.width = '100%';
          plan.style.margin = '10px 0';
        });
      } else if (width <= 992) {
        plans.forEach(plan => {
          plan.style.width = '90%';
          plan.style.margin = '10px 0';
        });
      } else {
        
        plans.forEach(plan => {
          plan.style.width = '8cm';
          plan.style.margin = '10px';
        });
      }
    };

    handleResize(); // Initial call to set styles on component mount

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.container} id="pricing">
      <div className="pricing">
        <h5 style={{ color: 'white', textAlign: 'center' }}>PRICING <span style={{ color: 'blueviolet' }}>PLAN</span></h5>
        <h1>Pick the perfect pricing plan</h1>
        <div className={styles['pricing-plans']}>
          <div className={styles.plan}>
            <div className={styles['box-plan']}>
              <h2>Free Plan</h2>
              <div className={styles.price} style={{ color: 'pink' }}>
                $0<span style={{ color: '#777' }}>/month</span>
              </div>
              <div className={styles.features}>
                <h5 style={{ textAlign: 'left', paddingLeft: '1cm' }}>Features</h5>
                <ul>
                  <li>Basic chatbot functionality</li>
                  <li>Limited monthly interactions</li>
                  <li>Email support</li>
                </ul>
              </div>
            </div>
            <div className={styles['get-button']}>
              <button className={styles.button}>Get now</button>
            </div>
          </div>

          <div className={styles.plan}>
            <div className={styles['box-plan']}>
              <h2>Starter Plan</h2>
              <div className={styles.price} style={{ color: 'rgb(67, 206, 13)' }}>
                $19<span style={{ color: '#777' }}>/month</span>
              </div>
              <div className={styles.features}>
                <h5 style={{ textAlign: 'left', paddingLeft: '1cm' }}>Features</h5>
                <ul>
                  <li>Increased monthly interactions</li>
                  <li>Core chatbot features</li>
                  <li>Email support</li>
                </ul>
              </div>
            </div>
            <div className={styles['get-button']}>
              <button className={styles.button}>Get now</button>
            </div>
          </div>

          <div className={styles.plan}>
            <div className={styles['box-plan']}>
              <h2>Business Plan</h2>
              <div className={styles.price} style={{ color: 'rgb(62, 87, 224)' }}>
                $39<span style={{ color: '#777' }}>/month</span>
              </div>
              <div className={styles.features}>
                <h5 style={{ textAlign: 'left', paddingLeft: '1cm' }}>Features</h5>
                <ul>
                  <li>High monthly interactions</li>
                  <li>Advanced chatbot capabilities</li>
                  <li>Priority email support</li>
                  <li>Basic analytics</li>
                </ul>
              </div>
            </div>
            <div className={styles['get-button']}>
              <button className={styles.button}>Get now</button>
            </div>
          </div>

          <div className={styles.plan}>
            <div className={styles['box-plan']}>
              <h2>Enterprise Plan</h2>
              <div className={styles.price} style={{ color: 'rgb(247, 100, 42)' }}>
                $69<span style={{ color: '#777' }}>/month</span>
              </div>
              <div className={styles.features}>
                <h5 style={{ textAlign: 'left', paddingLeft: '1cm' }}>Features</h5>
                <ul>
                  <li>Unlimited monthly interactions</li>
                  <li>Customizable features</li>
                  <li>Priority email and phone support</li>
                  <li>Advanced analytics and reporting</li>
                  <li>Dedicated account manager</li>
                </ul>
              </div>
            </div>
            <div className={styles['get-button']}>
              <button className={styles.button}>Get now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
