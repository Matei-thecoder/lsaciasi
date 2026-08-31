import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import { LoadingScreen } from './components/LoadingScreen'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { DepartmentsSection } from './components/DepartmentsSection'
import { EventsSection } from './components/EventsSection'
import { LeadershipSection } from './components/LeadershipSection'
import { SponsorsSection } from './components/SponsorsSection'
import { FAQSection } from './components/FAQSection'
import { Footer } from './components/Footer'
import { ContactPopup } from './components/ContactPopup'
import { LanPartyInscriereSection } from './components/LanPartyInscriereSection'
import { ITMarathonInscriereSection } from './components/ITMarathonInscriereSection'

import InscriereModal_LAN from './components/InscriereModal_LAN'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)
  const [isInscriereOpen, setIsInscriereOpen] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const handleOpenContactPopup = () => {
    setIsContactPopupOpen(true)
  }

  const handleCloseContactPopup = () => {
    setIsContactPopupOpen(false)
  }

  const handleOpenInscriere = () => {
    setIsInscriereOpen(true)
  }

  const handleCloseInscriere = () => {
    setIsInscriereOpen(false)
  }

  return (
    <Router>
      <ThemeProvider>
        {isLoading ? (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        ) : (
          <Routes>
            <Route path="/" element={
              <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50/30 to-green-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
                <Header onContactClick={handleOpenContactPopup} />
                <main>
                  <HeroSection />
                  {/*<LanPartyInscriereSection onInscriereClick={handleOpenInscriere} />
                  <ITMarathonInscriereSection  />*/}
                  <DepartmentsSection />
                  <EventsSection />
                  <LeadershipSection />
                  <SponsorsSection />
                  <FAQSection />
                </main>
                <Footer />
                <ContactPopup 
                  isOpen={isContactPopupOpen} 
                  onClose={handleCloseContactPopup} 
                />
                <InscriereModal_LAN 
                  open={isInscriereOpen}
                  onClose={handleCloseInscriere}
                />
              </div>
            } />
          </Routes>
        )}
      </ThemeProvider>
    </Router>
  )
}