import { notFound } from "next/navigation";
import Link from "next/link";

const tools = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    category: "Writing",
    emoji: "🤖",
    tagline: "The world's most popular AI assistant",
    description:
      "ChatGPT is the AI tool that started the revolution. Built by OpenAI, it can write essays, answer questions, generate code, summarize documents, translate languages, and brainstorm ideas. If you're new to AI tools, this is where you start.",
    pros: [
      "Free tier is genuinely powerful — GPT-4o available for free",
      "Works for almost any task — writing, coding, research, math",
      "Understands context well across long conversations",
      "Available on web, iOS, and Android",
      "Huge community means tons of tutorials and prompts online",
    ],
    cons: [
      "Free tier has usage limits during peak hours",
      "Can confidently give wrong answers — always verify facts",
      "Doesn't browse the internet in free version",
      "Response quality varies — good prompts give better results",
    ],
    pricing: [
      { plan: "Free", price: "$0/mo", features: "GPT-4o with limits, image uploads, basic tools" },
      { plan: "Plus", price: "$20/mo", features: "Unlimited GPT-4o, advanced tools, faster speeds" },
      { plan: "Team", price: "$25/mo", features: "Everything in Plus, shared workspace, admin controls" },
    ],
    verdict:
      "ChatGPT is the best starting point for anyone new to AI. The free tier alone can save you hours every week. For serious daily use, the $20/mo Plus plan is worth every cent.",
    rating: 5,
    badge: "Most Popular",
    badgeColor: "#F59E0B",
    affiliateUrl: "https://chat.openai.com",
    africanNote:
      "Works perfectly in Tanzania and across Africa. Accessible on any browser — no VPN needed. The free tier is powerful enough for most student needs.",
  },
  {
    name: "Claude",
    slug: "claude",
    category: "Writing",
    emoji: "✍️",
    tagline: "The best AI for deep writing and analysis",
    description:
      "Claude is built by Anthropic and is widely considered the best AI for writing, analysis, and working with long documents. It can read entire books, research papers, and reports — then summarize, analyze, or answer questions about them. As a journalism student, this is your most powerful tool.",
    pros: [
      "Handles extremely long documents — entire PDFs, books, reports",
      "Writing quality is noticeably better than most AI tools",
      "More nuanced and thoughtful responses on complex topics",
      "Excellent at editing, rewriting, and improving your own writing",
      "Free tier is generous with no hourly limits",
    ],
    cons: [
      "No image generation — text focused only",
      "Doesn't browse the internet by default",
      "Less known than ChatGPT so fewer tutorials available",
    ],
    pricing: [
      { plan: "Free", price: "$0/mo", features: "Claude Sonnet, generous daily limits, file uploads" },
      { plan: "Pro", price: "$20/mo", features: "Claude Opus, 5x more usage, priority access" },
    ],
    verdict:
      "If you write a lot — articles, essays, reports, scripts — Claude is your best AI companion. The writing quality is genuinely superior. As a journalism and communications student, this should be in your daily toolkit.",
    rating: 5,
    badge: "Best for Writing",
    badgeColor: "#10B981",
    affiliateUrl: "https://claude.ai",
    africanNote:
      "Fully accessible across Africa with no restrictions. The free tier has no hourly caps which makes it ideal for students without a subscription budget.",
  },
  {
    name: "Midjourney",
    slug: "midjourney",
    category: "Image",
    emoji: "🎨",
    tagline: "The gold standard for AI image generation",
    description:
      "Midjourney produces the most beautiful, artistic AI-generated images available today. Used by professional designers, art directors, and marketing teams worldwide. You write a text prompt and it generates stunning visuals in seconds.",
    pros: [
      "Image quality is unmatched — genuinely professional results",
      "Incredible for concept art, marketing visuals, and presentations",
      "Active community with millions of prompts to learn from",
      "Consistent style and quality across generations",
    ],
    cons: [
      "No free tier — starts at $10/month",
      "Runs inside Discord which can feel clunky",
      "Learning good prompts takes practice",
      "No direct editing of generated images",
    ],
    pricing: [
      { plan: "Basic", price: "$10/mo", features: "200 image generations per month" },
      { plan: "Standard", price: "$30/mo", features: "Unlimited relaxed generations" },
      { plan: "Pro", price: "$60/mo", features: "Unlimited fast generations, stealth mode" },
    ],
    verdict:
      "If your work involves visual content — presentations, marketing materials, social media — Midjourney produces results that would cost hundreds from a designer. Worth every cent of the $10 Basic plan.",
    rating: 4,
    badge: "Top Rated",
    badgeColor: "#8B5CF6",
    affiliateUrl: "https://midjourney.com",
    africanNote:
      "Requires a Discord account and credit card for payment. M-Pesa users can use a virtual Visa card from services like Chipper Cash to subscribe.",
  },
  {
    name: "Canva AI",
    slug: "canva-ai",
    category: "Design",
    emoji: "🖼️",
    tagline: "AI-powered design for everyone",
    description:
      "Canva has integrated AI deeply into its platform — from generating images and removing backgrounds to writing copy and designing entire presentations. If you already use Canva, the AI features are now built right in.",
    pros: [
      "Free tier includes AI features — very accessible",
      "Drag and drop interface — no design skills needed",
      "Thousands of templates for every use case",
      "Background remover, image generator, AI copywriter all in one",
      "Works directly in the browser — no installation",
    ],
    cons: [
      "Best AI features locked behind Pro ($15/mo)",
      "Image generation quality behind Midjourney and DALL·E",
      "Can feel limiting for advanced designers",
    ],
    pricing: [
      { plan: "Free", price: "$0/mo", features: "Basic AI tools, thousands of templates, 5GB storage" },
      { plan: "Pro", price: "$15/mo", features: "Full AI suite, background remover, brand kit, 1TB storage" },
    ],
    verdict:
      "The best all-in-one design tool for students and small businesses. If you need to design social media posts, presentations, flyers, or any visual content — Canva AI is where you start.",
    rating: 4,
    badge: "Student Friendly",
    badgeColor: "#EC4899",
    affiliateUrl: "https://canva.com",
    africanNote:
      "Very popular across Africa. Free tier is powerful enough for most student needs. Canva for Education offers the Pro plan completely free for students — apply with your UDSM email.",
  },
  {
    name: "Notion AI",
    slug: "notion-ai",
    category: "Productivity",
    emoji: "📋",
    tagline: "Your AI-powered second brain",
    description:
      "Notion is a workspace that combines notes, documents, databases, and project management — all with AI built in. The AI can summarize your notes, draft documents, generate action items from meetings, and answer questions about your own content.",
    pros: [
      "All-in-one — notes, tasks, docs, databases in one place",
      "AI summarizes long notes and documents instantly",
      "Free tier is genuinely usable for personal use",
      "Great for organizing university projects and research",
      "Works on all devices — web, mobile, desktop",
    ],
    cons: [
      "Can feel overwhelming at first — lots of features",
      "AI features require add-on ($10/mo on top of free plan)",
      "Slow on older devices or poor internet connections",
    ],
    pricing: [
      { plan: "Free", price: "$0/mo", features: "Unlimited pages, basic blocks, 10 guests" },
      { plan: "Plus", price: "$10/mo", features: "Unlimited file uploads, 100 guests, version history" },
      { plan: "AI Add-on", price: "$10/mo", features: "AI writing, summarization, Q&A on any plan" },
    ],
    verdict:
      "The best tool for organizing your student and work life in one place. Start with the free plan — it handles everything a student needs. Add AI when your budget allows.",
    rating: 4,
    badge: "Editor's Pick",
    badgeColor: "#06B6D4",
    affiliateUrl: "https://notion.so",
    africanNote:
      "Works great across Africa. Free plan has no limitations for personal use. Perfect for UDSM students to organize assignments, research, and projects.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          style={{
            fontSize: "1rem",
            color: s <= rating ? "#C9A84C" : "rgba(201,168,76,0.2)",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) notFound();

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
        .nav-links a:hover { color: var(--gold); }
        .wrap {
          max-width: 800px;
          margin: 0 auto;
          padding: 7rem 2rem 5rem;
          position: relative;
          z-index: 1;
        }
        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }
        .breadcrumb a { color: var(--gold); text-decoration: none; }
        .breadcrumb a:hover { text-decoration: underline; }
        .tool-hero {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          margin-bottom: 2rem;
        }
        .tool-hero-icon {
          width: 64px; height: 64px;
          border-radius: 14px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.2);
          display: flex; align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          flex-shrink: 0;
        }
        .tool-hero-text h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 0.3rem;
        }
        .tool-tagline {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 0.6rem;
        }
        .tool-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .tool-cat {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--gold);
          font-weight: 500;
        }
        .affiliate-btn {
          display: inline-block;
          width: 100%;
          text-align: center;
          background: var(--gold);
          color: var(--black);
          padding: 1rem 2rem;
          border-radius: 6px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.2s;
          margin: 1.5rem 0;
          letter-spacing: 0.02em;
        }
        .affiliate-btn:hover {
          background: var(--gold-light);
          transform: translateY(-2px);
        }
        .affiliate-note {
          text-align: center;
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-top: -1rem;
          margin-bottom: 1.5rem;
        }
        .section-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          padding-bottom: 0.6rem;
          border-bottom: 1px solid var(--border);
        }
        .description {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        .pros-cons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .pros-box, .cons-box {
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1.2rem;
        }
        .pros-box { border-color: rgba(45,158,107,0.3); background: rgba(45,158,107,0.04); }
        .cons-box { border-color: rgba(239,68,68,0.2); background: rgba(239,68,68,0.03); }
        .pros-box h3 { color: #2D9E6B; font-family: 'Syne', sans-serif; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.8rem; letter-spacing: 0.04em; text-transform: uppercase; }
        .cons-box h3 { color: #EF4444; font-family: 'Syne', sans-serif; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.8rem; letter-spacing: 0.04em; text-transform: uppercase; }
        .pros-cons-list { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
        .pros-cons-list li { font-size: 0.83rem; color: var(--text-muted); line-height: 1.5; display: flex; gap: 0.5rem; align-items: flex-start; }
        .pros-cons-list li::before { flex-shrink: 0; margin-top: 1px; }
        .pros-box li::before { content: "✓"; color: #2D9E6B; font-weight: 700; }
        .cons-box li::before { content: "✗"; color: #EF4444; font-weight: 700; }
        .pricing-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }
        .pricing-card {
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1rem 1.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .pricing-plan {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          min-width: 80px;
        }
        .pricing-price {
          font-size: 1rem;
          font-weight: 500;
          color: var(--green-light);
          min-width: 80px;
        }
        .pricing-features {
          font-size: 0.8rem;
          color: var(--text-muted);
          flex: 1;
        }
        .verdict-box {
          background: rgba(201,168,76,0.06);
          border: 1px solid rgba(201,168,76,0.25);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }
        .verdict-box h3 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--gold);
          margin-bottom: 0.7rem;
        }
        .verdict-box p {
          font-size: 0.92rem;
          color: var(--white);
          line-height: 1.7;
          font-weight: 400;
        }
        .africa-box {
          background: rgba(26,107,69,0.08);
          border: 1px solid rgba(26,107,69,0.25);
          border-radius: 12px;
          padding: 1.2rem 1.4rem;
          margin-bottom: 2rem;
          display: flex;
          gap: 0.8rem;
          align-items: flex-start;
        }
        .africa-flag { font-size: 1.4rem; flex-shrink: 0; margin-top: 2px; }
        .africa-box h3 {
          font-family: 'Syne', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #2D9E6B;
          margin-bottom: 0.4rem;
        }
        .africa-box p { font-size: 0.83rem; color: var(--text-muted); line-height: 1.6; }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: var(--text-muted);
          text-decoration: none;
          margin-top: 1rem;
          transition: color 0.2s;
        }
        .back-link:hover { color: var(--gold); }
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
          margin-top: 2rem;
        }
        .footer-logo { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.1rem; }
        .footer-logo span { color: var(--gold); }
        .footer-copy { font-size: 0.75rem; color: var(--text-muted); }
        @media (max-width: 600px) {
          nav { padding: 1rem 1.2rem; }
          .nav-links { display: none; }
          .pros-cons { grid-template-columns: 1fr; }
          .tool-hero { flex-direction: column; }
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
        {/* BREADCRUMB */}
        <div className="breadcrumb">
          <Link href="/">Home</Link> / <Link href="/tools">Tools</Link> / {tool.name}
        </div>

        {/* HERO */}
        <div className="tool-hero">
          <div className="tool-hero-icon">{tool.emoji}</div>
          <div className="tool-hero-text">
            <h1>{tool.name}</h1>
            <p className="tool-tagline">{tool.tagline}</p>
            <div className="tool-meta">
              <span className="tool-cat">{tool.category}</span>
              <StarRating rating={tool.rating} />
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  padding: "0.2rem 0.6rem",
                  borderRadius: "100px",
                  background: `${tool.badgeColor}18`,
                  color: tool.badgeColor,
                  border: `1px solid ${tool.badgeColor}30`,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {tool.badge}
              </span>
            </div>
          </div>
        </div>

        {/* MAIN CTA */}
        <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer" className="affiliate-btn">
          Try {tool.name} Free →
        </a>
        <p className="affiliate-note">Opens official website · Free to sign up</p>

        {/* DESCRIPTION */}
        <h2 className="section-title">What is {tool.name}?</h2>
        <p className="description">{tool.description}</p>

        {/* PROS & CONS */}
        <h2 className="section-title">Pros & Cons</h2>
        <div className="pros-cons">
          <div className="pros-box">
            <h3>What we love</h3>
            <ul className="pros-cons-list">
              {tool.pros.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
          <div className="cons-box">
            <h3>Drawbacks</h3>
            <ul className="pros-cons-list">
              {tool.cons.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>

        {/* PRICING */}
        <h2 className="section-title">Pricing</h2>
        <div className="pricing-grid">
          {tool.pricing.map((p, i) => (
            <div key={i} className="pricing-card">
              <div className="pricing-plan">{p.plan}</div>
              <div className="pricing-price">{p.price}</div>
              <div className="pricing-features">{p.features}</div>
            </div>
          ))}
        </div>

        {/* AFRICA NOTE */}
        <div className="africa-box">
          <span className="africa-flag">🌍</span>
          <div>
            <h3>African User Note</h3>
            <p>{tool.africanNote}</p>
          </div>
        </div>

        {/* VERDICT */}
        <div className="verdict-box">
          <h3>MelekhFad&apos;s Verdict</h3>
          <p>{tool.verdict}</p>
        </div>

        {/* BOTTOM CTA */}
        <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer" className="affiliate-btn">
          Get Started with {tool.name} →
        </a>
        <p className="affiliate-note">Free to sign up · No credit card required for free plan</p>

        <Link href="/tools" className="back-link">← Back to all tools</Link>
      </div>

      <footer>
        <div className="footer-logo">Melekh<span>Fad</span></div>
        <div className="footer-copy">© 2026 MelekhFad · Dar es Salaam, Tanzania</div>
      </footer>
    </>
  );
}
