import Image from 'next/image';
import styles from '../styles/Partner.module.css';

const Partners = () => {
    return (
        <div className={styles.partner}>
            <h6 style={{ color: 'white', textAlign: 'center' }}>
                Trusted by <b style={{ color: 'blueviolet' }}>500,000+</b> content writers from companies including
            </h6>
            <div className={styles.imgPartner}>
                <Image 
                    src="/assets/images/partners/partner1.svg" 
                    alt="Partner 1" 
                    width={100} 
                    height={50} 
                />
                <Image 
                    src="/assets/images/partners/partner2.svg" 
                    alt="Partner 2" 
                    width={100} 
                    height={50} 
                />
                <Image 
                    src="/assets/images/partners/partner3.svg" 
                    alt="Partner 3" 
                    width={100} 
                    height={50} 
                />
                <Image 
                    src="/assets/images/partners/partner4.svg" 
                    alt="Partner 4" 
                    width={100} 
                    height={50} 
                />
                <Image 
                    src="/assets/images/partners/partner5.svg" 
                    alt="Partner 5" 
                    width={100} 
                    height={50} 
                />
                <Image 
                    src="/assets/images/partners/partner6.svg" 
                    alt="Partner 6" 
                    width={100} 
                    height={50} 
                />
            </div>
        </div>
    );
};

export default Partners;

