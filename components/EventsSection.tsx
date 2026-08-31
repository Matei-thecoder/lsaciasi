import { Calendar, Clock, MapPin, Users, ArrowRight, PartyPopper, Gift, Gamepad2, Trophy, Code, GraduationCap, Star } from 'lucide-react'
import { Button } from './ui/button'
import { useState } from 'react';
export function EventsSection() {
  const [showPopup, setShowPopup] = useState(false);
  const openInNewTab = (url: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank"; // tab nou
    a.rel = "noopener noreferrer";
    a.click();
  };
  const mainEvents = [
    {
      id: 1,
      title: "Campus Connect",
      emoji: "🎓",
      date: "27-28 septembrie 2025",
      time: "Weekend",
      location: "Iași",
      description: "Primul eveniment al anului universitar, dedicat bobocilor, are rolul de a-i familiariza cu campusul și viața de student. O oportunitate excelentă de a descoperi spațiile universitare, de a cunoaște colegii și de a face primii pași în comunitatea academică.",
      attendees: "Toți bobocii",
      category: "Orientare și integrare",
      color: "from-emerald-400 to-teal-600",
      icon: GraduationCap
    },
    {
      id: 2,
      title: "Welcome Party LSAC",
      emoji: "🎉",
      date: "28 septembrie 2025",
      time: "Weekend",
      location: "Iași",
      description: "Prima petrecere studențească a anului universitar, Welcome Party, dă tonul distracției și marchează începutul vieții de student. O seară plină de muzică, dans și energie, unde emoțiile de început se transformă în prietenii și amintiri de neuitat.",
      attendees: "Toți bobocii",
      category: "Recreațional",
      color: "from-pink-500 to-orange-500",
      icon: PartyPopper
    },
    {
      id: 3,
      title: "Treasure Hunt",
      emoji: "🗺️",
      date: "25-26 octombrie 2025",
      time: "Weekend",
      location: "Iași",
      description: "Un eveniment interactiv și plin de aventură, care îi provoacă pe boboci să exploreze campusul și să descopere secretele sale ascunse. Printr-o serie de indicii și provocări, participanții sunt încurajați să colaboreze, să gândească creativ și să se bucure de spiritul de echipă, toate acestea într-un cadru distractiv și dinamic.",
      attendees: "Toți bobocii",
      category: "Orientare și integrare",
      color: "from-emerald-400 to-teal-600",
      icon: GraduationCap
    },
    {
      id: 4,
      title: "Balul Bobocilor LSAC",
      emoji: "🎉",
      date: "29 noiembrie 2025",
      time: "Seara",
      location: "TBA",
      description: "Unul dintre cele mai așteptate evenimente ale începutului de an universitar, Balul Bobocilor este organizat în totalitate de LSAC și dedicat noiei generații de studenți. Evenimentul oferă bobocilor ocazia perfectă de a se cunoaște, de a lega prietenii și de a-și exprima latura artistică prin momente creative și pline de energie.",
      attendees: "Toți bobocii",
      category: "Social",
      color: "from-purple-500 to-purple-600",
      icon: PartyPopper
    },
    {
      id: 5,
      title: "Let's Start a Christmas Story – by LSAC",
      emoji: "🎄",
      date: "1-19 decembrie 2025",
      time: "În preajma sărbătorilor",
      location: "Facultatea AC",
      description: "Un eveniment caritabil prin care ne adunăm cu un scop nobil: să aducem zâmbete celor care au nevoie. Prin vânzarea de prăjituri delicioase și decorațiuni de Crăciun lucrate cu suflet, strângem fonduri pentru cauze sociale și susținem comunitatea din jurul nostru. Este un prilej de a celebra venirea sărbătorilor împreună, de a cânta colinde, de a împodobi bradul și de a ne bucura de căldura unei comunități unite.",
      attendees: "Comunitatea LSAC",
      category: "Caritabil",
      color: "from-red-500 to-green-600",
      icon: Gift
    },
    /*
    {
      id: 6,
      title: "LAN Party LSAC",
      emoji: "🎮",
      date: "28 februarie si 1 martie 2026",
      time: "Weekend",
      location: "TBA",
      description: "Un eveniment dedicat studenților pasionați de jocuri video și tehnologie, care își propune să combine distracția cu socializarea într-un cadru offline. Evenimentul oferă participanților ocazia de a se reuni pentru o experiență de gaming autentică, unde competițiile live, strategiile de echipă și atmosfera energică transformă o zi obișnuită într-una memorabilă.",
      attendees: "Gameri pasionați",
      category: "Gaming",
      color: "from-blue-500 to-cyan-600",
      icon: Gamepad2
    },*/
    {
      id: 6,
      title: "ITMarathon",
      emoji: "🧑‍💻",
      date: "25-26 aprilie 2026",
      time: "Weekend complet",
      location: "Facultatea AC",
      description: "Unul dintre cele mai mari evenimente organizate de LSAC Iași, care adună studenți și elevi pasionați de tehnologie într-un cadru inovativ. Evenimentul include un hackathon provocator și JuniorDev pentru elevi (câștigătorul beneficiază de intrare la AC fără examen de admitere). Include și Târgul InfoIT, unde studenții pot interacționa cu firme de top și pot afla despre oportunitățile de internship și angajare.",
      attendees: "500+ participanți",
      category: "Tehnologie",
      color: "from-green-500 to-teal-600",
      icon: Code
    },
    {
      id: 7,
      title: "Olimpiada AC",
      emoji: "🏆",
      date: "16-17 mai 2026",
      time: "O zi întreagă",
      location: "Campus universitar",
      description: "Un eveniment sportiv cu scop caritabil, care reunește studenții într-o competiție plină de energie, fair-play și solidaritate. Prin diverse probe sportive – de la fotbal și volei până la activități recreative – studenții au ocazia să se bucure de mișcare, să formeze echipe și să își arate spiritul competitiv într-un cadru prietenos. Fondurile strânse sunt direcționate către cauze sociale.",
      attendees: "Toți studenții AC",
      category: "Sport",
      color: "from-orange-500 to-red-600",
      icon: Trophy
    },
    {
      id: 8,
      title: "DevMe - Tabăra de Vară",
      emoji: "👥",
      date: "4-12 iulie 2026",
      time: "O săptămână",
      location: "Iași",
      description: "O tabără de vară dedicată liceenilor pasionați de tehnologie. Participanții au ocazia să experimenteze viața de student timp de o săptămână, să descopere cum este să fii parte din Liga Studenților AC Iași și să învețe cum este să lucrezi în domeniul IT. Este o experiență valoroasă care le oferă tinerilor o imagine reală asupra vieții universitare și asupra meseriilor din domeniul IT.",
      attendees: "Liceeni selectați",
      category: "Educație",
      color: "from-indigo-500 to-purple-600",
      icon: GraduationCap
    }
  ]

  const externalEvents = [
    {
      title: "Gaudeamus",
      description: "Un eveniment cultural unde ligile studențești formează alianțe și dau viață unor momente artistice unice – de la teatru, muzică și dans, până la performance-uri creative. Pentru LSAC, care a obținut locul 3 anul acesta, Gaudeamus este o ocazie de a celebra prietenia și creativitatea.",
      achievement: "Locul 3 - 2024"
    },
    {
      title: "Parada Festudis",
      description: "Un eveniment plin de culoare și energie, în care fiecare ligă studențească își exprimă identitatea printr-un moment artistic unic. Cu mascote, cântece proprii și elemente simbolice, ligile defilează prin Iași, transformând orașul într-o scenă vie a creativității și apartenenței.",
      achievement: "Participare activă"
    }
  ]

  return (
    <section id="evenimente" className="py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/30 dark:bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-100/20 dark:bg-cyan-900/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Evenimentele Ligii
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Activitatea LSAC Iași nu se măsoară doar în numărul de membri sau în anii de existență,
            ci mai ales în experiențele pe care le creează și în momentele care aduc studenții împreună.
            De-a lungul timpului, liga a dezvoltat un portofoliu divers de evenimente, menite să răspundă
            nevoilor reale ale studenților – fie ele educaționale, sociale sau culturale.
          </p>
        </div>

        {/* Main Events Timeline */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-cyan-200 dark:from-blue-700 dark:via-purple-700 dark:to-cyan-700 transform md:-translate-x-px"></div>

          <div className="space-y-12">
            {mainEvents.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 transform -translate-x-1/2">
                  <div className={`w-6 h-6 bg-gradient-to-r ${event.color} rounded-full border-4 border-white dark:border-gray-800 shadow-lg flex items-center justify-center`}>
                    <event.icon className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Event card */}
                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                  <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{event.emoji}</span>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${event.color}`}>
                            {event.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-justify">
                      {event.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>

                    <Button variant="ghost" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-0 group"
                      onClick={() => {
                        switch (index) {
                          case 0:
                            openInNewTab("https://www.campusconnect.lsaciasi.ro");
                            break;
                          case 1:
                            setShowPopup(true);;
                            break;
                          case 2:
                            setShowPopup(true);
                            break;
                          case 3:
                            setShowPopup(true);
                            break;
                          case 4:
                            setShowPopup(true);
                            break;
                          case 5:
                            openInNewTab("https://www.lanparty.lsaciasi.ro");
                            break;
                          case 6:
                            openInNewTab("https://itmarathon.lsaciasi.ro");
                            break;
                          case 7:
                            openInNewTab("https://www.olimpiada.lsaciasi.ro");
                            break;
                          case 8:
                            openInNewTab("https://devme.lsaciasi.ro");

                            break;
                          default:
                        }
                      }}

                    >
                      Află mai multe
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showPopup && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
              <h2 className="text-xl text-black dark:text-white font-bold mb-4">Detalii Eveniment
              </h2>
              <p className="mb-6 text-black dark:text-white">
                Pentru a afla mai multe detalii despre acest eveniment, te rugăm să ne urmărești pe social media.
              </p>

              <button
                onClick={() => setShowPopup(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Închide
              </button>
            </div>
          </div>
        )}
        {/* External Events Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Participare la Evenimente Externe
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              În afară de evenimentele proprii, LSAC participă și la inițiative organizate
              pentru organizațiile studențești din Iași.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {externalEvents.map((event, index) => (
              <div key={index} className="bg-white/50 dark:bg-white/10 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{event.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-justify">
                  {event.description}
                </p>
                <div className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium">
                  {event.achievement}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Vrei să participi la evenimentele noastre?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Alătură-te comunității LSAC și fii parte din experiențe memorabile
              și oportunități unice de dezvoltare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105"
                onClick={() => {
                  const element = document.querySelector('#evenimente')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Vezi calendarul complet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="glass border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 rounded-xl transition-all duration-200"
                onClick={() => {
                  // Deschide popup-ul de contact
                  const contactButton = document.querySelector('a[href="#contact"]')
                  if (contactButton) {
                    (contactButton as HTMLElement).click()
                  }
                }}>
                Contactează-ne
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}