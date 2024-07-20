// pages/faq.js
"use client";
import React, { useEffect } from 'react';
import styles from '../styles/Faq.module.css';


const Faq = () => {
  // Handle responsive styles
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const row2 = document.querySelector('.row-2');
      const textContent = document.querySelector('.text-content');
      const img = document.querySelector('.image-content img');
      const accordion1 = document.querySelector('.accordion1');
      const h1 = document.querySelector('.accordion1 h1');
      const buttons = document.querySelectorAll('.accordion-button');
      const bodies = document.querySelectorAll('.accordion-body');

      if (width <= 576) {
        row2.style.padding = '1cm 0.5cm';
        row2.style.flexDirection = 'column';
        row2.style.alignItems = 'center';
        textContent.style.textAlign = 'center';
        img.style.maxWidth = '70%';

        accordion1.style.padding = '1cm 1cm';
        h1.style.padding = '0.5cm 1cm';
        h1.style.fontSize = '1em';
        buttons.forEach(button => {
          button.style.padding = '0.4cm 0.3cm';
          button.style.fontSize = '12px';
        });
        bodies.forEach(body => {
          body.style.padding = '0.3cm 0.3cm';
        });
      } else if (width <= 768) {
        row2.style.padding = '1.5cm 1cm';
        row2.style.flexDirection = 'column';
        row2.style.alignItems = 'center';
        textContent.style.textAlign = 'center';
        img.style.maxWidth = '80%';

        accordion1.style.padding = '2cm 2cm';
        h1.style.padding = '0.5cm 2cm';
        h1.style.fontSize = '1.2em';
        buttons.forEach(button => {
          button.style.padding = '0.5cm 0.4cm';
          button.style.fontSize = '14px';
        });
        bodies.forEach(body => {
          body.style.padding = '0.4cm 0.4cm';
        });
      } else if (width <= 992) {
        row2.style.padding = '2cm 2cm';
        textContent.style.textAlign = 'left';
        img.style.maxWidth = '90%';

        accordion1.style.padding = '2cm 3cm';
        h1.style.padding = '0.5cm 4cm';
        h1.style.fontSize = '1.5em';
      } else {
        row2.style.padding = '2cm 4cm';
        textContent.style.textAlign = 'left';
        img.style.maxWidth = '100%';

        accordion1.style.padding = '2cm 6cm';
        h1.style.padding = '0.5cm 8cm';
        h1.style.fontSize = 'inherit';
        buttons.forEach(button => {
          button.style.padding = '0.6cm 0.5cm';
          button.style.fontSize = 'large';
        });
        bodies.forEach(body => {
          body.style.padding = '0.5cm 0.5cm';
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* Chatbot Integrations Section */}
      <div className={styles.row2}>
        <div className={`${styles.col} ${styles.textContent}`}>
          <h5 style={{ color: 'white' }}>CHATBOT <span style={{ color: 'blueviolet' }}>INTEGRATIONS</span></h5>
          <h1>Connect Chatbot with your favorite tools and apps</h1>
          <br />
          <div className={styles.freeTrial}>
            <a className={styles.navLink} href="#">Start your free trial</a>
            <br /><br />
          </div>
          <h5>Free 14 Day Trial. No Credit Card Required.</h5>
        </div>
        <div className={`${styles.col} ${styles.imageContent}`}>
          <img src="https://angular.envytheme.com/tanus/assets/images/integrations.png" alt="Integrations" />
        </div>
      </div>

      {/* FAQs Section */}
      <div className={styles.accordion1}>
        <h5>FAQS</h5>
        <h1>Frequently asked questions (FAQs) for Chatbot platform</h1>
        <div className="accordion" id="accordionFlush">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <b>1. What is a chatbot?</b>
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush">
              <div className="accordion-body">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Desktop is publishing packages and web page editors now use Lorem Ipsum as their default model text.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <b>2. How does chatbot work?</b>
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlush">
              <div className="accordion-body">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Desktop is publishing packages and web page editors now use Lorem Ipsum as their default model text.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <b>3. Where can I use the chatbot?</b>
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlush">
              <div className="accordion-body">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Desktop is publishing packages and web page editors now use Lorem Ipsum as their default model text.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                <b>4. How can I start a conversation with the chatbot?</b>
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlush">
              <div className="accordion-body">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Desktop is publishing packages and web page editors now use Lorem Ipsum as their default model text.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                <b>5. What are the advantages of using a chatbot?</b>
              </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlush">
              <div className="accordion-body">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Desktop is publishing packages and web page editors now use Lorem Ipsum as their default model text.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSix">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                <b>6. What types of chatbots are there?</b>
              </button>
            </h2>
            <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlush">
              <div className="accordion-body">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Desktop is publishing packages and web page editors now use Lorem Ipsum as their default model text.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
