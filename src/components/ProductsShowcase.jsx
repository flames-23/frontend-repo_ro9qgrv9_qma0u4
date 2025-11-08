import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Radiance Gel Cleanser',
    price: 14.99,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1585238342028-05367f1e2c26?q=80&w=1400&auto=format&fit=crop',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Hydra-Barrier Toner',
    price: 16.5,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1400&auto=format&fit=crop',
    tag: 'New',
  },
  {
    id: 3,
    name: 'Vitamin C Serum 10%',
    price: 22.0,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1400&auto=format&fit=crop',
    tag: 'Derm-loved',
  },
];

const ProductsShowcase = () => {
  return (
    <section id="products" className="relative py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Bestsellers</h2>
            <p className="mt-2 text-gray-600">Our community favorites for a daily glow.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-violet-700 hover:text-violet-900">
            View all <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-1 bg-violet-50 text-violet-700 rounded-full">{p.tag}</span>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-400" />
                    <span className="text-sm text-gray-700">{p.rating}</span>
                  </div>
                </div>
                <h3 className="mt-2 font-medium text-gray-900">{p.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-semibold">${p.price.toFixed(2)}</span>
                  <button className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick trust strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-gray-50">
            <p className="text-sm text-gray-600">Clean ingredients</p>
          </div>
          <div className="p-4 rounded-xl bg-gray-50">
            <p className="text-sm text-gray-600">Dermatologist tested</p>
          </div>
          <div className="p-4 rounded-xl bg-gray-50">
            <p className="text-sm text-gray-600">Cruelty-free</p>
          </div>
          <div className="p-4 rounded-xl bg-gray-50">
            <p className="text-sm text-gray-600">Carbon neutral</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
