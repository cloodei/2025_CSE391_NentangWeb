import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

/** @param {{ submit: (data) => void, categories: string[] }} */
export default function Form({ submit, categories }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: 'Audio',
    image: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    price: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    const errors = {}

    if(!form.name.trim())
      errors.name = "Item name is required";
    
    const prc = parseFloat(form.price.trim());
    if(isNaN(prc) || !prc || prc <= 0)
      errors.price = "Item price is invalid";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  /** @param {React.FormEvent<HTMLFormElement>} e */
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!validateForm())
      return;

    if(!form.image.trim())
      form.image = "default.webp";

    form.price = parseFloat(form.price.trim());
    submit(form);

    setForm({
      name: '',
      price: '',
      category: 'Audio',
      image: '',
    });
    navigate('/products');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-8">
      <h2 className="text-3xl font-semibold mb-5 text-white text-center">Add New Item</h2>

      <form onSubmit={handleSubmit} className="space-y-6 bg-[#141516] p-8 rounded-xl border border-[#3a3b44]/30 shadow-lg">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Item Name</label>
          <input
            type="text"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className={`w-full bg-[#222427] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 transition-all duration-300 ${
              formErrors.name ? 'ring-2 ring-red-500' : 'focus:ring-[#508bb3]'
            }`}
          />
          {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Price</label>
          <input
            type="text"
            value={form.price}
            onChange={e => setForm({ ...form, price: e.target.value })}
            className={`w-full bg-[#222427] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 transition-all duration-300 ${
              formErrors.price ? 'ring-2 ring-red-500' : 'focus:ring-[#508bb3]'
            }`}
          />
          {formErrors.price && <p className="text-red-500 text-sm mt-1">{formErrors.price}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
          <select
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
            className="w-full bg-[#222427] rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-[#508bb3] transition-all duration-300"
          >
            {categories.slice(1).map(category => <option key={category} value={category}>{category}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
          <textarea
            value={form.image}
            onChange={e => setForm({ ...form, image: e.target.value })}
            rows={4}
            className={`w-full bg-[#222427] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 transition-all duration-300 ${
              formErrors.image ? 'ring-2 ring-red-500' : 'focus:ring-[#508bb3]'
            }`}
          />
          {formErrors.image && <p className="text-red-500 text-sm mt-1">{formErrors.image}</p>}
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-gradient-to-r from-[#508bb3] to-[#8c73c7] hover:from-[#8c73c7] hover:to-[#508bb3] text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-[1.02]"
        >
          Add Item
        </button>
      </form>
    </div>
  )
}
