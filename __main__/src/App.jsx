import React, { useState } from 'react';
import { Routes, Route } from 'react-router';
import data from "./data.json";
import Home from './pages/home.jsx';
import Products from './pages/products';
import Layout from './components/layout';
import Form from './pages/form.jsx';

let timer;

export default function App() {
  const [items, setItems] = useState(data.items);
  const [toast, setToast] = useState("");
  const [notif, setNotif] = useState(false);
  const [count, setCount] = useState(0);

  const addToCart = () => {
    clearTimeout(timer);
    if(count >= 99)
      return;

    setCount(count + 1);
    setNotif(true);
    setToast("Item added to cart!");
    timer = setTimeout(() => setNotif(false), 1750);
  };

  const addNewItem = (data) => {
    clearTimeout(timer);
    const add = {
      id: items.length + 1,
      ...data,
      seller: "Delphi",
      rating: 5,
    }
    setNotif(true);
    setToast("New item created!");
    setItems([...items, add]);
    timer = setTimeout(() => setNotif(false), 1750);
  }

  return (
    <Routes>
      <Route element={<Layout count={count} toast={toast} notif={notif} />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products items={items} addToCart={addToCart} />} />
        <Route path="add-product" element={<Form submit={addNewItem} categories={data.categories} />} />
      </Route>
    </Routes>
  );
}
