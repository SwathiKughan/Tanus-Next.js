// pages/caseStudies.js
"use client";
import { useState } from 'react';
import styles from '../styles/CaseStudies.module.css';

const CaseStudies = () => {
    const [currentImage, setCurrentImage] = useState("https://angular.envytheme.com/tanus/assets/images/case-studies/case-study1.jpg");
    const [activeLink, setActiveLink] = useState("01");

    const changeImage = (id) => {
        let newImageSrc = "";
        switch (id) {
            case "01":
                newImageSrc = "https://angular.envytheme.com/tanus/assets/images/case-studies/case-study1.jpg";
                break;
            case "02":
                newImageSrc = "https://angular.envytheme.com/tanus/assets/images/case-studies/case-study2.jpg";
                break;
            case "03":
                newImageSrc = "https://angular.envytheme.com/tanus/assets/images/case-studies/case-study3.jpg";
                break;
            case "04":
                newImageSrc = "https://angular.envytheme.com/tanus/assets/images/case-studies/case-study4.jpg";
                break;
            default:
                break;
        }
        setCurrentImage(newImageSrc);
        setActiveLink(id);
    };

    return (
        <div className={styles.container}>
            {/* Case Studies Section */}
            <div className={styles.caseStudies}>
                <h5 className={styles.caseStudiesTitle}>CASE STUDIES</h5>
                <h1>Start your free trial and view<br />our case study</h1>
                <div className={styles.row}>
                    <div className={styles.colMd6}>
                        <h6>Industry</h6>
                        <h4>Technology</h4>
                        <img src="https://angular.envytheme.com/tanus/assets/images/icons/vector.svg" className={styles.vectorImage} />
                        <h2>How <span>Tanus</span> chatbot transformed Jonath Collard support services</h2>
                        <p>A brief introduction to the case study, highlighting the challenges faced by the client and the transformative solutions provided by your chatbot.</p>
                    </div>
                    <div className={styles.colMd5}>
                        <img id="case-study-image" src={currentImage} className={styles.caseStudyImage} />
                    </div>
                </div>
                <div className={styles.row}>
                    {["01", "02", "03", "04"].map((id) => (
                        <div key={id} className={styles.colMd3}>
                            <a id={id} className={`${styles.caseStudyLink} ${activeLink === id ? styles.active : ''}`} onClick={() => changeImage(id)}>
                                <h2 className={activeLink === id ? styles.active : ''}>{id}</h2>
                                <hr />
                                <h4>
                                    {id === "01" && "Revolutionizing customer support"}
                                    {id === "02" && "A Chatbot Success Story with Tanus"}
                                    {id === "03" && "The Impact of AI Chatbots on Sales"}
                                    {id === "04" && "The Journey through Implementing Chatbots"}
                                </h4>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subscribe Section */}
            <div className={styles.subscribeBox}>
                <div className={styles.subscribe}>
                    <div className={styles.row}>
                        <div className={styles.colMd4}>
                            <img src="https://angular.envytheme.com/tanus/assets/images/community.png" />
                        </div>
                        <div className={styles.colMd8}>
                            <h1>Join Our Growing <span>Community</span></h1>
                            <h3>Start Your 14-Day Free Trial</h3>
                            <input type="email" placeholder="Your email address" />
                            <button>Subscribe now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
