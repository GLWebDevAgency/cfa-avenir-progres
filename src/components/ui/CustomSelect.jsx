import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check } from 'lucide-react'

// Helper functions outside component to avoid dependency issues
const getOptionValue = (opt) => typeof opt === 'object' ? opt.value : opt
const getOptionLabel = (opt) => typeof opt === 'object' ? opt.label : opt

const CustomSelect = ({ 
  options = [], 
  value, 
  onChange, 
  placeholder = 'Sélectionnez une option',
  error,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const containerRef = useRef(null)
  const listRef = useRef(null)

  // Trouver l'option sélectionnée
  const selectedOption = options.find(opt => getOptionValue(opt) === value)

  // Handler de sélection (défini avant useEffect)
  const handleSelect = useCallback((option) => {
    onChange(getOptionValue(option))
    setIsOpen(false)
    setHighlightedIndex(-1)
  }, [onChange])

  // Fermer au clic extérieur
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Navigation clavier
  useEffect(() => {
    if (!isOpen) return
    
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setHighlightedIndex(prev => 
            prev < options.length - 1 ? prev + 1 : 0
          )
          break
        case 'ArrowUp':
          e.preventDefault()
          setHighlightedIndex(prev => 
            prev > 0 ? prev - 1 : options.length - 1
          )
          break
        case 'Enter':
          e.preventDefault()
          if (highlightedIndex >= 0) {
            handleSelect(options[highlightedIndex])
          }
          break
        case 'Escape':
          setIsOpen(false)
          break
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, highlightedIndex, options, handleSelect])

  // Scroll vers l'option highlightée
  useEffect(() => {
    if (listRef.current && highlightedIndex >= 0) {
      const items = listRef.current.children
      if (items[highlightedIndex]) {
        items[highlightedIndex].scrollIntoView({ block: 'nearest' })
      }
    }
  }, [highlightedIndex])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      // Highlight l'option sélectionnée au départ
      const selectedIndex = options.findIndex(opt => getOptionValue(opt) === value)
      setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0)
    }
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={toggleOpen}
        className={`
          w-full px-4 py-3 
          bg-gray-50 dark:bg-white/5 
          border rounded-xl 
          text-left
          flex items-center justify-between gap-2
          transition-all duration-300
          ${isOpen 
            ? 'border-primary-500 ring-2 ring-primary-500/20 shadow-lg shadow-primary-500/10' 
            : error 
              ? 'border-red-400 dark:border-red-500' 
              : 'border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
          }
        `}
      >
        <span className={`truncate ${selectedOption ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-white/40'}`}>
          {selectedOption ? getOptionLabel(selectedOption) : placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className={`w-5 h-5 flex-shrink-0 ${isOpen ? 'text-primary-500' : 'text-gray-400 dark:text-white/40'}`} />
        </motion.div>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-50 w-full mt-2 origin-top"
          >
            {/* Backdrop blur container */}
            <div className="
              bg-white/95 dark:bg-gray-900/95 
              backdrop-blur-xl 
              border border-gray-200 dark:border-white/10 
              rounded-2xl 
              shadow-2xl shadow-black/10 dark:shadow-black/40
              overflow-hidden
            ">
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" />
              
              {/* Options list */}
              <ul 
                ref={listRef}
                className="max-h-64 overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-white/10"
              >
                {options.map((option, index) => {
                  const optValue = getOptionValue(option)
                  const optLabel = getOptionLabel(option)
                  const isSelected = value === optValue
                  const isHighlighted = index === highlightedIndex

                  return (
                    <motion.li
                      key={optValue}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <button
                        type="button"
                        onClick={() => handleSelect(option)}
                        onMouseEnter={() => setHighlightedIndex(index)}
                        className={`
                          w-full px-4 py-3 
                          flex items-center justify-between gap-3
                          text-left
                          transition-all duration-200
                          ${isHighlighted 
                            ? 'bg-primary-500/10 dark:bg-primary-500/20' 
                            : 'hover:bg-gray-100 dark:hover:bg-white/5'
                          }
                          ${isSelected 
                            ? 'text-primary-600 dark:text-primary-400 font-medium' 
                            : 'text-gray-700 dark:text-white/80'
                          }
                        `}
                      >
                        <span className="truncate">{optLabel}</span>
                        
                        {/* Check icon for selected */}
                        <AnimatePresence>
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              className="flex-shrink-0"
                            >
                              <div className="w-5 h-5 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </button>
                    </motion.li>
                  )
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CustomSelect
