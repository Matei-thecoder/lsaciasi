import { useState, useEffect } from 'react'
import { Calendar, MapPin, Trophy, Clock, Users, Target, Map } from 'lucide-react'
import { Button } from './ui/button'

interface TreasureHuntAnnouncementSectionProps {
  onRegisterClick: () => void
}

export function TreasureHuntAnnouncementSection({ onRegisterClick }: TreasureHuntAnnouncementSectionProps) {
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

    const section = document.getElementById('hunt-announcement')
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
      id="hunt-announcement" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 via-orange-500/5 to-red-500/5 dark:from-amber-400/10 dark:via-orange-400/10 dark:to-red-400/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-red-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />

      <div className="relative max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Main Card */}
          <div className="glass-card rounded-3xl overflow-hidden border-2 border-white/20 dark:border-white/10">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Content (reversed order) */}
              <div className="p-8 lg:p-12 order-2 lg:order-1">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/30 dark:border-white/20 mb-6">
                  <Target className="w-4 h-4 text-amber-500 animate-pulse" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Competiție Interactivă
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent mb-4">
                  Aventura te așteaptă!
                </h2>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Pornește într-o aventură palpitantă prin Iași! Treasure Hunt este o competiție de echipă unde vei rezolva ghicitori, vei explora oraș și vei face noi prieteni. Echipează-te cu colegii tăi și luptă pentru marele premiu!
                </p>

                {/* Event Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Data evenimentului</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">25 Octombrie 2025, 14:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Start</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Facultatea AC - Intrarea Principală</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Echipe</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">5 persoane per echipă</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="glass rounded-2xl p-4 mb-6 border border-white/20 dark:border-white/10">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Ce vei descoperi:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Provocări creative</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Locații secrete</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Premii valoroase</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Networking</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={onRegisterClick}
                  className="w-full bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <a href="https://forms.gle/GXBKouwqBsfYTpBN9" target="_blank" rel="noopener noreferrer">Înscrie echipa la Treasure Hunt</a>
                </Button>

                {/* Urgency */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <Clock className="w-4 h-4" />
                  <span>Maxim 20 de echipe acceptate!</span>
                </div>
              </div>

              {/* Right Side - Image/Visual */}
              <div className="relative bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 p-12 flex items-center justify-center overflow-hidden order-1 lg:order-2">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-10 right-10 w-20 h-20 border-4 border-white rounded-full" />
                  <div className="absolute bottom-20 left-20 w-16 h-16 border-4 border-white rounded-lg rotate-45" />
                  <div className="absolute top-1/2 right-1/4 w-12 h-12 border-4 border-white rounded-full" />
                  <Map className="absolute top-20 left-10 w-8 h-8 text-white animate-pulse" />
                  <Target className="absolute bottom-10 right-20 w-10 h-10 text-white animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>

                {/* Main Icon */}
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 mx-auto transform hover:scale-110 transition-transform duration-300">
                    <Trophy className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Treasure Hunt
                  </h3>
                  <p className="text-xl text-white/90">
                    Edition 2025
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="glass-card rounded-2xl p-6 border border-white/20 dark:border-white/10 text-center hover:glass-strong transition-all duration-300">
              <Trophy className="w-8 h-8 text-amber-600 dark:text-amber-400 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Premii</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Premii de peste 1000 RON pentru primele 3 echipe
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/20 dark:border-white/10 text-center hover:glass-strong transition-all duration-300">
              <Map className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Durată</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Aproximativ 4 ore de aventură prin oraș
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/20 dark:border-white/10 text-center hover:glass-strong transition-all duration-300">
              <Calendar className="w-8 h-8 text-red-600 dark:text-red-400 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Deadline Înscriere</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                24 Octombrie 2025, 15:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
