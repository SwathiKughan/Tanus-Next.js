"use client";
import { useEffect } from 'react';
import styles from '../styles/Article.module.css';

export default function Articles() {
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const articleBox = document.querySelector(`.${styles.articleBox}`);
      const images = document.querySelectorAll(`.${styles.articles} img`);
      const h1 = document.querySelector(`.${styles.articles} h1`);
      const h4s = document.querySelectorAll(`.${styles.articles} h4`);

      if (width <= 576) {
        articleBox.style.marginLeft = '0.5cm';
        articleBox.style.marginRight = '0.5cm';
        articleBox.style.padding = '1cm';
        images.forEach(img => {
          img.style.width = '100%';
          img.style.height = 'auto';
        });
        h1.style.fontSize = '1.2em';
        h4s.forEach(h4 => {
          h4.style.fontSize = '0.9em';
        });
      } else if (width <= 768) {
        articleBox.style.marginLeft = '1cm';
        articleBox.style.marginRight = '1cm';
        images.forEach(img => {
          img.style.width = '100%';
          img.style.height = 'auto';
        });
        h1.style.fontSize = '1.5em';
        h4s.forEach(h4 => {
          h4.style.fontSize = '1em';
        });
      } else if (width <= 992) {
        articleBox.style.marginLeft = '2cm';
        articleBox.style.marginRight = '2cm';
        images.forEach(img => {
          img.style.width = '8cm';
          img.style.height = '5cm';
        });
      } else {
        articleBox.style.marginLeft = '3cm';
        articleBox.style.marginRight = '3cm';
        images.forEach(img => {
          img.style.width = '10cm';
          img.style.height = '6cm';
        });
        h1.style.fontSize = 'inherit';
        h4s.forEach(h4 => {
          h4.style.fontSize = 'inherit';
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.articleBox}>
      <div className={styles.articles}>
        <h5 style={{ color: 'blueviolet' }}>ARTICLES</h5>
        <h1>Articles and news from AI Chatbot</h1>
        <div className="row">
          <div className="col-md-4">
            <img src="https://angular.envytheme.com/tanus/assets/images/blogs/blog2.jpg" alt="Article 1" />
            <h6 style={{ color: 'white', fontSize: 'small' }}>13 Dec, 2024/by: Tanus</h6>
            <a><h4>How chatbots are changing the digital landscape</h4></a>
          </div>
          <div className="col-md-4">
            <img src="https://angular.envytheme.com/tanus/assets/images/blogs/blog3.jpg" alt="Article 2" />
            <h6 style={{ color: 'white', fontSize: 'small' }}>13 Dec, 2024/by: Tanus</h6>
            <a><h4>Trends and innovations in chatbot technology</h4></a>
          </div>
          <div className="col-md-4">
            <img src="https://angular.envytheme.com/tanus/assets/images/blogs/blog4.jpg" alt="Article 3" />
            <h6 style={{ color: 'white', fontSize: 'small' }}>13 Dec, 2024/by: Tanus</h6>
            <a><h4>Demystifying natural language processing in Chatbots</h4></a>
          </div>
        </div>
      </div>
    </div>
  );
}
