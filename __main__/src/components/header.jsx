import React from "react";
import { Link } from "react-router";
import { Flower2, HeartCrack, Menu, PersonStanding, Search, ShoppingCart } from "lucide-react";

export default function Header({ count }) {
  return (
    <header className="fixed w-full z-40 transition-all duration-300 mx-auto px-4 sm:px-6 lg:px-10 xl:px-40 top-[22px]">
      <nav className="backdrop-blur-sm rounded-4xl bg-[#131414]/45 transform scale-y-[0.97] shadow-[0_1px_20px_rgb(82,89,153,0.1)]">
      
        <div className="relative flex items-center justify-between h-[52px] px-6 rounded-[120px] border border-[rgba(82,89,153,0.17)]">
          <div className="flex items-center mr-4">
            <button className="md:hidden p-2 rounded-md hover:bg-[#3a3b44]/50 transition-colors">
              <Menu className="h-6 w-6" />
            </button>

            <p className="lg:text-[26px] font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-br from-[#fff] to-[#5eaab8]">
              ReactShop
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1.5">
              <HeartCrack className="h-6 w-6" />
              <Link to="/">Home</Link>
            </div>

            <div className="flex items-center gap-1.5">
              <PersonStanding className="h-6 w-6" />
              <Link to="/products">Shop</Link>
            </div>

            <div className="flex items-center gap-1.5">
              <Flower2 className="h-6 w-6" />
              <Link to="/add-product">Create</Link>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#3a3b44]/50 rounded-full py-1.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#508bb3] w-[85%]"
              />
              <Search className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
            </div>

            <button className="p-2 rounded-full transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 -right-1 bg-[#508bb369] text-xs text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
                {count}
              </span>
            </button>
          </div>
        </div>

      </nav>
    </header>
  );
}
