import { Button } from './ui/button'
import { ArrowRight, MapPin } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/images/backgrounds/hero-bg.jpg"
          alt="LSAC Iași - Liga Studenților"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-blue-800/30 to-blue-900/40 dark:from-gray-900/60 dark:via-gray-800/70 dark:to-gray-900/80" />
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-400/10 dark:bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/15 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 dark:bg-blue-900/80 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              Universitatea Tehnică "Gh. Asachi", Iași
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Bine ați venit la
            <span className="block text-blue-600 dark:text-blue-400 mt-2">
              LSAC Iași
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Liga Studenților Facultății de Automatică și Calculatoare - Asociația care conectează studenții, 
            creează oportunități și construiește viitorul tehnologic al Iașului.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105"
              onClick={() => {
                const element = document.querySelector('#departamente')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Explorează departamentele
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="glass border-white/30 dark:border-white/20 text-gray-700 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-white/10 px-8 py-3 rounded-xl transition-all duration-200">
              <a href="https://drive.google.com/drive/folders/14ZwtD5oSHLveynVPneU-pKJDMWJwTnPd?usp=sharing" target="_blank" rel="noopener noreferrer">Redirecționează 3.5%</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-white/20 dark:border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">6</div>
              <div className="text-sm text-gray-100 dark:text-gray-100">Departamente</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">200+</div>
              <div className="text-sm text-gray-400 dark:text-gray-100">Membri activi</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</div>
              <div className="text-sm text-gray-800 dark:text-gray-100">Evenimente anuale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}