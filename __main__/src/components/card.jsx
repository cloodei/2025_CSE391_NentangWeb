import React from "react";
import { Heart, Star } from "lucide-react";

/**
 * @param   {{ addToCart: () => void, product: { id: number; name: string; price: number; seller: string; image: string; rating: number; category: string } }}
 * @returns {React.JSX.Element}
*/
export default function Card({ addToCart, product }) {
  return (
    <div className="bg-[#141516] rounded-xl overflow-hidden hover:shadow-[0_-1px_36px_rgb(86,72,156,0.23)] transition-all duration-300 transform hover:-translate-y-1.5 border border-[#141516]/30">

      <div className="relative">
        <div className="w-full h-64 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-[230ms] hover:scale-[1.16]"
          />
        </div>

        <button className="absolute top-4 right-4 p-2 rounded-full bg-[#141516]/80 hover:bg-[#222427] transition-colors">
          <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{product.name}</h3>

          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="text-sm text-gray-400">{product.rating}</span>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4">From {product.seller}</p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${product.price}</span>

          <button 
            onClick={addToCart}
            className="bg-[#2f3970] hover:bg-[#3d4b97] cursor-pointer text-white px-[18px] py-[5px] rounded-md transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

    </div>
  );
}
