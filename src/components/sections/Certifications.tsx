import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import ite702 from '../../assets/images/certifications/ite-702-french.png'
import anTR from '../../assets/images/certifications/AnTR.png'
import anGE from '../../assets/images/certifications/AnGE.png'

const certifications = [
  {
    number: '01',
    title: 'ITE 7.02 French',
    category: 'Cisco Networking Academy',
    description: "Certificat obtenu auprès de l'Institut Internationale des Sciences et des Arts du Numérique, dans le cadre du programme Cisco Networking Academy.",
    image: ite702,
  },
  {
    number: '02',
    title: "Fondamentaux de l'analyse en temps réel",
    category: 'Microsoft',
    description: "Badge Microsoft obtenu pour la maîtrise des fondamentaux de l'analyse de données en temps réel.",
    image: anTR,
  },
  {
    number: '03',
    title: "Fondamentaux de l'analyse à grande échelle",
    category: 'Microsoft',
    description: "Badge Microsoft obtenu pour la maîtrise des fondamentaux de l'analyse de données à grande échelle.",
    image: anGE,
  },
]

export default function Certifications() {
  const [openImage, setOpenImage] = useState<string | null>(null)

  return (
    <section id="certifications" className="py-24 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.2em] text-[#8BB4FF] font-medium mb-2"
          >
            MON PARCOURS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white text-2xl sm:text-3xl font-semibold mb-3"
          >
            Certifications
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="block w-10 h-[3px] bg-[#8BB4FF] rounded-full mx-auto"
          />
        </div>

        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none pb-4 sm:pb-0 -mx-5 px-5 sm:mx-0 sm:px-0">
          {certifications.map((cert, i) => (
            <motion.button
              key={cert.number}
              onClick={() => setOpenImage(cert.image)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-[#0A0E27] border border-white/10 rounded-2xl overflow-hidden group cursor-pointer text-left shrink-0 w-[82%] xs:w-[70%] sm:w-auto snap-center"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#060818] flex items-center justify-center">
                <span className="absolute top-3 left-3 z-10 bg-[#041233]/80 backdrop-blur-sm border border-white/10 text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                  {cert.number}
                </span>
                <img
                  src={cert.image}
                  alt={cert.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover object-center scale-[1.12] group-hover:scale-[1.18] transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="text-white font-semibold text-lg mb-1 min-h-[3.5rem] line-clamp-2">{cert.title}</h3>
                <p className="text-[#8BB4FF]/70 text-xs uppercase tracking-wide mb-3">
                  {cert.category}
                </p>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[#8BB4FF] text-sm font-medium group-hover:gap-2 transition-all">
                  VOIR LE CERTIFICAT
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-10">
          {certifications.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === 0 ? 'w-6 bg-[#8BB4FF]' : 'w-1.5 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-5 sm:p-10"
            style={{
              background:
                'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(4,18,51,0.92), rgba(0,4,15,0.97))',
            }}
          >
            <motion.button
              onClick={() => setOpenImage(null)}
              whileHover={{ scale: 1.05 }}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Fermer"
            >
              <X size={20} />
            </motion.button>

            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              src={openImage}
              alt="Certificat"
              className="max-w-full max-h-full rounded-xl shadow-2xl border border-white/10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}