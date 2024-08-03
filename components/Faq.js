"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Faq.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Faq = () => {
  const [style, setStyle] = useState({
    row2Padding: '2cm 4cm',
    row2FlexDirection: 'row',
    row2AlignItems: 'flex-start',
    textContentTextAlign: 'left',
    imgMaxWidth: '100%',
    accordionPadding: '2cm 6cm',
    h1Padding: '0.5cm 8cm',
    h1FontSize: 'inherit',
    buttonPadding: '0.6cm 0.5cm',
    buttonFontSize: 'large',
    bodyPadding: '0.5cm 0.5cm',
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 576) {
        setStyle({
          row2Padding: '1cm 0.5cm',
          row2FlexDirection: 'column',
          row2AlignItems: 'center',
          textContentTextAlign: 'center',
          imgMaxWidth: '70%',
          accordionPadding: '1cm 1cm',
          h1Padding: '0.5cm 1cm',
          h1FontSize: '1em',
          buttonPadding: '0.4cm 0.3cm',
          buttonFontSize: '12px',
          bodyPadding: '0.3cm 0.3cm',
        });
      } else if (width <= 768) {
        setStyle({
          row2Padding: '1.5cm 1cm',
          row2FlexDirection: 'column',
          row2AlignItems: 'center',
          textContentTextAlign: 'center',
          imgMaxWidth: '80%',
          accordionPadding: '2cm 2cm',
          h1Padding: '0.5cm 2cm',
          h1FontSize: '1.2em',
          buttonPadding: '0.5cm 0.4cm',
          buttonFontSize: '14px',
          bodyPadding: '0.4cm 0.4cm',
        });
      } else if (width <= 992) {
        setStyle({
          row2Padding: '2cm 2cm',
          row2FlexDirection: 'row',
          row2AlignItems: 'flex-start',
          textContentTextAlign: 'left',
          imgMaxWidth: '90%',
          accordionPadding: '2cm 3cm',
          h1Padding: '0.5cm 4cm',
          h1FontSize: '1.5em',
          buttonPadding: '0.5cm 0.5cm',
          buttonFontSize: 'inherit',
          bodyPadding: '0.5cm 0.5cm',
        });
      } else {
        setStyle({
          row2Padding: '2cm 4cm',
          row2FlexDirection: 'row',
          row2AlignItems: 'flex-start',
          textContentTextAlign: 'left',
          imgMaxWidth: '100%',
          accordionPadding: '2cm 6cm',
          h1Padding: '0.5cm 8cm',
          h1FontSize: 'inherit',
          buttonPadding: '0.6cm 0.5cm',
          buttonFontSize: 'large',
          bodyPadding: '0.5cm 0.5cm',
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
    <div>
      {/* Chatbot Integrations Section */}
      <div className={`${styles.row2} row-2`} style={{ padding: style.row2Padding, flexDirection: style.row2FlexDirection, alignItems: style.row2AlignItems }}>
        <div className={`${styles.col} ${styles.textContent} text-content`} style={{ textAlign: style.textContentTextAlign }}>
          <h5 style={{ color: 'white' }}>CHATBOT <span style={{ color: 'blueviolet' }}>INTEGRATIONS</span></h5>
          <h1>Connect Chatbot with your favorite tools and apps</h1>
          <br />
          <div className={styles.freeTrial}>
            <a className={styles.navLink} href="#">Start your free trial</a>
            <br /><br />
          </div>
          <h5>Free 14 Day Trial. No Credit Card Required.</h5>
        </div>
        <div className={`${styles.col} ${styles.imageContent} image-content`}>
          <Image 
            src="/assets/images/integrations.png" 
            alt="Integrations" 
            width={600} 
            height={400} 
            style={{ maxWidth: style.imgMaxWidth }}
          />
        </div>
      </div>

      {/* FAQs Section */}
      <div className={`${styles.accordion1} accordion1`} style={{ padding: style.accordionPadding }}>
        <h5>FAQS</h5>
        <h1 style={{ padding: style.h1Padding, fontSize: style.h1FontSize }}>Frequently asked questions (FAQs) for Chatbot platform</h1>
        <div className="accordion" id="accordionFlush">
          {[...Array(6)].map((_, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`flush-heading${index + 1}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index + 1}`} aria-expanded="false" aria-controls={`flush-collapse${index + 1}`} style={{ padding: style.buttonPadding, fontSize: style.buttonFontSize }}>
                  <b>{`${index + 1}. FAQ Question`}</b>
                </button>
              </h2>
              <div id={`flush-collapse${index + 1}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${index + 1}`} data-bs-parent="#accordionFlush">
                <div className="accordion-body" style={{ padding: style.bodyPadding }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Desktop is publishing packages and web page editors now use Lorem Ipsum as their default model text.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
