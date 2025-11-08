import React from 'react';
import Spline from '@splinetool/react-spline';
import { Search, ShoppingBag, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] overflow-hidden bg-gradient-to-b from-violet-50 via-white to-white">
      {/* Top Nav inside hero for a super-clean first impression */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-violet-500/10 border border-violet-200" />
            <span className="font-semibold text-lg tracking-tight">Arumi Glow</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="text-gray-600 hover:text-gray-900">Products</a>
            <a href="#quiz" className="text-gray-600 hover:text-gray-900">Skin Quiz</a>
            <a href="#community" className="text-gray-600 hover:text-gray-900">Reviews & Blog</a>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-white/80 backdrop-blur border border-gray-200 rounded-full px-3 py-2 shadow-sm">
              <Search className="h-4 w-4 text-gray-500" />
              <input
                aria-label="Search"
                placeholder="Search skincare..."
                className="bg-transparent outline-none text-sm w-40"
              />
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm">
              <ShoppingBag className="h-4 w-4" />
              Cart
            </button>
          </div>
        </div>
      </div>

      {/* Spline Scene */}
      <div className="relative h-[80vh] md:h-[90vh]">
        <Spline 
          scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay for readability (doesn't block interaction) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white" />

        {/* Text content */}
        <div className="absolute inset-0 z-10 flex items-end md:items-center">
          <div className="mx-auto max-w-6xl px-4 pb-10 md:pb-0">
            <div className="md:max-w-xl">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                Effortless skincare for everyday glow
              </h1>
              <p className="mt-3 md:mt-4 text-gray-600 md:text-lg">
                Minimal steps. Maximum results. Clean formulas crafted for radiant, healthy skin.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-violet-700">
                  Shop bestsellers
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#quiz" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium hover:bg-gray-50">
                  Take the Skin Quiz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
