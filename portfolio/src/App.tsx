import './App.css'

function App() {
  return (
    <div className="site">
      <nav className="nav">
        <div className="brand">
          <span className="brand-mark" />
          <span>Portfolio</span>
        </div>
        <div className="nav-links">
          <a href="#hero">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#certifications">Certifications</a>
          <a href="#projects">Projets</a>
          <a href="#contact" className="cta">Contact</a>
        </div>
      </nav>

      <header id="hero" className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <p className="pill">Ingénieur Informatique </p>
          <h1>
            Créons des expériences web <span className="neon">immersives</span>
          </h1>
          <p className="subtitle">
            Développeur full‑stack passionné par les interfaces modernes, les
            performances et le design inspiré du gaming.
          </p>
          <div className="actions">
            <a href="#projects" className="btn primary">Voir mes projets</a>
            <a href="#contact" className="btn ghost">Me contacter</a>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="/mara_photo.jpeg"
            alt="Photo de profil"
          />
        </div>
      </header>

      <section id="about" className="section about">
        <div className="section-title">
          <h2>À propos</h2>
          <span className="bar" />
        </div>
        <div className="about-grid">
          <div className="card glass">
            <h3>Parcours</h3>
            <p>
              J'ai obtenu un <strong>DUT Informatique</strong> et je poursuis
              actuellement un <strong>cycle d'ingénieur en informatique</strong>.
              J'aime concevoir des applications robustes avec une touche
              créative.
            </p>
          </div>
          <div className="card glass">
            <h3>Ce que je recherche</h3>
            <p>
              Des projets où je peux allier design, animation, performance et
              architecture propre. Freelance, alternance ou projets perso.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="section-title">
          <h2>Compétences</h2>
          <span className="bar" />
        </div>
        <ul className="skills-grid">
          <li className="skill">C</li>
          <li className="skill">JAVA</li>
          <li className="skill">Python</li>
          <li className="skill">HTML et CSS</li>
          <li className="skill">JavaScript</li>
          <li className="skill">React</li>
          <li className="skill">FastAPI</li>
          <li className="skill">MySQL</li>
          <li className="skill">Oracle</li>
          <li className="skill">PlSql</li>
          <li className="skill">Keycloak</li>
          <li className="skill">Traefik</li>
          <li className="skill">RAbbitmq</li>
          <li className="skill">R</li>        
        </ul>
      </section>

      <section id="certifications" className="section certs">
        <div className="section-title">
          <h2>Certifications</h2>
          <span className="bar" />
        </div>
        <div className="certs-grid">
          {[
            { name: 'AWS Cloud Practitioner', org: 'Amazon Web Services', year: '2024' },
            { name: 'Google Associate Cloud Engineer', org: 'Google Cloud', year: '2024' },
            { name: 'Scrum Master', org: 'Scrum.org', year: '2023' },
          ].map((c) => (
            <article key={c.name} className="cert-card">
              <div className="cert-header">
                <span className="chip">{c.year}</span>
                <h3>{c.name}</h3>
              </div>
              <p className="org">{c.org}</p>
              <div className="project-actions">
                <a className="btn small" href="#">Voir le badge</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="section-title">
          <h2>Projets</h2>
          <span className="bar" />
        </div>
        <div className="projects-grid">
          {[
            {
              title: 'Dashboard e‑sports',
              img:
                'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
              desc: 'Stats en temps réel, charts et thèmes dynamiques.',
            },
            {
              title: 'Site portfolio 3D',
              img:
                'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
              desc: 'Animations WebGL et expériences interactives.',
            },
            {
              title: 'API tournois',
              img:
                'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
              desc: 'Backend Node/Express scalable et typé.',
            },
          ].map((p) => (
            <article key={p.title} className="project-card">
              <div className="thumb">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-actions">
                  <a className="btn small" href="#">Voir</a>
                  <a className="btn small ghost" href="#">Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="section-title">
          <h2>Contact</h2>
          <span className="bar" />
        </div>
        <div className="contact-grid">
          <div className="card glass">
            <p>
              Discutons de votre projet ou de votre équipe. Je réponds vite et
              je peux partager un portfolio détaillé sur demande.
            </p>
            <div className="contact-actions">
              <a className="btn primary" href="mailto:contact@example.com">Envoyer un email</a>
              <a className="btn ghost" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn ghost" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} • Portfolio</span>
        <span className="dot" />
        <span>Construit avec React + Vite</span>
      </footer>
    </div>
  )
}

export default App
