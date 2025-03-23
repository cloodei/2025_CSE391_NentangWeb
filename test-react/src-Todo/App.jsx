import { useState } from 'react';
import { Trash, Edit, RotateCcw } from 'lucide-react';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1,  time: '01:00 100/01/6969', text: 'Làm React',   status: 'new' },
    { id: 2,  time: '02:00 100/01/6969', text: 'Tập React',   status: 'completed' },
    { id: 3,  time: '03:00 100/01/6969', text: 'Tuần sau KT', status: 'destroyed' },
    { id: 4,  time: '04:00 100/01/6969', text: 'Gà quá',      status: 'new' },
    { id: 5,  time: '05:00 100/01/6969', text: 'setState',    status: 'completed' },
    { id: 6,  time: '01:00 100/01/6969', text: 'Làm React',   status: 'destroyed' },
    { id: 7,  time: '02:00 100/01/6969', text: 'Tập React',   status: 'new' },
    { id: 8,  time: '03:00 100/01/6969', text: 'Tuần sau KT', status: 'completed' },
    { id: 9,  time: '04:00 100/01/6969', text: 'Gà quá',      status: 'destroyed' },
    { id: 10, time: '05:00 100/01/6969', text: 'setState',    status: 'new' },
    { id: 11, time: '01:00 100/01/6969', text: 'Làm React',   status: 'completed' },
    { id: 12, time: '02:00 100/01/6969', text: 'Tập React',   status: 'destroyed' },
    { id: 13, time: '03:00 100/01/6969', text: 'Tuần sau KT', status: 'new' },
    { id: 14, time: '04:00 100/01/6969', text: 'Gà quá',      status: 'completed' },
    { id: 15, time: '05:00 100/01/6969', text: 'setState',    status: 'destroyed' },
  ]);

  // Dung setTodos, thay doi status
  const complete = () => {
    
  }

  const destroy = () => {

  }

  const renew = () => {

  }

  const news = todos.filter(todo => todo.status === "new");
  const completed = todos.filter(todo => todo.status === "completed");
  const destroyed = todos.filter(todo => todo.status === "destroyed");

  return (
    <div className="min-h-screen bg-gray-200 p-4 pt-8">
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-2 mb-6">
          <p className="text-center bg-blue-500 text-white py-3 px-4 rounded font-medium">
            Mới
          </p>
          <p className="text-center bg-green-500 text-white py-3 px-4 rounded font-medium">
            Đã hoàn thành
          </p>
          <p className="text-center bg-red-500 text-white py-3 px-4 rounded font-medium">
            Đã hủy
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="space-y-2.5">
            {news.map(todo => (
              <div 
                key={todo.id} 
                className="bg-white rounded shadow p-4 flex justify-between items-center"
              >
                <div>
                  <p className="text-sm text-gray-500">{todo.time}</p>
                  <p className="font-medium">{todo.text}</p>
                </div>

                <div className="flex gap-0.5">
                  <button className="p-1 text-green-600 transition hover:bg-green-100 rounded cursor-pointer" onClick={complete}>
                    <Edit size={18} />
                  </button>
                  <button className="p-1 text-red-600 transition hover:bg-red-100 rounded cursor-pointer" onClick={destroy}>
                    <Trash size={18} />
                  </button>
                </div>

              </div>
            ))}
          </div>

          <div className="space-y-2.5">
            {completed.map(todo => (
              <div 
                key={todo.id} 
                className="bg-white rounded shadow p-4 flex justify-between items-center"
              >
                <div>
                  <p className="text-sm text-gray-500">{todo.time}</p>
                  <p className="font-medium">{todo.text}</p>
                </div>

                <button className="p-1 text-red-600 transition hover:bg-red-100 rounded cursor-pointer" onClick={destroy}>
                  <Trash size={18} />
                </button>

              </div>
            ))}
          </div>

          <div className="space-y-2.5">
            {destroyed.map(todo => (
              <div 
                key={todo.id} 
                className="bg-white rounded shadow p-4 flex justify-between items-center"
              >
                <div>
                  <p className="text-sm text-gray-500">{todo.time}</p>
                  <p className="font-medium">{todo.text}</p>
                </div>

                <button className="p-1 text-blue-600 transition hover:bg-blue-100 rounded cursor-pointer" onClick={renew}>
                  <RotateCcw size={18} />
                </button>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
