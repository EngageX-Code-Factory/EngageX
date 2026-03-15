'use client';

import { Bell, ChevronDown, Zap } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { label: 'Dashboard', href: '/student' },
  { label: 'My Clubs', href: '/student/clubs' },
  { label: 'All Clubs', href: '/student/all-clubs' },
  { label: 'Events', href: '/student/events' },
  { label: 'Event Planner', href: '/student/event-planner' },
];

export default function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-[#0b0515]/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/student" className="flex items-center gap-2 mr-10">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">EngageX</span>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-1 self-stretch">
          {navLinks.map((link) => {
            // Exact match for dashboard, prefix match for sub-routes
            const isActive =
              link.href === '/student'
                ? pathname === '/student'
                : pathname.startsWith(link.href);
            return (
              <li key={link.label} className="relative flex items-center h-16">
                <Link
                  href={link.href}
                  className={`px-4 py-1.5 text-sm font-medium transition-colors rounded-md ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-500 rounded-full" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right Side */}
        <div className="ml-auto flex items-center gap-3">
          {/* Notification Bell */}
          <button className="relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 rounded-full text-[9px] font-bold text-white flex items-center justify-center">
              3
            </span>
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen((prev) => !prev)}
              className="flex items-center gap-2.5 pl-1 pr-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                A
              </div>
              <span className="text-sm font-medium text-gray-200">Alex Morgan</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-[#1a1d25] border border-white/10 rounded-xl shadow-xl py-1">
                {['Profile', 'Sign out'].map((item) => (
                  <button
                    key={item}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
