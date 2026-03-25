import { motion } from 'motion/react';
import { Code2, Brain, Rocket } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Développement Full-Stack",
      description: "Conception d'applications web robustes avec React, Node.js, PHP et Python."
    },
    {
      icon: Brain,
      title: "Performance & Expérience",
      description: "Attention portée à la fluidité, l'ergonomie et la qualité du rendu."
    },
    {
      icon: Rocket,
      title: "Créativité inspirée du gaming",
      description: "Interfaces modernes avec une direction visuelle dynamique et soignée."
    }
  ];

  return (
    <section id="apropos" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            À Propos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  J'ai obtenu un DUT Informatique à l'Ecole Superieure Polytechnique de Dakar et je poursuis actuellement un cycle d'ingenieur en informatique dans le meme etablissement.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  J'aime concevoir des applications robustes avec une touche creative.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.03, x: 10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 group-hover:border-slate-600 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-200 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
