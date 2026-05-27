import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categoryHubs,
  getCategoryHub,
  getCategoryToolCount,
  getToolsForCategory,
} from "@/lib/directory";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categoryHubs.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryHub(slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `Best ${category.name} AI Tools`,
    description: category.intro,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryHub(slug);

  if (!category) notFound();

  const tools = getToolsForCategory(category.name);
  const freeTools = tools.filter((tool) => tool.free);
  const paidTools = tools.filter((tool) => !tool.free);

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
          --card-bg: rgba(255,255,255,0.025);
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
          max-width: 1180px;
          margin: 0 auto;
          padding: 7rem 2rem 5rem;
        }
        .breadcrumb {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          color: var(--text-muted);
          font-size: 0.78rem;
          margin-bottom: 2rem;
        }
        .breadcrumb a { color: var(--gold); text-decoration: none; }
        .hero {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) 360px;
          gap: 2rem;
          align-items: end;
          padding-bottom: 3rem;
          border-bottom: 1px solid var(--border);
        }
        .eyebrow {
          color: var(--gold);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }
        h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 5.8vw, 5rem);
          font-weight: 800;
          line-height: 0.96;
          letter-spacing: -0.03em;
          max-width: 780px;
        }
        .hero-copy {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.8;
          max-width: 660px;
          margin-top: 1.2rem;
        }
        .intent-card {
          border: 1px solid rgba(45,158,107,0.28);
          background: linear-gradient(135deg, rgba(26,107,69,0.14), rgba(201,168,76,0.05));
          border-radius: 14px;
          padding: 1.4rem;
        }
        .intent-card h2 {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          margin-bottom: 0.65rem;
        }
        .intent-card p {
          color: var(--text-muted);
          font-size: 0.84rem;
          line-height: 1.65;
        }
        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.8rem;
          margin-top: 1.1rem;
        }
        .stat {
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 0.8rem;
        }
        .stat strong {
          display: block;
          color: var(--gold);
          font-family: 'Syne', sans-serif;
          font-size: 1.25rem;
        }
        .stat span {
          display: block;
          color: var(--text-muted);
          font-size: 0.66rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-top: 0.2rem;
        }
        .section {
          padding-top: 3.5rem;
        }
        .section-head {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 1.4rem;
        }
        .section-head h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          letter-spacing: -0.02em;
        }
        .section-head p {
          color: var(--text-muted);
          font-size: 0.86rem;
          line-height: 1.7;
          max-width: 390px;
        }
        .tool-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }
        .tool-card {
          display: flex;
          flex-direction: column;
          min-height: 295px;
          color: inherit;
          text-decoration: none;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.25rem;
          transition: transform 0.2s, border-color 0.2s, background 0.2s;
        }
        .tool-card:hover {
          transform: translateY(-3px);
          border-color: rgba(201,168,76,0.45);
          background: rgba(201,168,76,0.045);
        }
        .tool-top {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.8rem;
        }
        .tool-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          border: 1px solid rgba(201,168,76,0.18);
          background: rgba(201,168,76,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        .tool-badge {
          align-self: flex-start;
          font-size: 0.62rem;
          font-weight: 700;
          padding: 0.24rem 0.58rem;
          border-radius: 100px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .tool-name {
          font-family: 'Syne', sans-serif;
          font-size: 1.02rem;
          font-weight: 700;
          margin-bottom: 0.45rem;
        }
        .tool-desc,
        .tool-fit {
          color: var(--text-muted);
          font-size: 0.82rem;
          line-height: 1.62;
        }
        .tool-fit {
          margin-top: 0.8rem;
          padding-top: 0.8rem;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .tool-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-top: auto;
          padding-top: 1rem;
        }
        .tool-price {
          color: var(--green-light);
          font-size: 0.78rem;
          font-weight: 600;
        }
        .tool-cta {
          color: var(--gold);
          font-size: 0.76rem;
          font-weight: 700;
        }
        .playbook-grid {
          display: grid;
          grid-template-columns: 0.85fr 1fr;
          gap: 1rem;
        }
        .playbook-box {
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.25rem;
          background: rgba(255,255,255,0.02);
        }
        .playbook-box h3 {
          font-family: 'Syne', sans-serif;
          font-size: 0.95rem;
          margin-bottom: 0.9rem;
        }
        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
        }
        .chip {
          border: 1px solid var(--border);
          border-radius: 100px;
          color: var(--text-muted);
          font-size: 0.76rem;
          padding: 0.38rem 0.78rem;
        }
        .steps {
          display: grid;
          gap: 0.7rem;
        }
        .step {
          color: var(--text-muted);
          font-size: 0.84rem;
          line-height: 1.6;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding-bottom: 0.7rem;
        }
        .step:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .cta-band {
          display: flex;
          justify-content: space-between;
          gap: 1.5rem;
          align-items: center;
          border: 1px solid rgba(201,168,76,0.26);
          border-radius: 16px;
          background: rgba(201,168,76,0.055);
          margin-top: 3.5rem;
          padding: 1.6rem;
        }
        .cta-band h2 {
          font-family: 'Syne', sans-serif;
          font-size: 1.3rem;
          margin-bottom: 0.45rem;
        }
        .cta-band p {
          color: var(--text-muted);
          font-size: 0.86rem;
          line-height: 1.6;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 156px;
          background: var(--gold);
          color: var(--black);
          border-radius: 6px;
          padding: 0.85rem 1.15rem;
          font-family: 'Syne', sans-serif;
          font-size: 0.86rem;
          font-weight: 800;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .btn-primary:hover {
          background: var(--gold-light);
          transform: translateY(-2px);
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
          .hero,
          .playbook-grid {
            grid-template-columns: 1fr;
          }
          .section-head,
          .cta-band {
            display: block;
          }
          .section-head p,
          .cta-band .btn-primary {
            margin-top: 0.9rem;
          }
        }
        @media (max-width: 520px) {
          .stats { grid-template-columns: 1fr; }
          .tool-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <nav>
        <Link href="/" className="nav-logo">Melekh<span>Fad</span></Link>
        <ul className="nav-links">
          <li><Link href="/tools" className="active">Tools</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/newsletter">Newsletter</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>

      <main className="wrap">
        <div className="breadcrumb">
          <Link href="/">Home</Link> /
          <Link href="/tools">Tools</Link> /
          <span>{category.name}</span>
        </div>

        <section className="hero">
          <div>
            <div className="eyebrow">{category.eyebrow}</div>
            <h1>{category.headline}</h1>
            <p className="hero-copy">{category.intro}</p>
          </div>

          <aside className="intent-card">
            <h2>Why this category matters</h2>
            <p>{category.commercialIntent}</p>
            <div className="stats">
              <div className="stat">
                <strong>{getCategoryToolCount(category.name)}</strong>
                <span>Tools</span>
              </div>
              <div className="stat">
                <strong>{freeTools.length}</strong>
                <span>Free</span>
              </div>
              <div className="stat">
                <strong>{paidTools.length}</strong>
                <span>Paid</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Recommended tools</h2>
            <p>
              Practical picks with free-plan awareness, audience fit, and direct paths
              to the official tools.
            </p>
          </div>

          <div className="tool-grid">
            {tools.map((tool) => (
              <Link key={tool.slug} href={`/tools/${tool.slug}`} className="tool-card">
                <div className="tool-top">
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
                <div className="tool-name">{tool.name}</div>
                <p className="tool-desc">{tool.description}</p>
                <p className="tool-fit"><strong>Best for:</strong> {tool.bestFor}</p>
                <div className="tool-footer">
                  <span className="tool-price">{tool.price}</span>
                  <span className="tool-cta">Read review {"->"}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Category playbook</h2>
            <p>
              A useful hub should not only list tools. It should tell users which
              tool to start with and how to stack them.
            </p>
          </div>

          <div className="playbook-grid">
            <div className="playbook-box">
              <h3>Common use cases</h3>
              <div className="chips">
                {category.useCases.map((useCase) => (
                  <span key={useCase} className="chip">{useCase}</span>
                ))}
              </div>
            </div>
            <div className="playbook-box">
              <h3>Fast workflow</h3>
              <div className="steps">
                {category.playbook.map((step, index) => (
                  <div key={step} className="step">
                    <strong>{index + 1}.</strong> {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div>
            <h2>Want the best new {category.name.toLowerCase()} tools weekly?</h2>
            <p>
              Join the AI Signal newsletter for tool drops, workflows, and deal alerts
              built for African students, creators, and entrepreneurs.
            </p>
          </div>
          <Link href="/newsletter" className="btn-primary">Join Free</Link>
        </section>
      </main>

      <footer>
        <div className="footer-logo">Melekh<span>Fad</span></div>
        <div className="footer-copy">© 2026 MelekhFad · Dar es Salaam, Tanzania</div>
      </footer>
    </>
  );
}
