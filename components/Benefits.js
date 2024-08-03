import Image from 'next/image';
import styles from '../styles/Benefits.module.css';

const Benefits = () => {
    return (
        <div className={styles.benefits}>
            <div className={styles.row}>
                <div className={`${styles.colLg6} ${styles.colMd12}`}>
                    <div className={styles.benefitsContent}>
                        <span className={`${styles.subTitle} ${styles.dBlock}`}>BENEFITS</span>
                        <h2 className={styles.fwNormal}><b>Advantages of using AI chatbots, emphasizing how they can save time</b></h2>
                        <a className={styles.defaultButton} href="#">Start your free trial</a>
                        <div className={styles.image}>
                            <Image 
                                src="/assets/images/features/feature11.png" 
                                alt="Benefits" 
                                width={300} 
                                height={250} 
                                
                            />
                        </div>
                    </div>
                </div>
                <div className={`${styles.colLg6} ${styles.colMd12}`}>
                    <div className={styles.benefitsList}>
                        <div className={`${styles.item} ${styles.dFlex} ${styles.alignItemsCenter}`}>
                            <div className={`${styles.icon} ${styles.positionRelative} ${styles.roundedCircle} ${styles.flexShrink0}`}>
                                <Image 
                                    src="/assets/images/icons/instant-message.svg" 
                                    alt="Instant Response" 
                                    width={64} 
                                    height={64} 
                                />
                            </div>
                            <div className={styles.flexGrow1}>
                                <h3>Instant Response</h3>
                                <p>Save time with immediate responses to user queries</p>
                            </div>
                        </div>
                        <div className={`${styles.item} ${styles.dFlex} ${styles.alignItemsCenter}`}>
                            <div className={`${styles.icon} ${styles.positionRelative} ${styles.roundedCircle} ${styles.flexShrink0}`}>
                                <Image 
                                    src="/assets/images/icons/hour-clock.svg" 
                                    alt="24/7 Availability" 
                                    width={64} 
                                    height={64} 
                                />
                            </div>
                            <div className={styles.flexGrow1}>
                                <h3>24/7 Availability</h3>
                                <p>Enhance efficiency by offering round-the-clock support</p>
                            </div>
                        </div>
                        <div className={`${styles.item} ${styles.dFlex} ${styles.alignItemsCenter}`}>
                            <div className={`${styles.icon} ${styles.positionRelative} ${styles.roundedCircle} ${styles.flexShrink0}`}>
                                <Image 
                                    src="/assets/images/icons/automation.svg" 
                                    alt="Task Automation" 
                                    width={64} 
                                    height={64} 
                                />
                            </div>
                            <div className={styles.flexGrow1}>
                                <h3>Task Automation</h3>
                                <p>Save time on repetitive tasks as chatbots automate processes</p>
                            </div>
                        </div>
                        <div className={`${styles.item} ${styles.dFlex} ${styles.alignItemsCenter}`}>
                            <div className={`${styles.icon} ${styles.positionRelative} ${styles.roundedCircle} ${styles.flexShrink0}`}>
                                <Image 
                                    src="/assets/images/icons/saving-money.svg" 
                                    alt="Cost Savings" 
                                    width={64} 
                                    height={64} 
                                />
                            </div>
                            <div className={styles.flexGrow1}>
                                <h3>Cost Savings</h3>
                                <p>Save resources by automating routine tasks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
