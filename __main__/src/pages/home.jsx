import React, { useEffect } from 'react';
import { Link } from 'react-router';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-b from-[#131416] to-transparent py-28 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center opacity-0 animate-[fadeIn_2.5s_ease-in-out_forwards]">
            <h1 className="text-5xl pb-2 text-transparent bg-clip-text font-bold mb-3 bg-gradient-to-bl from-[#fdfeff] to-[#37b9e0]">
              Je fais tout moi-même
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Do you really want to have a bad time?
            </p>
            <button className="bg-gradient-to-r from-[#5fadc0] to-[#adc2d4] transition-all transform hover:scale-110 duration-300 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-[#5fadc03f]">
              mot minh tao
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="products" className="bg-[#141516] rounded-xl p-8 cursor-pointer hover:shadow-[0_-1px_36px_rgb(86,72,156,0.23)] transition-all duration-300 transform hover:-translate-y-1.5 border border-[#141516]/30">
            <h2 className="text-2xl font-bold mb-4">Browse Products</h2>
            <p className="text-gray-400">Explore our collection of premium products</p>
          </Link>
          <Link to="add-product" className="bg-[#141516] rounded-xl p-8 cursor-pointer hover:shadow-[0_-1px_36px_rgb(86,72,156,0.23)] transition-all duration-300 transform hover:-translate-y-1.5 border border-[#141516]/30">
            <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
            <p className="text-gray-400">Contribute to our growing collection</p>
          </Link>
        </div>
      </div>
    </>
  );
} 