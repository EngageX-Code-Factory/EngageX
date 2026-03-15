import Link from 'next/link';
import { LayoutDashboard, Users, Calendar, ClipboardList, Bell, Building2, LogOut } from 'lucide-react';

const navLinks = [
  { href: '/organization', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/organization/profile', label: 'Club Profile', icon: Building2 },
  { href: '/organization/events', label: 'Manage Events', icon: Calendar },
  { href: '/organization/members', label: 'Members & Requests', icon: Users },
  { href: '/organization/attendance', label: 'Attendance', icon: ClipboardList },
  { href: '/organization/notifications', label: 'Notifications', icon: Bell },
];

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shrink-0">
          <div className="h-16 flex items-center px-6 border-b border-gray-200">
            <span className="text-xl font-bold text-blue-600">EngageX</span>
            <span className="ml-2 text-xs font-medium bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">Org</span>
          </div>

          <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                <Icon size={18} />
                {label}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-gray-200">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </aside>

        {/* Main Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 justify-between shrink-0">
            <h1 className="text-base font-semibold text-gray-800">Club Organization Panel</h1>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-sm font-semibold">
                C
              </div>
              <span className="text-sm text-gray-600">Club Admin</span>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}