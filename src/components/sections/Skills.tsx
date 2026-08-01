import { motion } from 'framer-motion'
import {
  SiHtml5,
  SiCss,
  SiCplusplus,
  SiArduino,
  SiLinux,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiXampp,
  SiPostgresql,
  SiPython,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import { FaJava, FaWindows, FaMicrosoft } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'
import { TbDatabase, TbCircuitResistor, TbSitemap } from 'react-icons/tb'

const skillCategories = [
  {
    title: 'Programmation',
    skills: [
      { name: 'Java', Icon: FaJava, color: '#E76F00' },
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
      { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
    ],
  },
  {
    title: 'Dev & outils',
    skills: [
      { name: 'Vite', Icon: SiVite, color: '#646CFF' },
      { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'VS Code', Icon: VscCode, color: '#007ACC' },
      { name: 'XAMPP', Icon: SiXampp, color: '#FB7A24' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'pgAdmin', Icon: TbDatabase, color: '#336791' },
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF' },
      { name: 'Office', Icon: FaMicrosoft, color: '#EA3E23' },
    ],
  },
  {
    title: 'Électronique & algo',
    skills: [
      { name: 'Arduino', Icon: SiArduino, color: '#00979D' },
      { name: 'Proteus', Icon: TbCircuitResistor, color: '#8BB4FF' },
      { name: 'AlgoBox', Icon: TbSitemap, color: '#8BB4FF' },
    ],
  },
  {
    title: 'Systèmes d\u2019exploitation',
    skills: [
      { name: 'Windows', Icon: FaWindows, color: '#00A4EF' },
      { name: 'Linux', Icon: SiLinux, color: '#FCC624' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.2em] text-[#8BB4FF] font-medium mb-2"
          >
            MES COMPÉTENCES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white text-2xl sm:text-3xl font-semibold mb-3"
          >
            Technologies que je maîtrise
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="block w-10 h-[3px] bg-[#8BB4FF] rounded-full mx-auto"
          />
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, ci) => (
            <div key={category.title}>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.1 }}
                className="text-white/50 text-xs uppercase tracking-[0.15em] mb-5 flex items-center gap-3"
              >
                {category.title}
                <span className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
              </motion.p>

              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map(({ name, Icon, color }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: ci * 0.1 + i * 0.05 }}
                    whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.25)' }}
                    className="border rounded-2xl p-5 flex flex-col items-center gap-3 text-center w-[100px] sm:w-[112px]"
                    style={{
                      backgroundColor: `${color}14`,
                      borderColor: `${color}33`,
                    }}
                  >
                    <Icon size={28} color={color} />
                    <span className="text-white/80 text-xs sm:text-sm">{name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}