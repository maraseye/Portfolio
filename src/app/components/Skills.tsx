import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      category: "Langages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C/C++", level: 75 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      category: "Frameworks & Librairies",
      skills: [
        { name: "React & Next.js", level: 90 },
        { name: "Node.js & Express", level: 85 },
        { name: "TensorFlow & PyTorch", level: 80 },
        { name: "Spring Boot", level: 75 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      category: "Outils & DevOps",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 85 },
        { name: "AWS & Azure", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "Linux", level: 85 }
      ]
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

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-slate-300">{skill.name}</span>
                          <span className="text-slate-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                          />
                        </div>
                      </div>
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
