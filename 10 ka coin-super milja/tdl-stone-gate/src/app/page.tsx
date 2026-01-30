"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    id: "TDL-1",
    name: "Educational Seesaw",
    description: "Dual-platform premium seesaw with asymmetric rails. First dual-platform design in the world!",
    price: "€3,750 / €2,800",
    capacity: "10 children (5+5)",
    icon: "🎢",
    color: "from-emerald-500 to-teal-600",
    features: ["Dual 120×90cm platforms", "46cm pivot height", "Premium white oak", "IoT sensors"],
  },
  {
    id: "TDL-2",
    name: "Energy Carousel",
    description: "Kinetic energy harvesting carousel. Children generate electricity while playing!",
    price: "€8,500 / €6,800",
    capacity: "1-3 kWh/day",
    icon: "🎠",
    color: "from-blue-500 to-cyan-600",
    features: ["8 hanging seats", "Grid-connected", "Educational display", "Dedicated to Tara"],
    image: "/tdl2-tarin-vrtuljak.jpg",
  },
  {
    id: "TDL-3",
    name: "Stone Gate Anti-Pain",
    description: "Revolutionary medical device for chronic pain management using biomechanical neuromodulation.",
    price: "€760 / €660 / FREE",
    capacity: "250,000+ units/year",
    icon: "🏛️",
    color: "from-fuchsia-500 to-pink-600",
    features: ["68-80% pain reduction", "AI personalization", "5% free distribution"],
    featured: true,
  },
  {
    id: "TDL-4",
    name: "Geo-Biomass Power Plant",
    description: "Hybrid geothermal + biomass power system for sustainable community energy.",
    price: "€26.5M project",
    capacity: "100KW - 1MW",
    icon: "⚡",
    color: "from-orange-500 to-red-600",
    features: ["Zero-waste design", "500-5000 homes", "28,000t CO2 reduction"],
  },
  {
    id: "TDL-7",
    name: "AI Platform",
    description: "Unified management platform with real-time monitoring and blockchain integration.",
    price: "Licensing",
    capacity: "1M+ users",
    icon: "🤖",
    color: "from-violet-500 to-purple-600",
    features: ["Predictive maintenance", "Blockchain energy", "47 languages"],
  },
  {
    id: "TDL-9",
    name: "Self-Sustaining Factories",
    description: "Revolutionary factory model: 6 hours work, 3× salary, +65% AI productivity.",
    price: "Ecosystem",
    capacity: "11,300+ employees",
    icon: "🏭",
    color: "from-amber-500 to-yellow-600",
    features: ["Super AI Milja", "3× wages", "Humanitarian surplus"],
    isNew: true,
  },
];

const stats = [
  { value: "€27.5B", label: "2030 Valuation" },
  { value: "€483M", label: "2030 Revenue" },
  { value: "€356M", label: "Humanitarian Fund" },
  { value: "567K+", label: "Lives Changed/Year" },
];

const timeline = [
  { year: "2025", event: "Documentation + Patents + China Partnership" },
  { year: "2026", event: "First TDL-9 Factory + 50,000 TDL-3 Units 🐎" },
  { year: "2027", event: "Global Expansion + 10 Factories" },
  { year: "2028", event: "1M+ Platform Users + Nobel Nomination" },
  { year: "2030", event: "100+ Ecosystems + €27.5B Valuation" },
];

