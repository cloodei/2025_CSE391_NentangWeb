import React, { useEffect } from 'react';
import Card from '../components/card';

export default function Products({ items, addToCart }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold mb-8 text-white">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map(product => <Card key={product.id} product={product} addToCart={addToCart} />)}
      </div>
    </div>
  );
}
