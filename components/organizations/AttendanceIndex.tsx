import Link from "next/link";
import { ClipboardList, Eye, QrCode } from "lucide-react";
const DUMMY_EVENTS = [
  { id: "1", title: "Tech Talk 2025", date: "2025-04-10", venue: "Hall A", registered: 6, attended: 3 },
  { id: "2", title: "Leadership Workshop", date: "2025-04-18", venue: "Room 201", registered: 12, attended: 10 },
  { id: "3", title: "Annual Sports Meet", date: "2025-05-02", venue: "Main Ground", registered: 45, attended: 38 },
];

export default function AttendanceIndexPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">

<div className="flex items-center justify-between">
  <div>
    <h2 className="text-2xl font-bold" style={{ color: '#0f172a' }}>Attendance</h2>
    <p className="text-sm mt-1" style={{ color: '#64748b' }}>View attendance records for each event.</p>
  </div>
  <Link
    href="/organization/attendance/scan"
    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
    style={{ background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' }}
  >
    <QrCode size={16} />
    Scan QR
  </Link>
</div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Event</th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Venue</th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Registered</th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Attended</th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Rate</th>
              <th className="text-right px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">View</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {DUMMY_EVENTS.map(e => {
              const rate = Math.round((e.attended / e.registered) * 100);
              return (
                <tr key={e.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{e.title}</td>
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(e.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{e.venue}</td>
                  <td className="px-6 py-4 text-gray-700 font-medium">{e.registered}</td>
                  <td className="px-6 py-4 text-green-600 font-medium">{e.attended}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${rate}%` }} />
                      </div>
                      <span className="text-xs font-medium text-gray-600">{rate}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/organization/attendance/${e.id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <Eye size={13} /> View
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}