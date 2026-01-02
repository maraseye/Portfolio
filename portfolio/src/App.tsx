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
          <a href="#projects">Projets</a>
          <a href="#contact" className="cta">Contact</a>
        </div>
      </nav>

      <header id="hero" className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <p className="pill">Ingénieur Informatique • DUT Info</p>
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
          <li className="skill">React</li>
          <li className="skill">TypeScript</li>
          <li className="skill">Node.js</li>
          <li className="skill">Express</li>
          <li className="skill">REST / API</li>
          <li className="skill">SQL / NoSQL</li>
          <li className="skill">CI/CD</li>
          <li className="skill">Design Systems</li>
        </ul>
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
