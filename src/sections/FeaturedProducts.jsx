import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';

export default function FeaturedProducts() {
  return (
    <section id="products" className="section-padding scroll-mt-20">
      <div className="container-narrow mx-auto">
        <SectionHeading
          badge="Portfolio"
          title="Featured"
          highlight="Products"
          subtitle="Mobile apps, SaaS platforms, and AI tools we're building and shipping — from idea to launch."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
