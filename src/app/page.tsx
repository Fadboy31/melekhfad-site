import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MelekhFad | AI Tools for African Students & Creators",
  description:
    "Discover the best AI tools for African students, creators, and entrepreneurs. Honest reviews, free tools, and practical guides from Dar es Salaam, Tanzania.",
  openGraph: {
    title: "MelekhFad | AI Tools for African Students & Creators",
    description:
      "Discover the best AI tools for African students, creators, and entrepreneurs. Honest reviews, free tools, and practical guides from Dar es Salaam, Tanzania.",
    url: "https://melekhfad-site.vercel.app",
    siteName: "MelekhFad",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MelekhFad | AI Tools for African Students & Creators",
    description:
      "Discover the best AI tools for African students, creators, and entrepreneurs.",
  },
};

export default function Home() {
  const featuredTools = [
    {
      name: "ChatGPT",
      category: "AI Writing",
      description: "The world's most popular AI assistant. Write, research, code, and brainstorm — all in one place.",
      price: "Free / $20mo",
      badge: "Most Popular",
      badgeColor: "#F59E0B",
      emoji: "🤖",
      url: "#",
    },
    {
      name: "Claude",
      category: "AI Writing",
      description: "Anthropic's AI that reasons deeply. Best for long documents, analysis, and nuanced writing.",
      price: "Free / $20mo",
      badge: "Best for Writing",
      badgeColor: "#10B981",
      emoji: "✍️",
      url: "#",
    },
    {
      name: "Midjourney",
      category: "AI Image",
      description: "Turn text into stunning images. Used by designers, marketers, and creators worldwide.",
      price: "$10/mo",
      badge: "Top Rated",
      badgeColor: "#8B5CF6",
      emoji: "🎨",
      url: "#",
    },
    {
      name: "Canva AI",
      category: "Design",
      description: "Design anything with AI assistance. Perfect for students, creators, and small businesses.",
      price: "Free / $15mo",
      badge: "Student Friendly",
      badgeColor: "#EC4899",
      emoji: "🖼️",
      url: "#",
    },
    {
      name: "Notion AI",
      category: "Productivity",
      description: "Your second brain — AI-powered notes, docs, and project management in one workspace.",
      price: "Free / $10mo",
      badge: "Editor's Pick",
      badgeColor: "#06B6D4",
      emoji: "📋",
      url: "#",
    },
    {
      name: "ElevenLabs",
      category: "AI Voice",
      description: "Generate realistic voiceovers in seconds. Best AI voice tool for content creators.",
      price: "Free / $5mo",
      badge: "Trending",
      badgeColor: "#F97316",
      emoji: "🎙️",
      url: "#",
    },
  ];

  const categories = [
    { name: "Writing", emoji: "✍️", count: 48 },
    { name: "Image", emoji: "🎨", count: 35 },
    { name: "Video", emoji: "🎬", count: 27 },
    { name: "Productivity", emoji: "⚡", count: 41 },
    { name: "Coding", emoji: "💻", count: 33 },
    { name: "Voice", emoji: "🎙️", count: 19 },
    { name: "Free Tools", emoji: "🆓", count: 62 },
    { name: "Students", emoji: "🎓", count: 24 },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --black: #0A0A0A;
          --white: #F5F0E8;
          --cream: #EDE8DC;
          --gold: #C9A84C;
          --gold-light: #E8C97A;
          --green: #1A6B45;
          --green-light: #2D9E6B;
          --red: #C0392B;
          --text-muted: #6B6560;
          --border: rgba(201,168,76,0.2);
          --card-bg: rgba(255,255,255,0.03);
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--black);
          color: var(--white);
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          overflow-x: hidden;
        }

        /* NOISE TEXTURE */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }

        /* NAV */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
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
          letter-spacing: -0.02em;
          color: var(--white);
          text-decoration: none;
        }

        .nav-logo span { color: var(--gold); }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          font-size: 0.85rem;
          font-weight: 400;
          color: var(--text-muted);
          text-decoration: none;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .nav-links a:hover { color: var(--gold); }

        .nav-cta {
          background: var(--gold) !important;
          color: var(--black) !important;
          padding: 0.5rem 1.2rem !important;
          border-radius: 4px;
          font-weight: 500 !important;
          text-transform: none !important;
          letter-spacing: 0 !important;
          font-size: 0.85rem !important;
        }

        /* HERO */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 8rem 2rem 5rem;
          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .hero-glow-green {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(26,107,69,0.15) 0%, transparent 70%);
          top: 30%;
          right: 10%;
          pointer-events: none;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.3);
          border-radius: 100px;
          padding: 0.4rem 1rem;
          font-size: 0.78rem;
          color: var(--gold-light);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 2rem;
          font-weight: 500;
          animation: fadeUp 0.6s ease both;
        }

        .hero-tag::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        h1 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(3rem, 8vw, 6.5rem);
          line-height: 0.95;
          letter-spacing: -0.03em;
          text-align: center;
          max-width: 900px;
          animation: fadeUp 0.6s 0.1s ease both;
          position: relative;
          z-index: 1;
        }

        h1 .line-gold { color: var(--gold); display: block; }
        h1 .line-outline {
          -webkit-text-stroke: 1px var(--white);
          color: transparent;
          display: block;
        }

        .hero-sub {
          margin-top: 1.8rem;
          font-size: 1.05rem;
          color: var(--text-muted);
          text-align: center;
          max-width: 520px;
          line-height: 1.7;
          font-weight: 300;
          animation: fadeUp 0.6s 0.2s ease both;
          position: relative;
          z-index: 1;
        }

        .hero-sub strong { color: var(--white); font-weight: 500; }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2.5rem;
          flex-wrap: wrap;
          justify-content: center;
          animation: fadeUp 0.6s 0.3s ease both;
          position: relative;
          z-index: 1;
        }

        .btn-primary {
          background: var(--gold);
          color: var(--black);
          padding: 0.9rem 2rem;
          border-radius: 4px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
        }

        .btn-primary:hover {
          background: var(--gold-light);
          transform: translateY(-2px);
        }

        .btn-ghost {
          background: transparent;
          color: var(--white);
          padding: 0.9rem 2rem;
          border-radius: 4px;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          letter-spacing: 0.02em;
          border: 1px solid rgba(255,255,255,0.15);
          transition: all 0.2s;
          cursor: pointer;
        }

        .btn-ghost:hover {
          border-color: var(--gold);
          color: var(--gold);
        }

        /* STATS */
        .stats-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid var(--border);
          animation: fadeUp 0.6s 0.4s ease both;
          position: relative;
          z-index: 1;
          flex-wrap: wrap;
        }

        .stat { text-align: center; }
        .stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: var(--gold);
          display: block;
        }
        .stat-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 0.2rem;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: var(--border);
        }

        /* SECTIONS */
        section {
          position: relative;
          z-index: 1;
          padding: 5rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .section-eyebrow {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--gold);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        h2 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .view-all {
          font-size: 0.82rem;
          color: var(--gold);
          text-decoration: none;
          border-bottom: 1px solid rgba(201,168,76,0.3);
          padding-bottom: 2px;
          white-space: nowrap;
          transition: border-color 0.2s;
        }
        .view-all:hover { border-color: var(--gold); }

        /* CATEGORIES */
        .categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.6rem;
  margin-bottom: 5rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
}

        .cat-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1.2rem 1rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          display: block;
        }

        .cat-card:hover {
          border-color: var(--gold);
          background: rgba(201,168,76,0.06);
          transform: translateY(-2px);
        }

        .cat-emoji { font-size: 1.6rem; display: block; margin-bottom: 0.5rem; }
        .cat-name {
          font-family: 'Syne', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--white);
          display: block;
        }
        .cat-count {
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
          display: block;
        }

        /* TOOLS GRID */
        .tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

        .tool-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.25s;
          cursor: pointer;
          text-decoration: none;
          display: block;
          position: relative;
          overflow: hidden;
        }

        .tool-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .tool-card:hover {
          border-color: rgba(201,168,76,0.4);
          background: rgba(201,168,76,0.04);
          transform: translateY(-3px);
        }

        .tool-card:hover::before { opacity: 1; }

        .tool-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 0.8rem;
        }

        .tool-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
        }

        .tool-badge {
          font-size: 0.65rem;
          font-weight: 600;
          padding: 0.25rem 0.6rem;
          border-radius: 100px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .tool-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--white);
          margin-bottom: 0.2rem;
        }

        .tool-category {
          font-size: 0.72rem;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 500;
        }

        .tool-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0.7rem 0 1rem;
        }

        .tool-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .tool-price {
          font-size: 0.8rem;
          color: var(--green-light);
          font-weight: 500;
        }

        .tool-cta {
          font-size: 0.78rem;
          color: var(--gold);
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        /* ABOUT STRIP */
        .about-strip {
          background: rgba(201,168,76,0.05);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 3rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto 5rem;
          padding-left: 2rem;
          padding-right: 2rem;
        }

        .about-eyebrow {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--gold);
          font-weight: 500;
          margin-bottom: 0.8rem;
        }

        .about-strip h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .about-strip p {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .about-strip p strong { color: var(--white); font-weight: 500; }

        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.2rem;
        }

        .about-tag {
          font-size: 0.75rem;
          padding: 0.3rem 0.8rem;
          border-radius: 100px;
          border: 1px solid var(--border);
          color: var(--text-muted);
        }

        .about-visual {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .about-stat-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1rem 1.2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .about-stat-icon {
          font-size: 1.5rem;
          width: 40px;
          text-align: center;
        }

        .about-stat-label {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .about-stat-value {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--white);
        }

        /* NEWSLETTER */
        .newsletter-section {
          background: linear-gradient(135deg, rgba(26,107,69,0.15), rgba(201,168,76,0.08));
          border: 1px solid rgba(26,107,69,0.3);
          border-radius: 16px;
          padding: 3.5rem;
          text-align: center;
          max-width: 1200px;
          margin: 0 auto 5rem;
        }

        .newsletter-section h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 800;
          margin-bottom: 0.8rem;
        }

        .newsletter-section p {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 2rem;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        .newsletter-form {
          display: flex;
          gap: 0.75rem;
          max-width: 420px;
          margin: 0 auto;
          flex-wrap: wrap;
          justify-content: center;
        }

        .newsletter-input {
          flex: 1;
          min-width: 220px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 0.85rem 1.2rem;
          color: var(--white);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .newsletter-input:focus { border-color: var(--gold); }
        .newsletter-input::placeholder { color: var(--text-muted); }

        .newsletter-note {
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-top: 1rem;
        }

        /* FOOTER */
        footer {
          border-top: 1px solid var(--border);
          padding: 2.5rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          position: relative;
          z-index: 1;
        }

        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--white);
        }

        .footer-logo span { color: var(--gold); }

        .footer-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
        }

        .footer-links a {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover { color: var(--gold); }

        .footer-copy {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

       @media (max-width: 768px) {
  nav { padding: 1rem 1.2rem; }
  .nav-links { display: none; }
  .about-strip { grid-template-columns: 1fr; }
  .stat-divider { display: none; }
  .stats-bar { gap: 1.5rem; }
  footer { flex-direction: column; text-align: center; }
  .footer-links { justify-content: center; }
  .categories-grid { grid-template-columns: repeat(4, 1fr); padding: 0 1rem; gap: 0.5rem; }
  .cat-emoji { font-size: 1.3rem; }
  .cat-name { font-size: 0.72rem; }
  .cat-count { font-size: 0.65rem; }
  .tools-grid { grid-template-columns: 1fr; }
  .hero { padding: 6rem 1.2rem 3rem; }
  .hero-actions { flex-direction: column; align-items: center; }
  .btn-primary, .btn-ghost { width: 100%; text-align: center; }
  .newsletter-form { flex-direction: column; }
  .newsletter-input { width: 100%; }
  h1 { font-size: 2.8rem; }
}
      `}</style>

      {/* NAV */}
      <nav>
        <Link href="/" className="nav-logo">Melekh<span>Fad</span></Link>
        <ul className="nav-links">
          <li><Link href="/tools">Tools</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/newsletter">Newsletter</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/newsletter" className="nav-cta">Subscribe Free</Link></li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-glow" />
        <div className="hero-glow-green" />

        <div className="hero-tag">AI Tools for African Youth</div>

        <h1>
          <span className="line-outline">Discover</span>
          <span className="line-gold">AI Tools</span>
          <span>That Work.</span>
        </h1>

        <p className="hero-sub">
          I test and review the best AI tools so you don&apos;t have to waste time.
          Built for <strong>students, creators, and entrepreneurs</strong> across Africa.
        </p>

        <div className="hero-actions">
          <Link href="/tools" className="btn-primary">Explore 200+ Tools →</Link>
          <Link href="/newsletter" className="btn-ghost">Get Weekly Picks</Link>
        </div>

        <div className="stats-bar">
          <div className="stat">
            <span className="stat-num">200+</span>
            <span className="stat-label">AI Tools Listed</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">62</span>
            <span className="stat-label">100% Free Tools</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">8</span>
            <span className="stat-label">Categories</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">Weekly</span>
            <span className="stat-label">New Reviews</span>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="categories-grid">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={`/categories/${cat.name.toLowerCase().replaceAll(" ", "-")}`}
            className="cat-card"
          >
            <span className="cat-emoji">{cat.emoji}</span>
            <span className="cat-name">{cat.name}</span>
            <span className="cat-count">{cat.count} tools</span>
          </Link>
        ))}
      </div>

      {/* FEATURED TOOLS */}
      <section>
        <div className="section-header">
          <div>
            <div className="section-eyebrow">Hand-picked for you</div>
            <h2>Featured AI Tools</h2>
          </div>
          <Link href="/tools" className="view-all">View all tools →</Link>
        </div>

        <div className="tools-grid">
          {featuredTools.map((tool) => (
            <Link
              key={tool.name}
              href={`/tools/${tool.name.toLowerCase().replaceAll(" ", "-")}`}
              className="tool-card"
            >
              <div className="tool-card-top">
                <div className="tool-icon">{tool.emoji}</div>
                <span
                  className="tool-badge"
                  style={{
                    background: `${tool.badgeColor}18`,
                    color: tool.badgeColor,
                    border: `1px solid ${tool.badgeColor}30`,
                  }}
                >
                  {tool.badge}
                </span>
              </div>
              <div className="tool-category">{tool.category}</div>
              <div className="tool-name">{tool.name}</div>
              <div className="tool-desc">{tool.description}</div>
              <div className="tool-footer">
                <span className="tool-price">{tool.price}</span>
                <span className="tool-cta">Read review →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <div className="about-strip" style={{ padding: "3rem" }}>
        <div>
          <div className="about-eyebrow">Who is behind this</div>
          <h2>Built by a student,<br />for the builders.</h2>
          <p>
            I&apos;m <strong>MelekhFad</strong> — a Journalism student at UDSM, web developer,
            video editor, and graphic designer based in <strong>Dar es Salaam, Tanzania.</strong>
          </p>
          <p>
            I built this because African youth deserve a trusted place to discover AI tools
            that actually work for our budget, our context, and our ambitions.
            No fluff. No paid rankings. Just honest reviews.
          </p>
          <div className="about-tags">
            {["UDSM Student", "Web Developer", "Graphic Designer", "Dar es Salaam", "AI Enthusiast"].map(t => (
              <span key={t} className="about-tag">{t}</span>
            ))}
          </div>
        </div>
        <div className="about-visual">
          {[
            { icon: "🎓", label: "Current status", value: "2nd Year, UDSM" },
            { icon: "💻", label: "Tech stack", value: "Next.js · Tailwind · Supabase" },
            { icon: "🎯", label: "Mission", value: "AI literacy for African youth" },
            { icon: "📍", label: "Based in", value: "Dar es Salaam, Tanzania" },
          ].map(s => (
            <div key={s.label} className="about-stat-card">
              <div className="about-stat-icon">{s.icon}</div>
              <div>
                <div className="about-stat-label">{s.label}</div>
                <div className="about-stat-value">{s.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="newsletter-section" style={{ padding: "3.5rem 2rem" }}>
        <div className="section-eyebrow" style={{ marginBottom: "1rem" }}>Free. No spam. Ever.</div>
        <h2>Get 5 AI Tools<br />Every Tuesday.</h2>
        <p>
          Join students and creators across Africa getting the best new AI tools,
          free resources, and practical guides — every week in your inbox.
        </p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="your@email.com"
            className="newsletter-input"
          />
          <button className="btn-primary">Subscribe →</button>
        </div>
        <div className="newsletter-note">Free forever · Unsubscribe anytime · No spam</div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Melekh<span>Fad</span></div>
        <ul className="footer-links">
          <li><Link href="/tools">Tools</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/newsletter">Newsletter</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/about">Work With Me</Link></li>
        </ul>
        <div className="footer-copy">© 2026 MelekhFad · Dar es Salaam, Tanzania</div>
      </footer>
    </>
  );
}
