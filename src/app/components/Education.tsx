import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "Cycle Ingénieur en Informatique",
      school: "École Nationale d'Ingénieurs",
      period: "2023 - 2026",
      description: "Spécialisation en Intelligence Artificielle et Systèmes Distribués",
      achievements: [
        "Mention Très Bien",
        "Major de promotion en IA",
        "Projet de fin d'études sur le Deep Learning"
      ]
    },
    {
      degree: "Classes Préparatoires",
      school: "Lycée d'Excellence",
      period: "2021 - 2023",
      description: "Mathématiques et Physique (MP)",
      achievements: [
        "Admission aux concours Grandes Écoles",
        "Excellence en mathématiques appliquées",
        "Mention au concours CCP"
      ]
    },
    {
      degree: "Baccalauréat Scientifique",
      school: "Lycée Victor Hugo",
      period: "2018 - 2021",
      description: "Option Sciences de l'Ingénieur",
      achievements: [
        "Mention Très Bien",
        "Prix d'excellence en sciences",
        "Projet robotique lauréat"
      ]
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "TensorFlow Developer Certificate",
    "Azure AI Engineer Associate"
  ];

  return (
    <section id="formation" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Formation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Education Timeline */}
          <div className="space-y-8 mb-16">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 group-hover:border-slate-600 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                          <GraduationCap className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-2xl font-semibold text-slate-200">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-2 text-slate-400 mt-2 md:mt-0">
                            <Calendar className="w-4 h-4" />
                            <span>{item.period}</span>
                          </div>
                        </div>
                        
                        <p className="text-lg text-blue-400 mb-3">{item.school}</p>
                        <p className="text-slate-300 mb-4">{item.description}</p>
                        
                        <div className="space-y-2">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-center gap-2">
                              <Award className="w-4 h-4 text-purple-400 flex-shrink-0" />
                              <span className="text-slate-400">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-slate-200 mb-8 text-center">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 group-hover:border-slate-600 transition-all">
                    <div className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-blue-400" />
                      <span className="text-slate-300">{cert}</span>
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
