"use client"; // Indicates client-side rendering

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Article.module.css';

const Articles = () => {
  const [isClient, setIsClient] = useState(false); // State to check if the component is mounted
  const [style, setStyle] = useState({
    articleBoxMargin: '3cm',
    articleBoxPadding: '0',
    imgWidth: '10cm',
    imgHeight: '6cm',
    h1FontSize: 'inherit',
    h4FontSize: 'inherit'
  });

  useEffect(() => {
    setIsClient(true); // Set isClient to true when component mounts

    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 576) {
        setStyle({
          articleBoxMargin: '0.5cm',
          articleBoxPadding: '1cm',
          imgWidth: '100%',
          imgHeight: 'auto',
          h1FontSize: '1.2em',
          h4FontSize: '0.9em'
        });
      } else if (width <= 768) {
        setStyle({
          articleBoxMargin: '1cm',
          articleBoxPadding: '0',
          imgWidth: '100%',
          imgHeight: 'auto',
          h1FontSize: '1.5em',
          h4FontSize: '1em'
        });
      } else if (width <= 992) {
        setStyle({
          articleBoxMargin: '2cm',
          articleBoxPadding: '0',
          imgWidth: '8cm',
          imgHeight: '5cm',
          h1FontSize: 'inherit',
          h4FontSize: 'inherit'
        });
      } else {
        setStyle({
          articleBoxMargin: '3cm',
          articleBoxPadding: '0',
          imgWidth: '10cm',
          imgHeight: '6cm',
          h1FontSize: 'inherit',
          h4FontSize: 'inherit'
        });
      }
    };

    if (isClient) {
      window.addEventListener('resize', handleResize);
      handleResize(); // Initial call to set styles on component mount

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isClient]);

  // Conditional rendering to ensure the component only renders on the client side
  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className={styles.articleBox} style={{ marginLeft: style.articleBoxMargin, marginRight: style.articleBoxMargin, padding: style.articleBoxPadding }}>
      <div className={styles.articles}>
        <h5 style={{ color: 'blueviolet' }}>ARTICLES</h5>
        <h1 style={{ fontSize: style.h1FontSize }}>Articles and news from AI Chatbot</h1>
        <div className="row">
          <div className="col-md-4">
            <Image 
              src="/assets/images/blogs/blog2.jpg" 
              alt="Article 1" 
              width={600} 
              height={400} 
              style={{ width: style.imgWidth, height: style.imgHeight }}
            />
            <h6 style={{ color: 'white', fontSize: 'small' }}>13 Dec, 2024/by: Tanus</h6>
            <a><h4 style={{ fontSize: style.h4FontSize }}>How chatbots are changing the digital landscape</h4></a>
          </div>
          <div className="col-md-4">
            <Image 
              src="/assets/images/blogs/blog3.jpg" 
              alt="Article 2" 
              width={600} 
              height={400} 
              style={{ width: style.imgWidth, height: style.imgHeight }}
            />
            <h6 style={{ color: 'white', fontSize: 'small' }}>13 Dec, 2024/by: Tanus</h6>
            <a><h4 style={{ fontSize: style.h4FontSize }}>Trends and innovations in chatbot technology</h4></a>
          </div>
          <div className="col-md-4">
            <Image 
              src="/assets/images/blogs/blog4.jpg" 
              alt="Article 3" 
              width={600} 
              height={400} 
              style={{ width: style.imgWidth, height: style.imgHeight }}
            />
            <h6 style={{ color: 'white', fontSize: 'small' }}>13 Dec, 2024/by: Tanus</h6>
            <a><h4 style={{ fontSize: style.h4FontSize }}>Demystifying natural language processing in Chatbots</h4></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
