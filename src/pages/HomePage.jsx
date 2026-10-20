import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import FeaturedProducts from '../sections/FeaturedProducts';
import BuildingInPublic from '../sections/BuildingInPublic';
import TechStack from '../sections/TechStack';
import About from '../sections/About';
import Founder from '../sections/Founder';
import Contact from '../sections/Contact';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Quantiva Tech — Building AI-Powered Products</title>
        <meta
          name="description"
          content="Mohamed Razmy Abdul Razzak — independent developer behind the Quantiva Tech brand. AI-powered mobile apps, SaaS, and automation tools."
        />
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <BuildingInPublic />
        <TechStack />
        <About />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
