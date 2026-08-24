import { motion } from 'motion/react';
import { Mail, MapPin, Github, Linkedin, Send, ArrowUpRight, Phone } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "maraseye2004@gmail.com",
      link: "mailto:maraseye2004@gmail.com",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+221 77 87 76 657",
      link: "tel:+221778776657",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Dakar, Sénégal",
      link: null,
      gradient: "from-emerald-600 to-teal-600",
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/maraseye",
      hoverColor: "hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/maraseye",
      hoverColor: "hover:border-blue-400/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Geometric pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4f4f4f06_25%,transparent_25%,transparent_50%,#4f4f4f06_50%,#4f4f4f06_75%,transparent_75%)] bg-[size:3rem_3rem]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 text-lg">
            Une question ? Un projet ? N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-slate-200 mb-4">
                Restons en contact
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Je suis disponible pour des opportunités, des collaborations et des échanges techniques.
                Le moyen le plus direct pour me joindre est par email.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      className="relative group block"
                    >
                      <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 group-hover:border-slate-600/80 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 bg-gradient-to-br ${info.gradient} rounded-xl shrink-0`}>
                            <info.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs text-slate-500 mb-0.5">{info.label}</p>
                            <p className="text-slate-200 text-sm truncate">{info.value}</p>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors ml-auto shrink-0" />
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 bg-gradient-to-br ${info.gradient} rounded-xl shrink-0`}>
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-0.5">{info.label}</p>
                          <p className="text-slate-200 text-sm flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`p-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-300 ${social.hoverColor}`}
                >
                  <social.icon className="w-5 h-5 text-slate-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center"
          >
            <div className="relative group w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-200 mb-2">
                    Envoyer un email
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Cliquez sur le bouton ci-dessous pour ouvrir votre client mail avec mon adresse pré-remplie.
                  </p>
                </div>
                <motion.a
                  href="mailto:maraseye2004@gmail.com?subject=Prise%20de%20contact%20portfolio"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full px-8 py-4 text-white rounded-xl transition-all flex items-center justify-center gap-2 font-semibold overflow-hidden block"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]" />
                  <Send className="w-4 h-4 relative" />
                  <span className="relative">Écrire un email</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
