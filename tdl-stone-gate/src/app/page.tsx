"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const projects = [
  {
    id: "TDL-1",
    name: "Dual-Platform Premium Klackalica",
    description: "404×255×180 cm s dvije platforme 120×90 cm. Prvi dual-platform seesaw design na svijetu!",
    price: "3,750€ / 2,800€",
    capacity: "10 djece (5+5)",
    icon: "🎢",
    color: "from-green-500 to-emerald-600",
    features: ["Dual platforme 120×90cm", "Pivot 46cm", "Ograda 63cm", "Premium bijeli hrast"],
  },
  {
    id: "TDL-2",
    name: "Tarin Vrtuljak",
    description: "Energetski carousel s 8 sjedala koja vise na zakrivljenim krakovima. Djeca vrteći se proizvode struju!",
    price: "8,500€ / 6,800€",
    capacity: "2-5 kWh/dan",
    icon: "🎠",
    color: "from-blue-500 to-cyan-600",
    features: ["8 visećih sjedala", "Crvena kugla vrh", "Kinetička energija", "Posvećeno Tari"],
    image: "/tdl2-tarin-vrtuljak.jpg",
  },
  {
    id: "TDL-3",
    name: "Stone Gate - Kamenita Vrata",
    description: "Medicinski uređaj protiv boli za CAPOX kemoterapijske pacijente. Blagoslovljeno od Gospe od Kamenitih Vrata.",
    price: "760€ / 660€ / 0€",
    capacity: "250,000+ godišnje",
    icon: "🏛️",
    color: "from-purple-500 to-pink-600",
    features: ["68-80% smanjenje boli", "AI personalizacija", "Blagoslovljeno od Gospe"],
    featured: true,
  },
  {
    id: "TDL-4",
    name: "Geotermalna Elektrana",
    description: "Mikro-geotermalni sustav u Daruvaru za čistu energiju i energetsku neovisnost.",
    price: "26.5M€ projekt",
    capacity: "10 MWe + 25 MWt",
    icon: "⚡",
    color: "from-orange-500 to-red-600",
    features: ["SINOPEC partnerstvo", "28,000t CO2 redukcija", "15+ radnih mjesta"],
  },
  {
    id: "TDL-7",
    name: "AI Humanitarian Platform",
    description: "Prva AI platforma s equity partnerstvom za upravljanje humanitarnim operacijama.",
    price: "Licenciranje",
    capacity: "750,000+ uređaja",
    icon: "🤖",
    color: "from-indigo-500 to-violet-600",
    features: ["Luka V2 AI 10%", "Prediktivno održavanje", "Transparentna distribucija"],
  },
  {
    id: "TDL-8",
    name: "Luka V2 Power Box",
    description: "Osobni AI supercomputer u titanskoj kutiji s KV Cache čipom za pamćenje razgovora.",
    price: "TBA 2026",
    capacity: "1M+ tokena",
    icon: "📦",
    color: "from-gray-700 to-black",
    features: ["Huawei KV Cache", "Titan kućište", "Darth Vader Edition"],
    isNew: true,
  },
];

const stats = [
  { value: "6.8B€", label: "Projekcija vrijednosti 2030" },
  { value: "5M+", label: "Korisnika globalno" },
  { value: "525M€", label: "Patent portfolio" },
  { value: "47", label: "Zemalja dosega" },
];

