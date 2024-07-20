
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <div className={styles.about} id="about">
            <div className="row">
                <div className="col-md-5 texting-col">
                    <img
                        src="https://angular.envytheme.com/tanus/assets/images/icons/robot.svg"
                        style={{ display: 'inline-block', marginLeft: '2cm' }}
                    />
                    <h4 style={{ display: 'inline-block', verticalAlign: 'middle' , color: 'white' , flexWrap: 'wrap' , marginLeft: '2cm'}}>
                        A FEW WORDS ABOUT US AND OUR CHATBOT
                    </h4>
                    <div className="social">
                        <i className="fa fa-facebook-official fa-2x"></i>&emsp;
                        <i className="fa fa-xing-square fa-2x"></i>&emsp;
                        <i className="fa fa-linkedin-square fa-2x"></i>&emsp;
                    </div>
                </div>

                <div className="col-md-6 text2-col">
                    <h5 style={{ color: 'blueviolet', textAlign: 'left' }}>ABOUT US</h5>
                    <h5 style={{ color: 'gray', textAlign: 'left' }}>
                        We are more than just a technology company; we are innovators, creators, and collaborators
                        passionate about reshaping the future. Established with a vision to transform the way people
                        interact with technology, we pride ourselves on blending cutting-edge AI solutions with a
                        human-centric approach.
                    </h5>
                </div>
            </div>

            <div className={styles.why}>
                <h5 className={styles.whyTitle}>
                    WHY CHOOSE <i className={styles.highlight}>TANUS</i>
                </h5>
                <div className={styles.invSol}>
                    <h4>Innovative Solutions</h4>
                    <img src="https://angular.envytheme.com/tanus/assets/images/shapes/shape2.svg" className={styles.invImg} />
                    <p>
                        We pride ourselves on delivering solutions that go beyond expectations, fueled by a spirit
                        of innovation that permeates everything we do.
                    </p>
                </div>
                <div className={styles.invSol}>
                    <h4>Reliability</h4>
                    <img src="https://angular.envytheme.com/tanus/assets/images/shapes/shape3.svg" className={styles.invImg} />
                    <p>
                        Trust is the foundation of our relationships. We are committed to delivering reliable,
                        robust, and secure solutions that our clients can depend on.
                    </p>
                </div>
                <div className={styles.invSol}>
                    <h4>Customer-Centric Approach</h4>
                    <img src="https://angular.envytheme.com/tanus/assets/images/shapes/shape4.svg" className={styles.invImg} />
                    <p>
                        Your success is our success. Our customer-centric approach ensures that your needs are at
                        the forefront of our solutions, from inception to implementation.
                    </p>
                </div>
            </div>

            <img
                src="https://angular.envytheme.com/tanus/assets/images/shapes/slider-text.svg"
                className={styles.sliderText}
                style={{ position: 'relative' }}
            />
            <div className={styles.video}>
                <img src="https://angular.envytheme.com/tanus/assets/images/videos/video2.jpg" />
            </div>
        </div>
    );
};

export default About;
