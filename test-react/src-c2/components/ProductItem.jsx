import React, { useState } from "react";

export default function ProductItem({ product, onUpdateStatus, onDelete, setShowEditForm, setEditProduct }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleUpdateStatus = () => {
    // const newStatus = product.status === 'Còn hàng' ? 'Hết hàng' : 'Còn hàng';
    // onUpdateStatus(product.id, newStatus);
    setShowEditForm(true);
    setEditProduct(product);
  }

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete(product.id);
      setIsDeleting(false);
    }, 500);
  }

  return (
    <div className="group">
      <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 shadow-md rounded-lg transition-all duration-300 group-hover:scale-[1.01] group-hover:shadow-lg group-hover:border-blue-500/20">
        <div className="p-4 space-y-2">
          <div className="flex justify-between items-start gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-white">{product.name}</h3>
              <p className="text-sm text-gray-400 line-clamp-2">{product.description}</p>
              <p className="text-md font-bold text-blue-400">Giá: {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${product.status === 'Còn hàng' ? 'bg-green-500/20 text-green-400 border border-green-500/20' : 'bg-red-500/20 text-red-400 border border-red-500/20'}`}>
                {product.status || "Còn hàng"}
              </span>
            </div>

            <div className="flex flex-col gap-2 items-end">
              <button
                onClick={handleUpdateStatus}
                className={`text-xs font-medium px-2 py-1 rounded-full w-max transition-colors duration-200 bg-green-500/20 text-green-400 hover:bg-green-500/30 hover:text-green-300 border border-green-500/20`}
              >
                Sửa thông tin SP
              </button>
              {!isDeleting && (
                <button
                  onClick={handleDelete}
                  className="text-red-400 hover:text-red-300 transition-colors duration-200"
                  title="Xóa sản phẩm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2 w-5 h-5"><path d="M3 6h18"></path><path d="M19 6v14c0 1.6-1.3 3-3 3H8c-1.7 0-3-1.3-3-3V6"></path><path d="M8 6V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
                </button>
              )}
            </div>
          </div>
          {isDeleting && (
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-circle w-4 h-4 animate-spin-slow"><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"></path><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
              Đang xóa...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
