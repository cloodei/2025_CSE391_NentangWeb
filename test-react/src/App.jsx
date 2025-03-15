import { useState } from 'react';
import { ChevronRight, CirclePlus, Upload } from "lucide-react";
import { Button } from './components/button';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='px-8 py-3 flex max-sm:flex-col items-center justify-between bg-[#242424] text-white'>
        <h1>Trường Đại học Thủy Lợi</h1>
        <ul className='flex items-center gap-4 max-sm:flex-col'>
          <li>Trang chủ</li>
          <li className='text-[#c9c9c9c4] mx-5'>Quản lý cửa hàng</li>
          <li>
            <input
              type="text"
              placeholder='Nhập nội dung tìm kiếm'
              className='p-2 pl-3 pr-4 border bg-white placeholder:text-gray-900/60'
            />
          </li>
          <li>
            <button className='py-2 px-4 uppercase border rounded-xs text-green-300'>Tìm kiếm</button>
          </li>
        </ul>
      </header>

      <main className='mt-8 container mx-auto lg:px-10 xl:px-20'>
        <section className='flex'>
          <div className='space-x-3 flex'>
            <Button className="uppercase bg-sky-300 rounded-[1px]">
              <CirclePlus />
              Thêm mới
            </Button>
            <Button className="uppercase bg-gray-200 rounded-[1px]">
              <Upload />
              Xuất ra file
              <ChevronRight className='h-8 w-8 ml-2' />
            </Button>
          </div>
        </section>
      </main>

      <footer>

      </footer>
    </>
  )
}
