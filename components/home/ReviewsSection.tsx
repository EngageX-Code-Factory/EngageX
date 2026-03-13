import { Star } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section className="relative py-20 bg-[#0b0515] overflow-hidden">
      {/* Creative Dynamic Background */}
      <div className="absolute inset-0 w-full h-full bg-[#0b0515] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0515]/80 to-[#0b0515]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Student <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Voices</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Review 1 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <div className="text-purple-400 text-3xl mb-4">&ldquo;</div>
            <p className="text-gray-300 mb-6 leading-relaxed">&ldquo;EngageX has completely transformed my university experience. Finding clubs that match my interests in robotics was so easy, and the events are always top-notch!&rdquo;</p>
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=60&q=80" alt="Alex Morgan" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="text-white font-semibold">Alex Morgan</h4>
                <p className="text-gray-400 text-sm">Computer Science, Year 2</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <div className="text-purple-400 text-3xl mb-4">&ldquo;</div>
            <p className="text-gray-300 mb-6 leading-relaxed">&ldquo;I love how organized everything is. From joining the Music Society to tracking upcoming concerts, this platform handles it all seamlessly. Highly recommended!&rdquo;</p>
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80" alt="Sarah Jenkins" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="text-white font-semibold">Sarah Jenkins</h4>
                <p className="text-gray-400 text-sm">Fine Arts, Year 3</p>
                <div className="flex mt-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <Star className="w-4 h-4 text-yellow-400 fill-current opacity-50" />
                </div>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <div className="text-purple-400 text-3xl mb-4">&ldquo;</div>
            <p className="text-gray-300 mb-6 leading-relaxed">&ldquo;As a club president, managing members and events used to be chaos. This system centralized everything and increased our member engagement significantly.&rdquo;</p>
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80" alt="David Chen" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="text-white font-semibold">David Chen</h4>
                <p className="text-gray-400 text-sm">Business Admin, Year 4</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}