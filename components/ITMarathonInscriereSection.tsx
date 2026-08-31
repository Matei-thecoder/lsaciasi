import { useState, useEffect } from 'react'
import { Trophy, Sparkles, ArrowRight, Code2, Monitor, Cpu, Laptop } from 'lucide-react'
import { Button } from './ui/button'
import InscriereModal from './InscriereModal' // Importăm modalul tău

export function ITMarathonInscriereSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false) // State pentru modal

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.3 }
    )
    const section = document.getElementById('it-marathon-inscriere')
    if (section) observer.observe(section)
    return () => { if (section) observer.unobserve(section) }
  }, [])

  return (
    <section id="it-marathon-inscriere" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects - Schimbat pe nuanțe de Violet/Albastru conform ITMarathon */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-500/5 to-indigo-500/5 dark:from-purple-400/10 dark:via-blue-400/10 dark:to-indigo-400/10" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="glass-card rounded-3xl overflow-hidden border-2 border-white/20 dark:border-white/10">
            <div className="grid lg:grid-cols-2 gap-0">
              
              {/* Left Side - IT & Coding Visual */}
              <div className="relative bg-gradient-to-br from-[#DA6CFF] via-[#7000FF] to-[#4800FF] p-12 flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <Code2 className="absolute top-10 left-10 w-24 h-24 text-white rotate-12 animate-pulse" />
                  <Cpu className="absolute bottom-20 right-20 w-20 h-20 text-white/50" />
                  <Laptop className="absolute top-1/2 left-1/3 w-16 h-16 text-white/30" />
                </div>

                <div className="relative z-10 text-center">
                  <div className="w-40 h-40 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 mx-auto transform hover:scale-110 transition-transform duration-300">
                    <Monitor className="w-24 h-24 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2 uppercase tracking-tight">IT MARATHON</h3>
                  <p className="text-2xl text-purple-200 font-semibold">EDIȚIA 2026</p>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-black/40 backdrop-blur-md">
                <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/30 mb-6 w-fit">
                  <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                  <span className="text-sm font-semibold text-gray-200">Innovation & Coding</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#DA6CFF] to-[#4800FF] bg-clip-text text-transparent mb-4">
                  Pregătit să inovezi?
                </h2>

                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  Alege una dintre cele 6 probe tech, de la Web Development la Design UI/UX sau CPU Design. Demonstrează-ți talentul în cel mai mare hackathon din inima Moldovei!
                </p>

                {/* Highlights - Adaptate pentru probele ITMarathon */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-purple-500 flex items-center justify-center mt-1 flex-shrink-0"><Trophy className="w-4 h-4 text-white" /></div>
                    <p className="text-sm text-gray-300">Premii pe măsura inovației</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-blue-500 flex items-center justify-center mt-1 flex-shrink-0"><Code2 className="w-4 h-4 text-white" /></div>
                    <p className="text-sm text-gray-300">6 Secțiuni Competitive</p>
                  </div>
                </div>

                {/* CTA Button care deschide Modalul */}
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#DA6CFF] to-[#4800FF] hover:from-[#c250e6] hover:to-[#3b00d1] text-white px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 font-bold flex items-center gap-2 w-full sm:w-auto"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span className="flex-1">Înscrie-te la ITMarathon</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integrare Modal */}
      <InscriereModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}