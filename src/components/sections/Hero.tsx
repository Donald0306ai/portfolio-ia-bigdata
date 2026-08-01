import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SiPython, SiTensorflow, SiPandas, SiPostgresql, SiJupyter, SiScikitlearn } from 'react-icons/si'

const terminalLines = ['IA_', 'BIG DATA_', 'DÉVELOPPEMENT_']

const floatingIcons = [
  { Icon: SiPython, color: '#3776AB', top: '8%', left: '18%', delay: 0 },
  { Icon: SiTensorflow, color: '#FF6F00', top: '55%', left: '5%', delay: 0.4 },
  { Icon: SiPandas, color: '#150458', top: '78%', left: '30%', delay: 0.8 },
  { Icon: SiPostgresql, color: '#4169E1', top: '15%', left: '75%', delay: 1.2 },
  { Icon: SiJupyter, color: '#F37626', top: '65%', left: '80%', delay: 1.6 },
  { Icon: SiScikitlearn, color: '#F7931E', top: '40%', left: '55%', delay: 2 },
]

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

        <div className="relative h-[380px] sm:h-[460px] lg:h-[520px]">
          {floatingIcons.map(({ Icon, color, top, left, delay }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
              transition={{
                opacity: { duration: 0.5, delay },
                scale: { duration: 0.5, delay },
                y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay },
              }}
              className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0A0E27] border border-white/10 flex items-center justify-center shadow-lg"
              style={{ top, left }}
            >
              <Icon size={26} color={color} />
            </motion.div>
          ))}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}