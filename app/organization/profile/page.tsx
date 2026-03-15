"use client";

import { useState } from "react";
import { Building2, Mail, Tag, FileText, Save, Camera } from "lucide-react";

const CATEGORIES = [
  "Academic", "Arts & Culture", "Sports", "Technology",
  "Business", "Community Service", "Religious", "Other"
];

export default function ClubProfilePage() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    contact_email: "",
  });
  const [saved, setSaved] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    // Supabase save will go here later
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">

      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Club Profile</h2>
        <p className="text-gray-500 text-sm mt-1">Manage your club's public information.</p>
      </div>

      {/* Logo Upload Card */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-blue-50 border-2 border-dashed border-blue-200 flex items-center justify-center shrink-0">
          <Building2 size={32} className="text-blue-300" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">Club Logo</p>
          <p className="text-xs text-gray-500 mt-0.5">PNG or JPG, max 2MB</p>
          <button className="mt-3 flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Camera size={14} />
            Upload Logo
          </button>
        </div>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleSave} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-5">
        <h3 className="text-base font-semibold text-gray-800 border-b border-gray-100 pb-4">Club Details</h3>

        {/* Club Name */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Building2 size={15} className="text-gray-400" />
            Club Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. IEEE Student Branch"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
          />
        </div>

        {/* Category */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Tag size={15} className="text-gray-400" />
            Category
          </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
            required
          >
            <option value="">Select a category</option>
            {CATEGORIES.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Contact Email */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Mail size={15} className="text-gray-400" />
            Contact Email
          </label>
          <input
            name="contact_email"
            type="email"
            value={form.contact_email}
            onChange={handleChange}
            placeholder="club@university.edu"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Description */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <FileText size={15} className="text-gray-400" />
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Tell students what your club is about..."
            rows={4}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
          />
        </div>

        {/* Save Button */}
        <div className="flex items-center justify-between pt-2">
          {saved && (
            <span className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1.5 rounded-lg">
              ✓ Profile saved successfully
            </span>
          )}
          <button
            type="submit"
            className="ml-auto flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            <Save size={16} />
            Save Profile
          </button>
        </div>
      </form>

    </div>
  );
}