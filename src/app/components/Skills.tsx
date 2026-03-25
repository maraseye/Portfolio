import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      category: "Front-end",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      category: "Back-end",
      skills: ["PHP", "Node.js", "Python"]
    },
    {
      category: "Bases de donnees",
      skills: ["MySQL", "PostgreSQL", "Oracle"]
    },
    {
      category: "Outils",
      skills: ["GitHub", "Docker", "Postman", "Figma", "Keycloak", "Traefik", "RabbitMQ"]
    },
    {
      category: "Design",
      skills: ["Figma"]
    }
  ];

  return (
    <section id="competences" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Compétences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 h-full">
                  <h3 className="text-2xl font-semibold text-slate-200 mb-6 text-center">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + skillIndex * 0.05 }}
                        className="px-4 py-2 text-sm bg-slate-700/50 text-slate-200 rounded-full border border-slate-600"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
