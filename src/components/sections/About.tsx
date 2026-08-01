import { motion } from 'framer-motion'

const formation = [
  { year: '2026', title: 'Licence Professionnelle en Informatique (2e année)', place: 'ESGIS' },
  { year: '2025', title: 'Licence Professionnelle en Informatique (1ère année)', place: 'ESGIS' },
  { year: '2024', title: 'Licence Fondamentale Anglaise', place: 'Université de Lomé' },
  { year: '2023', title: 'Baccalauréat série F2, mention Assez Bien', place: 'Lycée' },
]

const languages = [
  { name: 'Français', level: 'Courant' },
  { name: 'Éwé', level: 'Courant' },
  { name: 'Anglais', level: 'Lu, écrit, parlé' },
  { name: 'Allemand', level: 'Niveau passable' },
]

export default function About() {
  const profileText =
    "Étudiant en 2e année d'Intelligence Artificielle et Big Data à ESGIS, je recherche un stage pour appliquer mes compétences en programmation et en informatique. Sérieux, motivé et curieux, je souhaite renforcer mes capacités techniques et acquérir une première expérience professionnelle dans le domaine du numérique."
  return (
    <section id="about" className="py-24 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.2em] text-[#8BB4FF] font-medium mb-2"
        >
          À PROPOS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white text-2xl sm:text-3xl font-semibold mb-6"
        >
          Mon parcours
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mb-14"
        >
          {profileText}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-white/50 text-xs uppercase tracking-wide mb-6"
            >
              Formation
            </motion.p>

            <div className="relative pl-6 border-l border-white/10 space-y-8">
              {formation.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-[#8BB4FF]" />
                  <span className="text-[#8BB4FF] text-sm font-medium">{item.year}</span>
                  <h3 className="text-white text-base font-medium mt-1">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.place}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-white/50 text-xs uppercase tracking-wide mb-6"
            >
              Langues
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-[#0A0E27] border border-white/10 rounded-2xl p-4"
                >
                  <p className="text-white font-medium text-sm">{lang.name}</p>
                  <p className="text-[#8BB4FF]/80 text-xs mt-1">{lang.level}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
