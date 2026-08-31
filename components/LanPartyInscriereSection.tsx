import { useState, useEffect } from 'react'
import { Gamepad2, Users, Trophy, Zap, Sparkles, ArrowRight, Flame, Tv } from 'lucide-react'
import { Button } from './ui/button'

interface LanPartyInscriiereSectionProps {
  onInscriereClick?: () => void
}

export function LanPartyInscriereSection({ onInscriereClick }: LanPartyInscriiereSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('lan-party-inscriere')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section 
      id="lan-party-inscriere" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects with Gaming Vibes */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 via-red-500/5 to-pink-500/5 dark:from-orange-400/10 dark:via-red-400/10 dark:to-pink-400/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-orange-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-red-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.75s' }} />

      <div className="relative max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Main Card */}
          <div className="glass-card rounded-3xl overflow-hidden border-2 border-white/20 dark:border-white/10">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Gaming Visual */}
              <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 p-12 flex items-center justify-center overflow-hidden">
                {/* Decorative Gaming Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-10 left-10 w-24 h-24 border-4 border-white rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s' }} />
                  <div className="absolute bottom-20 right-20 w-20 h-20 border-4 border-white/50 rounded-full" />
                  <div className="absolute top-1/2 left-1/3 w-16 h-16 border-4 border-white/30 rounded-lg" />
                  <Zap className="absolute top-20 right-10 w-10 h-10 text-yellow-300 animate-pulse" />
                  <Flame className="absolute bottom-10 left-20 w-10 h-10 text-yellow-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>

                {/* Main Icon */}
                <div className="relative z-10 text-center">
                  <div className="w-40 h-40 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 mx-auto transform hover:scale-110 transition-transform duration-300">
                    <Gamepad2 className="w-24 h-24 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">
                    LAN PARTY
                  </h3>
                  <p className="text-2xl text-orange-200 font-semibold">
                    2026
                  </p>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/30 dark:border-white/20 mb-6 w-fit">
                  <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Gaming Event
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-orange-400 dark:via-red-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
                  Pregătit pentru competiție?
                </h2>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                  Alătură-te celei mai epice competiții gaming din Iași! Testează-ți abilitățile, câștigă premii spectaculoase și fă parte din comunitatea de gameri pasionați ai LSAC Iași.
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mt-1 flex-shrink-0">
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Premii Spectaculoase</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Câștigă premii valoroase și trofee exclusive</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mt-1 flex-shrink-0">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Comunitate Powered</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Joacă cu și împotriva celor mai buni gameri din Iași</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center mt-1 flex-shrink-0">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Joacă de Oriunde</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Participă la cel mai tare LAN Party din Iași fără a fi nevoie să îți muți setup-ul de gaming.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center mt-1 flex-shrink-0">
                      <Tv className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Streaming Live</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Competiția va fi transmisă live, oferindu-ți șansa de a străluci în fața publicului online.</p>
                    </div>
                  </div>

                </div>
                

                {/* CTA Button */}
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 dark:from-orange-500 dark:to-red-500 dark:hover:from-orange-600 dark:hover:to-red-600 text-white px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 font-semibold flex items-center gap-2 w-full sm:w-auto"
                  onClick={onInscriereClick}
                >
                  <span className="flex-1 sm:flex-none">Înscrie-te acum</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>

                {/* Limited Spots Notice */}
                <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold mt-4 flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  Locuri limitate - Actiune rapid!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}