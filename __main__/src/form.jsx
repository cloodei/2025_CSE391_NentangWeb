import React, { useState } from "react";

/**
 * @param   {{ submit: (data) => void, categories: string[] }}
 * @returns {React.JSX.Element}
*/
export default function Form({ submit, categories }) {
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: 'Audio',
    seller: '',
    image: '',
    terms: false
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    price: '',
    seller: '',
    image: '',
    terms: ''
  });


  const validateForm = () => {
    // Neu error, setFormErrors(), return true
  };

  /** @param {React.FormEvent<HTMLFormElement>} e */
  const handleSubmit = (e) => {
    // validate va submit()
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

        <div>
          <input
            type="checkbox"
            id="terms"
            checked={form.terms}
            onChange={e => setForm({ ...form, terms: e.target.checked })}
            className="rounded bg-[#222427] border-gray-600 text-[#508bb3] focus:ring-[#508bb3]"
          />
          <label htmlFor="terms" className="text-sm text-gray-300 ml-2">
            You felt your sins crawling on your back
          </label>
          {formErrors.terms && <p className="text-red-500 text-sm">{formErrors.terms}</p>}
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
