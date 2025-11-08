import React from 'react';
import HeroSection from './components/HeroSection';
import ProductsShowcase from './components/ProductsShowcase';
import SkinQuiz from './components/SkinQuiz';
import ReviewsBlog from './components/ReviewsBlog';

function App() {
  return (
    <div className="min-h-screen antialiased text-gray-900 bg-white">
      <HeroSection />
      <ProductsShowcase />
      <SkinQuiz />
      <ReviewsBlog />

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-3 text-sm">
          <div>
            <p className="font-semibold">Arumi Glow</p>
            <p className="mt-2 text-gray-600">Clean, minimalist skincare for everyday glow.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Shop</p>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li><a href="#products" className="hover:text-gray-900">Bestsellers</a></li>
                <li><a href="#quiz" className="hover:text-gray-900">Skin Quiz</a></li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Company</p>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li><a href="#community" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="md:text-right text-gray-600">© {new Date().getFullYear()} Arumi Glow. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
