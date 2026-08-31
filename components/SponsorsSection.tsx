import { Star, Award, Handshake, ArrowRight, Building2, Users } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function SponsorsSection() {
  const [showPopup, setShowPopup] = React.useState<boolean | 'contact' | 'candideaza'>(false);

  //brosura download function
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Brosura/MAPA-EVENIMENTE-DRAFT.pdf"; // file path or URL
    link.download = "MAPA-EVENIMENTE-DRAFT.pdf"; // suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  type Sponsor = {
    name: string;
    logo: string;
    description: string;
    link?: string;
  };

  const sponsorTiers: {
    tier: string;
    icon: React.ElementType;
    color: string;
    description: string;
    sponsors: Sponsor[];
  }[] = [
      {
        tier: "Sponsori Premium",
        icon: Star,
        color: "from-yellow-500 to-yellow-600",
        description: "Partenerii noștri strategici care susțin în mod constant misiunea LSAC",
        sponsors: [
          {
            name: "Vivid Lounge and Club",
            logo: "/images/sponsors/vivid.jpg",
            description: "Energie pozitivă, atmosferă cool și experiențe unice.",
            link: "https://www.instagram.com/vividclubiasi"
          },
          {
            name: "Iulius Mall",
            logo: "/images/sponsors/iulius.jpg",
            description: "Loc de întâlnire, cumpărături și distracție alături de prieteni",
            link: "https://iasi.iuliusmall.com/ro"
          },
          {
            name: "Vois",
            logo: "/images/sponsors/vois.webp",
            description: "Furnizează soluţii tehnologice avansate",
            link: "https://www.vodafone.com/careers/professional-career-areas/shared-services"

          },
          {
            name: "Aumovio",
            logo: "/images/sponsors/aumovio.webp",
            description: "Soluții inovatoare pentru mobilitate și transport",
            link: "https://aumovio.com"
          },
          {
            name: "AMD",
            logo: "/images/sponsors/amd.webp",
            description: "Procesoare și plăci grafice de ultimă generație",
            link: "https://www.amd.com"
          },
          {
            name: "Chicano Tattoo",
            link: "https://www.instagram.com/chicanotattooiasi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            description: "Artă, atitudine și cerneală de top",
            logo: "/images/sponsors/chicano.webp",
          }
        ]
      },
      {
        tier: "Sponsori Oficiali",
        icon: Award,
        color: "from-blue-500 to-blue-600",
        description: "Companii care sprijină evenimente specifice și inițiative studențești",
        sponsors: [
          {
            name: "Maison du Café",
            logo: "/images/sponsors/maison.webp",
            description: "Cafea de calitate și momente plăcute împreună",
            link: "https://maisonducafe.ro"
          },
          {
            name: "Class",
            logo: "/images/sponsors/class.webp",
            description: "Restaurante cu tradiție, gust autentic și servicii excelente",
            link: "https://class.com.ro"
          },
          {
            name: "Luk Computers",
            logo: "/images/sponsors/luk.webp",
            description: "Soluții IT moderne, calculatoare performante și suport tehnic",
            link: "https://lukcomputers.ro"
          },
          {
            name: "Laurinda Cofetărie Artizanală",
            logo: "/images/sponsors/laurinda.webp",
            description: "Dulciuri artizanale, făcute cu grijă și pasiune",
            link: "https://www.instagram.com/cofetarialaurinda"
          },
          {
            name: "Jägermeister",
            logo: "/images/sponsors/jager.webp",
            description: "Gust unic și experiențe care aduc oamenii împreună",
            link: "https://ro.jagermeister.com"
          },
          {
            name: "Royal Crown Cola",
            logo: "/images/sponsors/rcc.webp",
            description: "Răcoritoare clasică, cu gust autentic și energizant.",
            link: "https://rccolainternational.com"
          },
          {
            name: "Motivation Gym",
            logo: "/images/sponsors/motivation.webp",
            description: "Locul unde motivația devine stil de viață",
            link: "https://www.motivationgym-iasi.ro"
          },
          {
            name: "Laser Tag Galaxy Arena",

            link: "https://galaxyarena.ro/?gad_source=1",
            description: "Arena unde devii legendă",
            logo: "/images/sponsors/galaxy.webp",
          },
          {
            name: "T Zero",
            link: "https://tzeropub.ro",
            description: "Distracție, muzică bună și vibe autentic de pub.",
            logo: "/images/sponsors/tzero.webp",
          },
          {
            name: "Fitness Fight",
            link: "https://www.facebook.com/p/Fitness-Fight-100063699484450",
            description: "Energie pură, disciplină și adrenalină în ring.",
            logo: "/images/sponsors/fitness_fight.webp",
          },
          {
            name: "Tudor Saloon",
            link: "https://stailer.ro/salon/tudor-saloon",
            description: "Tunsori fresh, stil și atitudine.",
            logo: "/images/sponsors/tudor.webp",
          },
          {
            name: "V-Max Iași",
            link: "https://www.vmaxiasi.ro",
            description: "Viteză, adrenalină și distracție pe pistă",
            logo: "/images/sponsors/vmax.webp",
          },
          {
            name: "Teo's Cafe",
            link: "https://teoscafe.ro",
            description: "Unde aroma întâlnește energia bună.",
            logo: "/images/sponsors/teos.webp",
          },
          {
            name: "EnerGym Iași",
            link: "https://www.energymcenter.ro",
            description: "Antrenează-ți puterea, nu doar corpul.",
            logo: "/images/sponsors/ener.webp",
          },
          {
            name: "Adorable Flowers & Events Iași",
            link: "https://adorable.ro",
            description: "Culori, parfum și emoție în fiecare buchet.",
            logo: "/images/sponsors/adorable.webp",
          }

        ]
      },
      {
        tier: "Parteneri Comunitari",
        icon: Handshake,
        color: "from-green-500 to-green-600",
        description: "Organizații locale care colaborează cu LSAC pentru dezvoltarea comunității",
        sponsors: [
          {
            name: "Zbor Hub",
            logo: "/images/sponsors/zbor.webp",
            description: "Spațiu creativ pentru învățare, colaborare și dezvoltare",
            link: "https://www.instagram.com/zborhub.iasi"
          },
          {
            name: "SAS TUIASI",
            logo: "/images/sponsors/sas.webp",
            description: "Dezvoltă și încurajează spriritul antreprenorial al studenților",
            link: "sas.tuiasi.ro"
          },
          {
            name: "UNSR Iași",
            logo: "/images/sponsors/unsr.webp",
            description: "Duce vocea studenților mai departe",
            link: "https://unsr.ro/iasi"

          },
          {
            name: "CCS Iași",
            logo: "/images/sponsors/ccs.webp",
            description: " Reper cultural și o rampă de lansare a tinerelor talente",
            link: "https://www.ccsiasi.ro"

          }
        ]
      }
    ];

  const benefits = [
    {
      icon: Building2,
      title: "Vizibilitate în comunitatea studențească",
      description: "Brandul dvs. va fi promovat la peste 2000 de studenți activi"
    },
    {
      icon: Users,
      title: "Acces la talente",
      description: "Conectați-vă direct cu cei mai buni studenți din domeniul IT"
    },
    {
      icon: Award,
      title: "Responsabilitate socială",
      description: "Susțineți educația și dezvoltarea tinerilor profesioniști"
    },
    {
      icon: Handshake,
      title: "Parteneriat pe termen lung",
      description: "Construim relații durabile și benefice pentru ambele părți"
    }
  ]

  return (
    <section id="sponsori" className="py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-100/30 dark:bg-cyan-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-100/20 dark:bg-green-900/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Partenerii și Sponsorii Noștri
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            LSAC prosperă datorită sprijinului companiilor și organizațiilor care cred în potențialul
            tinerilor și în puterea educației tehnologice.
          </p>
        </div>

        {/* Sponsor Tiers */}
        <div className="space-y-12 mb-20">
          {sponsorTiers.map((tierData, tierIndex) => (
            <div key={tierIndex} className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${tierData.color}`}>
                  <tierData.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{tierData.tier}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{tierData.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tierData.sponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="bg-white/50 dark:bg-white/10 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-600 flex items-center justify-center">
                        <ImageWithFallback
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {sponsor.link ? (
                            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                              {sponsor.name}
                            </a>
                          ) : (
                            sponsor.name
                          )}
                        </h4>

                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {sponsor.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits for sponsors */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              De ce să deveniți partenerul nostru?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Oferim oportunități unice de colaborare și beneficii tangibile pentru partenerii noștri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Deveniți partenerul nostru!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Alăturați-vă comunității de companii care investesc în viitorul tehnologic al României.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105"
                onClick={() => setShowPopup(true)}>
                Contactați echipa de FR
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="glass border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 rounded-xl transition-all duration-200"
                onClick={handleDownload}>

                Descărcați broșura
              </Button>

            </div>
          </div>
        </div>

      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
            <p className="mb-6 text-white ">
            </p>
            <h2 className="text-xl text-black dark:text-white font-bold mb-4">Contactează echipa de la FR.</h2>
            <p className="mb-1 text-black dark:text-white ">
              Nr. de telefon: +40 771 644 679
            </p>
            <p className="mb-1 text-black dark:text-white ">
              Email : lsaciasi@gmail.com
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-[12px] mt-6 hover:bg-blue-700 hover: transition-all duration-200"
            >

              Închide
            </button>
          </div>
        </div>
      )}
    </section>
  )
}