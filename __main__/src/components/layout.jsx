import React from 'react';
import Header from './header';
import Footer from './footer';
import Toast from './toast';
import { Outlet } from 'react-router';
import { CheckCircleIcon } from 'lucide-react';

export default function Layout({ count, toast, notif }) {
  return (
    <div className="min-h-screen bg-[url('bg.svg')] text-gray-100">
      <Header count={count} />
      
      <main className="mt-[82px]">
        <Outlet />
      </main>

      {notif && (
        <Toast className={`${notif ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          <CheckCircleIcon className="inline-block mr-2 text-emerald-400" />
          {toast}
        </Toast>
      )}

      <Footer />
    </div>
  );
}