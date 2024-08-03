"use client";

import React, { useEffect, useRef } from 'react';
import styles from '../styles/Pricing.module.css';

const Pricing = () => {
  const containerRef = useRef(null);
  const planRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const container = containerRef.current;
      const plans = planRefs.current;

      if (container && plans) {
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
      }
    };

    handleResize(); // Initial call to set styles on component mount

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.container} ref={containerRef} id="pricing">
      <div className={styles.pricing}>
        <h5 className={styles.title}>PRICING <span className={styles.highlight}>PLAN</span></h5>
        <h1>Pick the perfect pricing plan</h1>
        <div className={styles['pricing-plans']}>
          {['Free Plan', 'Starter Plan', 'Business Plan', 'Enterprise Plan'].map((plan, index) => (
            <div key={index} className={styles.plan} ref={el => planRefs.current[index] = el}>
              <div className={styles['box-plan']}>
                <h2>{plan}</h2>
                <div className={styles.price} style={{ color: index === 0 ? 'pink' : index === 1 ? 'rgb(67, 206, 13)' : index === 2 ? 'rgb(62, 87, 224)' : 'rgb(247, 100, 42)' }}>
                  ${[0, 19, 39, 69][index]}<span style={{ color: '#777' }}>/month</span>
                </div>
                <div className={styles.features}>
                  <h5>Features</h5>
                  <ul>
                    {index === 0 && <>
                      <li>Basic chatbot functionality</li>
                      <li>Limited monthly interactions</li>
                      <li>Email support</li>
                    </>}
                    {index === 1 && <>
                      <li>Increased monthly interactions</li>
                      <li>Core chatbot features</li>
                      <li>Email support</li>
                    </>}
                    {index === 2 && <>
                      <li>High monthly interactions</li>
                      <li>Advanced chatbot capabilities</li>
                      <li>Priority email support</li>
                      <li>Basic analytics</li>
                    </>}
                    {index === 3 && <>
                      <li>Unlimited monthly interactions</li>
                      <li>Customizable features</li>
                      <li>Priority email and phone support</li>
                      <li>Advanced analytics and reporting</li>
                      <li>Dedicated account manager</li>
                    </>}
                  </ul>
                </div>
              </div>
              <div className={styles['get-button']}>
                <button className={styles.button}>Get now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
