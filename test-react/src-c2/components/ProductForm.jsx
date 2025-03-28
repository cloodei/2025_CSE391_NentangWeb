import React, { useState } from 'react';

export default function ProductForm({ product, addProduct, onCancel }) {
  const [name, setName] = useState(product?.name || '');
  const [description, setDescription] = useState(product?.description || '');
  const [price, setPrice] = useState(product?.price || '');
  const [status, setStatus] = useState(product?.status || 'Còn hàng');
  const [errors, setErrors] = useState({ name: '', description: '', price: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if(!name.trim()) {
      newErrors.name = 'Tên sản phẩm là bắt buộc';
    }
    else if(name.length > 30) {
      newErrors.name = 'Tên sản phẩm không được quá 30 ký tự';
    }

    if(!description.trim()) {
      newErrors.description = 'Mô tả sản phẩm là bắt buộc';
    }

    if(isNaN(Number(price)) || Number(price) < 0) {
      newErrors.price = 'Giá sản phẩm phải là một số không âm';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if(validateForm()) {
      const newProduct = {
        id: crypto.randomUUID(),
        name,
        description,
        price: Number(price),
        status,
      };

      setName('');
      setDescription('');
      setPrice('');
      setStatus('Còn hàng');
      setErrors({});
      onCancel();
      if(!product?.id) 
        addProduct(newProduct);
      else
        addProduct({ ...newProduct, id: product.id });
    }
    setIsSubmitting(false);
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-lg">
      <div className="p-6">
        <h2 className="text-xl text-white mb-4">Thêm Sản Phẩm Mới</h2>
        <p className="text-gray-300 mb-6">Nhập thông tin sản phẩm vào form bên dưới.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-200">
              Tên Sản Phẩm <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập tên sản phẩm"
              className={`mt-1 w-full bg-black/20 text-white border-gray-700 placeholder:text-gray-400 rounded-md py-2.5 px-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.name ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}`}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle w-4 h-4"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                {errors.name}
              </p>
            )}
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-200">
              Mô Tả <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Nhập mô tả sản phẩm"
              className={`mt-1 w-full bg-black/20 text-white border-gray-700 placeholder:text-gray-400 rounded-md py-2.5 px-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px] ${errors.description ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}`}
              disabled={isSubmitting}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle w-4 h-4"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                {errors.description}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-200">
              Giá <span className="text-red-500">*</span>
            </label>
            <input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Nhập giá sản phẩm"
              className={`mt-1 w-full bg-black/20 text-white border-gray-700 placeholder:text-gray-400 rounded-md py-2.5 px-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.price ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}`}
              disabled={isSubmitting}
            />
            {errors.price && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle w-4 h-4"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                {errors.price}
              </p>
            )}
          </div>
          
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-200">
              Trạng Thái
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 w-full bg-black/20 text-white border-gray-700 rounded-md py-2.5 px-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isSubmitting}
            >
              <option value="Còn hàng" className="bg-gray-800 hover:bg-gray-700/50 text-white">Còn hàng</option>
              <option value="Hết hàng" className="bg-gray-800 hover:bg-gray-700/50 text-white">Hết hàng</option>
            </select>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="bg-gray-500/20 hover:bg-gray-500 text-gray-300 font-semibold py-2.5 px-5 rounded-md transition-colors duration-300"
              onClick={onCancel}
              disabled={isSubmitting}
            >
              Hủy
            </button>
            <button
              type="submit"
              className="bg-blue-500/90 hover:bg-blue-500 text-white font-semibold py-2.5 px-5 rounded-md transition-colors duration-300 shadow-lg hover:shadow-blue-500/50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Đang thêm...' : 'Thêm Sản Phẩm'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
