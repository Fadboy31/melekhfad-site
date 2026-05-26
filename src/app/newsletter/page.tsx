import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Join the MelekhFad AI Signal newsletter for weekly AI tools, workflows, deals, and honest recommendations for African builders.",
};

const issues = [
  {
    label: "Tool Radar",
    title: "5 tools worth testing this week",
    detail: "One sentence verdicts, free-plan notes, and the best use case for each tool.",
  },
  {
    label: "Workflow Drop",
    title: "A practical AI workflow you can copy",
    detail: "Study, content, freelance, research, coding, or design systems built for real work.",
  },
  {
    label: "Deal Watch",
    title: "Discounts, free credits, and student-friendly picks",
    detail: "Useful offers without hype, with Tanzania and Africa accessibility notes.",
  },
];

const signals = [
  "Free tools first",
  "No paid ranking bias",
  "African access notes",
  "Founder and student friendly",
];

export default function NewsletterPage() {
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
          --red: #C0392B;
          --ink-soft: #BDB5AA;
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
          color: var(--text-muted);
          text-decoration: none;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .nav-links a:hover,
        .nav-links a.active { color: var(--gold); }

        .wrap {
          position: relative;
          z-index: 1;
          max-width: 1120px;
          margin: 0 auto;
          padding: 8rem 2rem 5rem;
        }

        .hero {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 360px;
          gap: 3rem;
          align-items: center;
          min-height: calc(100vh - 8rem);
          padding-bottom: 3rem;
          border-bottom: 1px solid var(--border);
        }

        .eyebrow {
          color: var(--gold);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 7vw, 5.8rem);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.03em;
          max-width: 760px;
        }

        h1 span { color: var(--gold); }

        .hero-copy {
          max-width: 580px;
          margin-top: 1.4rem;
          color: var(--ink-soft);
          font-size: 1rem;
          line-height: 1.8;
        }

        .signal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-top: 1.6rem;
        }

        .signal-tags span {
          border: 1px solid var(--border);
          border-radius: 100px;
          color: var(--text-muted);
          font-size: 0.75rem;
          padding: 0.38rem 0.8rem;
        }

        .signup-panel {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,168,76,0.28);
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 24px 80px rgba(0,0,0,0.24);
        }

        .panel-kicker {
          color: var(--green-light);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.7rem;
        }

        .signup-panel h2 {
          font-family: 'Syne', sans-serif;
          font-size: 1.45rem;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 0.75rem;
        }

        .signup-panel p {
          color: var(--text-muted);
          font-size: 0.86rem;
          line-height: 1.65;
          margin-bottom: 1.2rem;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .input {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          border-radius: 6px;
          color: var(--white);
          font: inherit;
          padding: 0.9rem 1rem;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }

        .input:focus {
          border-color: var(--gold);
          background: rgba(255,255,255,0.07);
        }

        .input::placeholder { color: var(--text-muted); }

        .btn-primary {
          border: none;
          border-radius: 6px;
          background: var(--gold);
          color: var(--black);
          cursor: pointer;
          font-family: 'Syne', sans-serif;
          font-size: 0.92rem;
          font-weight: 800;
          padding: 0.95rem 1rem;
          transition: transform 0.2s, background 0.2s;
        }

        .btn-primary:hover {
          background: var(--gold-light);
          transform: translateY(-2px);
        }

        .fine-print {
          color: var(--text-muted);
          font-size: 0.72rem;
          margin-top: 0.9rem;
        }

        .metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.8rem;
          margin-top: 1.2rem;
          padding-top: 1.2rem;
          border-top: 1px solid var(--border);
        }

        .metric strong {
          color: var(--gold);
          display: block;
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
        }

        .metric span {
          color: var(--text-muted);
          display: block;
          font-size: 0.67rem;
          line-height: 1.4;
          margin-top: 0.2rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .section {
          padding-top: 4rem;
        }

        .section-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .section-head h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.7rem, 4vw, 2.4rem);
          line-height: 1.08;
          letter-spacing: -0.02em;
        }

        .section-head p {
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.7;
          max-width: 360px;
        }

        .issue-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .issue {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.25rem;
        }

        .issue-label {
          color: var(--gold);
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }

        .issue h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          line-height: 1.3;
          margin-bottom: 0.55rem;
        }

        .issue p {
          color: var(--text-muted);
          font-size: 0.82rem;
          line-height: 1.65;
        }

        .sponsor-band {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
          align-items: center;
          margin-top: 4rem;
          padding: 2rem;
          border: 1px solid rgba(45,158,107,0.25);
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(26,107,69,0.12), rgba(201,168,76,0.06));
        }

        .sponsor-band h2 {
          font-family: 'Syne', sans-serif;
          font-size: 1.6rem;
          line-height: 1.15;
          margin-bottom: 0.65rem;
        }

        .sponsor-band p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.75;
        }

        .sponsor-list {
          display: grid;
          gap: 0.65rem;
        }

        .sponsor-list div {
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          color: var(--ink-soft);
          font-size: 0.82rem;
          padding: 0.75rem 0.9rem;
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
        }

        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
        }

        .footer-logo span { color: var(--gold); }
        .footer-copy { font-size: 0.75rem; color: var(--text-muted); }

        @media (max-width: 860px) {
          nav { padding: 1rem 1.2rem; }
          .nav-links { display: none; }
          .wrap { padding: 7rem 1.2rem 4rem; }
          .hero { grid-template-columns: 1fr; min-height: auto; gap: 2rem; }
          .signup-panel { max-width: 460px; }
          .section-head { display: block; }
          .section-head p { margin-top: 0.8rem; }
          .issue-grid, .sponsor-band { grid-template-columns: 1fr; }
        }

        @media (max-width: 520px) {
          .metrics { grid-template-columns: 1fr; }
          .sponsor-band { padding: 1.4rem; }
        }
      `}</style>

      <nav>
        <Link href="/" className="nav-logo">Melekh<span>Fad</span></Link>
        <ul className="nav-links">
          <li><Link href="/tools">Tools</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/newsletter" className="active">Newsletter</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>

      <main className="wrap">
        <section className="hero">
          <div>
            <div className="eyebrow">The weekly AI signal</div>
            <h1>Tools, tactics, and deals for <span>African builders.</span></h1>
            <p className="hero-copy">
              A sharp Tuesday brief for students, creators, freelancers, and founders who want
              useful AI tools without wasting data, money, or time on hype.
            </p>
            <div className="signal-tags">
              {signals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
          </div>

          <aside className="signup-panel">
            <div className="panel-kicker">Free launch list</div>
            <h2>Get the next AI Signal before it goes public.</h2>
            <p>
              Join the early list for weekly tool picks, comparison notes, and private
              launch updates as the directory grows into a micro-SaaS hub.
            </p>
            <form className="form">
              <input className="input" type="email" placeholder="your@email.com" />
              <button className="btn-primary" type="submit">Join Free</button>
            </form>
            <div className="fine-print">No spam. No noise. Useful picks only.</div>

            <div className="metrics">
              <div className="metric">
                <strong>5</strong>
                <span>tool picks</span>
              </div>
              <div className="metric">
                <strong>1</strong>
                <span>workflow</span>
              </div>
              <div className="metric">
                <strong>Tue</strong>
                <span>weekly drop</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>What lands in your inbox</h2>
            <p>
              Built like a field report: fast to scan, honest enough to trust, and practical
              enough to use the same day.
            </p>
          </div>

          <div className="issue-grid">
            {issues.map((issue) => (
              <article key={issue.label} className="issue">
                <div className="issue-label">{issue.label}</div>
                <h3>{issue.title}</h3>
                <p>{issue.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sponsor-band">
          <div>
            <div className="eyebrow">Built for future revenue</div>
            <h2>A newsletter that can become a sponsorship lane.</h2>
            <p>
              As traffic grows, this becomes the cleanest place to sell sponsor slots,
              featured listings, affiliate offers, and premium workflow reports.
            </p>
          </div>
          <div className="sponsor-list">
            <div>Launch sponsor slot: AI tool of the week</div>
            <div>Affiliate slot: verified discount or free credits</div>
            <div>Premium teaser: members-only comparison report</div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-logo">Melekh<span>Fad</span></div>
        <div className="footer-copy">© 2026 MelekhFad · Dar es Salaam, Tanzania</div>
      </footer>
    </>
  );
}
