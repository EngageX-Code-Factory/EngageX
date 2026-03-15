"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Plus, Eye, Pencil, Trash2, ToggleLeft, ToggleRight, Search } from "lucide-react";

type EventStatus = "active" | "cancelled";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  capacity: number;
  is_published: boolean;
  status: EventStatus;
}

// Dummy data — will be replaced with Supabase data later
const DUMMY_EVENTS: Event[] = [
  { id: "1", title: "Tech Talk 2025", date: "2025-04-10", time: "14:00", venue: "Hall A", category: "Technology", capacity: 100, is_published: true, status: "active" },
  { id: "2", title: "Leadership Workshop", date: "2025-04-18", time: "10:00", venue: "Room 201", category: "Academic", capacity: 40, is_published: false, status: "active" },
  { id: "3", title: "Annual Sports Meet", date: "2025-05-02", time: "09:00", venue: "Main Ground", category: "Sports", capacity: 200, is_published: true, status: "cancelled" },
];

const STATUS_STYLES: Record<string, string> = {
  published: "bg-green-50 text-green-700",
  draft: "bg-yellow-50 text-yellow-700",
  cancelled: "bg-red-50 text-red-700",
};

function getDisplayStatus(event: Event) {
  if (event.status === "cancelled") return "cancelled";
  return event.is_published ? "published" : "draft";
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>(DUMMY_EVENTS);
  const [search, setSearch] = useState("");

  const filtered = events.filter(e =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  function togglePublish(id: string) {
    setEvents(prev =>
      prev.map(e => e.id === id ? { ...e, is_published: !e.is_published } : e)
    );
  }

  function cancelEvent(id: string) {
    if (confirm("Are you sure you want to cancel this event?")) {
      setEvents(prev =>
        prev.map(e => e.id === id ? { ...e, status: "cancelled" } : e)
      );
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Manage Events</h2>
          <p className="text-gray-500 text-sm mt-1">Create, edit and manage your club events.</p>
        </div>
        <Link
          href="/organization/events/create"
          className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          <Plus size={16} />
          Create Event
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search events..."
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Event</th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Date & Time</th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Venue</th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Capacity</th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
              <th className="text-right px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-16 text-center">
                  <Calendar size={36} className="mx-auto text-gray-300 mb-3" />
                  <p className="text-gray-500 text-sm">No events found.</p>
                  <Link href="/organization/events/create" className="text-blue-600 text-xs hover:underline mt-1 inline-block">Create your first event →</Link>
                </td>
              </tr>
            ) : filtered.map(event => {
              const displayStatus = getDisplayStatus(event);
              return (
                <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{event.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{event.category}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    <p>{new Date(event.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</p>
                    <p className="text-xs text-gray-400">{event.time}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{event.venue}</td>
                  <td className="px-6 py-4 text-gray-600">{event.capacity}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${STATUS_STYLES[displayStatus]}`}>
                      {displayStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      {/* Publish toggle */}
                      {event.status !== "cancelled" && (
                        <button
                          onClick={() => togglePublish(event.id)}
                          title={event.is_published ? "Unpublish" : "Publish"}
                          className="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          {event.is_published ? <ToggleRight size={18} className="text-blue-600" /> : <ToggleLeft size={18} />}
                        </button>
                      )}
                      {/* View registrations */}
                      <Link
                        href={`/organization/events/${event.id}`}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-green-600 hover:bg-green-50 transition-colors"
                        title="View registrations"
                      >
                        <Eye size={16} />
                      </Link>
                      {/* Edit */}
                      <Link
                        href={`/organization/events/${event.id}?edit=true`}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        title="Edit event"
                      >
                        <Pencil size={16} />
                      </Link>
                      {/* Cancel */}
                      {event.status !== "cancelled" && (
                        <button
                          onClick={() => cancelEvent(event.id)}
                          className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Cancel event"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
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