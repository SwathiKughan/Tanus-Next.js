import dynamic from 'next/dynamic';
import 'bootstrap/dist/css/bootstrap.min.css';



// Dynamically import components that may require browser-specific APIs
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });
const Header = dynamic(() => import('../components/Header'), { ssr: false });
const Partner = dynamic(() => import('../components/Partner'), { ssr: false });
const About = dynamic(() => import('../components/About'), { ssr: false });
const Features = dynamic(() => import('../components/Features'), { ssr: false });
const Benefits = dynamic(() => import('../components/Benefits'), { ssr: false });
const Testimonials = dynamic(() => import('../components/Testimonials'), { ssr: false });
const CaseStudies = dynamic(() => import('../components/CaseStudies'), { ssr: false });
const Pricing = dynamic(() => import('../components/Pricing'), { ssr: false });
const Faq = dynamic(() => import('../components/Faq'), { ssr: false });
const ContactUs = dynamic(() => import('../components/ContactUs'), { ssr: false });
const Articles = dynamic(() => import('../components/Articles'), { ssr: false });

const Tanus = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Partner />
            <About />
            <Features />
            <Benefits />
            <Testimonials />
            <CaseStudies />
            <Pricing />
            <Faq />
            <Articles />
            <ContactUs />
        </div>
    );
}

export default Tanus;
