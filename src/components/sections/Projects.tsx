import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import assigameImg from '../../assets/images/projects/assigame.png'
import kingBurgerImg from '../../assets/images/projects/king-burger.png'

const projects = [
  {
    number: '01',
    title: 'Assigame',
    category: 'Full-Stack / Marketplace',
    description: "Plateforme d'annonces classées pour le marché togolais, inspirée de Leboncoin.",
    image: assigameImg,
  },
  {
    number: '02',
    title: 'King Burger',
    category: 'HTML / CSS / JavaScript',
    description: 'Site vitrine pour une enseigne de restauration rapide, avec présentation du menu et interface de commande.',
    image: kingBurgerImg,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.2em] text-[#8BB4FF] font-medium mb-2"
          >
            PROJETS PHARES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white text-2xl sm:text-3xl font-semibold mb-3"
          >
            Quelques réalisations récentes
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="block w-10 h-[3px] bg-[#8BB4FF] rounded-full mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-[#0A0E27] border border-white/10 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-40 sm:h-44 overflow-hidden bg-[#060818] flex items-center justify-center">
                <span className="absolute top-3 left-3 z-10 bg-[#041233]/80 backdrop-blur-sm border border-white/10 text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                  {project.number}
                </span>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="text-white font-semibold text-lg mb-1">{project.title}</h3>
                <p className="text-[#8BB4FF]/70 text-xs uppercase tracking-wide mb-3">
                  {project.category}
                </p>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[#8BB4FF] text-sm font-medium group-hover:gap-2 transition-all">
                  VOIR LE PROJET
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: projects.length * 0.15 }}
            className="bg-[#0A0E27] border border-dashed border-white/15 rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center p-8 min-h-[280px] sm:min-h-0"
          >
            <span className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <Sparkles size={18} className="text-[#8BB4FF]" />
            </span>
            <h3 className="text-white/70 font-semibold text-base mb-1">Projet à venir</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Une nouvelle réalisation est en cours de développement.
            </p>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-10">
          {[...projects, { number: 'soon' }].map((project, i) => (
            <span
              key={project.number}
              className={`h-1.5 rounded-full transition-all ${
                i === 0 ? 'w-6 bg-[#8BB4FF]' : 'w-1.5 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}