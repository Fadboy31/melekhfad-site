export default function AboutPage() {
  const skills = [
    { name: "HTML & CSS", level: 80, emoji: "🎨" },
    { name: "JavaScript", level: 70, emoji: "⚡" },
    { name: "Next.js", level: 55, emoji: "▲" },
    { name: "Adobe Premiere Pro", level: 85, emoji: "🎬" },
    { name: "Adobe Photoshop", level: 75, emoji: "🖼️" },
    { name: "Graphic Design", level: 78, emoji: "✏️" },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Started at UDSM",
      desc: "Enrolled in Bachelor of Arts in Journalism and Mass Communication. Quickly realized my passion was in the digital world.",
    },
    {
      year: "2025",
      title: "Xplosion Academy",
      desc: "Joined Xplosion Academy and learned web development from scratch — HTML, CSS, and JavaScript. Finished as the top student with the highest practical performance.",
    },
    {
      year: "2026",
      title: "Mid-level Web Development",
      desc: "Advanced from beginner to mid-level. Mastered Adobe Premiere Pro and Photoshop. Started building real projects.",
    },
    {
      year: "Now",
      title: "Building the Empire",
      desc: "Launched MelekhFad.com — an AI tools directory for African youth. This is just the beginning of the digital empire.",
    },
  ];

  const values = [
    {
      emoji: "🌍",
      title: "Africa First",
      desc: "Every review considers the African context — affordability, accessibility, and real-world use for students and entrepreneurs on the continent.",
    },
    {
      emoji: "💯",
      title: "Honest Reviews",
      desc: "No paid rankings. No fake scores. Every tool is reviewed based on real usage and genuine opinion. If it's not good, I say so.",
    },
    {
      emoji: "🆓",
      title: "Free Resources Priority",
      desc: "Most African students don't have subscription budgets. I always highlight free options and affordable alternatives first.",
    },
    {
      emoji: "🔨",
      title: "Builders Over Talkers",
      desc: "I believe in building, not just learning. Every skill I pick up goes into a real project. This site is proof of that.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --black: #0A0A0A;
          --white: #F5F0E8;
          --gold: #C9A84C;
          --gold-light: #E8C97A;
          --green: #1A6B45;
          --green-light: #2D9E6B;
          --text-muted: #6B6560;
          --border: rgba(201,168,76,0.2);
        }
        body {
          background: var(--black);
          color: var(--white);
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
        }
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem 2.5rem;
          background: rgba(10,10,10,0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }
        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.3rem;
          color: var(--white);
          text-decoration: none;
        }
        .nav-logo span { color: var(--gold); }
        .nav-links { display: flex; align-items: center; gap: 2rem; list-style: none; }
        .nav-links a {
          font-size: 0.85rem; color: var(--text-muted);
          text-decoration: none; letter-spacing: 0.04em;
          text-transform: uppercase; transition: color 0.2s;
        }
        .nav-links a:hover, .nav-links a.active { color: var(--gold); }

        .wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 7rem 2rem 5rem;
          position: relative;
          z-index: 1;
        }

        /* HERO */
        .about-hero {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 3rem;
          align-items: center;
          margin-bottom: 4rem;
          padding-bottom: 4rem;
          border-bottom: 1px solid var(--border);
        }

        .eyebrow {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--gold);
          font-weight: 500;
          margin-bottom: 0.8rem;
        }

        h1 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 1.2rem;
        }

        h1 span { color: var(--gold); }

        .about-intro {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .about-intro strong { color: var(--white); font-weight: 500; }

        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .about-tag {
          font-size: 0.75rem;
          padding: 0.3rem 0.9rem;
          border-radius: 100px;
          border: 1px solid var(--border);
          color: var(--text-muted);
        }

        .profile-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
        }

        .profile-avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(201,168,76,0.3), rgba(26,107,69,0.3));
          border: 2px solid var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin: 0 auto 1rem;
        }

        .profile-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.2rem;
          margin-bottom: 0.3rem;
        }

        .profile-name span { color: var(--gold); }

        .profile-title {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .profile-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .profile-stat {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 0.6rem;
          text-align: center;
        }

        .profile-stat-val {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: var(--gold);
          display: block;
        }

        .profile-stat-label {
          font-size: 0.65rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* SECTIONS */
        .section { margin-bottom: 3.5rem; }

        h2 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.4rem;
          letter-spacing: -0.01em;
          margin-bottom: 1.2rem;
          padding-bottom: 0.7rem;
          border-bottom: 1px solid var(--border);
        }

        /* STORY */
        .story-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.85;
          margin-bottom: 0.9rem;
        }

        .story-text strong { color: var(--white); font-weight: 500; }

        /* TIMELINE */
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 44px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: var(--border);
        }

        .tl-item {
          display: flex;
          gap: 1.2rem;
          align-items: flex-start;
          padding-bottom: 1.8rem;
          position: relative;
        }

        .tl-item:last-child { padding-bottom: 0; }

        .tl-year {
          min-width: 52px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          color: var(--gold);
          padding-top: 0.2rem;
          text-align: right;
          flex-shrink: 0;
        }

        .tl-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--gold);
          border: 2px solid var(--black);
          flex-shrink: 0;
          margin-top: 0.35rem;
          position: relative;
          z-index: 1;
          box-shadow: 0 0 0 3px rgba(201,168,76,0.2);
        }

        .tl-content h4 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          margin-bottom: 0.3rem;
        }

        .tl-content p {
          font-size: 0.83rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* SKILLS */
        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .skill-row {
          display: grid;
          grid-template-columns: 160px 1fr 40px;
          align-items: center;
          gap: 1rem;
        }

        .skill-label {
          font-size: 0.83rem;
          color: var(--white);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .skill-track {
          height: 6px;
          background: rgba(255,255,255,0.06);
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-fill {
          height: 6px;
          border-radius: 3px;
          background: linear-gradient(90deg, var(--green), var(--gold));
        }

        .skill-pct {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-align: right;
        }

        /* VALUES */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .value-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.2rem;
          transition: border-color 0.2s;
        }

        .value-card:hover { border-color: rgba(201,168,76,0.4); }

        .value-emoji {
          font-size: 1.5rem;
          display: block;
          margin-bottom: 0.7rem;
        }

        .value-card h3 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 0.4rem;
          border: none;
          padding: 0;
        }

        .value-card p {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* CTA */
        .cta-strip {
          background: linear-gradient(135deg, rgba(201,168,76,0.08), rgba(26,107,69,0.08));
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem;
          text-align: center;
        }

        .cta-strip h2 {
          font-family: 'Syne', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 0.7rem;
          border: none;
          padding: 0;
        }

        .cta-strip p {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          line-height: 1.7;
          max-width: 420px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: var(--gold);
          color: var(--black);
          padding: 0.85rem 1.8rem;
          border-radius: 4px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.88rem;
          text-decoration: none;
          transition: all 0.2s;
        }

        .btn-primary:hover {
          background: var(--gold-light);
          transform: translateY(-2px);
        }

        .btn-ghost {
          background: transparent;
          color: var(--white);
          padding: 0.85rem 1.8rem;
          border-radius: 4px;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 0.88rem;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.15);
          transition: all 0.2s;
        }

        .btn-ghost:hover {
          border-color: var(--gold);
          color: var(--gold);
        }

        footer {
          border-top: 1px solid var(--border);
          padding: 2rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          position: relative;
          z-index: 1;
          margin-top: 4rem;
        }

        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
        }
        .footer-logo span { color: var(--gold); }
        .footer-copy { font-size: 0.75rem; color: var(--text-muted); }

        @media (max-width: 768px) {
          nav { padding: 1rem 1.2rem; }
          .nav-links { display: none; }
          .about-hero { grid-template-columns: 1fr; }
          .skill-row { grid-template-columns: 130px 1fr 36px; }
        }
      `}</style>

      <nav>
        <a href="/" className="nav-logo">Melekh<span>Fad</span></a>
        <ul className="nav-links">
          <li><a href="/tools">Tools</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/newsletter">Newsletter</a></li>
          <li><a href="/about" className="active">About</a></li>
        </ul>
      </nav>

      <div className="wrap">

        {/* HERO */}
        <div className="about-hero">
          <div>
            <div className="eyebrow">The person behind the site</div>
            <h1>I&apos;m <span>MelekhFad</span>.<br />Builder. Editor.<br />Developer.</h1>
            <p className="about-intro">
              A <strong>second-year Journalism student at UDSM</strong>, web developer,
              video editor, and graphic designer based in <strong>Dar es Salaam, Tanzania.</strong>
            </p>
            <p className="about-intro">
              I built this site because African youth deserve a <strong>trusted, honest place</strong> to
              discover AI tools — reviewed from our context, our budget, and our ambitions.
              Not from Silicon Valley. From here.
            </p>
            <div className="about-tags">
              {["UDSM · 2nd Year", "Dar es Salaam", "Web Developer", "Premiere Pro", "Photoshop", "Xplosion Academy"].map(t => (
                <span key={t} className="about-tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-avatar">👨🏾‍💻</div>
            <div className="profile-name">Melekh<span>Fad</span></div>
            <div className="profile-title">
              Journalism Student · Web Developer<br />
              Video Editor · Graphic Designer
            </div>
            <div className="profile-stats">
              <div className="profile-stat">
                <span className="profile-stat-val">🏆</span>
                <span className="profile-stat-label">Top Student</span>
              </div>
              <div className="profile-stat">
                <span className="profile-stat-val">2nd</span>
                <span className="profile-stat-label">Year</span>
              </div>
              <div className="profile-stat">
                <span className="profile-stat-val">200+</span>
                <span className="profile-stat-label">Tools Listed</span>
              </div>
              <div className="profile-stat">
                <span className="profile-stat-val">🇹🇿</span>
                <span className="profile-stat-label">Tanzania</span>
              </div>
            </div>
          </div>
        </div>

        {/* STORY */}
        <div className="section">
          <h2>My Story</h2>
          <p className="story-text">
            I started university studying Journalism and Mass Communication — and while I love
            storytelling and media, I quickly realized my true obsession was the <strong>digital world.</strong>
            Building things. Creating things. Making things that live on the internet.
          </p>
          <p className="story-text">
            I joined <strong>Xplosion Academy</strong> and learned web development from scratch — HTML, CSS,
            and JavaScript. I didn&apos;t just pass the course. I finished as the <strong>top student with the
            highest practical performance.</strong> That told me something about myself: when I care about
            something, I go all in.
          </p>
          <p className="story-text">
            I continued from beginner to mid-level, picked up <strong>Adobe Premiere Pro</strong> for
            video editing and <strong>Photoshop</strong> for design. Every skill I learn goes into a
            real project — not just a certificate on a wall.
          </p>
          <p className="story-text">
            MelekhFad.com is my first major project. An AI tools directory built specifically
            for African youth — because most review sites are written for Americans with
            American budgets and American context. <strong>We deserve better than that.</strong>
          </p>
        </div>

        {/* TIMELINE */}
        <div className="section">
          <h2>The Journey</h2>
          <div className="timeline">
            {timeline.map((item) => (
              <div key={item.year} className="tl-item">
                <div className="tl-year">{item.year}</div>
                <div className="tl-dot" />
                <div className="tl-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SKILLS */}
        <div className="section">
          <h2>Skills & Tools</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-row">
                <div className="skill-label">
                  <span>{skill.emoji}</span>
                  <span>{skill.name}</span>
                </div>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: `${skill.level}%` }} />
                </div>
                <div className="skill-pct">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* VALUES */}
        <div className="section">
          <h2>What I Stand For</h2>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <span className="value-emoji">{v.emoji}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="cta-strip">
          <h2>Let&apos;s Build Together</h2>
          <p>
            Whether you want the best AI tools for your work, or you want to follow
            the journey of building a digital empire from Dar es Salaam —
            this is the right place to start.
          </p>
          <div className="cta-buttons">
            <a href="/tools" className="btn-primary">Explore AI Tools →</a>
            <a href="/newsletter" className="btn-ghost">Join the Newsletter</a>
          </div>
        </div>

      </div>

      <footer>
        <div className="footer-logo">Melekh<span>Fad</span></div>
        <div className="footer-copy">© 2026 MelekhFad · Dar es Salaam, Tanzania</div>
      </footer>
    </>
  );
}