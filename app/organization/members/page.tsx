"use client";

import { useState } from "react";
import { Users, Check, X, Trash2, Search } from "lucide-react";

type MemberStatus = "approved" | "pending" | "rejected";

interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
  status: MemberStatus;
  joined_at: string;
}

const DUMMY_MEMBERS: Member[] = [
  { id: "1", name: "Ashan Perera", email: "ashan@nibm.lk", role: "member", status: "approved", joined_at: "2025-03-01" },
  { id: "2", name: "Nimasha Silva", email: "nimasha@nibm.lk", role: "member", status: "approved", joined_at: "2025-03-05" },
  { id: "3", name: "Ravindu Fernando", email: "ravindu@nibm.lk", role: "member", status: "pending", joined_at: "2025-04-10" },
  { id: "4", name: "Shalomi Jayawardena", email: "shalomi@nibm.lk", role: "member", status: "pending", joined_at: "2025-04-11" },
  { id: "5", name: "Dilshan Kumara", email: "dilshan@nibm.lk", role: "member", status: "rejected", joined_at: "2025-03-20" },
];

const STATUS_STYLES: Record<MemberStatus, string> = {
  approved: "bg-green-50 text-green-700",
  pending: "bg-yellow-50 text-yellow-700",
  rejected: "bg-red-50 text-red-700",
};

type Tab = "all" | "pending";

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>(DUMMY_MEMBERS);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<Tab>("all");

  const pendingCount = members.filter(m => m.status === "pending").length;

  const filtered = members
    .filter(m => tab === "pending" ? m.status === "pending" : m.status !== "rejected")
    .filter(m =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase())
    );

  function approve(id: string) {
    setMembers(prev => prev.map(m => m.id === id ? { ...m, status: "approved" } : m));
  }

  function reject(id: string) {
    setMembers(prev => prev.map(m => m.id === id ? { ...m, status: "rejected" } : m));
  }

  function remove(id: string) {
    if (confirm("Remove this member from the club?")) {
      setMembers(prev => prev.filter(m => m.id !== id));
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Members & Requests</h2>
          <p className="text-gray-500 text-sm mt-1">Manage club members and approve join requests.</p>
        </div>
        <div className="bg-white border border-gray-100 shadow-sm rounded-xl px-4 py-3 flex items-center gap-3">
          <Users size={18} className="text-blue-600" />
          <div>
            <p className="text-xs text-gray-500">Active members</p>
            <p className="text-lg font-bold text-gray-900 leading-none mt-0.5">
              {members.filter(m => m.status === "approved").length}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs + Search */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setTab("all")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              tab === "all" ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            All Members
          </button>
          <button
            onClick={() => setTab("pending")}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              tab === "pending" ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Pending Requests
            {pendingCount > 0 && (
              <span className="bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full leading-none">
                {pendingCount}
              </span>
            )}
          </button>
        </div>

        <div className="relative w-64">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search members..."
            className="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Member</th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Joined</th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
              <th className="text-right px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-16 text-center">
                  <Users size={36} className="mx-auto text-gray-300 mb-3" />
                  <p className="text-gray-500 text-sm">
                    {tab === "pending" ? "No pending requests." : "No members found."}
                  </p>
                </td>
              </tr>
            ) : filtered.map(member => (
              <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-sm font-semibold shrink-0">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{member.name}</p>
                      <p className="text-xs text-gray-400">{member.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500 text-sm">
                  {new Date(member.joined_at).toLocaleDateString("en-GB", {
                    day: "numeric", month: "short", year: "numeric"
                  })}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${STATUS_STYLES[member.status]}`}>
                    {member.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    {member.status === "pending" && (
                      <>
                        <button
                          onClick={() => approve(member.id)}
                          title="Approve"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-green-700 bg-green-50 hover:bg-green-100 transition-colors"
                        >
                          <Check size={13} /> Approve
                        </button>
                        <button
                          onClick={() => reject(member.id)}
                          title="Reject"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
                        >
                          <X size={13} /> Reject
                        </button>
                      </>
                    )}
                    {member.status === "approved" && (
                      <button
                        onClick={() => remove(member.id)}
                        title="Remove member"
                        className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <Trash2 size={15} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}