import { useState, useEffect } from 'react'
import { Calendar, MapPin, Music, Clock, Users, Sparkles, PartyPopper } from 'lucide-react'
import { Button } from './ui/button'

interface BallAnnouncementSectionProps {
  onRegisterClick: () => void
}

export function BallAnnouncementSection({ onRegisterClick }: BallAnnouncementSectionProps) {
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

    const section = document.getElementById('ball-announcement')
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
      id="ball-announcement" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 via-purple-500/5 to-indigo-500/5 dark:from-pink-400/10 dark:via-purple-400/10 dark:to-indigo-400/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />

      <div className="relative max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Main Card */}
          <div className="glass-card rounded-3xl overflow-hidden border-2 border-white/20 dark:border-white/10">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Image/Visual */}
              <div className="relative bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 p-12 flex items-center justify-center overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full" />
                  <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-white rounded-lg rotate-45" />
                  <div className="absolute top-1/2 left-1/4 w-12 h-12 border-4 border-white rounded-full" />
                  <Sparkles className="absolute top-20 right-10 w-8 h-8 text-white animate-pulse" />
                  <Music className="absolute bottom-10 left-20 w-10 h-10 text-white animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>

                {/* Main Icon */}
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 mx-auto transform hover:scale-110 transition-transform duration-300">
                    <PartyPopper className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Balul Bobocilor
                  </h3>
                  <p className="text-xl text-white/90">
                    2025
                  </p>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="p-8 lg:p-12">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/30 dark:border-white/20 mb-6">
                  <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Eveniment Special
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
                  O noapte de neuitat!
                </h2>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Cel mai așteptat eveniment al anului! Alătură-te colegilor tăi pentru o seară magică plină de muzică, dans și amintiri de neuitat. Balul Bobocilor este locul perfect pentru a celebra începutul anului universitar.
                </p>

                {/* Event Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Data evenimentului</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">29 Noiembrie 2025, 19:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Locație</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Vivid Club, Iași</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Music className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Ce te așteaptă:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Competiția pentru Miss & Mister, probe tematice "Around the World" și un spectacol plin de eleganță</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="glass rounded-2xl p-4 mb-6 border border-white/20 dark:border-white/10">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Ce te așteaptă:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">After party"</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Invitati surpriza</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Photo booth</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Cadouri & premii</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={onRegisterClick}
                  className="w-full max-w-sm mx-auto bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <PartyPopper className="w-5 h-5 mr-2" />
                  <a href="https://forms.gle/j8p33UXGfb6i1H9L6" target="_blank" rel="noopener noreferrer">Înscrie-te acum la Balul Bobocilor</a>
                </Button>

                {/* Urgency */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <Clock className="w-4 h-4" />
                  <span>Doar 10 locuri disponibile!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="glass-card rounded-2xl p-6 border border-white/20 dark:border-white/10 text-center hover:glass-strong transition-all duration-300">
              <Users className="w-8 h-8 text-pink-600 dark:text-pink-400 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Dress Code</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Eleganță & stil - vino în cea mai bună ținută!
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/20 dark:border-white/10 text-center hover:glass-strong transition-all duration-300">
              <Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Bilete</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                TBA
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/20 dark:border-white/10 text-center hover:glass-strong transition-all duration-300">
              <Calendar className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Deadline Înscriere</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                17 Octombrie 2025, 15:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
