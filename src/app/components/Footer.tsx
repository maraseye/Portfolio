import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-slate-400 flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} Serigne Amsatou Lo Seye. Concu avec
            <Heart className="w-4 h-4 text-red-500 inline-block fill-current" />
            et React
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Tous droits réservés
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
