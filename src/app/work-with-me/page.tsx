import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work With Me — Sponsorship & Partnership",
  description:
    "Partner with MelekhFad to reach African students, creators, and entrepreneurs. Sponsored reviews, featured listings, and newsletter sponsorships available.",
};

const packages = [
  {
    name: "Featured Listing",
    price: "$99",
    period: "/month",
    color: "#C9A84C",
    description:
      "Your tool gets a featured badge and priority placement in the directory. Seen by every visitor who browses that category.",
    includes: [
      "Featured badge on your tool card",
      "Priority placement in category",
      "Bold listing in search results",
      "Monthly performance report",
      "Cancel anytime",
    ],
    cta: "Get Featured",
    popular: false,
  },
  {
    name: "Sponsored Review",
    price: "$299",
    period: "/one-time",
    color: "#1D9E75",
    description:
      "A full honest review of your tool published on MelekhFad.com. SEO-optimized, indexed by Google, and lives permanently on the site.",
    includes: [
      "1,500+ word honest review",
      "Pros, cons, and real verdict",
      "African user context section",
      "Permanent SEO page on the site",
      "Shared to newsletter audience",
      "Social media mention",
    ],
    cta: "Book a Review",
    popular: true,
  },
  {
    name: "Newsletter Sponsor",
    price: "$200",
    period: "/issue",
    color: "#8B5CF6",
    description:
      "Your tool featured in the weekly AI Signal newsletter sent every Tuesday to African students, creators, and entrepreneurs.",
    includes: [
      "Dedicated sponsor slot in issue",
      "Your headline + 2-line description",
      "Direct link to your tool",
      "Sent to full subscriber list",
      "Archive page mention",
      "Performance stats after send",
    ],
    cta: "Sponsor an Issue",
    popular: false,
  },
];

const stats = [
  { value: "200+", label: "AI Tools Listed" },
  { value: "Africa", label: "Primary Audience" },
  { value: "Weekly", label: "Newsletter Cadence" },
  { value: "Google", label: "Indexed & Growing" },
];

const audience = [
  { emoji: "🎓", label: "University students", detail: "Primarily UDSM and East African universities" },
  { emoji: "💻", label: "Web developers", detail: "Junior to mid-level building their first projects" },
  { emoji: "🎬", label: "Video editors & designers", detail: "Freelancers using Premiere Pro and Photoshop" },
  { emoji: "🚀", label: "Early entrepreneurs", detail: "Building online businesses and digital services" },
  { emoji: "✍️", label: "Content writers", detail: "Journalists, bloggers, and copywriters" },
  { emoji: "🌍", label: "Pan-African builders", detail: "Creators and founders across East and West Africa" },
];

const faqs = [
  {
    q: "Do you guarantee results?",
    a: "I guarantee honest, well-written content and real placement on the site. I don't guarantee specific traffic numbers — but I share full analytics so you can see exactly what you're getting.",
  },
  {
    q: "Are reviews always positive?",
    a: "No. Reviews are honest. If your tool has weaknesses, I say so. This is actually better for you — readers trust honest reviews more than paid praise, which means higher conversion rates.",
  },
  {
    q: "How do I pay?",
    a: "Payment via PayPal, Wise, or bank transfer. Invoice provided for every transaction. Payment required before work begins.",
  },
  {
    q: "How long does a sponsored review take?",
    a: "Typically 5–7 business days from payment to publication. I test the tool personally before writing.",
  },
  {
    q: "Can I see the review before it's published?",
    a: "Yes — you get to review for factual accuracy only. Editorial decisions remain mine to protect reader trust.",
  },
  {
    q: "What if I want a custom package?",
    a: "Email me directly and we figure out something that works for your budget and goals.",
  },
];

