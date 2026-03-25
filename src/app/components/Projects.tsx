import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: "Application E-Commerce IA",
      description: "Plateforme e-commerce avec recommandations personnalisées basées sur l'IA et système de paiement intégré",
      tags: ["React", "Node.js", "TensorFlow", "MongoDB"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Système de Reconnaissance Faciale",
      description: "Application de reconnaissance faciale en temps réel utilisant des réseaux de neurones convolutifs",
      tags: ["Python", "OpenCV", "PyTorch", "FastAPI"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      github: "https://github.com",
      demo: null
    },
    {
      title: "Dashboard Analytics IoT",
      description: "Tableau de bord interactif pour visualiser les données de capteurs IoT en temps réel avec alertes automatiques",
      tags: ["React", "TypeScript", "WebSocket", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "API RESTful Microservices",
      description: "Architecture microservices scalable avec authentification JWT et documentation Swagger",
      tags: ["Spring Boot", "Docker", "Kubernetes", "Redis"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      github: "https://github.com",
      demo: null
    },
    {
      title: "Chatbot IA Conversationnel",
      description: "Assistant virtuel intelligent utilisant le traitement du langage naturel pour répondre aux questions",
      tags: ["Python", "Transformers", "LangChain", "React"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Application Mobile Fitness",
      description: "App mobile cross-platform de suivi d'activités sportives avec plans d'entraînement personnalisés",
      tags: ["React Native", "Firebase", "Redux", "ML Kit"],
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&q=80",
      github: "https://github.com",
      demo: null
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
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.demo && (
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
