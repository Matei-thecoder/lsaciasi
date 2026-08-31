import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from './ThemeProvider'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface HeaderProps {
  onContactClick: () => void
}

export function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Acasă', href: '#' },
    { name: 'Departamente', href: '#departamente' },
    { name: 'Evenimente', href: '#evenimente' },
    { name: 'Conducere', href: '#conducere' },
    { name: 'Sponsori', href: '#sponsori' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href === '#contact') {
      onContactClick()
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className={`glass-nav rounded-2xl px-6 py-4 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-xl bg-white/90 dark:bg-gray-900/90' : ''
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo and Association Name */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12">
                <ImageWithFallback
                  src="/images/logos/lsac-logo.png"
                  alt="LSAC Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                  LSAC Iași
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-300">Liga Studenților Facultății de Automatică și Calculatoare</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Theme Toggle and Mobile Menu */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2 hover:bg-white/50 dark:hover:bg-white/10 rounded-lg transition-all duration-200"
                title={theme === 'light' ? 'Comută la tema închisă' : 'Comută la tema deschisă'}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-white/20 dark:border-gray-700/50">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}