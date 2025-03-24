import React, { useState } from 'react';
import { CheckCircleIcon } from 'lucide-react';
import data from "./data.json";
import Card from './components/card';
import Toast from './components/toast';
import Form from './form';
import Header from './header';
import Footer from './footer';

let timer;

export default function App() {
  const [items, setItems] = useState(data.items);
  const [notif, setNotif] = useState(false);
  const [count, setCount] = useState(0);

  const addToCart = () => {
    clearTimeout(timer);
    if(count >= 99)
      return;

    setCount(count + 1);
    setNotif(true);
    timer = setTimeout(() => setNotif(false), 1750);
  };


  const addNewItem = (data) => {
    // Them `data` vao `items` bằng `setItems()`
  }
  

  return (
    <div className="min-h-screen bg-[url('bg.svg')] text-gray-100">
      <Header count={count} />

      <main>
        <div className="relative overflow-hidden bg-gradient-to-b from-[#131416] to-transparent py-28 mt-[82px] mb-8">
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

        {/* Products */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map(product => <Card key={product.id} product={product} addToCart={addToCart} />)}
          </div>
        </div>

        {/* FORM */}
        <Form submit={addNewItem} categories={data.categories} />
      </main>

      <Toast className={`${notif ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <CheckCircleIcon className="inline-block mr-2 text-emerald-400" />
        Item added to cart!
      </Toast>

      <Footer />

    </div>
  );
}
