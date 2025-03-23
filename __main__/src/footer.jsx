import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#141516]/50 border-t border-[#3a3b44]/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-tl from-[#fff] to-[#5eaab8]">
              ReactShop
            </h3>
            <p className="text-gray-400">Cong ty TNHH mot minh tao</p>
          </div>

          <div className="pl-4">
            <h4 className="text-lg font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#508bb3] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#508bb3] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#508bb3] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#508bb3] transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#508bb3] transition-colors">Discord</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#508bb3] transition-colors">Instagram</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#508bb3] transition-colors">you called for help</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#508bb3] transition-colors tracking-[3px]">.....</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#508bb3] transition-colors">but nobody came.</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#3a3b44]/20 text-center text-gray-500 text-sm">
          © 2040 ReactShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
