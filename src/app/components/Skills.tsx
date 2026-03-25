import { motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { Progress } from './ui/progress';
import { ChevronDown } from 'lucide-react';

export function Skills() {
  const categories = useMemo(
    () => [
      {
        category: 'Front-end',
        skills: [
          { name: 'HTML', level: 85 },
          { name: 'CSS', level: 80 },
          { name: 'JavaScript', level: 65 },
          { name: 'React', level: 51 },
        ],
      },
      {
        category: 'Langages de programmation',
        skills: [
          { name: 'C', level: 80 },
          { name: 'Java', level: 85 },
          { name: 'PHP', level: 45 },
          { name: 'Python', level: 53 },
        ],
      },
      {
        category: 'Back-end',
        skills: [
          { name: 'PHP', level: 45 },
          { name: 'Node.js', level: 50 },
          { name: 'Python', level: 55 },
        ],
      },
      {
        category: 'Bases de donnees',
        skills: [
          { name: 'MySQL', level: 75 },
          { name: 'PostgreSQL', level: 70 },
          { name: 'Oracle', level: 60 },
        ],
      },
      {
        category: 'Outils',
        skills: [
          { name: 'GitHub', level: 80 },
          { name: 'Docker', level: 70 },
          { name: 'Postman', level: 70 },
          { name: 'Keycloak', level: 80 },
          { name: 'Traefik', level: 65 },
          { name: 'RabbitMQ', level: 40 },
        ],
      },
      {
        category: 'Design',
        skills: [{ name: 'Figma', level: 60 }],
      },
    ],
    [],
  );

  const [openSkillId, setOpenSkillId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenSkillId((prev) => (prev === id ? null : id));

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
          {categories.map((category, categoryIndex) => (
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
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => {
                      const id = `${category.category}:${skill.name}`;
                      const isOpen = openSkillId === id;

                      return (
                        <motion.div
                          key={id}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.2 + skillIndex * 0.05 }}
                          className="rounded-xl border border-slate-700 bg-slate-900/30 overflow-hidden"
                        >
                          <button
                            type="button"
                            onClick={() => toggle(id)}
                            className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-slate-800/30 transition-colors"
                            aria-expanded={isOpen}
                          >
                            <span className="text-slate-200 font-medium">{skill.name}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            />
                          </button>

                          {isOpen && (
                            <div className="px-4 pb-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-slate-400">Niveau</span>
                                <span className="text-sm text-slate-300">{skill.level}%</span>
                              </div>
                              <Progress value={skill.level} className="h-2 bg-slate-700/50" />
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
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
