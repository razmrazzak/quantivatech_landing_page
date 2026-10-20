import { useState } from 'react';
import { productsData, STATUS } from '../data/productsData';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';

const statusOrder = [STATUS.RELEASED, STATUS.ONGOING, STATUS.IN_PLANNING];

export default function FeaturedProducts() {
  const [selectedStatus, setSelectedStatus] = useState('All');
  
  const filteredProducts = selectedStatus === 'All'
    ? productsData
    : productsData.filter((p) => p.status === selectedStatus);
  
  const groupedProducts = statusOrder.reduce((acc, status) => {
    acc[status] = productsData.filter((p) => p.status === status);
    return acc;
  }, {});

  return (
    <section id="products" className="section-padding scroll-mt-20">
      <div className="container-narrow mx-auto">
        <SectionHeading
          badge="Portfolio"
          title="Featured"
          highlight="Products"
          subtitle="Mobile apps, SaaS platforms, and AI tools we're building and shipping — from idea to launch."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedStatus('All')}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              selectedStatus === 'All'
                ? 'border-accent-cyan/50 bg-accent-cyan/20 text-accent-cyan'
                : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10'
            }`}
          >
            All Products
          </button>
          {statusOrder.map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                selectedStatus === status
                  ? 'border-accent-cyan/50 bg-accent-cyan/20 text-accent-cyan'
                  : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              {status} {groupedProducts[status] && `(${groupedProducts[status].length})`}
            </button>
          ))}
        </div>

        {selectedStatus === 'All' ? (
          <>
            {statusOrder.map((status) => {
              const products = groupedProducts[status];
              if (!products || products.length === 0) return null;
              
              return (
                <div key={status} className="mb-12 last:mb-0">
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    {status}
                    <span className="ml-2 text-sm text-white/50">({products.length})</span>
                  </h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
