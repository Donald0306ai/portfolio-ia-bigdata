import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SiPython, SiReact, SiHtml5, SiCss, SiPostgresql, SiGit, SiTailwindcss } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'
import profilePhoto from '../../assets/images/profile.png'

const terminalLines = ['IA_', 'BIG DATA_', 'DÉVELOPPEMENT_']

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-5 sm:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#8BB4FF] text-sm tracking-widest mb-3"
          >
            BONJOUR, JE SUIS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            AMOUZOUGAN FOLLY JEAN DONALD
          </motion.h1>

          <div className="mb-6 space-y-1">
            {terminalLines.map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                className="text-white/90 text-lg sm:text-xl font-mono"
              >
                {line}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                  className="text-[#8BB4FF]"
                >
                  |
                </motion.span>
              </motion.p>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-white/70 text-sm sm:text-base max-w-md mb-8 leading-relaxed">
           
            Étudiant en Intelligence Artificielle et Big Data à ESGIS, Lomé.
            Je conçois des solutions data-driven et j'explore le développement
            d'applications intelligentes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.95 }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border border-white/25 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              VOIR MES PROJETS
              <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1ZZvRfEZUKZ9QOUiRCvB751DzVI6jtsP-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border border-white/25 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              VOIR CV
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[580px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-72 sm:w-96 lg:w-[420px] aspect-square rounded-full overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={profilePhoto}
                alt="Amouzougan Folly Jean Donald"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {[
            { Icon: SiPython, color: '#3776AB', top: '1%', left: 'calc(50% - 26px)', delay: 0, size: 52 },
            { Icon: FaJava, color: '#E76F00', top: '12%', left: '80%', delay: 0.25, size: 44 },
            { Icon: SiPostgresql, color: '#4169E1', top: '50%', left: '90%', delay: 0.5, size: 48 },
            { Icon: SiGit, color: '#F05032', top: '82%', left: '80%', delay: 0.75, size: 44 },
            { Icon: SiHtml5, color: '#E34F26', top: '88%', left: 'calc(50% - 22px)', delay: 1, size: 44 },
            { Icon: VscCode, color: '#007ACC', top: '82%', left: '10%', delay: 1.25, size: 44 },
            { Icon: SiReact, color: '#61DAFB', top: '50%', left: '0%', delay: 1.5, size: 48 },
            { Icon: SiCss, color: '#1572B6', top: '12%', left: '10%', delay: 1.75, size: 44 },
          ].map(({ Icon, color, top, left, delay, size }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
              transition={{
                opacity: { duration: 0.5, delay },
                scale: { duration: 0.5, delay },
                y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay },
              }}
              className="absolute z-10 rounded-2xl bg-[#0A0E27] border border-white/10 flex items-center justify-center shadow-lg"
              style={{ top, left, width: size, height: size }}
            >
              <Icon size={size * 0.46} color={color} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}