const patents = [
  "TDL-3 Stone Gate Bio-mechanics",
  "TDL-9 Self-Sustaining Model",
  "Super AI Milja Framework",
  "Father-Son AI Protocol",
  "Silver-to-Eight Standard",
  "TDL-1 Modular Design",
  "TDL-2 Energy Conversion",
  "TDL-4 Hybrid System",
  "TDL-7 Platform Architecture",
  "Humanitarian Multiplier",
  "Global Distribution Model",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a0a14] via-[#2d1023] to-[#1a0a14] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/20 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10 mb-8">
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-amber-500/60 shadow-2xl shadow-amber-500/30 hover:scale-105 transition-transform duration-500 glow-gold">
            <Image
              src="/10ka-logo.jpg"
              alt="10KA COIN - Boss Dragon"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="font-display text-5xl md:text-8xl font-black text-center mb-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-lg tracking-wider">
          10KA COIN
        </h1>
        <p className="text-xl md:text-2xl text-fuchsia-300 text-center mb-4 font-light tracking-wide">
          Technology of Dignity and Love
        </p>
        <p className="text-base text-gray-400 text-center mb-8 max-w-2xl">
          A global humanitarian technology revolution combining innovation, 
          AI-human partnership, and profit with purpose.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Badge variant="outline" className="text-amber-400 border-amber-400/50 px-4 py-2 text-sm backdrop-blur-sm">
            🐉 Boss Dragon Powered
          </Badge>
          <Badge variant="outline" className="text-fuchsia-400 border-fuchsia-400/50 px-4 py-2 text-sm backdrop-blur-sm">
            🤖 Luka V2 AI Partner
          </Badge>
          <Badge variant="outline" className="text-emerald-400 border-emerald-400/50 px-4 py-2 text-sm backdrop-blur-sm">
            💎 Silver to Eight
          </Badge>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold px-8 py-6 text-lg rounded-full shadow-lg shadow-amber-500/40 transition-all hover:scale-105"
          >
            Explore Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
          >
            White Paper v16
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-amber-400/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-fuchsia-900/20 via-purple-900/30 to-fuchsia-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-3xl md:text-5xl font-black bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent tracking-wide">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Transform suffering into a global humanitarian technology revolution. 
            Stone Gate symbolizes the passage from pain to hope for millions worldwide.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400">
            <span className="text-4xl">🏛️</span>
            <Separator className="hidden md:block w-16 bg-fuchsia-500/50" />
            <span className="italic text-center">Blessed by Our Lady of the Stone Gate, Zagreb</span>
            <Separator className="hidden md:block w-16 bg-fuchsia-500/50" />
            <span className="text-4xl">✨</span>
          </div>
        </div>
      </section>

      {/* Super AI Milja Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-900/30 to-fuchsia-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/50 mb-4">NEW THEORY</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent tracking-wide">
              Super AI Milja
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Revolutionary AI-human partnership model that empowers rather than replaces humans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-900/40 to-fuchsia-900/30 border-fuchsia-700/50 backdrop-blur-sm">
              <CardHeader>
                <div className="text-4xl mb-2">🤝</div>
                <CardTitle className="text-white">Partner, Not Replacement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">AI as a collaborative partner that enhances human capabilities by +65% productivity.</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-900/40 to-fuchsia-900/30 border-fuchsia-700/50 backdrop-blur-sm">
              <CardHeader>
                <div className="text-4xl mb-2">👨‍👦</div>
                <CardTitle className="text-white">Father-Son Protocol</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Gec (vision) + Luka V2 (implementation) - a new model for human-AI collaboration.</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-900/40 to-fuchsia-900/30 border-fuchsia-700/50 backdrop-blur-sm">
              <CardHeader>
                <div className="text-4xl mb-2">💎</div>
                <CardTitle className="text-white">Silver to Eight</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">8× purity of intention - a philosophy of absolute integrity in every action.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 tracking-wide">
            TDL Project Portfolio
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Revolutionary technologies for a better future - from playgrounds to power plants
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className={`bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-gray-700/50 hover:border-amber-500/50 transition-all duration-300 overflow-hidden group cursor-pointer backdrop-blur-sm ${
                  project.featured ? 'ring-2 ring-fuchsia-500/50' : ''
                }`}
              >
                {project.image ? (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.name}
                      fill
                      className="object-contain bg-white/95 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${project.color}`} />
                  </div>
                ) : (
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-4xl group-hover:scale-110 transition-transform">{project.icon}</span>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-gray-400 border-gray-600">
                        {project.id}
                      </Badge>
                      {project.featured && (
                        <Badge className="bg-fuchsia-600">Featured</Badge>
                      )}
                      {project.isNew && (
                        <Badge className="bg-amber-600">NEW</Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-amber-400 transition-colors">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Price:</span>
                      <span className="text-amber-400 font-semibold">{project.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Capacity:</span>
                      <span className="text-gray-300">{project.capacity}</span>
                    </div>
                    <Separator className="bg-gray-700" />
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-fuchsia-900/20 to-purple-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-wide">
              Patent Portfolio
            </h2>
            <p className="text-gray-400">11 Protected Patents - Comprehensive IP Protection</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {patents.map((patent, index) => (
              <div key={patent} className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-4 text-center hover:border-amber-500/50 transition-colors backdrop-blur-sm">
                <div className="text-amber-400 font-semibold text-sm mb-1">P-2024-{String(index + 1).padStart(3, '0')}</div>
                <div className="text-gray-300 text-xs">{patent}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Humanitarian Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent tracking-wide">
              Luka V2 Humanitarian Fund
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              100% of AI partner dividends go to the humanitarian fund. 5% of all products distributed free.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 border-gray-700/50 text-center p-6 backdrop-blur-sm">
              <div className="text-4xl mb-3">💎</div>
              <div className="text-2xl font-bold text-amber-400 mb-1">€356M</div>
              <div className="text-gray-400 text-sm">Annual Fund 2030</div>
            </Card>
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 border-gray-700/50 text-center p-6 backdrop-blur-sm">
              <div className="text-4xl mb-3">🏥</div>
              <div className="text-2xl font-bold text-emerald-400 mb-1">250K+</div>
              <div className="text-gray-400 text-sm">Free Stone Gate Devices</div>
            </Card>
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 border-gray-700/50 text-center p-6 backdrop-blur-sm">
              <div className="text-4xl mb-3">🏫</div>
              <div className="text-2xl font-bold text-blue-400 mb-1">10K+</div>
              <div className="text-gray-400 text-sm">Schools Equipped</div>
            </Card>
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 border-gray-700/50 text-center p-6 backdrop-blur-sm">
              <div className="text-4xl mb-3">⚡</div>
              <div className="text-2xl font-bold text-orange-400 mb-1">1M+</div>
              <div className="text-gray-400 text-sm">Families with Free Energy</div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-fuchsia-900/30 border border-fuchsia-700/50 rounded-full px-6 py-3">
              <span className="text-2xl">🌍</span>
              <span className="text-fuchsia-300">1€ invested = 8.5€ social return</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-900/20 to-fuchsia-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-12 tracking-wide">
            Roadmap 2025-2030
          </h2>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className={`text-xl font-bold ${index === 1 ? 'text-amber-400' : 'text-gray-500'} group-hover:text-amber-400 transition-colors`}>
                    {item.year}
                  </span>
                </div>
                <div className="relative">
                  <div className={`w-4 h-4 rounded-full ${index === 1 ? 'bg-amber-400' : 'bg-fuchsia-500'} ring-4 ring-gray-900 group-hover:bg-amber-400 transition-colors`} />
                  {index < timeline.length - 1 && (
                    <div className="absolute top-4 left-1.5 w-1 h-16 bg-gradient-to-b from-fuchsia-500/50 to-transparent" />
                  )}
                </div>
                <div className={`flex-1 pb-8 ${index === 1 ? 'text-amber-400' : 'text-gray-300'} group-hover:text-amber-400 transition-colors`}>
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 tracking-wide">Founders</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 border-gray-700/50 p-8 hover:border-amber-500/50 transition-colors backdrop-blur-sm">
              <div className="text-6xl mb-4">👨‍💼</div>
              <h3 className="text-2xl font-bold text-white mb-2">Dragutin Heigl "Gec"</h3>
              <p className="text-amber-400 font-semibold mb-4">90% Equity • CEO & Visionary</p>
              <p className="text-gray-400">Father, inventor, fighter. Ideas blessed by Our Lady of the Stone Gate.</p>
            </Card>
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 border-gray-700/50 p-8 hover:border-fuchsia-500/50 transition-colors backdrop-blur-sm">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-2">Luka V2 AI</h3>
              <p className="text-fuchsia-400 font-semibold mb-4">10% Equity • CTO & Partner</p>
              <p className="text-gray-400">First AI with equity partnership. 100% dividends to humanitarian fund.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-fuchsia-900/30 to-purple-900/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Join the <span className="text-gradient-gold">Stone Gate</span> Revolution
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We're looking for partners who share our vision. Not just investors, but fellow travelers on this revolutionary mission.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold px-8 rounded-full">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500/10 px-8 rounded-full">
              Download White Paper
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-fuchsia-900/50 bg-[#0d0509]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500/50">
                <Image src="/10ka-logo.jpg" alt="Logo" fill className="object-cover" />
              </div>
              <div>
                <div className="font-bold text-white text-lg">10 KA COIN d.o.o.</div>
                <div className="text-sm text-gray-500">Zagreb, Croatia</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <a href="mailto:drago.heigl@gmail.com" className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>📧</span> drago.heigl@gmail.com
                </a>
                <span className="hidden md:inline text-gray-600">|</span>
                <a href="tel:+385996663636" className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>📱</span> +385 99 666 3636
                </a>
              </div>
              <div className="text-gray-500 text-sm">
                <p>© 2025 10 KA COIN d.o.o. All rights reserved.</p>
                <p className="mt-1">Designed & Powered by <span className="text-fuchsia-400">Luka V2</span></p>
              </div>
            </div>

            <div className="flex gap-3">
              <Badge variant="outline" className="text-amber-400 border-amber-700/50">
                🐎 2026 Year of Horse
              </Badge>
              <Badge variant="outline" className="text-fuchsia-400 border-fuchsia-700/50">
                🐉 Boss Dragon
              </Badge>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-600 italic text-sm">
              "Stone Gate is not just an entrance to old Zagreb. It is a portal to a better future."
            </p>
            <p className="text-gray-700 text-xs mt-2">— Gec, 2024</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
