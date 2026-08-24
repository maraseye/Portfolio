import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

// Tilt effect hook
function useTiltEffect() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return { ref, handleMouseMove, handleMouseLeave };
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTiltEffect();
  const hasValidLink = (url: string) => url.trim() !== "" && url !== "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-full transition-transform duration-200 ease-out will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden h-full flex flex-col group-hover:border-slate-600/80 transition-all duration-300">
          {/* Image */}
          <div className="relative h-44 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            
            {/* Year badge */}
            {project.year && (
              <span className="absolute top-3 right-3 px-2.5 py-0.5 text-[10px] font-semibold bg-blue-500/20 backdrop-blur-sm text-blue-300 rounded-lg border border-blue-500/30">
                {project.year}
              </span>
            )}

            {/* Tech tags on image */}
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-medium bg-slate-900/80 backdrop-blur-sm text-slate-300 rounded-md border border-slate-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-slate-200 mb-2 leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 mb-5 flex-grow leading-relaxed">
              {project.description}
            </p>
            
            {/* Links */}
            <div className="flex gap-3 flex-wrap">
              {hasValidLink(project.github) && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-700/40 hover:bg-slate-700/70 text-slate-300 rounded-xl text-sm transition-all duration-200 hover:scale-105 border border-slate-700/30"
                >
                  <Github className="w-3.5 h-3.5" />
                  Code
                </a>
              )}
              {hasValidLink(project.demo) && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl text-sm transition-all duration-200 hover:scale-105"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Demo
                </a>
              )}
              {!hasValidLink(project.github) && !hasValidLink(project.demo) && (
                <span className="px-3.5 py-2 text-xs bg-slate-700/30 text-slate-500 rounded-xl border border-slate-700/30">
                  Liens en cours d'ajout
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const projects = [
  {
    title: "Xéétali — Traçabilité de stocks de sang",
    description: "Plateforme pour le CNTS du Sénégal. Architecture en couches, stock calculé par comptage en direct, QR codes, 39 tests unitaires. Rôles : admin CNTS, personnel médical, donneur.",
    image: "https://cdn.jsdelivr.net/npm/openmoji@14.0.0/color/svg/1FA78.svg",
    techs: ["React 19", "FastAPI", "SQLAlchemy", "JWT", "Pytest"],
    github: "#",
    demo: "#",
    year: "2026",
  },
  {
    title: "TranspoBot — Chatbot NL-to-SQL",
    description: "Chatbot convertissant le langage naturel en requêtes SQL pour un système de gestion de transport. Prompt engineering et sécurisation contre injections SQL et de prompt.",
    image: "https://cdn.jsdelivr.net/npm/openmoji@14.0.0/color/svg/1F916.svg",
    techs: ["Python", "MySQL", "API Groq LLM", "NLP"],
    github: "#",
    demo: "#",
    year: "2026",
  },
  {
    title: "Réseau social étudiant",
    description: "Direction d'une équipe de 4 personnes. Coordination backend, frontend et infrastructure Docker. Plateforme de communication et partage pour un établissement.",
    image: "https://cdn.jsdelivr.net/npm/openmoji@14.0.0/color/svg/1F465.svg",
    techs: ["Laravel 11", "React 18", "PostgreSQL", "Docker", "Redis"],
    github: "#",
    demo: "#",
    year: "2025",
  },
  {
    title: "α-Redis — Moteur clé-valeur en mémoire",
    description: "Implémentation from-scratch d'un moteur de stockage clé-valeur : tableaux dynamiques, tables de hachage, listes chaînées. Livrables : code, documentation, soutenance.",
    image: "https://cdn.jsdelivr.net/npm/openmoji@14.0.0/color/svg/1F5C4.svg",
    techs: ["C", "Structures de données", "Algorithmique"],
    github: "#",
    demo: "#",
    year: "2025",
  },
  {
    title: "Gestion de tournoi d'athlétisme",
    description: "Application de gestion des participants, épreuves, classements et résultats. Modélisation de règles métier et données relationnelles.",
    image: "https://cdn.jsdelivr.net/npm/openmoji@14.0.0/color/svg/1F3C3.svg",
    techs: ["Java", "PostgreSQL"],
    github: "#",
    demo: "#",
    year: null,
  },
  {
    title: "Gestion de vente de bétails",
    description: "Solution web pour organiser les ventes, suivre les transactions et centraliser les informations clients. Digitalisation d'un processus métier.",
    image: "https://cdn.jsdelivr.net/npm/openmoji@14.0.0/color/svg/1F411.svg",
    techs: ["PHP", "MySQL", "HTML/CSS"],
    github: "#",
    demo: "#",
    year: null,
  },
  {
    title: "Prise de RDV administratifs",
    description: "Conception d'une plateforme pour fluidifier la prise de rendez-vous. Analyse des besoins, modélisation UML et définition des parcours utilisateurs.",
    image: "https://cdn.jsdelivr.net/npm/openmoji@14.0.0/color/svg/1F4C5.svg",
    techs: ["UML", "Mérise", "Conception"],
    github: "#",
    demo: "#",
    year: null,
  },
  {
    title: "Portfolio personnel",
    description: "Ce portfolio ! Développé avec React 18 et TypeScript pour présenter mon parcours, compétences et réalisations.",
    image: "https://cdn.jsdelivr.net/npm/openmoji@14.0.0/color/svg/1F4BB.svg",
    techs: ["React", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
    year: "2025",
  },
];

export function Projects() {
  return (
    <section id="projets" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,#4f4f4f08_0%,transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
            Projets académiques et personnels reflétant mon parcours
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
