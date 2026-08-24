import { motion } from 'motion/react';
import { Code2, Brain, Rocket, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Animated counter hook
function useAnimatedCounter(target: number, duration = 2) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

const stats = [
  { value: 6, suffix: '+', label: 'Projets réalisés', color: 'from-blue-500 to-cyan-500' },
  { value: 5, suffix: ' mois', label: "Stage DevOps", color: 'from-purple-500 to-pink-500' },
  { value: 2, suffix: '', label: 'Certifications', color: 'from-amber-500 to-orange-500' },
  { value: 39, suffix: '', label: 'Tests unitaires (Xéétali)', color: 'from-emerald-500 to-teal-500' },
];

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Développement Full-Stack",
      description: "React, FastAPI, Laravel, Node.js — conception d'applications robustes de bout en bout.",
      gradient: "from-blue-600 to-cyan-600",
      glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    },
    {
      icon: Brain,
      title: "Architecture & Microservices",
      description: "Architecture en couches, API REST, communication asynchrone (RabbitMQ), authentification (Keycloak).",
      gradient: "from-purple-600 to-pink-600",
      glow: "group-hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]",
    },
    {
      icon: Zap,
      title: "DevOps & Infrastructure",
      description: "Docker, Traefik, Linux, déploiement sur VPS — de la conteneurisation à la mise en production.",
      gradient: "from-emerald-600 to-teal-600",
      glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    },
    {
      icon: Rocket,
      title: "Créativité & Leadership",
      description: "Direction d'équipe, side-projects créatifs entre amis, interfaces modernes inspirées du gaming.",
      gradient: "from-amber-600 to-orange-600",
      glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]",
    },
  ];

  return (
    <section id="apropos" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#4f4f4f08_1px,transparent_1px)] bg-[size:2rem_2rem]" />

      <div className="container mx-auto px-6 relative z-10">
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

        {/* Stats counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
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
                  Actuellement en cycle ingénieur Génie Informatique (DIC1) à l'ESP/UCAD, j'ai acquis une solide expérience en DevOps et microservices lors de mon stage chez Engy-Partners. Je conçois des applications full-stack et les déploie en production sur VPS.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  Curieux et autodidacte, je développe aussi des projets personnels en dehors du cadre académique — du jeu entre amis à l'outil technique. Je recherche un stage ou un poste de développeur full-stack.
                </p>
                {/* Languages */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    { lang: 'Français', level: 'Avancé', color: 'bg-blue-500/15 text-blue-300 border-blue-500/30' },
                    { lang: 'Anglais', level: 'Intermédiaire', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' },
                    { lang: 'Wolof', level: 'Maternelle', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
                  ].map((l) => (
                    <span key={l.lang} className={`px-3 py-1 rounded-full text-xs font-medium border ${l.color}`}>
                      {l.lang} — {l.level}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.02, x: 8 }}
                className="relative group"
              >
                <div className={`relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 group-hover:border-slate-600/80 transition-all duration-300 ${feature.glow}`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-br ${feature.gradient} rounded-xl shrink-0`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-200 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-400">
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

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { count, ref } = useAnimatedCounter(stat.value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="relative group"
    >
      <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center group-hover:border-slate-600/80 transition-all duration-300">
        <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
          {count}{stat.suffix}
        </div>
        <div className="text-sm text-slate-400">{stat.label}</div>
      </div>
    </motion.div>
  );
}
