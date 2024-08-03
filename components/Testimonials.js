import Image from 'next/image';
import styles from '../styles/Testimonials.module.css';

const Testimonials = () => {
    return (
        <div className={styles.testimonialSection} id="testimonials">
            <h5 className={styles.testimonialTitle}>
                CUSTOMER <span className={styles.testimonialHighlight}>TESTIMONIALS</span>
            </h5>
            <h1 className={styles.testimonialRating}>
                Rated <span>4.9/5</span> Stars in 1k+ Happy customer <br /> reviews Around the World
            </h1>
            <div className={styles.testimonials}>
                <div className={styles.testimonial}>
                    <div className={styles.testimonialHeader}>
                        <Image 
                            src="/assets/images/users/user15.jpg" 
                            alt="Virginia King" 
                            width={60} 
                            height={60} 
                            className={styles.testimonialImage}
                        />
                        <div>
                            <h3>VIRGINIA KING</h3>
                            <p>Operations</p>
                        </div>
                    </div>
                    <p>
                        "The user interface is so intuitive; it makes the whole experience effortless. Kudos to the
                        design team for creating something user-friendly!"
                    </p>
                    <div className={styles.rating}>
                        <span>⭐⭐⭐⭐⭐</span>
                        <p>Dec 12, 2024</p>
                    </div>
                </div>
                <div className={styles.testimonial}>
                    <div className={styles.testimonialHeader}>
                        <Image 
                            src="/assets/images/users/user16.jpg" 
                            alt="Vera Brown" 
                            width={60} 
                            height={60} 
                            className={styles.testimonialImage}
                        />
                        <div>
                            <h3>VERA BROWN</h3>
                            <p>Community Lead</p>
                        </div>
                    </div>
                    <p>
                        "I was skeptical at first, but this product delivers incredible value for the price. It's a
                        game-changer for anyone in industry."
                    </p>
                    <div className={styles.rating}>
                        <span>⭐⭐⭐⭐⭐</span>
                        <p>Dec 13, 2024</p>
                    </div>
                </div>
                <div className={styles.testimonial}>
                    <div className={styles.testimonialHeader}>
                        <Image 
                            src="/assets/images/users/user14.jpg" 
                            alt="Kara Lewis" 
                            width={60} 
                            height={60} 
                            className={styles.testimonialImage}
                        />
                        <div>
                            <h3>KARA LEWIS</h3>
                            <p>CEO & CO-Founder</p>
                        </div>
                    </div>
                    <p>
                        "The quality of the product is outstanding, and the customer service team goes above and
                        beyond. I'm a customer for life."
                    </p>
                    <div className={styles.rating}>
                        <span>⭐⭐⭐⭐⭐</span>
                        <p>Dec 11, 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
