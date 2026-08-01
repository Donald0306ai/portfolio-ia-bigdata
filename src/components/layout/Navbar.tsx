import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const navLinks = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projets', href: '#projects' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')
  const location = useLocation()
  const navigate = useNavigate()
  const isContactPage = location.pathname === '/contact'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy : met à jour le lien actif selon la section visible (page d'accueil uniquement)
  useEffect(() => {
    if (isContactPage) return

    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [isContactPage])

  // Navigation vers une ancre : si on n'est pas sur l'accueil, on y retourne d'abord
  const goToSection = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isContactPage
          ? 'bg-[#041233]/70 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2 justify-self-start">
          <img src={logo} alt="DosnorDev logo" className="h-8 sm:h-9 w-auto" />
          <span className="text-white font-semibold text-lg sm:text-xl tracking-tight">
            Dosnor<span className="text-[#8BB4FF]">Dev</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center justify-center gap-5 lg:gap-8 justify-self-center">
          {navLinks.map((link) => {
            const isActive = !isContactPage && activeSection === link.href
            return (
              <li key={link.href} className="relative">
                <button
                  onClick={() => goToSection(link.href)}
                  className={`text-sm whitespace-nowrap transition-colors pb-1 ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#8BB4FF] rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </li>
            )
          })}
          <li className="relative">
            <Link
              to="/contact"
              className={`text-sm transition-colors pb-1 ${
                isContactPage ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              Contact
            </Link>
            {isContactPage && (
              <motion.span
                layoutId="navbar-active-indicator"
                className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#8BB4FF] rounded-full"
                transition={{ duration: 0.3 }}
              />
            )}
          </li>
        </ul>

        <div className="justify-self-end flex items-center gap-4">
          <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }} className="hidden md:block">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 bg-white text-[#0038B8] text-sm font-semibold px-6 py-2.5 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_-4px_rgba(255,255,255,0.35)] transition-shadow duration-300"
            >
              Me contacter
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#041233]/95 backdrop-blur-md border-t border-white/10"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => goToSection(link.href)}
                    className={`block py-2 text-sm text-left w-full ${
                      !isContactPage && activeSection === link.href
                        ? 'text-white font-medium'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 text-sm ${
                    isContactPage ? 'text-white font-medium' : 'text-white/80 hover:text-white'
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-white text-[#0038B8] text-sm font-semibold px-5 py-2.5 rounded-full"
                >
                  Me contacter
                  <ArrowUpRight size={16} />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}