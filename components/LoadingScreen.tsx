import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [] = useState(1)
  const [showThemeSelection, setShowThemeSelection] = useState(true)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    if (!showThemeSelection) {
      const interval = setInterval(() => {
        clearInterval(interval)
        setTimeout(onLoadingComplete, 0) // Small delay before transitioning
        return 100

      }, 100)

      return () => clearInterval(interval)
    }
  }, [showThemeSelection, onLoadingComplete])

  const handleThemeSelect = (selectedTheme: 'light' | 'dark') => {
    setTheme(selectedTheme)
    setShowThemeSelection(false)
  }

  if (showThemeSelection) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-50/30 to-green-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
        <div className="glass-card rounded-3xl p-8 md:p-12 max-w-md mx-4 text-center">
          <div className="mb-8">
            <div className="w-36 h-36 mx-auto mb-6 rounded-2xl overflow-hidden flex items-center justify-center">
              <ImageWithFallback
                src="/images/logos/lsac-logo.png"
                alt="LSAC Logo"
                className="w-24 h-24 object-contain"
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Bine ați venit la LSAC Iași
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Alegeți tema preferată pentru o experiență optimă
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => handleThemeSelect('light')}
              className={`w-full flex items-center justify-center gap-3 p-4 rounded-xl transition-all duration-200 ${theme === 'light'
                ? 'bg-blue-600 text-white ring-2 ring-blue-300'
                : 'bg-white/50 hover:bg-white/70 text-gray-900'
                }`}
            >
              <Sun className="w-5 h-5" />
              <span className="font-medium">Temă luminoasă</span>
            </button>

            <button
              onClick={() => handleThemeSelect('dark')}
              className={`w-full flex items-center justify-center gap-3 p-4 rounded-xl transition-all duration-200 ${theme === 'dark'
                ? 'bg-gray-800 text-white ring-2 ring-gray-600'
                : 'bg-gray-800/80 hover:bg-gray-800 text-white'
                }`}
            >
              <Moon className="w-5 h-5" />
              <span className="font-medium">Temă întunecată</span>
            </button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
            Puteți schimba tema oricând din header
          </p>
        </div>
      </div>
    )
  }

  return
}