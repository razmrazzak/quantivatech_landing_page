import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import FeaturedProducts from '../sections/FeaturedProducts';
import AppShowcase from '../components/AppShowcase';
import { habiticaShowcase } from '../data/habiticaShowcase';
import { expenseShowcase } from '../data/expenseShowcase';
import { capgenShowcase } from '../data/capgenShowcase';
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
        <AppShowcase app={expenseShowcase} />
        <AppShowcase app={habiticaShowcase} />
        <AppShowcase app={capgenShowcase} />
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
