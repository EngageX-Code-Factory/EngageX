import Link from 'next/link';
import { ArrowDown, MapPin } from 'lucide-react';

export default function EventsSection() {
  return (
    <section className="relative py-20 bg-[#0b0515] overflow-hidden">
      {/* Creative Dynamic Background */}
      <div className="absolute inset-0 w-full h-full bg-[#0b0515] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0515]/80 to-[#0b0515]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Upcoming <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Events</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Event 1 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all transform hover:scale-105">
            <div className="relative">
              <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Tech</div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-center">
                <div className="text-lg font-bold">25</div>
                <div className="text-xs">FEB</div>
              </div>
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80" alt="AI Symposium" className="w-full h-48 object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">AI Symposium 2026</h3>
              <p className="text-gray-400 mb-4 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Main Auditorium
              </p>
              <Link href="#" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center">
                View Details
                <ArrowDown className="w-4 h-4 ml-2 rotate-[-90deg]" />
              </Link>
            </div>
          </div>

          {/* Event 2 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all transform hover:scale-105">
            <div className="relative">
              <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Music</div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-center">
                <div className="text-lg font-bold">02</div>
                <div className="text-xs">MAR</div>
              </div>
              <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=600&q=80" alt="Spring Music Fest" className="w-full h-48 object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Spring Music Fest</h3>
              <p className="text-gray-400 mb-4 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Open Grounds
              </p>
              <Link href="#" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center">
                View Details
                <ArrowDown className="w-4 h-4 ml-2 rotate-[-90deg]" />
              </Link>
            </div>
          </div>

          {/* Event 3 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all transform hover:scale-105">
            <div className="relative">
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Career</div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-center">
                <div className="text-lg font-bold">10</div>
                <div className="text-xs">MAR</div>
              </div>
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" alt="Startup Bootcamp" className="w-full h-48 object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Startup Bootcamp</h3>
              <p className="text-gray-400 mb-4 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Innovation Lab
              </p>
              <Link href="#" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center">
                View Details
                <ArrowDown className="w-4 h-4 ml-2 rotate-[-90deg]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}