import React from "react";
import { Eye, Target, Users, Zap, Shield, Sparkles } from "lucide-react";

export default function AboutUs() {
  const features = [
    {
      icon: Users,
      title: "Community First",
      description: "We build platforms that put student connections at the forefront of the university experience.",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20"
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Discover clubs, register for events, and manage activities all in one unified ecosystem.",
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      border: "border-yellow-400/20"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with modern architecture ensuring your data is protected and always accessible.",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-400/20"
    },
    {
      icon: Sparkles,
      title: "Continuous Innovation",
      description: "We constantly evolve our features based on direct feedback from student leaders.",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20"
    }
  ];

  return (
    <div className="min-h-screen text-white pb-20 pt-10 px-4 md:px-8 lg:px-16 overflow-hidden">
      
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto mb-24 lg:mb-32">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
              <span>Redefining Campus Life</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Connecting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Creators of Tomorrow
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
              EngageX is the ultimate platform designed to bridge the gap between students, clubs, and unforgettable campus experiences.
            </p>
          </div>

          <div className="relative z-10 hidden lg:block">
            {/* Creative Image Composition */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main Image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-20 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                  alt="Students collaborating" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-transparent to-transparent opacity-80"></div>
              </div>
              
              {/* Decorative Floating Cards */}
              <div className="absolute -top-8 -right-8 w-48 p-4 bg-[#1e1a33]/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl z-30 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Active Users</p>
                    <p className="text-lg font-bold text-white">10,000+</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 w-48 p-4 bg-[#1e1a33]/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl z-30 animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Clubs Hosted</p>
                    <p className="text-lg font-bold text-white">500+</p>
                  </div>
                </div>
              </div>
              
              {/* Background Accent Grid */}
              <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] z-10 -rotate-6"></div>
              <div className="absolute -inset-8 border border-white/5 rounded-[3rem] z-0 rotate-3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto mb-24 lg:mb-32">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="group relative p-8 md:p-12 bg-[#17152b] rounded-3xl border border-[#2d2a4a] hover:border-purple-500/50 transition-colors overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-opacity group-hover:opacity-100 opacity-50"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                To empower students by providing a seamless, intuitive platform that centralizes campus organization. We strive to make discovering clubs, managing events, and building communities easier than ever before.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative p-8 md:p-12 bg-[#17152b] rounded-3xl border border-[#2d2a4a] hover:border-blue-500/50 transition-colors overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-opacity group-hover:opacity-100 opacity-50"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                We envision a connected campus ecosystem where every student feels engaged and every organization has the tools they need to thrive, fostering a culture of participation and lifelong connections.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose EngageX?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We've built everything you need to manage and participate in campus life, combining powerful features with a beautiful, user-friendly design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#17152b] p-8 rounded-2xl border border-[#2d2a4a] hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.bg} ${feature.border} border flex items-center justify-center mb-6`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
