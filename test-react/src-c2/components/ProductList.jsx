import React, { useState } from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ products, onUpdateStatus, onDelete, setEditProduct, setShowEditForm }) {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-white">Danh Sách Sản Phẩm</h2>
      </div>

      <div className="space-y-4">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onUpdateStatus={onUpdateStatus}
            onDelete={onDelete}
            setEditProduct={setEditProduct}
            setShowEditForm={setShowEditForm}
          />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center text-gray-400 py-8 bg-white/5 rounded-lg border border-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle w-10 h-10 mx-auto mb-2 text-gray-500"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
          <p>Chưa có sản phẩm nào.</p>
        </div>
      )}
    </div>
  );
};
