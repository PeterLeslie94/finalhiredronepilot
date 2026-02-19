'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Contact, LogOut, X } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/pilot-applications', label: 'Pilot Applications', icon: Users },
  { href: '/admin/pilots', label: 'Pilot Directory', icon: Contact },
];

type AdminSidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function AdminSidebar({ open, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/admin' ? pathname === '/admin' : pathname.startsWith(href);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[109] md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`admin-sidebar flex flex-col bg-[#083844] text-white h-full ${
          open ? 'open' : ''
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <span className="text-lg font-bold tracking-wide">HDP Admin</span>
          <button
            type="button"
            onClick={onClose}
            className="md:hidden text-white/60 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 py-4">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-5 py-3 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-white/10 border-l-4 border-[#f97316] text-white'
                    : 'border-l-4 border-transparent text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link
            href="/logout"
            className="flex items-center gap-3 px-3 py-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Link>
        </div>
      </aside>
    </>
  );
}
