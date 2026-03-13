import { Crown } from 'lucide-react';

export default function TopOrganizations() {
  return (
    <section className="relative py-20 bg-[#0b0515] overflow-hidden">
      {/* Creative Dynamic Background */}
      <div className="absolute inset-0 w-full h-full bg-[#0b0515] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0515]/80 to-[#0b0515]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Top <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Organizations</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Rank 2 */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all transform hover:scale-105">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-slate-900">2</div>
            <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=300&q=80" alt="Club 2" className="w-full h-48 object-cover rounded-xl mb-4" />
            <div className="text-purple-400 text-sm font-medium mb-2">Music & Arts</div>
            <h3 className="text-xl font-bold text-white mb-4">Harmony Society</h3>
            <div className="flex justify-between mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-white">850+</div>
                <div className="text-xs text-gray-400">Members</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">4.8</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all">View Club</button>
          </div>

          {/* Rank 1 */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-purple-500/50 rounded-2xl p-6 hover:bg-white/10 transition-all transform hover:scale-105 scale-105">
            <Crown className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400" />
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-slate-900">1</div>
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=300&q=80" alt="Club 1" className="w-full h-48 object-cover rounded-xl mb-4" />
            <div className="text-purple-400 text-sm font-medium mb-2">Technology</div>
            <h3 className="text-xl font-bold text-white mb-4">Innovators Hub</h3>
            <div className="flex justify-between mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-white">1.2k+</div>
                <div className="text-xs text-gray-400">Members</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">4.8</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all">Join Now</button>
          </div>

          {/* Rank 3 */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all transform hover:scale-105">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-slate-900">3</div>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80" alt="Club 3" className="w-full h-48 object-cover rounded-xl mb-4" />
            <div className="text-purple-400 text-sm font-medium mb-2">Business</div>
            <h3 className="text-xl font-bold text-white mb-4">Future Leaders</h3>
            <div className="flex justify-between mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-white">620+</div>
                <div className="text-xs text-gray-400">Members</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">4.2</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all">View Club</button>
          </div>
        </div>
      </div>
    </section>
  );
}