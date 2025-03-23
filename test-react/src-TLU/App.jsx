import { Button } from './components/button';
import { ChevronDown, ChevronRight, ChevronUp, CirclePlus, CircleX, Eye, Pencil, Search, Upload } from "lucide-react";

export default function App() {
  return (
    <>
      <header className='px-8 py-3 flex max-sm:flex-col items-center justify-between bg-[#242424] text-white'>
        <h1 className='text-xl'>Trường Đại học Thủy Lợi</h1>
        <ul className='flex items-center gap-4 max-sm:flex-col'>
          <li>Trang chủ</li>
          <li className='text-[#c9c9c9c4] mx-5'>Quản lý cửa hàng</li>
          <li>
            <input
              type="text"
              placeholder='Nhập nội dung tìm kiếm'
              className='p-2 pl-3 pr-4 border bg-white text-gray-950 placeholder:text-gray-900/60'
            />
          </li>
          <li>
            <button className='py-2 px-4 cursor-pointer uppercase border rounded-xs text-green-300'>Tìm kiếm</button>
          </li>
        </ul>
      </header>

      <main className='mt-8 container mx-auto lg:px-6'>
        <section className='flex justify-between'>
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

          <div className='border flex items-center h-[38px] rounded-[3px] border-[#dbdbdb]'>
            <Button className='h-full bg-[#dbdbdb] rounded-none'>
              <ChevronRight />
            </Button>

            <input type="text" placeholder='Tìm kiếm cửa hàng' className='h-full border-[#dbdbdb] border-l border-r pl-2.5 pb-1' />

            <Button className='h-full bg-[#dbdbdb] rounded-none'>
              <Search />
            </Button>
          </div>

          <div className='flex items-center gap-4 ml-11'>
            <b className='text-lg'>Kết quả</b>

            <select name="kq" id="kq" className='border rounded-xs border-[#cfcfcf] py-1 pl-[18px] pr-12'>
              <option value="20">20</option>
            </select>
          </div>
        </section>

        <section className='mt-8 w-full'>
          <table className='w-full'>
            <tbody>
              <tr className='text-white font-medium bg-[#2e2f31]'>
                <td className='py-0.5 pl-3 pr-5'>
                  Hành động
                </td>

                <td className='py-0.5 pr-5'>
                  <div className='flex items-center justify-between'>
                    STT
                    <div className='flex flex-col gap-2.5'>
                      <ChevronUp />
                      <ChevronDown />
                    </div>
                  </div>
                </td>
                
                <td className='py-0.5 pr-5'>
                  <div className='flex items-center justify-between'>
                    Địa chỉ
                    <div className='flex flex-col gap-2.5'>
                      <ChevronUp />
                      <ChevronDown />
                    </div>
                  </div>
                </td>

                <td className='py-0.5 pr-5'>
                  <div className='flex items-center justify-between'>
                    Người quản lý
                    <div className='flex flex-col gap-2.5'>
                      <ChevronUp />
                      <ChevronDown />
                    </div>
                  </div>
                </td>

                <td className='py-0.5 pr-5'>
                  <div className='flex items-center justify-between'>
                    Lần cập nhật cuối
                    <div className='flex flex-col gap-2.5'>
                      <ChevronUp />
                      <ChevronDown />
                    </div>
                  </div>
                </td>
              </tr>

              <tr className='border-b border-[#c5c5c5]'>
                <td className='pl-3 py-2.5'>
                  <Button className='py-2 px-4 bg-sky-400 rounded-none'>
                    <Eye className='w-6 h-6' />
                  </Button>
                  <Button className='py-2 px-4 bg-yellow-300 rounded-none'>
                    <Pencil className='w-6 h-6' />
                  </Button>
                  <Button className='py-2 px-4 bg-red-400 rounded-none'>
                    <CircleX className='w-6 h-6' />
                  </Button>
                </td>
                <td>1</td>
                <td>Mai Hồng Linh</td>
                <td>111 Nguyễn Văn Gà, Đông Từ Liêm Hà Nội</td>
                <td>40 Tháng 0 1946, 3:20</td>
              </tr>
              
              <tr className='border-b border-[#c5c5c5]'>
                <td className='pl-3 py-2.5'>
                  <Button className='py-2 px-4 bg-sky-400 rounded-none'>
                    <Eye className='w-6 h-6' />
                  </Button>
                  <Button className='py-2 px-4 bg-yellow-300 rounded-none'>
                    <Pencil className='w-6 h-6' />
                  </Button>
                  <Button className='py-2 px-4 bg-red-400 rounded-none'>
                    <CircleX className='w-6 h-6' />
                  </Button>
                </td>
                <td>2</td>
                <td>Diệp Xuân Hải</td>
                <td>111 Nguyễn Văn Gà, Đông Từ Liêm Hà Nội</td>
                <td>40 Tháng 0 1946, 3:20</td>
              </tr>
              
              <tr className='border-b border-[#c5c5c5]'>
                <td className='pl-3 py-2.5'>
                  <Button className='py-2 px-4 bg-sky-400 rounded-none'>
                    <Eye className='w-6 h-6' />
                  </Button>
                  <Button className='py-2 px-4 bg-yellow-300 rounded-none'>
                    <Pencil className='w-6 h-6' />
                  </Button>
                  <Button className='py-2 px-4 bg-red-400 rounded-none'>
                    <CircleX className='w-6 h-6' />
                  </Button>
                </td>
                <td>3</td>
                <td>Nguyễn Tú Linh</td>
                <td>111 Nguyễn Văn Gà, Đông Từ Liêm Hà Nội</td>
                <td>40 Tháng 0 1946, 3:20</td>
              </tr>
              
              <tr className='border-b border-[#c5c5c5]'>
                <td className='pl-3 py-2.5'>
                  <Button className='py-2 px-4 bg-sky-400 rounded-none'>
                    <Eye className='w-6 h-6' />
                  </Button>
                  <Button className='py-2 px-4 bg-yellow-300 rounded-none'>
                    <Pencil className='w-6 h-6' />
                  </Button>
                  <Button className='py-2 px-4 bg-red-400 rounded-none'>
                    <CircleX className='w-6 h-6' />
                  </Button>
                </td>
                <td>4</td>
                <td>Nguyễn Diệp Linh</td>
                <td>111 Nguyễn Văn Gà, Đông Từ Liêm Hà Nội</td>
                <td>40 Tháng 0 1946, 3:20</td>
              </tr>
            </tbody>
          </table>

          <h3 className='text-end mt-10 text-lg font-medium pr-8'>04 Kết quả phù hợp</h3>
        </section>
      </main>

      <footer className='mt-12 bg-[#0c1158]'>
        <div className='container mx-auto lg:px-6 py-1 text-white'>
          <h1 className='text-2xl font-medium mt-1 mb-5'>TRƯỜNG ĐẠI HỌC THỦY LỢI</h1>

          <p>Địa chỉ 175 Tây Sơn, Đống Đa, Hà Nội</p>
          <p>Điện thoại: {"(024)"} 3852201 - Fax {"(024)"} 35633351</p>
          <p>Email: <a href="#" className='text-blue-400 underline'>phonghcth@tlu.edu.vn</a></p>
        </div>
      </footer>
    </>
  )
}
