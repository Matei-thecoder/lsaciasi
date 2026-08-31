import React from 'react';
import { Crown, Users, Megaphone, FileText, Settings, Shield } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function LeadershipSection() {
  const [showPopup, setShowPopup] = React.useState<boolean | 'candideaza'>(false);
  const leaders = [
    {
      id: 1,
      name: "Enache Brianna",
      position: "Președinte",
      year: "Anul III",
      specialization: "CTI",
      previousRole: "fost director al departamentului de PR",
      icon: Crown,
      color: "from-purple-500 to-purple-600",
      photo: "/images/team/leadership/president.jpg",
      description: "În calitate de Președinte, Enache Brianna este pilonul central și liderul asumat al organizației. Având la activ experiența de Director al departamentului de PR, ea îmbină viziunea pragmatică cu o comunicare excelentă, reprezentând vocea oficială a LSAC în fața facultății, a mediului universitar și a partenerilor externi. Dincolo de responsabilitățile de decizie strategică, rolul său este de a armoniza inițiativele departamentelor cu misiunea pe termen lung a ligii. Prin coordonarea directă a vicepreședinților și supervizarea tuturor proiectelor, setează standardul de performanță și rămâne un model de dedicare, echilibru și atitudine pentru întreaga echipă."
    },
    {
      id: 2,
      name: "Mârza Adrian",
      position: "Vice  Relații Interne",
      year: "Anul III",
      specialization: "CTI",
      previousRole: "fost director adjunct la departamentul de FR",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      photo: "/images/team/leadership/rel_int.jpg",
      description: "Dacă Președintele trasează direcția strategică, Vicepreședintele pentru Relații Interne este motorul operațional care asigură execuția impecabilă. Venind din rolul de Director Adjunct FR, Mârza Adrian gestionează dinamica internă a LSAC. Coordonează activitatea voluntarilor, menține coeziunea echipei și optimizează procesele interne de lucru. Este omul care îmbină rigoarea organizatorică cu spiritul de echipă, asigurându-se că fiecare membru își atinge potențialul într-un mediu colaborativ, mereu ghidat de dorința de a crește și de a funcționa mai bine împreună."

    },
    {
      id: 3,
      name: "Flocea Teodor",
      position: "Vice Relații Externe",
      year: "Anul III",
      specialization: "IS",
      previousRole: "fost director la departamentul de FR",
      icon: Megaphone,
      color: "from-green-500 to-green-600",
      photo: "/images/team/leadership/rel_ext.jpg",
      description: "Vicepreședintele pentru Relații Externe reprezintă interfața LSAC cu mediul socio-economic și academic extins. Fost Director la departamentul FR, Flocea Teodor coordonează cu diplomație și viziune comunicarea oficială cu presa, sponsorii, companiile partenere și alte organizații studențești. Responsabilitatea sa principală este consolidarea imaginii publice a ligii și atragerea de noi oportunități de finanțare și colaborare. Orice parteneriat încheiat și orice interacțiune externă reflectă direct valoarea, seriozitatea și profesionalismul pe care el le proiectează în numele asociației."
    },
    {
      id: 4,
      name: "Mocanu Adrian",
      position: "Secretar",
      year: "Anul III",
      specialization: "IS",
      previousRole: "fost director al departamentului de Design",
      icon: FileText,
      color: "from-orange-500 to-orange-600",
      photo: "/images/team/leadership/secretar.jpg",
      description: "Adesea discret pentru publicul larg, dar absolut esențial pentru organizație, Secretarul este gardianul administrativ și organizatoric al LSAC. Cu un background creativ ca Director al departamentului de Design, Mocanu Adrian aduce claritate și structură în fluxul informațional. El garantează transparența și legalitatea activităților, redactează procesele verbale, gestionează corespondența oficială și arhivează meticulos documentele. Este vocea rațională din culise, asigurându-se că tot ceea ce construiește echipa se bazează pe o fundație administrativă impecabilă."
    },
    {
      id: 5,
      name: "Constandache Ștefan",
      position: "Directorul Administrativ",
      year: "Anul III",
      specialization: "CTI",
      previousRole: "fost director adjunct la departamentul de IT",
      icon: Settings,
      color: "from-cyan-500 to-cyan-600",
      photo: "/images/team/leadership/dir_adm.jpg",
      description: "Directorul Administrativ este garantul execuției practice, cel care transformă planurile în realitate logistică fără sincope. Fost Director de IT, Constandache Ștefan coordonează infrastructura fizică a asociației, de la rezervarea spațiilor și evidența echipamentelor, până la asigurarea necesarului tehnic pentru fiecare eveniment în parte. Acesta este un rol de fundație, critic pentru succesul oricărui proiect; fără organizarea sa riguroasă, inițiativele ligii nu ar putea prinde contur. Este partenerul de încredere al tuturor departamentelor, oferind suportul logistic necesar pentru a performa la cel mai înalt nivel."
    }
  ]

  const censors = [
    {
      id: 1,
      name: "Cristian Roca",
      position: "Cenzor",
      previousRole: "fost președinte",
      icon: Shield,
      color: "from-gray-500 to-gray-600",
      photo: "/images/team/leadership/c1.jpg",
      description: "Având perspectiva de ansamblu a organizației, aduce în comisia de cenzori viziunea strategică și experiența deciziilor de impact. Pentru că a purtat responsabilitatea întregii asociații, înțelege cel mai bine complexitatea relațiilor instituționale și a managementului de criză. Rolul său acum este de a oferi noului board o ghidare clară, obiectivă și soluții testate, asigurând continuitatea misiunii LSAC pe termen lung."
    },
    {
      id: 2,
      name: "Afrăsinei Anamaria",
      position: "Cenzor",
      previousRole: "fost vice pe relații interne",
      icon: Shield,
      color: "from-gray-500 to-gray-600",
      photo: "/images/team/leadership/c2.jpg",
      description: "Un fin cunoscător al dinamicii echipelor, aduce o expertiză esențială privind cultura organizațională. Prin experiența sa de coordonare a voluntarilor, veghează asupra „sănătății” mediului de lucru din LSAC. Oferă consultanță prețioasă pentru rezolvarea eventualelor blocaje de comunicare interne și se asigură că dezvoltarea membrilor și coeziunea rămân mereu o prioritate, echilibrând performanța cu motivația."
    },
    {
      id: 3,
      name: "Ștefanache Elisa Michela",
      position: "Cenzor",
      previousRole: "fost vice pe relații externe",
      icon: Shield,
      color: "from-gray-500 to-gray-600",
      photo: "/images/team/leadership/c3.jpg",
      description: "Cu o vastă experiență în negociere și diplomație, aduce un ochi critic și constructiv asupra imaginii publice și a parteneriatelor ligii. Știe exact cum trebuie să se poziționeze LSAC în fața mediului privat, a presei și a altor organizații. În rolul de cenzor, evaluează eficiența demersurilor externe și garantează că standardele de profesionalism, pe care le-a consolidat în mandatul său, sunt menținute și dezvoltate."
    },
    {
      id: 4,
      name: "Cătănescu George",
      position: "Cenzor",
      previousRole: "fost secretar",
      icon: Shield,
      color: "from-gray-500 to-gray-600",
      photo: "/images/team/leadership/c4.jpg",
      description: "Vocea rațiunii legale și administrative. Cunoscând la virgulă regulamentele, procedurile și importanța birocrației interne, aduce rigoare în evaluarea activității curente. Rolul său este să asigure transparența decizională, să verifice conformitatea cu statutul asociației și să ofere boardului siguranța că toate inițiativele curajoase sunt susținute de o bază administrativă impecabilă, fără vulnerabilități."
    },
    {
      id: 5,
      name: "Matei Denisa-Ioana",
      position: "Cenzor",
      previousRole: "fost director administrativ",
      icon: Shield,
      color: "from-gray-500 to-gray-600",
      photo: "/images/team/leadership/c5.jpg",
      description: "Aducând expertiza practică direct din inima departamentelor, înțelege perfect tranziția de la strategie la execuție. Experiența sa hands-on îl face capabil să auditeze fezabilitatea proiectelor, eficiența resurselor și modul real în care deciziile boardului se implementează la nivel de voluntari. Oferă un feedback extrem de pragmatic, asigurându-se că planurile nu arată bine doar pe hârtie, ci sunt perfect executabile în realitate."
    }
  ]

  const firstCensors = censors.slice(0, 3);
  const lastCensors = censors.slice(3);

  const renderCensorCard = (censor: (typeof censors)[number]) => (
    <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl group text-center h-full">
      <div className="flex flex-col items-center mb-6">
        <div className="relative inline-block mb-4">
          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-700">
            <ImageWithFallback
              src={censor.photo}
              alt={censor.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`absolute -bottom-1 -right-1 w-8 h-8 rounded-lg bg-gradient-to-r ${censor.color} flex items-center justify-center`}>
            <censor.icon className="w-4 h-4 text-white" />
          </div>
        </div>
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {censor.name}
        </h4>
        <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${censor.color} mb-2`}>
          {censor.position}
        </div>
        <p className="text-xs italic text-gray-600 dark:text-gray-400 mb-4">
          {censor.previousRole}
        </p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
          {censor.description}
        </p>
      </div>
    </div>
  );

  return (
    <section id="conducere" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-100/50 dark:bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-50/30 dark:bg-cyan-900/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Conducerea LSAC
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Echipa de conducere care ghidează viziunea și strategia organizației,
            asigurând că fiecare proiect și inițiativă reflectă valorile LSAC.
          </p>
        </div>

        <div className="space-y-12">
          {leaders.map((leader, index) => (
            <div
              key={leader.id}
              className={`glass-card rounded-3xl p-8 lg:p-12 transition-all duration-300 hover:shadow-2xl group ${index === 0 ? 'ring-2 ring-purple-200 dark:ring-purple-700' : ''
                }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                {/* Avatar and basic info */}
                <div className="lg:col-span-1 text-center lg:text-left">
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-700">
                      <ImageWithFallback
                        src={leader.photo}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-gradient-to-r ${leader.color} flex items-center justify-center`}>
                      <leader.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {leader.name}
                  </h3>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${leader.color} mb-3`}>
                    {leader.position}
                  </div>
                  <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <p><span className="font-medium">Anul:</span> {leader.year}</p>
                    <p><span className="font-medium">Specializarea:</span> {leader.specialization}</p>
                    <p className="text-xs italic">{leader.previousRole}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="lg:col-span-3">
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-10">

        </div>
        {/* Censors Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Comisia de Cenzori
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comisia de cenzori supraveghează activitățile organizației și asigură respectarea
              valorilor și principiilor LSAC, aducând experiența și perspectiva necesare pentru
              dezvoltarea continuă a asociației.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {firstCensors.map((censor) => (
              <div key={censor.id} className="w-full">
                {renderCensorCard(censor)}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:justify-center">
            {lastCensors.map((censor) => (
              <div key={censor.id} className="w-full md:w-[22rem]">
                {renderCensorCard(censor)}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
       {/*} <div className="text-center mt-16">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Vrei să faci parte din echipa de conducere?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              LSAC este mereu în căutarea de lideri pasionați și dedicați.
              Alătură-te nouă și contribuie la dezvoltarea comunității studențești.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-all duration-200 transform hover:scale-105"
                onClick={() => setShowPopup('candideaza')}
              >
                Candidează pentru conducere
              </button>
              <button className="glass border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-xl transition-all duration-200"
                onClick={() => {
                  // Deschide popup-ul de contact
                  const contactButton = document.querySelector('a[href="#contact"]')
                  if (contactButton) {
                    (contactButton as HTMLElement).click()
                  }
                }}>
                Contactează echipa
              </button>
            </div>
          </div>
        </div>
        */}
      </div>
      {showPopup === 'candideaza' && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
            <h2 className="text-xl text-black dark:text-white font-bold mb-4">Mai târziu.</h2>
            <p className="mb-6 text-black dark:text-white ">
              La momentul actual nu sunt deschise aplicațiile pentru rolurile de conducere.
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
    </section>
  )
}