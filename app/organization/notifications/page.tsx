"use client";

import { useState } from "react";
import { Bell, Send, Clock, Users, Calendar, AlertTriangle } from "lucide-react";

type NotifType = "info" | "urgent";
type NotifTarget = "members" | "registered" | "all";

interface Notification {
  id: string;
  message: string;
  type: NotifType;
  target: NotifTarget;
  event_title?: string;
  sent_at: string;
}

const DUMMY_SENT: Notification[] = [
  { id: "1", message: "Tech Talk 2025 venue has been changed to Hall B. Please note the update.", type: "urgent", target: "registered", event_title: "Tech Talk 2025", sent_at: "2025-04-08T10:30:00" },
  { id: "2", message: "Welcome to the club! Stay tuned for upcoming events.", type: "info", target: "members", sent_at: "2025-03-01T09:00:00" },
];

const TYPE_STYLES: Record<NotifType, string> = {
  info: "bg-blue-50 text-blue-700",
  urgent: "bg-red-50 text-red-700",
};

const TARGET_LABELS: Record<NotifTarget, string> = {
  members: "All Members",
  registered: "Event Registrants",
  all: "Everyone",
};

const DUMMY_EVENTS = [
  { id: "1", title: "Tech Talk 2025" },
  { id: "2", title: "Leadership Workshop" },
  { id: "3", title: "Annual Sports Meet" },
];

export default function NotificationsPage() {
  const [sent, setSent] = useState<Notification[]>(DUMMY_SENT);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    message: "",
    type: "info" as NotifType,
    target: "members" as NotifTarget,
    event_id: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!form.message.trim()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 700));

    const event = DUMMY_EVENTS.find(ev => ev.id === form.event_id);
    const newNotif: Notification = {
      id: Date.now().toString(),
      message: form.message,
      type: form.type,
      target: form.target,
      event_title: event?.title,
      sent_at: new Date().toISOString(),
    };
    setSent(prev => [newNotif, ...prev]);
    setForm({ message: "", type: "info", target: "members", event_id: "" });
    setLoading(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
        <p className="text-gray-500 text-sm mt-1">Send alerts and updates to your members or event registrants.</p>
      </div>

      {/* Compose Card */}
      <form onSubmit={handleSend} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-5">
        <h3 className="text-base font-semibold text-gray-800 border-b border-gray-100 pb-4 flex items-center gap-2">
          <Send size={16} className="text-blue-600" />
          Send Notification
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {/* Type */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <AlertTriangle size={14} className="text-gray-400" /> Type
            </label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="info">Info — General update</option>
              <option value="urgent">Urgent — Emergency alert</option>
            </select>
          </div>

          {/* Target */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Users size={14} className="text-gray-400" /> Send To
            </label>
            <select
              name="target"
              value={form.target}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="members">All Club Members</option>
              <option value="registered">Event Registrants</option>
              <option value="all">Everyone</option>
            </select>
          </div>
        </div>

        {/* Link to event (optional) */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Calendar size={14} className="text-gray-400" /> Link to Event
            <span className="text-xs text-gray-400 font-normal">(optional)</span>
          </label>
          <select
            name="event_id"
            value={form.event_id}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">No specific event</option>
            {DUMMY_EVENTS.map(e => (
              <option key={e.id} value={e.id}>{e.title}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Bell size={14} className="text-gray-400" /> Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your notification message here..."
            rows={4}
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
          />
          <p className="text-xs text-gray-400">{form.message.length} characters</p>
        </div>

        {/* Preview + Send */}
        <div className="flex items-center justify-between pt-1">
          {success && (
            <span className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1.5 rounded-lg">
              ✓ Notification sent successfully
            </span>
          )}
          {!success && (
            <div className="text-xs text-gray-500">
              Sending to: <span className="font-medium text-gray-700">{TARGET_LABELS[form.target]}</span>
              {form.type === "urgent" && (
                <span className="ml-2 text-red-600 font-medium">· Marked as urgent</span>
              )}
            </div>
          )}
          <button
            type="submit"
            disabled={loading || !form.message.trim()}
            className="ml-auto flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            <Send size={15} />
            {loading ? "Sending..." : "Send Notification"}
          </button>
        </div>
      </form>

      {/* Sent History */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-800">Sent Notifications</h3>
          <span className="text-xs text-gray-400">{sent.length} total</span>
        </div>

        {sent.length === 0 ? (
          <div className="p-12 text-center">
            <Bell size={36} className="mx-auto text-gray-300 mb-3" />
            <p className="text-sm text-gray-500">No notifications sent yet.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {sent.map(n => (
              <div key={n.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`mt-0.5 p-1.5 rounded-lg shrink-0 ${n.type === "urgent" ? "bg-red-50" : "bg-blue-50"}`}>
                      {n.type === "urgent"
                        ? <AlertTriangle size={14} className="text-red-600" />
                        : <Bell size={14} className="text-blue-600" />
                      }
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-800">{n.message}</p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${TYPE_STYLES[n.type]}`}>
                          {n.type}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Users size={11} /> {TARGET_LABELS[n.target]}
                        </span>
                        {n.event_title && (
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <Calendar size={11} /> {n.event_title}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 shrink-0 flex items-center gap-1">
                    <Clock size={11} />
                    {new Date(n.sent_at).toLocaleDateString("en-GB", {
                      day: "numeric", month: "short", hour: "2-digit", minute: "2-digit"
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}