export default function WorkWithMePage() {
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
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.4;
        }
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.2rem 2.5rem;
          background: rgba(10,10,10,0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }
        .nav-logo { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.3rem; color: var(--white); text-decoration: none; }
        .nav-logo span { color: var(--gold); }
        .nav-links { display: flex; align-items: center; gap: 2rem; list-style: none; }
        .nav-links a { font-size: 0.85rem; color: var(--text-muted); text-decoration: none; letter-spacing: 0.04em; text-transform: uppercase; transition: color 0.2s; }
        .nav-links a:hover { color: var(--gold); }
        .wrap { max-width: 1100px; margin: 0 auto; padding: 7rem 2rem 5rem; position: relative; z-index: 1; }

        /* HERO */
        .hero { text-align: center; margin-bottom: 4rem; padding-bottom: 4rem; border-bottom: 1px solid var(--border); }
        .eyebrow { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--gold); font-weight: 500; margin-bottom: 1rem; }
        h1 { font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(2.2rem, 5vw, 4rem); letter-spacing: -0.03em; line-height: 1; margin-bottom: 1.2rem; }
        h1 span { color: var(--gold); }
        .hero-sub { font-size: 1rem; color: var(--text-muted); line-height: 1.8; max-width: 560px; margin: 0 auto 2.5rem; }

        /* STATS */
        .stats-row { display: flex; align-items: center; justify-content: center; gap: 3rem; flex-wrap: wrap; }
        .stat { text-align: center; }
        .stat-val { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; color: var(--gold); display: block; }
        .stat-label { font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; }

        /* SECTION */
        .section { margin-bottom: 4rem; }
        .section-label { font-size: 0.7rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.6rem; }
        h2 { font-family: 'Syne', sans-serif; font-weight: 700; font-size: clamp(1.6rem, 3vw, 2.2rem); letter-spacing: -0.02em; margin-bottom: 1.5rem; }
        .divider { border: none; border-top: 1px solid var(--border); margin: 3rem 0; }

        /* PACKAGES */
        .packages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.2rem; margin-bottom: 1rem; }
        .package-card { background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 16px; padding: 1.8rem; position: relative; transition: border-color 0.2s; display: flex; flex-direction: column; }
        .package-card:hover { border-color: rgba(201,168,76,0.4); }
        .package-card.popular { border-color: #1D9E75; }
        .popular-badge { position: absolute; top: -1px; left: 50%; transform: translateX(-50%); background: #1D9E75; color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.25rem 0.8rem; border-radius: 0 0 8px 8px; text-transform: uppercase; letter-spacing: 0.06em; white-space: nowrap; }
        .package-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1rem; margin-bottom: 0.4rem; }
        .package-price { display: flex; align-items: baseline; gap: 0.2rem; margin-bottom: 0.8rem; }
        .price-val { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 2rem; }
        .price-period { font-size: 0.8rem; color: var(--text-muted); }
        .package-desc { font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.2rem; flex: 1; }
        .package-includes { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem; }
        .package-includes li { font-size: 0.82rem; color: var(--text-muted); display: flex; gap: 0.5rem; align-items: flex-start; line-height: 1.4; }
        .package-includes li::before { content: "✓"; font-weight: 700; flex-shrink: 0; margin-top: 1px; }
        .package-btn { display: block; text-align: center; padding: 0.85rem 1rem; border-radius: 6px; font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.88rem; text-decoration: none; transition: all 0.2s; border: 1px solid; }
        .package-btn:hover { transform: translateY(-2px); }

        /* AUDIENCE */
        .audience-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.8rem; }
        .audience-card { background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 10px; padding: 1rem 1.2rem; display: flex; gap: 0.8rem; align-items: flex-start; }
        .audience-emoji { font-size: 1.3rem; flex-shrink: 0; }
        .audience-label { font-family: 'Syne', sans-serif; font-weight: 600; font-size: 0.88rem; margin-bottom: 0.2rem; }
        .audience-detail { font-size: 0.78rem; color: var(--text-muted); line-height: 1.5; }

        /* FAQ */
        .faq-list { display: flex; flex-direction: column; gap: 0; }
        .faq-item { padding: 1.2rem 0; border-bottom: 1px solid var(--border); }
        .faq-item:first-child { border-top: 1px solid var(--border); }
        .faq-q { font-family: 'Syne', sans-serif; font-weight: 600; font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--white); }
        .faq-a { font-size: 0.88rem; color: var(--text-muted); line-height: 1.7; }

        /* CONTACT */
        .contact-strip { background: linear-gradient(135deg, rgba(201,168,76,0.08), rgba(26,107,69,0.08)); border: 1px solid var(--border); border-radius: 16px; padding: 3rem; text-align: center; }
        .contact-strip h2 { font-family: 'Syne', sans-serif; font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800; margin-bottom: 0.8rem; }
        .contact-strip p { font-size: 0.92rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.8rem; max-width: 480px; margin-left: auto; margin-right: auto; }
        .contact-email { display: inline-block; background: var(--gold); color: var(--black); padding: 0.95rem 2rem; border-radius: 6px; font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.95rem; text-decoration: none; transition: all 0.2s; }
        .contact-email:hover { background: var(--gold-light); transform: translateY(-2px); }
        .contact-note { font-size: 0.75rem; color: var(--text-muted); margin-top: 1rem; }

        footer { border-top: 1px solid var(--border); padding: 2rem 2.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; position: relative; z-index: 1; margin-top: 4rem; }
        .footer-logo { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.1rem; }
        .footer-logo span { color: var(--gold); }
        .footer-copy { font-size: 0.75rem; color: var(--text-muted); }

        @media (max-width: 768px) {
          nav { padding: 1rem 1.2rem; }
          .nav-links { display: none; }
          .packages-grid { grid-template-columns: 1fr; }
          .stats-row { gap: 1.5rem; }
          .contact-strip { padding: 2rem 1.2rem; }
        }
      `}</style>

      <nav>
        <Link href="/" className="nav-logo">Melekh<span>Fad</span></Link>
        <ul className="nav-links">
          <li><Link href="/tools">Tools</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/newsletter">Newsletter</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>

      <div className="wrap">

        {/* HERO */}
        <div className="hero">
          <div className="eyebrow">Partnerships & Sponsorships</div>
          <h1>Reach <span>African Builders</span><br />Who Actually Buy.</h1>
          <p className="hero-sub">
            MelekhFad is the only AI tools directory written specifically for African students,
            creators, and entrepreneurs. If your tool serves this audience — let&apos;s work together.
          </p>
          <div className="stats-row">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat-val">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PACKAGES */}
        <div className="section">
          <div className="section-label">What we offer</div>
          <h2>Partnership Packages</h2>
          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`package-card ${pkg.popular ? "popular" : ""}`}>
                {pkg.popular && <div className="popular-badge">Most Chosen</div>}
                <div className="package-name">{pkg.name}</div>
                <div className="package-price">
                  <span className="price-val" style={{ color: pkg.color }}>{pkg.price}</span>
                  <span className="price-period">{pkg.period}</span>
                </div>
                <p className="package-desc">{pkg.description}</p>
                <ul className="package-includes">
                  {pkg.includes.map((item) => (
                    <li key={item} style={{ color: "var(--text-muted)" }}>
                      <span style={{ color: pkg.color }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:fadhilimgaya31@gmail.com?subject=${encodeURIComponent(pkg.name + " — MelekhFad Partnership")}`}
                  className="package-btn"
                  style={{
                    color: pkg.color,
                    borderColor: pkg.color,
                    background: `${pkg.color}12`,
                  }}
                >
                  {pkg.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* AUDIENCE */}
        <div className="section">
          <div className="section-label">Who reads this site</div>
          <h2>Your Audience Profile</h2>
          <div className="audience-grid">
            {audience.map((a) => (
              <div key={a.label} className="audience-card">
                <span className="audience-emoji">{a.emoji}</span>
                <div>
                  <div className="audience-label">{a.label}</div>
                  <div className="audience-detail">{a.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* FAQ */}
        <div className="section">
          <div className="section-label">Common questions</div>
          <h2>Before You Reach Out</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.q} className="faq-item">
                <div className="faq-q">{faq.q}</div>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* CONTACT */}
        <div className="contact-strip">
          <h2>Ready to Partner?</h2>
          <p>
            Send an email with your tool name, what you&apos;re looking for, and your budget.
            I respond within 24 hours and we take it from there.
          </p>
          <a
            href="mailto:fadhilimgaya31@gmail.com?subject=Partnership%20Enquiry%20—%20MelekhFad"
            className="contact-email"
          >
            Get In Touch →
          </a>
          <div className="contact-note">Response within 24 hours · No agency fees · Direct contact</div>
        </div>

      </div>

      <footer>
        <div className="footer-logo">Melekh<span>Fad</span></div>
        <div className="footer-copy">© 2026 MelekhFad · Dar es Salaam, Tanzania</div>
      </footer>
    </>
  );
}