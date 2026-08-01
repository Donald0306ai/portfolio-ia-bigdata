import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import logo from '../../assets/images/logo.png'

const navLinks = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
]

const quickLinks = [
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '/contact' },
  { label: 'Voir le CV', href: 'https://drive.google.com/file/d/1ZZvRfEZUKZ9QOUiRCvB751DzVI6jtsP-/view?usp=sharing' },
  { label: 'GitHub', href: 'https://github.com' },
]

const socials = [
  { Icon: FaGithub, href: 'https://github.com', label: 'GitHub', color: '#FFFFFF' },
  { Icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0A66C2' },
  { Icon: FaXTwitter, href: 'https://twitter.com', label: 'Twitter', color: '#FFFFFF' },
  { Icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram', color: '#E1306C' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0E27] border-t border-white/10 pt-16 pb-8 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>+228 98 26 32 88</li>
              <li>amouzouganjeando@gmail.com</li>
              <li>Lomé, Togo</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="DosnorDev logo" className="h-8 w-auto" />
              <h3 className="text-white font-bold text-2xl">
                Dosnor<span className="text-[#8BB4FF]">Dev</span>
              </h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Étudiant en IA & Big Data, je conçois des solutions data-driven
              et des applications web modernes.
            </p>
          </div>
        </div>

        <div className="text-center text-white/50 text-sm border-t border-white/10 pt-6">
          Copyright © 2026 Tous droits réservés | Site conçu par{' '}
          <span className="text-[#8BB4FF]">Amouzougan Folly Jean Donald</span>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          {socials.map(({ Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#8BB4FF] hover:bg-white/10 hover:border-white/25 transition-colors"
            >
              <Icon
                size={18}
                className="transition-colors"
                style={{ color: undefined }}
                onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = '')}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}