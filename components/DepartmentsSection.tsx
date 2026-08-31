import {
  PenTool,
  Users,
  Code,
  Palette,
  Megaphone,
  Music,
  ArrowRight,
  CheckCircle,
  Crown,
  UserCheck
} from 'lucide-react'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function DepartmentsSection() {
  const departments = [
    {
      id: 1,
      icon: PenTool,
      title: "Departamentul de Scriere Proiecte și Fundraising",
      shortName: "F.R.",
      color: "from-green-500 to-green-600",
      description: "Motorul financiar și strategic al proiectelor LSAC.",
      director: {
        name: "Liteanu-Ingrid",
        photo: "/images/team/directors/fr_dir.jpg"
      },
      assistantDirector: {
        name: "Mănăstireanu Andrei",
        photo: "/images/team/directors/fr_dir_adj.jpg"
      },
      responsibilities: [
        "Elaborează proiectele oficiale ale evenimentelor",
        "Pregătește mapele de prezentare, în colaborare cu departamentul de Design",
        "Se ocupă de atragerea de fonduri și sponsorizări",
        "Păstrează relațiile cu partenerii economici și sponsorii",
        "Supervizează coordonatorii de fundraising la fiecare proiect"
      ]
    },
    {
      id: 2,
      icon: Users,
      title: "Departamentul de Resurse Umane",
      shortName: "H.R.",
      color: "from-blue-500 to-blue-600",
      description: "Inima organizației – construiește echipe și menține motivația.",
      director: {
        name: "Buzato Lorenzo",
        photo: "/images/team/directors/hr_dir.jpg"
      },
      assistantDirector: {
        name: "Ciurușniuc Diana",
        photo: "/images/team/directors/hr_dir_adj.jpg"
      },
      responsibilities: [
        "Organizarea procesului de recrutare, selecție și integrare a noilor voluntari",
        "Planificarea de traininguri, sesiuni de onboarding și orientare pentru membri noi",
        "Susținerea unei comunicări eficiente între echipe și conducere",
        "Colaborarea cu celelalte departamente pentru nevoile de formare sau sprijin"
      ]
    },
    {
      id: 3,
      icon: Code,
      title: "Departamentul de IT",
      shortName: "IT",
      color: "from-purple-500 to-purple-600",
      description: "Suportul tehnic al organizației, asigurând o prezență digitală solidă.",
      director: {
        name: "Vesel Denis Matei",
        photo: "/images/team/directors/it_dir.jpg"
      },
      assistantDirector: {
        name: "Hamciuc Cezar",
        photo: "/images/team/directors/it_dir_adj.jpg"
      },
      responsibilities: [
        "Creează și administrează site-urile proiectelor LSAC",
        "Asigură mentenanța platformelor digitale ale asociației",
        "Dezvoltă aplicații utile pentru desfășurarea activităților",
        "Realizează sondaje și colectează date relevante"
      ]
    },
    {
      id: 4,
      icon: Palette,
      title: "Departamentul de Design",
      shortName: "Design",
      color: "from-pink-500 to-pink-600",
      description: "Creativitatea lor se vede în fiecare proiect: fața vizibilă a LSAC în ochii publicului.",
      director: {
        name: "Diaconu Andrei",
        photo: "/images/team/directors/design_dir.jpg"
      },
      assistantDirector: {
        name: "Crivoi Tudor",
        photo: "/images/team/directors/design_dir_adj.jpg"
      },
      responsibilities: [
        "Realizează materiale grafice: afișe, flyere, bannere, video-uri promoționale",
        "Colaborează cu toate celelalte departamente pentru promovarea proiectelor",
        "Este responsabil de coerența vizuală a identității LSAC"
      ]
    },
    {
      id: 5,
      icon: Megaphone,
      title: "Departamentul de Relații Publice",
      shortName: "PR",
      color: "from-orange-500 to-orange-600",
      description: "Vocea LSAC în exterior, mereu conectat cu publicul și partenerii.",
      director: {
        name: "Grigoruță Ecaterina",
        photo: "/images/team/directors/pr_dir.jpg"
      },
      assistantDirector: {
        name: "Cojocariu Andrei",
        photo: "/images/team/directors/pr_dir_adj.jpg"
      },
      responsibilities: [
        "Promovează evenimentele LSAC în mediul online și offline",
        "Administrează paginile oficiale de social media (Facebook, Instagram, TikTok etc.)",
        "Colaborează cu departamentul de Design pentru conținut vizual",
        "Menține legătura cu alte organizații studențești"
      ]
    },
    {
      id: 6,
      icon: Music,
      title: "Departamentul de Entertainment",
      shortName: "Entertainment",
      color: "from-cyan-500 to-cyan-600",
      description: "Departamentul care ne reamintește că, dincolo de proiecte, suntem oameni care cresc împreună.",
      director: {
        name: "Gavrilescu Denisa",
        photo: "/images/team/directors/ent_dir.jpg"
      },
      assistantDirector: {
        name: "Butanaru Giulia",
        photo: "/images/team/directors/ent_dir_adj.jpg"
      },
      responsibilities: [
        "Organizarea de evenimente interne recreative, precum seri de jocuri, petreceri tematice, picnicuri",
        "Crearea unei atmosfere prietenoase și incluzive în rândul membrilor LSAC",
        "Colaborarea cu HR pentru evenimente de team-building",
        "Întreținerea moralului și motivației echipei, în special în perioadele aglomerate"
      ]
    }
  ]

  return (
    <section id="departamente" className="py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-100/30 dark:bg-cyan-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Departamentele LSAC
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Fiecare departament joacă un rol esențial în succesul organizației noastre.
            Descoperă echipele care fac posibile toate proiectele și evenimentele LSAC.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="glass-card rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${dept.color} transition-transform duration-300 group-hover:scale-110`}>
                  <dept.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {dept.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${dept.color}`}>
                      {dept.shortName}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                    {dept.description}
                  </p>
                </div>
              </div>

              {/* Department Leadership */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Echipa de conducere:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Director */}
                  <div className="bg-white/50 dark:bg-white/10 rounded-xl p-4 transition-all duration-200 hover:bg-white/70 dark:hover:bg-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                          <ImageWithFallback
                            src={dept.director.photo}
                            alt={dept.director.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                          <Crown className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">{dept.director.name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Director</p>
                      </div>
                    </div>
                  </div>

                  {/* Assistant Director */}
                  <div className="bg-white/50 dark:bg-white/10 rounded-xl p-4 transition-all duration-200 hover:bg-white/70 dark:hover:bg-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                          <ImageWithFallback
                            src={dept.assistantDirector.photo}
                            alt={dept.assistantDirector.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                          <UserCheck className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">{dept.assistantDirector.name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Director Adjunct</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Responsabilități:</h4>
                {dept.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {responsibility}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="glass-card border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 rounded-xl">
            <a href="https://forms.gle/Epipv3LWLjTRoXsC6" target="_blank" rel="noopener noreferrer">Alătură-te unui departament</a>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}