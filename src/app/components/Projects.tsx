import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const hasValidLink = (url: string) => url.trim() !== "" && url !== "#";

  const projects = [
    {
      title: "Todo List",
      description: "Application de gestion de taches orientee productivite avec une interface claire et rapide a prendre en main. Ce projet m'a permis de renforcer la structuration d'etat et la conception d'une UX fluide.",
      tags: ["JavaScript", "React", "UI"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Plateforme de gestion de vente de betails",
      description: "Solution web pour organiser les ventes, suivre les transactions et centraliser les informations clients. L'objectif etait de digitaliser un processus metier concret avec une architecture evolutive.",
      tags: ["React", "Node.js", "MySQL"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Application web de gestion d'un tournoi d'athletisme",
      description: "Application permettant la gestion des participants, des epreuves, des classements et des resultats. Ce travail m'a aide a modeliser des regles metier et a structurer des donnees relationnelles.",
      tags: ["PHP", "JavaScript", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Mini jeu Whack un bug (JavaScript)",
      description: "Mini jeu web axe sur la reactivite, le timing et le feedback visuel. Il m'a permis d'explorer la logique evenementielle JavaScript et les animations pour une experience ludique.",
      tags: ["JavaScript", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Plateforme de gestion de prise de rendez-vous dans les administrations",
      description: "Projet en phase de conception visant a fluidifier la prise de rendez-vous administratifs. J'ai travaille sur l'analyse des besoins, la modelisation UML et la definition des parcours utilisateurs.",
      tags: ["Conception", "UML", "Architecture"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Application mobile SimpleBlog",
      description: "Application mobile pour publier et consulter des contenus de type blog depuis smartphone. Ce projet m'a permis de consolider l'integration API et l'optimisation de l'interface sur petit ecran.",
      tags: ["Mobile", "API", "UI"],
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Application de gestion des depenses en Java (terminal)",
      description: "Application console en Java pour enregistrer, classer et suivre les depenses personnelles. Elle m'a permis d'approfondir la programmation orientee objet et la structuration de logique metier en mode terminal.",
      tags: ["Java", "Terminal", "POO"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio personnel",
      description: "Portfolio personnel developpe avec React et TypeScript pour presenter mon parcours, mes competences et mes realisations. J'y ai travaille la qualite visuelle, la coherence des sections et la performance front-end.",
      tags: ["React", "TypeScript", "Tailwind"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projets" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
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
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden h-full flex flex-col group-hover:border-slate-600 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-slate-200 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-slate-700/50 text-slate-300 rounded-full border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 flex-wrap">
                    {hasValidLink(project.github) && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {hasValidLink(project.demo) && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                    {!hasValidLink(project.github) && !hasValidLink(project.demo) && (
                      <span className="px-4 py-2 text-sm bg-slate-700/40 text-slate-400 rounded-lg border border-slate-600">
                        Liens en cours d'ajout
                      </span>
                    )}
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
