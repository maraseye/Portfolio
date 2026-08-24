import { motion } from 'motion/react';
import { GraduationCap, Award, Briefcase, Calendar } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "Cycle Ingénieur — Génie Informatique (DIC1)",
      school: "École Supérieure Polytechnique (ESP), UCAD, Dakar",
      status: "En cours",
      color: "from-blue-500 to-cyan-500",
    },
    {
      degree: "DUT2 Informatique",
      school: "École Supérieure Polytechnique (ESP), UCAD, Dakar",
      status: "Obtenu",
      color: "from-emerald-500 to-teal-500",
    },
    {
      degree: "Baccalauréat Sciences Expérimentales S2",
      school: "Lycée Billes — Mention Assez Bien",
      status: "2022 – 2023",
      color: "from-purple-500 to-pink-500",
    }
  ];

  const certifications = [
    {
      name: "Data Communication and Network Technology",
      issuer: "Huawei Talent Online",
      date: "26/06/2024",
      color: "from-red-500 to-rose-500",
    },
    {
      name: "UML and Object-Oriented Design Foundations",
      issuer: "Udemy",
      date: "02/02/2025",
      color: "from-violet-500 to-purple-500",
    }
  ];

  const experience = {
    role: "Stagiaire DevOps & Microservices",
    company: "Engy-Partners",
    period: "Mai – Octobre 2025 (5 mois)",
    tasks: [
      "Développement et intégration de microservices avec FastAPI",
      "Conteneurisation et orchestration de services avec Docker",
      "Configuration de Traefik comme reverse proxy et gestion du routage",
      "Mise en place de Keycloak pour l'authentification et la gestion des accès (IAM)",
      "Intégration de RabbitMQ pour la communication asynchrone entre microservices",
    ],
  };

  return (
    <section id="formation" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#4f4f4f08_0%,transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Formation & Expérience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Experience - FIRST because it's important */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold text-slate-200 mb-6 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              Expérience professionnelle
            </h3>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative group"
            >
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 group-hover:border-slate-600/80 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.1)]">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 rounded-full bg-gradient-to-b from-emerald-500 to-teal-500 self-stretch min-h-[60px] shrink-0" />
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-slate-200">{experience.role}</h4>
                        <p className="text-emerald-400/80 text-sm">{experience.company}</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-sm text-slate-400 shrink-0">
                        <Calendar className="w-3.5 h-3.5" />
                        {experience.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {experience.tasks.map((task, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 mt-1.5 shrink-0" />
                          {task}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Education Timeline */}
          <div className="relative mb-16">
            <h3 className="text-2xl font-semibold text-slate-200 mb-6 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              Parcours académique
            </h3>

            {/* Vertical timeline line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute left-[2.2rem] top-[4.5rem] w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 origin-top"
              style={{ height: 'calc(100% - 5rem)' }}
            />

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative pl-16"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: 'spring' }}
                    className={`absolute left-[1.35rem] top-6 w-4 h-4 rounded-full bg-gradient-to-br ${item.color} border-[3px] border-slate-900 z-10`}
                  />

                  <div className="group">
                    <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 group-hover:border-slate-600/80 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-1.5">
                        <h4 className="text-lg font-semibold text-slate-200">
                          {item.degree}
                        </h4>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border w-fit ${
                          item.status === "En cours"
                            ? "bg-blue-500/15 text-blue-300 border-blue-500/40"
                            : item.status === "Obtenu"
                            ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/40"
                            : "bg-slate-500/15 text-slate-300 border-slate-500/40"
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-blue-400/70 text-sm">{item.school}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-slate-200 mb-6 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
                <Award className="w-5 h-5 text-white" />
              </div>
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="relative group"
                >
                  <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 group-hover:border-slate-600/80 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                    <div className="flex items-start gap-3">
                      <div className={`w-1.5 rounded-full bg-gradient-to-b ${cert.color} self-stretch min-h-[40px] shrink-0`} />
                      <div>
                        <p className="text-slate-200 text-sm font-medium mb-1">{cert.name}</p>
                        <p className="text-slate-500 text-xs">{cert.issuer} · {cert.date}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
