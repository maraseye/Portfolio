import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const PROFILE_PHOTO_PATH = "/piece-jointe/photo.jpeg";
const CV_PATH = "/piece-jointe/Mon%20CV.pdf";

export function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient orbs */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/30 rounded-full filter blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/30 rounded-full filter blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <ImageWithFallback
              src={PROFILE_PHOTO_PATH}
              alt="Portrait de Serigne Amsatou Lo Seye"
              className="w-36 h-36 md:w-40 md:h-40 object-cover rounded-full mx-auto border-4 border-slate-700 shadow-[0_0_30px_rgba(59,130,246,0.25)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Serigne Amsatou Lo Seye
            </motion.h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-slate-300 mb-4">
              Etudiant en cycle Ingenieur
            </p>
            <p className="text-lg text-slate-400 mb-8">
              Developpeur full-stack passionne par les interfaces modernes, les performances et le design inspire du gaming.
            </p>
            <p className="text-base text-slate-500 mb-8">
              Senegal
            </p>
          </motion.div>
          
          <motion.div 
            className="flex gap-6 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="https://github.com/maraseye" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full hover:bg-slate-700/50 hover:border-slate-600 transition-all hover:scale-110"
            >
              <Github className="w-6 h-6 text-slate-300" />
            </a>
            <a 
              href="https://linkedin.com/in/maraseye" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full hover:bg-slate-700/50 hover:border-slate-600 transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-slate-300" />
            </a>
            <a 
              href="mailto:maraseye2004@gmail.com"
              className="p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full hover:bg-slate-700/50 hover:border-slate-600 transition-all hover:scale-110"
            >
              <Mail className="w-6 h-6 text-slate-300" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            <a
              href={CV_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/70 text-slate-200 border border-slate-600 rounded-full hover:bg-slate-700/70 hover:border-slate-500 transition-all hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Voir mon CV
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a 
              href="#apropos" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
            >
              Découvrir mon parcours
              <ArrowDown className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-6 h-6 text-slate-500" />
      </motion.div>
    </section>
  );
}
