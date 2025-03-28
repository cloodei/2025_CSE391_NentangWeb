import React, { useState } from "react";
import ProductForm from "./components/productForm";
import ProductList from "./components/ProductList";

export default function ProductManagerApp() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editProduct, setEditProduct] = useState({});

  const handleAddProduct = (newProduct) => {
    const newProducts = [...products, newProduct];
    localStorage.setItem('products', JSON.stringify(newProducts));
    setProducts(newProducts);
  }

  const handleUpdate = (newInfo) => {
    const id = newInfo.id;
    const newProducts = products.map(product => product.id === id ? { ...newInfo, id: product.id } : product);
    localStorage.setItem('products', JSON.stringify(newProducts));
    setProducts(newProducts);
  }

  const handleDelete = (id) => {
    const newProducts = products.filter(product => product.id !== id);
    localStorage.setItem('products', JSON.stringify(newProducts));
    setProducts(newProducts);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Quản Lý Sản Phẩm
        </h1>
        <div className="flex justify-center mb-4">
          {!(showAddForm || showEditForm) && (
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-green-500/90 hover:bg-green-500 text-white font-semibold py-2.5 px-5 rounded-md transition-colors duration-300 shadow-lg hover:shadow-green-500/50"
            >
              Thêm Sản Phẩm Mới
            </button>
          )}
        </div>
        {showAddForm ? (
          <ProductForm
            product={{ name: '', description: '', status: '', price: '' }}
            addProduct={handleAddProduct}
            onCancel={() => { setShowAddForm(false); setShowEditForm(false) }}
          />
        ) : showEditForm ? (
          <ProductForm
            product={editProduct}
            addProduct={handleUpdate}
            onCancel={() => { setShowAddForm(false); setShowEditForm(false) }}
          />
        ) : (
          <ProductList products={products} setShowEditForm={setShowEditForm} setEditProduct={setEditProduct} onUpdateStatus={handleUpdate} onDelete={handleDelete} />
        )}
      </div>
    </div>
  );
}
