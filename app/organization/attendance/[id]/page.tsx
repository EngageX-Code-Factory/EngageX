"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Users, CheckCircle, XCircle, Download } from "lucide-react";

interface AttendeeRecord {
  id: string;
  name: string;
  email: string;
  registered_at: string;
  attended: boolean;
}

const DUMMY_ATTENDEES: AttendeeRecord[] = [
  { id: "1", name: "Ashan Perera", email: "ashan@nibm.lk", registered_at: "2025-04-01", attended: true },
  { id: "2", name: "Nimasha Silva", email: "nimasha@nibm.lk", registered_at: "2025-04-02", attended: true },
  { id: "3", name: "Ravindu Fernando", email: "ravindu@nibm.lk", registered_at: "2025-04-03", attended: false },
  { id: "4", name: "Shalomi Jayawardena", email: "shalomi@nibm.lk", registered_at: "2025-04-03", attended: false },
  { id: "5", name: "Dilshan Kumara", email: "dilshan@nibm.lk", registered_at: "2025-04-04", attended: true },
  { id: "6", name: "Kavya Mendis", email: "kavya@nibm.lk", registered_at: "2025-04-04", attended: false },
];

export default function AttendancePage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "attended" | "absent">("all");

  const attended = DUMMY_ATTENDEES.filter(a => a.attended).length;
  const total = DUMMY_ATTENDEES.length;
  const rate = Math.round((attended / total) * 100);

  const filtered = DUMMY_ATTENDEES
    .filter(a => filter === "all" ? true : filter === "attended" ? a.attended : !a.attended)
    .filter(a =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.email.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/organization/attendance"
          className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Tech Talk 2025</h2>
          <p className="text-gray-500 text-sm mt-0.5">Attendance report · 10 Apr 2025, 14:00 · Hall A</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Total Registered</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{total}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Attended</p>
          <p className="text-3xl font-bold text-green-600 mt-1">{attended}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Attendance Rate</p>
          <div className="flex items-end gap-2 mt-1">
            <p className="text-3xl font-bold text-blue-600">{rate}%</p>
          </div>
          {/* Progress bar */}
          <div className="mt-3 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all"
              style={{ width: `${rate}%` }}
            />
          </div>
        </div>
      </div>

      {/* Filters + Search + Export */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
          {(["all", "attended", "absent"] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium capitalize transition-colors ${
                filter === f ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search..."
              className="pl-8 pr-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white w-52"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 transition-colors">
            <Download size={15} />
            Export CSV
          </button>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Student</th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Registered</th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Attendance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-6 py-16 text-center">
                  <Users size={36} className="mx-auto text-gray-300 mb-3" />
                  <p className="text-gray-500 text-sm">No records found.</p>
                </td>
              </tr>
            ) : filtered.map(a => (
              <tr key={a.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-sm font-semibold shrink-0">
                      {a.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{a.name}</p>
                      <p className="text-xs text-gray-400">{a.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {new Date(a.registered_at).toLocaleDateString("en-GB", {
                    day: "numeric", month: "short", year: "numeric"
                  })}
                </td>
                <td className="px-6 py-4">
                  {a.attended ? (
                    <span className="flex items-center gap-1.5 text-green-700 font-medium text-xs bg-green-50 px-2.5 py-1 rounded-full w-fit">
                      <CheckCircle size={13} /> Attended
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-red-600 font-medium text-xs bg-red-50 px-2.5 py-1 rounded-full w-fit">
                      <XCircle size={13} /> Absent
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}