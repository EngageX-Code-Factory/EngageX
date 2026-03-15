"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Users, Calendar, Clock, MapPin, Tag, FileText, Pencil } from "lucide-react";

const CATEGORIES = ["Academic", "Arts & Culture", "Sports", "Technology", "Business", "Community Service", "Religious", "Other"];

const DUMMY_EVENT = {
  id: "1", title: "Tech Talk 2025", description: "An exciting talk on modern web technologies.", category: "Technology",
  date: "2025-04-10", time: "14:00", venue: "Hall A", capacity: "100", registration_deadline: "2025-04-08T12:00", is_published: true,
};

const DUMMY_REGISTRATIONS = [
  { id: "1", name: "Ashan Perera", email: "ashan@nibm.lk", registered_at: "2025-04-01" },
  { id: "2", name: "Nimasha Silva", email: "nimasha@nibm.lk", registered_at: "2025-04-02" },
  { id: "3", name: "Ravindu Fernando", email: "ravindu@nibm.lk", registered_at: "2025-04-03" },
  { id: "4", name: "Kavya Mendis", email: "kavya@nibm.lk", registered_at: "2025-04-04" },
];

export default function EventDetailPage() {
  const [tab, setTab] = useState<"details" | "registrations">("details");
  const [form, setForm] = useState(DUMMY_EVENT);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 700));
    setLoading(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">

      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/organization/events" className="p-2 rounded-lg hover:bg-gray-100 transition-colors" style={{ color: '#64748b' }}>
          <ArrowLeft size={20} />
        </Link>
        <div className="flex-1">
          <h2 className="text-2xl font-bold" style={{ color: '#0f172a' }}>{form.title}</h2>
          <p className="text-sm mt-0.5" style={{ color: '#64748b' }}>Event details and registrations</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${form.is_published ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
          {form.is_published ? 'Published' : 'Draft'}
        </span>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl w-fit">
        <button
          onClick={() => setTab("details")}
          className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all ${tab === "details" ? "bg-white shadow-sm text-gray-800" : "text-gray-500 hover:text-gray-700"}`}
        >
          <Pencil size={14} /> Edit Details
        </button>
        <button
          onClick={() => setTab("registrations")}
          className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all ${tab === "registrations" ? "bg-white shadow-sm text-gray-800" : "text-gray-500 hover:text-gray-700"}`}
        >
          <Users size={14} /> Registrations
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-1.5 py-0.5 rounded-full">
            {DUMMY_REGISTRATIONS.length}
          </span>
        </button>
      </div>

      {/* Edit Details Tab */}
      {tab === "details" && (
        <form onSubmit={handleSave} className="space-y-5">
          {saved && (
            <div className="bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-3 rounded-xl">
              ✓ Event updated successfully
            </div>
          )}

          {/* Basic Info */}
          <div className="bg-white rounded-2xl border p-6 space-y-5" style={{ borderColor: '#e2e8f0' }}>
            <h3 className="text-sm font-semibold pb-3 border-b" style={{ color: '#0f172a', borderColor: '#f1f5f9' }}>Basic Information</h3>

            <div className="space-y-1.5">
              <label className="text-sm font-medium flex items-center gap-2" style={{ color: '#374151' }}>
                <FileText size={14} style={{ color: '#9ca3af' }} /> Event Title
              </label>
              <input name="title" value={form.title} onChange={handleChange} required
                className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                style={{ borderColor: '#e2e8f0', color: '#0f172a' }} />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium flex items-center gap-2" style={{ color: '#374151' }}>
                <Tag size={14} style={{ color: '#9ca3af' }} /> Category
              </label>
              <select name="category" value={form.category} onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                style={{ borderColor: '#e2e8f0', color: '#0f172a' }}>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium flex items-center gap-2" style={{ color: '#374151' }}>
                <FileText size={14} style={{ color: '#9ca3af' }} /> Description
              </label>
              <textarea name="description" value={form.description} onChange={handleChange} rows={3}
                className="w-full px-4 py-2.5 rounded-xl border text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                style={{ borderColor: '#e2e8f0', color: '#0f172a' }} />
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-white rounded-2xl border p-6 space-y-5" style={{ borderColor: '#e2e8f0' }}>
            <h3 className="text-sm font-semibold pb-3 border-b" style={{ color: '#0f172a', borderColor: '#f1f5f9' }}>Schedule & Location</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium flex items-center gap-2" style={{ color: '#374151' }}>
                  <Calendar size={14} style={{ color: '#9ca3af' }} /> Date
                </label>
                <input name="date" type="date" value={form.date} onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  style={{ borderColor: '#e2e8f0', color: '#0f172a' }} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium flex items-center gap-2" style={{ color: '#374151' }}>
                  <Clock size={14} style={{ color: '#9ca3af' }} /> Time
                </label>
                <input name="time" type="time" value={form.time} onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  style={{ borderColor: '#e2e8f0', color: '#0f172a' }} />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium flex items-center gap-2" style={{ color: '#374151' }}>
                <MapPin size={14} style={{ color: '#9ca3af' }} /> Venue
              </label>
              <input name="venue" value={form.venue} onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                style={{ borderColor: '#e2e8f0', color: '#0f172a' }} />
            </div>
          </div>

          {/* Registration Settings */}
          <div className="bg-white rounded-2xl border p-6 space-y-5" style={{ borderColor: '#e2e8f0' }}>
            <h3 className="text-sm font-semibold pb-3 border-b" style={{ color: '#0f172a', borderColor: '#f1f5f9' }}>Registration Settings</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium flex items-center gap-2" style={{ color: '#374151' }}>
                  <Users size={14} style={{ color: '#9ca3af' }} /> Capacity
                </label>
                <input name="capacity" type="number" value={form.capacity} onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  style={{ borderColor: '#e2e8f0', color: '#0f172a' }} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium flex items-center gap-2" style={{ color: '#374151' }}>
                  <Clock size={14} style={{ color: '#9ca3af' }} /> Registration Deadline
                </label>
                <input name="registration_deadline" type="datetime-local" value={form.registration_deadline} onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  style={{ borderColor: '#e2e8f0', color: '#0f172a' }} />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl border" style={{ borderColor: '#e2e8f0', background: '#f8fafc' }}>
              <div>
                <p className="text-sm font-medium" style={{ color: '#0f172a' }}>Published</p>
                <p className="text-xs mt-0.5" style={{ color: '#94a3b8' }}>Students can see and register for this event</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" name="is_published" checked={form.is_published}
                  onChange={handleChange} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-checked:bg-blue-600 rounded-full transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5" />
              </label>
            </div>
          </div>

          <div className="flex justify-end pb-6">
            <button type="submit" disabled={loading}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' }}>
              <Save size={15} />
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      )}

      {/* Registrations Tab */}
      {tab === "registrations" && (
        <div className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: '#e2e8f0' }}>
          <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: '#f1f5f9' }}>
            <h3 className="text-sm font-semibold" style={{ color: '#0f172a' }}>Registered Students</h3>
            <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: '#eff6ff', color: '#1d4ed8' }}>
              {DUMMY_REGISTRATIONS.length} registered
            </span>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b" style={{ borderColor: '#f1f5f9', background: '#f8fafc' }}>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide" style={{ color: '#64748b' }}>Student</th>
                <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide" style={{ color: '#64748b' }}>Registered On</th>
              </tr>
            </thead>
            <tbody>
              {DUMMY_REGISTRATIONS.map(r => (
                <tr key={r.id} className="border-b hover:bg-gray-50 transition-colors" style={{ borderColor: '#f8fafc' }}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-sm font-bold shrink-0">
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium" style={{ color: '#0f172a' }}>{r.name}</p>
                        <p className="text-xs" style={{ color: '#94a3b8' }}>{r.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm" style={{ color: '#64748b' }}>
                    {new Date(r.registered_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}