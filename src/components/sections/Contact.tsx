import { motion } from 'framer-motion'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { FaWhatsapp, FaLocationDot } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'
import { MdLocalPhone } from 'react-icons/md'
import { Link } from 'react-router-dom'
import back1 from '../../assets/images/back1.jpg'

const contactInfo = [
  { Icon: MdLocalPhone, label: 'Téléphone', value: '+228 98 26 32 88', href: 'tel:+22898263288', color: '#4F6EF7' },
  { Icon: SiGmail, label: 'Email', value: 'amouzouganjeando@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=amouzouganjeando@gmail.com', color: '#EA4335' },
  { Icon: FaWhatsapp, label: 'WhatsApp', value: '+228 98 26 32 88', href: 'https://wa.me/22898263288', color: '#25D366' },
  { Icon: FaLocationDot, label: 'Localisation', value: 'Lomé, Togo', href: 'https://www.google.com/maps?q=6.1856705,1.1578576', color: '#EA4335' },
]

export default function Contact() {
  return (
    <section className="pt-32 pb-0">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 mb-14">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-10 transition-colors"
        >
          <ArrowLeft size={16} />
          Retour à l'accueil
        </Link>

        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.2em] text-[#8BB4FF] font-medium mb-2"
          >
            RESTONS EN CONTACT
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white text-3xl sm:text-4xl font-semibold mb-3"
          >
            Un projet en tête ?
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="block w-10 h-[3px] bg-[#8BB4FF] rounded-full mx-auto"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-dark p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const name = (form.elements.namedItem('name') as HTMLInputElement).value
              const email = (form.elements.namedItem('email') as HTMLInputElement).value
              const subject = (form.elements.namedItem('subject') as HTMLInputElement).value
              const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value

              const whatsappText =
                `Nouveau message depuis le portfolio\n\n` +
                `Nom : ${name}\n` +
                `Email : ${email}\n` +
                (subject ? `Sujet : ${subject}\n` : '') +
                `\nMessage :\n${message}`

              window.open(
                `https://wa.me/22898263288?text=${encodeURIComponent(whatsappText)}`,
                '_blank'
              )
            }}
          >
            <p className="text-[#8BB4FF] text-xs uppercase tracking-wide mb-1">Contact</p>
            <h2 className="text-white text-2xl font-semibold mb-6">Envoyez-moi un message</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-white/50 text-xs uppercase tracking-wide mb-2">Nom</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#8BB4FF]/60 transition-colors"
                  placeholder="Votre nom..."
                />
              </div>
              <div>
                <label className="block text-white/50 text-xs uppercase tracking-wide mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#8BB4FF]/60 transition-colors"
                  placeholder="vous@email.com"
                />
              </div>
              <div>
                <label className="block text-white/50 text-xs uppercase tracking-wide mb-2">Sujet</label>
                <input
                  name="subject"
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#8BB4FF]/60 transition-colors"
                  placeholder="Objet du message..."
                />
              </div>
              <div>
                <label className="block text-white/50 text-xs uppercase tracking-wide mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#8BB4FF]/60 transition-colors resize-none"
                  placeholder="Écrivez ici..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full inline-flex items-center justify-center gap-2 text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Envoyer sur WhatsApp
                <FaWhatsapp size={16} />
              </motion.button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col"
          >
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Étudiant en IA & Big Data, je suis toujours ouvert aux opportunités
              de stage, de collaboration ou simplement d'échanger sur un projet.
              N'hésitez pas à me contacter par le moyen qui vous convient.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {contactInfo.map(({ Icon, label, value, href, color }, i) => {
                const content = (
                  <div className="card-dark p-4 h-full flex flex-col items-center text-center gap-2">
                    <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon size={16} color={color} />
                    </span>
                    <p className="text-white text-sm font-medium">{label}</p>
                    <p className="text-white/50 text-xs">{value}</p>
                  </div>
                )
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                  >
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block h-full hover:opacity-80 transition-opacity"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="card-dark overflow-hidden flex-1 min-h-[200px]"
            >
              <iframe
                title="Localisation"
                src="https://www.google.com/maps?q=6.1856705,1.1578576&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '200px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="px-5 sm:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 px-6 py-16 sm:py-20 text-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(4,18,51,0.88) 0%, rgba(10,14,39,0.82) 100%), url(${back1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-[#8BB4FF] text-xs font-medium tracking-widest px-4 py-1.5 rounded-full mb-5">
            <Sparkles size={14} />
            DISPONIBLE POUR DE NOUVEAUX PROJETS
          </span>
          <h2 className="text-white text-2xl sm:text-4xl font-bold mb-8 max-w-2xl mx-auto leading-tight">
            Toujours prêt à relever un nouveau défi technique
          </h2>
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=amouzouganjeando@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-white text-[#0038B8] text-sm font-semibold px-7 py-3 rounded-full hover:bg-[#D6E0FF] transition-colors"
          >
            Envoyer un email
            <SiGmail size={16} color="#EA4335" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}