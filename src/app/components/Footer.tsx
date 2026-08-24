import { motion } from 'motion/react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 py-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="text-center md:text-left">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SL
              </span>
              <p className="text-sm text-slate-500 mt-1">
                Serigne Amsatou Lo Seye
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/maraseye", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/maraseye", label: "LinkedIn" },
                { icon: Mail, href: "mailto:maraseye2004@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="p-2.5 bg-slate-800/40 border border-slate-800 rounded-xl text-slate-500 hover:text-slate-300 hover:border-slate-700 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-xs text-slate-500 flex items-center gap-1.5">
                © {currentYear} · Conçu avec
                <Heart className="w-3 h-3 text-red-500/70 fill-current" />
                et React
              </p>
              <p className="text-[10px] text-slate-600 mt-0.5">
                Tous droits réservés
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
