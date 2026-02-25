'use client';

import { ReactNode, useState } from 'react';
import { Menu } from 'lucide-react';

import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminShell({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-[100] flex bg-[#f8fafc]">
      <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center gap-3 px-6 py-3 bg-white border-b border-gray-200 md:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="text-gray-600 hover:text-gray-900"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-semibold text-gray-900">HDP Admin</span>
        </header>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
