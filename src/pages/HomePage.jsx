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
