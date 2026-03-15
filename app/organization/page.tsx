import { LayoutDashboard, Calendar, Users, Clock, TrendingUp, Bell } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: 'Total Events', value: '0', icon: Calendar, color: 'bg-blue-50 text-blue-600' },
  { label: 'Active Members', value: '0', icon: Users, color: 'bg-green-50 text-green-600' },
  { label: 'Pending Requests', value: '0', icon: Clock, color: 'bg-orange-50 text-orange-600' },
  { label: 'Attendance Rate', value: '0%', icon: TrendingUp, color: 'bg-purple-50 text-purple-600' },
];

const quickLinks = [
  { href: '/organization/events/create', label: 'Create New Event', icon: Calendar, desc: 'Schedule and publish an event' },
  { href: '/organization/members', label: 'Review Requests', icon: Users, desc: 'Approve or reject join requests' },
  { href: '/organization/notifications', label: 'Send Notification', icon: Bell, desc: 'Alert members about updates' },
  { href: '/organization/profile', label: 'Update Club Profile', icon: LayoutDashboard, desc: 'Edit your club details' },
];

export default function OrganizationDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">

      {/* Welcome */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome back!</h2>
        <p className="text-gray-500 mt-1 text-sm">Here's what's happening with your club today.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
              <Icon size={22} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</p>
              <p className="text-3xl font-bold text-gray-900 mt-0.5">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-base font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map(({ href, label, icon: Icon, desc }) => (
            <Link
              key={href}
              href={href}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                <Icon size={20} className="text-blue-600" />
              </div>
              <p className="text-sm font-semibold text-gray-800">{label}</p>
              <p className="text-xs text-gray-500 mt-1">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-800">Recent Event Registrations</h3>
          <Link href="/organization/events" className="text-xs text-blue-600 hover:underline font-medium">View all</Link>
        </div>
        <div className="p-8 text-center">
          <Calendar size={36} className="mx-auto text-gray-300 mb-3" />
          <p className="text-sm text-gray-500">No activity yet.</p>
          <p className="text-xs text-gray-400 mt-1">Once students register for your events, they'll appear here.</p>
        </div>
      </div>

    </div>
  );
}