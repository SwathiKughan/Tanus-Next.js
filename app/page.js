// pages/about.js

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header'; 
import Partner from '../components/Partner';
import About from '../components/About';
import Features from '../components/Features';
import styles from '../styles/global.css'; // Import the module CSS file
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import CaseStudies from '../components/CaseStudies';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import ContactUs from '../components/ContactUs';
import Articles from '../components/Articles';





const Tanus = () => {
    return (
        <div>
            < Navbar />
            < Header />
            < Partner />
            < About />
            < Features />
            < Benefits />
            < Testimonials />
            < CaseStudies />
            < Pricing />
            < Faq />
            < Articles />
            < ContactUs />
           
           
        </div>
        
    );
}
export default Tanus;