import { motion } from 'motion/react';
import { useMemo } from 'react';
import type { IconType } from 'react-icons';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiPhp,
  SiNodedotjs,
  SiPython,
  SiLaravel,
  SiFastapi,
  SiMysql,
  SiPostgresql,
  SiSqlalchemy,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiPostman,
  SiRabbitmq,
  SiFigma,
  SiKeycloak,
  SiTraefikproxy,
  SiGithubactions,
  SiNginx,
  SiLinux,
  SiRedis,
  SiVirtualbox,
  SiXampp,
  SiLucid,
  SiVercel,
  SiRender,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

// Brand colors for skills without a react-icons entry
const skillColors: Record<string, string> = {
  C: '#A8B9CC',
  Oracle: '#F80000',
  UML: '#6366F1',
  Mérise: '#8B5CF6',
  Git: '#F05032',
  PuTTY: '#0097DA',
  WinSCP: '#2F8B36',
};

const skillIcons: Record<string, { icon: IconType; color: string }> = {
  HTML: { icon: SiHtml5, color: '#E34F26' },
  CSS: { icon: SiCss, color: '#1572B6' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  React: { icon: SiReact, color: '#61DAFB' },
  Java: { icon: FaJava, color: '#ED8B00' },
  PHP: { icon: SiPhp, color: '#777BB4' },
  Python: { icon: SiPython, color: '#3776AB' },
  Laravel: { icon: SiLaravel, color: '#FF2D20' },
  FastAPI: { icon: SiFastapi, color: '#009688' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  MySQL: { icon: SiMysql, color: '#4479A1' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169E1' },
  SQLAlchemy: { icon: SiSqlalchemy, color: '#D71F00' },
  Redis: { icon: SiRedis, color: '#DC382D' },
  GitHub: { icon: SiGithub, color: '#FFFFFF' },
  GitLab: { icon: SiGitlab, color: '#FC6D26' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  Postman: { icon: SiPostman, color: '#FF6C37' },
  Keycloak: { icon: SiKeycloak, color: '#4D4D4D' },
  Traefik: { icon: SiTraefikproxy, color: '#24A1C1' },
  RabbitMQ: { icon: SiRabbitmq, color: '#FF6600' },
  Figma: { icon: SiFigma, color: '#F24E1E' },
  'GitHub Actions': { icon: SiGithubactions, color: '#2088FF' },
  Nginx: { icon: SiNginx, color: '#009639' },
  Linux: { icon: SiLinux, color: '#FCC624' },
  VirtualBox: { icon: SiVirtualbox, color: '#183A61' },
  Xampp: { icon: SiXampp, color: '#FB7A24' },
  Lucidchart: { icon: SiLucid, color: '#282C33' },
  Vercel: { icon: SiVercel, color: '#000000' },
  Render: { icon: SiRender, color: '#46E3B7' },
};

// Text-based icon fallback
function TextIcon({ label, color }: { label: string; color: string }) {
  return (
    <div
      className="flex items-center justify-center font-bold text-3xl"
      style={{ color, fontFamily: 'monospace' }}
    >
      {label}
    </div>
  );
}

// Category gradient themes
const categoryThemes: Record<string, { gradient: string; border: string; glow: string }> = {
  'Front-end': {
    gradient: 'from-blue-600/15 to-cyan-600/15',
    border: 'hover:border-blue-500/40',
    glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
  },
  'Langages': {
    gradient: 'from-amber-600/15 to-orange-600/15',
    border: 'hover:border-amber-500/40',
    glow: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
  },
  'Back-end': {
    gradient: 'from-emerald-600/15 to-teal-600/15',
    border: 'hover:border-emerald-500/40',
    glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
  },
  'Bases de données': {
    gradient: 'from-purple-600/15 to-pink-600/15',
    border: 'hover:border-purple-500/40',
    glow: 'group-hover:shadow-[0_0_30px_rgba(147,51,234,0.15)]',
  },
  'DevOps': {
    gradient: 'from-sky-600/15 to-indigo-600/15',
    border: 'hover:border-sky-500/40',
    glow: 'group-hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]',
  },
  'Déploiement': {
    gradient: 'from-teal-600/15 to-cyan-600/15',
    border: 'hover:border-teal-500/40',
    glow: 'group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]',
  },
  'Modélisation': {
    gradient: 'from-violet-600/15 to-fuchsia-600/15',
    border: 'hover:border-violet-500/40',
    glow: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
  },
  'Outils': {
    gradient: 'from-rose-600/15 to-red-600/15',
    border: 'hover:border-rose-500/40',
    glow: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]',
  },
  'Design': {
    gradient: 'from-fuchsia-600/15 to-violet-600/15',
    border: 'hover:border-fuchsia-500/40',
    glow: 'group-hover:shadow-[0_0_30px_rgba(192,38,211,0.15)]',
  },
};

interface Skill {
  name: string;
}

interface Category {
  category: string;
  skills: Skill[];
}

export function Skills() {
  const categories: Category[] = useMemo(
    () => [
      {
        category: 'Front-end',
        skills: [
          { name: 'React' },
          { name: 'HTML' },
          { name: 'CSS' },
          { name: 'JavaScript' },
        ],
      },
      {
        category: 'Langages',
        skills: [
          { name: 'Java' },
          { name: 'C' },
          { name: 'JavaScript' },
          { name: 'PHP' },
          { name: 'Python' },
        ],
      },
      {
        category: 'Back-end',
        skills: [
          { name: 'Laravel' },
          { name: 'FastAPI' },
          { name: 'Node.js' },
          { name: 'PHP' },
        ],
      },
      {
        category: 'Bases de données',
        skills: [
          { name: 'MySQL' },
          { name: 'PostgreSQL' },
          { name: 'Oracle' },
          { name: 'SQLAlchemy' },
          { name: 'Redis' },
        ],
      },
      {
        category: 'DevOps',
        skills: [
          { name: 'Docker' },
          { name: 'Traefik' },
          { name: 'Nginx' },
          { name: 'Linux' },
          { name: 'Keycloak' },
          { name: 'RabbitMQ' },
          { name: 'GitHub Actions' },
          { name: 'VirtualBox' },
        ],
      },
      {
        category: 'Déploiement',
        skills: [
          { name: 'Vercel' },
          { name: 'Render' },
        ],
      },
      {
        category: 'Modélisation',
        skills: [
          { name: 'UML' },
          { name: 'Mérise' },
        ],
      },
      {
        category: 'Outils',
        skills: [
          { name: 'Git' },
          { name: 'GitHub' },
          { name: 'GitLab' },
          { name: 'Postman' },
          { name: 'PuTTY' },
          { name: 'WinSCP' },
          { name: 'Xampp' },
          { name: 'Lucidchart' },
        ],
      },
      {
        category: 'Design',
        skills: [{ name: 'Figma' }],
      },
    ],
    [],
  );

  return (
    <section id="competences" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,#4f4f4f08_0%,transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
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
          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
            Les technologies et outils que j'utilise au quotidien
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((category, categoryIndex) => {
            const theme = categoryThemes[category.category] || categoryThemes['Outils'];

            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <div className={`relative group h-full ${theme.glow} transition-shadow duration-500`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full ${theme.border} transition-all duration-300`}>
                    <h3 className="text-xl font-semibold text-slate-200 mb-6 text-center tracking-tight">
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-5">
                      {category.skills.map((skill, skillIndex) => {
                        const iconData = skillIcons[skill.name];
                        const IconComponent = iconData?.icon;
                        const iconColor = iconData?.color || skillColors[skill.name] || '#94a3b8';
                        const hasIcon = !!iconData;

                        return (
                          <motion.div
                            key={`${category.category}-${skill.name}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: 0.15 + skillIndex * 0.06,
                              type: 'spring',
                              stiffness: 200,
                            }}
                            whileHover={{ scale: 1.12, y: -6 }}
                            className="flex flex-col items-center gap-2.5 w-[72px] cursor-default"
                            title={skill.name}
                          >
                            <div
                              className="w-[56px] h-[56px] rounded-xl bg-slate-900/70 border border-slate-700/40 flex items-center justify-center transition-all duration-300"
                              onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = `0 0 24px 3px ${iconColor}25`;
                                e.currentTarget.style.borderColor = `${iconColor}50`;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = '';
                              }}
                            >
                              {hasIcon && IconComponent ? (
                                <IconComponent
                                  size={28}
                                  color={iconColor}
                                />
                              ) : (
                                <TextIcon label={skill.name.substring(0, 2)} color={iconColor} />
                              )}
                            </div>
                            <span className="text-xs text-slate-400 font-medium text-center leading-tight">
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
