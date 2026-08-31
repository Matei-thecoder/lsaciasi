import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)
  const faqs = [
    {
      question: "Ce este LSAC Iași și care este misiunea organizației?",
      answer: "LSAC (Liga Studenților din Automatică și Calculatoare) Iași este o organizație studențească non-profit care își propune să conecteze studenții din domeniul IT, să ofere oportunități de dezvoltare profesională și personală, și să organizeze evenimente educative și de networking. Misiunea noastră este să construim o comunitate puternică de studenți pasionați de tehnologie și să facilităm tranziția lor către cariera profesională."
    },
    {
      question: "Cum mă pot alătura LSAC ca membru sau voluntar?",
      answer: "Poți să te alături LSAC în mai multe moduri: ca membru activ (prin procesul de recrutare anual), ca voluntar pentru evenimente specifice, sau prin participarea la activitățile noastre. Pentru a deveni membru activ, urmărește anunțurile de recrutare care se fac de obicei la începutul fiecărui semestru. Contactează departamentul de HR pentru mai multe informații despre oportunitățile disponibile."
    },
    {
      question: "Ce tipuri de evenimente organizează LSAC?",
      answer: "LSAC organizează o gamă variată de evenimente: workshop-uri tehnologice, sesiuni de networking cu companii IT, concursuri de programare, hackathon-uri, conferințe cu speakeri din industrie, activități de team-building, petreceri tematice și evenimente caritabile. Fiecare departament contribuie cu expertiza sa pentru a crea experiențe memorabile și educative."
    },
    {
      question: "Ce beneficii am ca membru LSAC?",
      answer: "Ca membru LSAC, vei avea acces la: oportunități de networking cu profesioniști din industria IT, workshop-uri gratuite de dezvoltare profesională, experiență practică în managementul de proiecte, posibilitatea de a lucra în echipe interdisciplinare, acces prioritar la evenimente și internship-uri, dezvoltarea competențelor de leadership, și o rețea puternică de contacte profesionale."
    },
    {
      question: "Cum funcționează departamentele din LSAC?",
      answer: "LSAC este organizat în 6 departamente principale: FR (Fundraising), HR (Resurse Umane), IT, Design, PR (Relații Publice) și Entertainment. Fiecare departament are responsabilități specifice și contribuie la succesul organizației. Membrii pot alege departamentul care se potrivește cel mai bine cu interesele și competențele lor, iar pe parcurs pot colabora cu alte departamente sau chiar să își schimbe departamentul."
    },
    {
      question: "Ce oportunități de dezvoltare profesională oferă LSAC?",
      answer: "LSAC oferă multiple oportunități de dezvoltare: experiență în managementul de proiecte și echipe, competențe de comunicare și prezentare, networking cu companii IT și recruiteri, mentorat din partea membrilor senior și alumni, workshop-uri de dezvoltare soft skills, experiență în organizarea de evenimente, și posibilitatea de a lua responsabilități de leadership."
    },
    {
      question: "Cum pot să susțin LSAC ca absolvent sau profesionist?",
      answer: "Ca absolvent sau profesionist, poți să susții LSAC prin: mentorat pentru membrii actuali, susținerea financiară sau logistică a evenimentelor, participarea ca speaker la conferințe și workshop-uri, oferirea de internship-uri sau joburi pentru membri, sharing de experiență și best practices, sau prin promovarea organizației în rețeaua ta profesională."
    },
    {
      question: "Care sunt criteriile pentru a deveni membru în conducerea LSAC?",
      answer: "Pentru a candida la poziții de conducere în LSAC, de obicei este necesar să fi fost membru activ pentru cel puțin un an academic, să ai experiență în coordonarea de proiecte sau echipe, să demonstrezi leadership și inițiativă, să cunoști bine organizația și valorile ei, și să ai o viziune clară pentru dezvoltarea LSAC. Procesul de selecție include de obicei prezentarea unei candidaturi și interviuri cu membrii actuali ai conducerii."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-100/50 dark:bg-cyan-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Întrebări Frecvente
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Găsiți răspunsuri la cele mai comune întrebări despre LSAC Iași,
            activitățile noastre și modalitățile de implicare.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/20 dark:hover:bg-white/10 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                  )}
                </div>
              </button>

              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-white/20 dark:border-white/10 pt-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Nu ai găsit răspunsul la întrebarea ta?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Echipa noastră este mereu disponibilă să răspundă la întrebările tale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-all duration-200 transform hover:scale-105"
                onClick={() => {
                  // Deschide popup-ul de contact
                  const contactButton = document.querySelector('a[href="#contact"]')
                  if (contactButton) {
                    (contactButton as HTMLElement).click()
                  }
                }}
              >
                Contactează-ne direct
              </button>

              <button
                className="glass border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-xl transition-all duration-200"
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Urmărește-ne pe social media
              </button>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}