// components/Features.js

import styles from '../styles/Features.module.css';

const Features = () => {
    return (
        <div className={styles.features} id="features">
            <div className={styles.featureText}>
                <h6><b>TANUS CHATBOT </b><span className={styles.color} style={{color: 'blueviolet'}}>FEATURES</span></h6>
                <h3>Amazing features of Chatbot services in our Tanus</h3>
            </div>
            <div className={styles.row1}>
                <div className={`${styles.colLg5} ${styles.colMd12} ${styles.colGap}`}>
                    <div className={`${styles.singleFeaturesBox} ${styles.positionRelative} ${styles.mb25}`}>
                        <h3>Natural Language Processing</h3>
                        <p>Enable your chatbot to understand and respond to user queries in a natural and human-like manner.</p>
                        <img src="https://angular.envytheme.com/tanus/assets/images/features/feature7.png" alt="Natural Language Processing" />
                    </div>
                </div>
                <div className={`${styles.colLg7} ${styles.colMd12} ${styles.colGap}`}>
                    <div className={`${styles.singleFeaturesBox} ${styles.positionRelative} ${styles.styleTwo} ${styles.mb25}`}>
                        <img src="https://angular.envytheme.com/tanus/assets/images/features/feature8.png" alt="Context-Aware Conversations" />
                        <h3>Context-Aware Conversations</h3>
                        <p>Ensure that the chatbot can retain context across interactions, providing a more personalized and seamless user experience.</p>
                    </div>
                </div>
                <div className={`${styles.colLg7} ${styles.colMd12} ${styles.colGap}`}>
                    <div className={`${styles.singleFeaturesBox} ${styles.positionRelative} ${styles.styleTwo} ${styles.mb25}`}>
                        <h3>Multi-Channel Integration</h3>
                        <p>Allow your chatbot to operate across various platforms and communication channels, such as websites, messaging apps, and social media.</p>
                        <img src="https://angular.envytheme.com/tanus/assets/images/features/feature9.png" alt="Multi-Channel Integration" />
                    </div>
                </div>
                <div className={`${styles.colLg5} ${styles.colMd12} ${styles.colGap}`}>
                    <div className={`${styles.singleFeaturesBox} ${styles.positionRelative} ${styles.mb25}`}>
                        <img src="https://angular.envytheme.com/tanus/assets/images/features/feature10.png" alt="Task Automation" />
                        <h3>Task Automation</h3>
                        <p>Empower the chatbot to perform specific tasks or actions based on user requests, streamlining processes and increasing efficiency.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
