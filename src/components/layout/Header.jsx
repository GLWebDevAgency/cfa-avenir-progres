import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone, ArrowRight, Sun, Moon } from 'lucide-react'
import { siteConfig, navigation } from '@/data/siteConfig'
import { useTheme } from '@/context/ThemeContext'
import { AvenirProgresLogo } from '@/assets/logos'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 shadow-lg shadow-gray-900/5 dark:shadow-none' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative flex-shrink-0">
              {/* Glow effect on hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <AvenirProgresLogo size="sm" className="relative transition-transform duration-300 group-hover:scale-105" />
            </div>
            {/* Nom de marque - visible uniquement sur grands écrans */}
            <div className="hidden xl:block">
              <span className="text-lg font-bold tracking-tight whitespace-nowrap">
                <span className="text-gray-900 dark:text-white">Avenir</span>
                <span className="text-primary-500">&</span>
                <span className="text-gradient">Progres</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered Pill */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-1 bg-gray-50/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-full px-2 py-1.5 border border-gray-100 dark:border-gray-700/50">
              {navigation.slice(0, 6).map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-md'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/70 dark:hover:bg-gray-700/50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 md:p-2.5 rounded-full transition-all duration-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              aria-label={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
            >
              {theme === 'light' ? <Moon className="w-4 h-4 md:w-5 md:h-5" /> : <Sun className="w-4 h-4 md:w-5 md:h-5" />}
            </button>

            {/* Phone - Desktop */}
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="hidden xl:flex items-center gap-2 px-3 py-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{siteConfig.phone}</span>
            </a>

            {/* CTA Button - Premium with shimmer */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-primary-400 hover:from-primary-600 hover:to-primary-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden group"
            >
              <span className="relative z-10">Documentation</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              aria-label="Menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-gray-700 dark:text-white" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm lg:hidden z-40"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-white/10 lg:hidden z-50"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-white/10">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-900 dark:text-white" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-5">
                  <div className="space-y-1">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <NavLink
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className={({ isActive }) =>
                            `block px-4 py-3.5 rounded-xl font-medium transition-all ${
                              isActive
                                ? 'bg-primary-500/10 text-primary-500 border border-primary-500/20'
                                : 'text-gray-600 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Mobile Footer */}
                <div className="p-5 border-t border-gray-200 dark:border-white/10 space-y-4">
                  {/* Theme Toggle Mobile */}
                  <button
                    onClick={toggleTheme}
                    className="flex items-center justify-between w-full p-4 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10"
                  >
                    <span className="font-medium text-gray-700 dark:text-white">
                      {theme === 'light' ? 'Mode sombre' : 'Mode clair'}
                    </span>
                    {theme === 'light' ? <Moon className="w-5 h-5 text-gray-600" /> : <Sun className="w-5 h-5 text-yellow-400" />}
                  </button>

                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10"
                  >
                    <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-white/50">Appelez-nous</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{siteConfig.phone}</p>
                    </div>
                  </a>
                  
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full btn btn-primary btn-lg"
                  >
                    Documentation gratuite
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
