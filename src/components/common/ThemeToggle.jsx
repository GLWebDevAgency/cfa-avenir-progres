import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`p-2.5 rounded-xl transition-all duration-300
        bg-gray-100 dark:bg-white/10 
        hover:bg-gray-200 dark:hover:bg-white/20 
        text-gray-600 dark:text-white/80 
        hover:text-primary-500 dark:hover:text-primary-400
        ${className}`}
      aria-label={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  )
}

export default ThemeToggle
