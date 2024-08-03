import Image from 'next/image';
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <div className={styles.about} id="about">
            <div className="row">
                <div className="col-md-5 texting-col">
                    <Image
                        src="/assets/images/icons/robot.svg"
                        alt="Robot icon"
                        width={100}
                        height={100}
                        style={{ display: 'inline-block', marginLeft: '2cm' }}
                    />
                    <h4 style={{ display: 'inline-block', verticalAlign: 'middle', color: 'white', flexWrap: 'wrap', marginLeft: '2cm' }}>
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
                    <Image
                        src="/assets/images/shapes/shape2.svg"
                        alt="Innovative Solutions"
                        width={100}
                        height={100}
                        className={styles.invImg}
                    />
                    <p>
                        We pride ourselves on delivering solutions that go beyond expectations, fueled by a spirit
                        of innovation that permeates everything we do.
                    </p>
                </div>
                <div className={styles.invSol}>
                    <h4>Reliability</h4>
                    <Image
                        src="/assets/images/shapes/shape3.svg"
                        alt="Reliability"
                        width={100}
                        height={100}
                        className={styles.invImg}
                    />
                    <p>
                        Trust is the foundation of our relationships. We are committed to delivering reliable,
                        robust, and secure solutions that our clients can depend on.
                    </p>
                </div>
                <div className={styles.invSol}>
                    <h4>Customer-Centric Approach</h4>
                    <Image
                        src="/assets/images/shapes/shape4.svg"
                        alt="Customer-Centric Approach"
                        width={100}
                        height={100}
                        className={styles.invImg}
                    />
                    <p>
                        Your success is our success. Our customer-centric approach ensures that your needs are at
                        the forefront of our solutions, from inception to implementation.
                    </p>
                </div>
            </div>
            <div className={styles.sliderText}>
            <Image
                src="/assets/images/shapes/slider-text.svg"
                alt="Slider Text"
                className={styles.sliderText}
                style={{ position: 'relative' }}
                width={1700}
                height={300}
            />
            </div>
            
            <div className={styles.video}>
                <Image
                    src="/assets/images/videos/video2.jpg"
                    alt="Video Thumbnail"
                    width={800}
                    height={300}
                    
                />
            </div>
        </div>
    );
};

export default About;

