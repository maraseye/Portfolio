import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown, Download, Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { useState, useEffect } from 'react';

const PROFILE_PHOTO_PATH = "/piece-jointe/photo.jpeg";
const CV_PATH = "/piece-jointe/Mon%20CV.pdf";

const TYPING_TEXTS = [
  "Développeur Full-Stack",
  "Étudiant Ingénieur",
  "Passionné DevOps",
  "Fan de Microservices",
];

function useTypingEffect(texts: string[], typingSpeed = 80, deleteSpeed = 40, pauseDuration = 2000) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentFullText.length) {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed, deleteSpeed, pauseDuration]);

  return displayedText;
}

// Animated floating particles
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-400/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const typedText = useTypingEffect(TYPING_TEXTS);

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-24 md:pt-28 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Animated background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Gradient orbs */}
      <motion.div 
        className="pointer-events-none absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[150px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="pointer-events-none absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[150px]"
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full filter blur-[200px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile photo with animated ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="mb-8"
          >
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="mx-auto block rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/80 cursor-zoom-in relative"
                  aria-label="Voir la photo en grand"
                >
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin" style={{ animationDuration: '4s' }} />
                  <div className="absolute -inset-0.5 rounded-full bg-slate-950" />
                  <ImageWithFallback
                    src={PROFILE_PHOTO_PATH}
                    alt="Portrait de Serigne Amsatou Lo Seye"
                    className="relative w-36 h-36 md:w-44 md:h-44 object-cover rounded-full border-2 border-slate-800"
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-2 bg-slate-950 border-slate-700">
                <ImageWithFallback
                  src={PROFILE_PHOTO_PATH}
                  alt="Portrait de Serigne Amsatou Lo Seye en grand format"
                  className="w-full max-h-[80vh] object-contain rounded-md"
                />
              </DialogContent>
            </Dialog>
          </motion.div>

          {/* Name */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Serigne Amsatou
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Lo Seye
            </span>
          </motion.h1>
          
          {/* Typing effect subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4"
          >
            <p className="text-xl md:text-2xl text-slate-300 h-8 flex items-center justify-center gap-1">
              <span>{typedText}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-blue-400 ml-0.5"
              />
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-slate-400 mb-3 max-w-2xl mx-auto leading-relaxed"
          >
            Étudiant ingénieur en Génie Informatique à l'ESP/UCAD. Je conçois et déploie
            des applications full-stack, de l'idée au serveur de production.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm text-slate-500 mb-10 flex items-center justify-center gap-4 flex-wrap"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Dakar, Sénégal
            </span>
            <span className="hidden sm:inline text-slate-700">·</span>
            <a href="tel:+221778776657" className="flex items-center gap-1.5 hover:text-slate-300 transition-colors">
              <Phone className="w-3 h-3" />
              +221 77 87 76 657
            </a>
          </motion.p>
          
          {/* Social links */}
          <motion.div 
            className="flex gap-4 justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {[
              { href: "https://github.com/maraseye", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/maraseye", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:maraseye2004@gmail.com", icon: Mail, label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-2xl hover:bg-slate-700/60 hover:border-slate-500/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)]"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-slate-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.a
              href="#apropos"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative group inline-flex items-center gap-2 px-8 py-4 text-white rounded-2xl transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_40px_rgba(99,102,241,0.5)]" />
              <span className="relative font-semibold">Découvrir mon parcours</span>
              <ArrowDown className="relative w-5 h-5" />
            </motion.a>

            <motion.a
              href={CV_PATH}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/60 backdrop-blur-sm text-slate-200 border border-slate-600/50 rounded-2xl hover:bg-slate-700/60 hover:border-slate-500/50 transition-all duration-300 font-semibold"
            >
              <Download className="w-5 h-5" />
              Voir mon CV
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-slate-400"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
