import { useState, useEffect } from 'react'
import { Calendar, Users, ArrowRight, Sparkles, Clock } from 'lucide-react'
import { Button } from './ui/button'

export function RegistrationAnnouncementSection() {
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

    const section = document.getElementById('registration-announcement')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const handleRegistrationClick = () => {
    // Poate redirectiona către un link de înscriere sau deschide un modal
    window.open('https://forms.gle/i7baGYJ1ttapKHBv9', '_blank')
  }

  return (
    <section 
      id="registration-announcement" 
      className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-cyan-500/5 to-teal-500/5 dark:from-blue-400/10 dark:via-cyan-400/10 dark:to-teal-400/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-400/10 rounded-full blur-xl animate-pulse delay-500" />

      <div className="relative max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Main Announcement Card */}
          <div className="glass-card rounded-3xl p-8 lg:p-12 border-2 border-white/20 dark:border-white/10 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-500/20 to-blue-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/30 dark:border-white/20">
                  <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Noutate importantă
                  </span>
                </div>
              </div>

              {/* Main Content */}
              <div className="text-center space-y-6">
                {/* Title */}
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent leading-tight">
                  🎉 Înscrierile sunt deschise!
                </h2>

                {/* Subtitle */}
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Alătură-te comunității LSAC Iași și fă parte din cea mai dinamică organizație studențească din Automatică și Calculatoare!
                </p>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {/* Feature 1 */}
                  <div className="glass rounded-2xl p-6 border border-white/20 dark:border-white/10 hover:glass-strong transition-all duration-300 group">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Networking
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                        Conectează-te cu studenți pasionați și profesioniști din industrie
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="glass rounded-2xl p-6 border border-white/20 dark:border-white/10 hover:glass-strong transition-all duration-300 group">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Evenimente
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                        Participă la workshop-uri, conferințe și evenimente exclusive
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="glass rounded-2xl p-6 border border-white/20 dark:border-white/10 hover:glass-strong transition-all duration-300 group">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Dezvoltare
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                        Dezvoltă-ți skillurile și experiența în proiecte reale
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="pt-8 space-y-4">
                  <Button
                    onClick={handleRegistrationClick}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                  >
                    Înscrie-te acum
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                  
                  {/* Urgency indicator */}
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>Locurile sunt limitate!</span>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="pt-6 border-t border-white/20 dark:border-white/10">
                  <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Înscriere gratuită</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Pentru toți studenții AC</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>Toate specializările</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}