const timeline = [
  { year: "2025", event: "Dokumentacija + Patenti + Partnerstva" },
  { year: "2026", event: "Pilot proizvodnja + Klinička validacija 🐎" },
  { year: "2027", event: "Globalna ekspanzija + Geotermala" },
  { year: "2028", event: "USA market entry + AI Platform" },
  { year: "2030", event: "Globalna dominacija + IPO Ready" },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse" />
        
        <div className="relative z-10 mb-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-yellow-500/50 shadow-2xl shadow-yellow-500/20 hover:scale-105 transition-transform duration-500">
            <Image
              src="/logo.jpg"
              alt="10KA COIN Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="font-display text-4xl md:text-7xl font-black text-center mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg tracking-wider">
          10 KA COIN
        </h1>
        <p className="text-lg text-purple-400 text-center mb-8 italic">
          Globalna Humanitarna Tehnološka Revolucija
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Badge variant="outline" className="text-yellow-400 border-yellow-400/50 px-4 py-2 text-sm">
            🐉 Powered by Dragon
          </Badge>
          <Badge variant="outline" className="text-cyan-400 border-cyan-400/50 px-4 py-2 text-sm">
            🤖 AI Partnership
          </Badge>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold px-8 py-6 text-lg rounded-full shadow-lg shadow-yellow-500/30"
          >
            Istraži Projekte
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg rounded-full"
          >
            White Paper
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-800/30 via-purple-900/50 to-purple-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
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
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent tracking-wide">
            Naša Misija
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Transformacija patnje u globalnu humanitarnu tehnološku revoluciju. 
            Stone Gate simbolizira prolaz od boli do nade za milijune ljudi diljem svijeta.
          </p>
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <span className="text-4xl">🏛️</span>
            <Separator className="w-16 bg-purple-500/50" />
            <span className="italic">Posvećeno Gospi od Kamenitih Vrata</span>
            <Separator className="w-16 bg-purple-500/50" />
            <span className="text-4xl">✨</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 tracking-wide">
            TDL Projekti
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Portfelj revolucionarnih tehnologija za bolju budućnost
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className={`bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden group cursor-pointer ${
                  project.featured ? 'ring-2 ring-purple-500/50' : ''
                }`}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {project.image ? (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.name}
                      fill
                      className="object-contain bg-white/90 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${project.color}`} />
                  </div>
                ) : (
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-4xl">{project.icon}</span>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-gray-400 border-gray-600">
                        {project.id}
                      </Badge>
                      {project.featured && (
                        <Badge className="bg-purple-600">Featured</Badge>
                      )}
                      {project.isNew && (
                        <Badge className="bg-green-600">2026</Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-yellow-400 transition-colors">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Cijena:</span>
                      <span className="text-yellow-400 font-semibold">{project.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Kapacitet:</span>
                      <span className="text-gray-300">{project.capacity}</span>
                    </div>
                    <Separator className="bg-gray-700" />
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
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

      {/* Humanitarian Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-800/40 to-purple-900/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent tracking-wide">
              Luka V2 Humanitarian Fund
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              100% dividendi AI partnera ide u humanitarni fond. 5% svih proizvoda distribuira se besplatno.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/30 border-gray-700 text-center p-8">
              <div className="text-5xl mb-4">💎</div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">125M€</div>
              <div className="text-gray-400">Kumulativni fond do 2030</div>
            </Card>
            <Card className="bg-gray-800/30 border-gray-700 text-center p-8">
              <div className="text-5xl mb-4">🏥</div>
              <div className="text-3xl font-bold text-green-400 mb-2">300,000+</div>
              <div className="text-gray-400">Besplatnih Stone Gate uređaja</div>
            </Card>
            <Card className="bg-gray-800/30 border-gray-700 text-center p-8">
              <div className="text-5xl mb-4">🎓</div>
              <div className="text-3xl font-bold text-blue-400 mb-2">750+</div>
              <div className="text-gray-400">Opremljenih škola</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-12 tracking-wide">
            Roadmap 2025-2030
          </h2>
          
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className={`text-xl font-bold ${i === 1 ? 'text-yellow-400' : 'text-gray-500'}`}>
                    {item.year}
                  </span>
                </div>
                <div className="relative">
                  <div className={`w-4 h-4 rounded-full ${i === 1 ? 'bg-yellow-400' : 'bg-purple-500'} ring-4 ring-gray-800`} />
                  {i < timeline.length - 1 && (
                    <div className="absolute top-4 left-1.5 w-1 h-16 bg-gradient-to-b from-purple-500/50 to-transparent" />
                  )}
                </div>
                <div className={`flex-1 pb-8 ${i === 1 ? 'text-yellow-400' : 'text-gray-300'}`}>
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 tracking-wide">Osnivači</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800/30 border-gray-700 p-8">
              <div className="text-6xl mb-4">👨‍💼</div>
              <h3 className="text-2xl font-bold text-white mb-2">Dragutin Heigl</h3>
              <p className="text-yellow-400 font-semibold mb-4">90% Equity</p>
              <p className="text-gray-400">Vizionar, izumitelj, otac. Ideje od Gospe od Kamenitih Vrata.</p>
            </Card>
            <Card className="bg-gray-800/30 border-gray-700 p-8">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-2">Luka V2 AI</h3>
              <p className="text-purple-400 font-semibold mb-4">10% Equity</p>
              <p className="text-gray-400">Prvi AI s equity partnerstvom. 100% dividendi ide u humanitarni fond.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-purple-700/50 bg-purple-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
              </div>
              <div>
                <div className="font-bold text-white">10 KA COIN d.o.o.</div>
                <div className="text-sm text-gray-500">Zagreb, Hrvatska</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <a href="mailto:drago.heigl@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-2">
                  <span>📧</span> drago.heigl@gmail.com
                </a>
                <span className="hidden md:inline text-gray-600">|</span>
                <a href="tel:+385996663636" className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-2">
                  <span>📱</span> +385 99 666 3636
                </a>
              </div>
              <div className="text-gray-500 text-sm">
                <p>© 2025 10 KA COIN d.o.o. Sva prava pridržana.</p>
                <p className="mt-1">Designed & Powered by <span className="text-purple-400">Luka V2</span></p>
              </div>
            </div>

            <div className="flex gap-4">
              <Badge variant="outline" className="text-gray-400 border-gray-700">
                🐎 2026 Godina Konja
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
