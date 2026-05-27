"use client";

import Link from "next/link";
import { useState } from "react";

const tools = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    category: "Writing",
    description: "The world's most popular AI assistant. Write, research, code, and brainstorm — all in one place. Works for almost any task you throw at it.",
    price: "Free",
    paid: "20",
    badge: "Most Popular",
    badgeColor: "#F59E0B",
    emoji: "🤖",
    url: "https://chat.openai.com",
    free: true,
  },
  {
    name: "Claude",
    slug: "claude",
    category: "Writing",
    description: "Anthropic's AI — best for long documents, deep analysis, and nuanced writing. Handles very long texts without losing context.",
    price: "Free",
    paid: "20",
    badge: "Best for Writing",
    badgeColor: "#10B981",
    emoji: "✍️",
    url: "https://claude.ai",
    free: true,
  },
  {
    name: "Midjourney",
    slug: "midjourney",
    category: "Image",
    description: "Turn text prompts into stunning, professional-quality images. Used by designers, marketers, and visual creators worldwide.",
    price: "Paid",
    paid: "10",
    badge: "Top Rated",
    badgeColor: "#8B5CF6",
    emoji: "🎨",
    url: "https://midjourney.com",
    free: false,
  },
  {
    name: "Canva AI",
    slug: "canva-ai",
    category: "Design",
    description: "Design anything with AI assistance — presentations, social media posts, flyers, logos. Perfect for students and small businesses.",
    price: "Free",
    paid: "15",
    badge: "Student Friendly",
    badgeColor: "#EC4899",
    emoji: "🖼️",
    url: "https://canva.com",
    free: true,
  },
  {
    name: "Notion AI",
    slug: "notion-ai",
    category: "Productivity",
    description: "AI-powered notes, docs, and project management in one workspace. Summarize, write, and organize everything you need.",
    price: "Free",
    paid: "10",
    badge: "Editor's Pick",
    badgeColor: "#06B6D4",
    emoji: "📋",
    url: "https://notion.so",
    free: true,
  },
  {
    name: "ElevenLabs",
    slug: "elevenlabs",
    category: "Voice",
    description: "Generate realistic voiceovers in seconds. Best AI voice tool for content creators, podcasters, and video editors.",
    price: "Free",
    paid: "5",
    badge: "Trending",
    badgeColor: "#F97316",
    emoji: "🎙️",
    url: "https://elevenlabs.io",
    free: true,
  },
  {
    name: "GitHub Copilot",
    slug: "github-copilot",
    category: "Coding",
    description: "AI that writes code alongside you in VS Code. Suggests entire functions, fixes bugs, and explains code in plain English.",
    price: "Free trial",
    paid: "10",
    badge: "Developer Must-Have",
    badgeColor: "#6366F1",
    emoji: "💻",
    url: "https://github.com/features/copilot",
    free: true,
  },
  {
    name: "Runway ML",
    slug: "runway-ml",
    category: "Video",
    description: "AI video editing and generation. Remove backgrounds, generate video clips from text, and apply cinematic effects automatically.",
    price: "Free trial",
    paid: "12",
    badge: "Video Creators",
    badgeColor: "#EF4444",
    emoji: "🎬",
    url: "https://runwayml.com",
    free: true,
  },
  {
    name: "Grammarly",
    slug: "grammarly",
    category: "Writing",
    description: "AI writing assistant that checks grammar, tone, clarity, and plagiarism. Essential for students and professional writers.",
    price: "Free",
    paid: "12",
    badge: "Student Essential",
    badgeColor: "#10B981",
    emoji: "📝",
    url: "https://grammarly.com",
    free: true,
  },
  {
    name: "DALL·E 3",
    slug: "dalle-3",
    category: "Image",
    description: "OpenAI's image generator built into ChatGPT. Create detailed images from text descriptions — free with ChatGPT Plus.",
    price: "Free with ChatGPT",
    paid: "20",
    badge: "Easy to Use",
    badgeColor: "#8B5CF6",
    emoji: "🖼️",
    url: "https://openai.com/dall-e-3",
    free: true,
  },
  {
    name: "Otter.ai",
    slug: "otter-ai",
    category: "Productivity",
    description: "AI that transcribes meetings, lectures, and conversations in real time. Perfect for students recording university lectures.",
    price: "Free",
    paid: "10",
    badge: "For Students",
    badgeColor: "#06B6D4",
    emoji: "🎓",
    url: "https://otter.ai",
    free: true,
  },
  {
    name: "Descript",
    slug: "descript",
    category: "Video",
    description: "Edit video by editing text. Remove filler words automatically, generate captions, and overdub your voice with AI.",
    price: "Free",
    paid: "12",
    badge: "Video Editors",
    badgeColor: "#F97316",
    emoji: "🎞️",
    url: "https://descript.com",
    free: true,
  },
  {
    name: "Perplexity AI",
    slug: "perplexity-ai",
    category: "Writing",
    description: "AI-powered search engine that gives cited answers instead of links. Better than Google for research and fact-checking.",
    price: "Free",
    paid: "20",
    badge: "Research Tool",
    badgeColor: "#F59E0B",
    emoji: "🔍",
    url: "https://perplexity.ai",
    free: true,
  },
  {
    name: "Adobe Firefly",
    slug: "adobe-firefly",
    category: "Image",
    description: "Adobe's AI image generator built into Photoshop and Illustrator. Commercially safe images with generative fill.",
    price: "Free",
    paid: "5",
    badge: "Designers",
    badgeColor: "#EC4899",
    emoji: "🔥",
    url: "https://firefly.adobe.com",
    free: true,
  },
  {
    name: "Copy.ai",
    slug: "copy-ai",
    category: "Writing",
    description: "AI copywriting tool for marketing content, social media posts, emails, and product descriptions. Fast and easy to use.",
    price: "Free",
    paid: "36",
    badge: "Marketers",
    badgeColor: "#6366F1",
    emoji: "📣",
    url: "https://copy.ai",
    free: true,
  },
  {
    name: "Lumen5",
    slug: "lumen5",
    category: "Video",
    description: "Turn blog posts and articles into engaging video content automatically. Great for repurposing written content.",
    price: "Free",
    paid: "19",
    badge: "Content Repurposing",
    badgeColor: "#EF4444",
    emoji: "📱",
    url: "https://lumen5.com",
    free: true,
  },
  {
    name: "Jasper AI",
    slug: "jasper-ai",
    category: "Writing",
    description: "Professional AI writing platform for long-form content, blogs, and marketing copy. Used by major brands worldwide.",
    price: "Paid",
    paid: "39",
    badge: "Professional",
    badgeColor: "#F59E0B",
    emoji: "✨",
    url: "https://jasper.ai",
    free: false,
  },
  {
    name: "Murf AI",
    slug: "murf-ai",
    category: "Voice",
    description: "Studio-quality AI voiceovers in 120+ voices and 20 languages. Perfect for video editors and presentation creators.",
    price: "Free",
    paid: "19",
    badge: "120+ Voices",
    badgeColor: "#10B981",
    emoji: "🔊",
    url: "https://murf.ai",
    free: true,
  },
  {
    name: "Tabnine",
    slug: "tabnine",
    category: "Coding",
    description: "AI code completion that works with all major programming languages and IDEs. Great alternative to GitHub Copilot.",
    price: "Free",
    paid: "12",
    badge: "All Languages",
    badgeColor: "#6366F1",
    emoji: "⚡",
    url: "https://tabnine.com",
    free: true,
  },
  {
    name: "Stable Diffusion",
    slug: "stable-diffusion",
    category: "Image",
    description: "Open-source AI image generator you can run for free. Unlimited generations with no subscription required.",
    price: "100% Free",
    paid: "0",
    badge: "Completely Free",
    badgeColor: "#10B981",
    emoji: "🆓",
    url: "https://stability.ai",
    free: true,
  },
];

const categories = ["All", "Writing", "Image", "Video", "Design", "Productivity", "Voice", "Coding"];

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [freeOnly, setFreeOnly] = useState(false);

  const filtered = tools.filter((t) => {
    const matchSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "All" || t.category === activeCategory;
    const matchFree = !freeOnly || t.free;
    return matchSearch && matchCategory && matchFree;
  });

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
          --text-muted: #6B6560;
          --border: rgba(201,168,76,0.2);
          --card-bg: rgba(255,255,255,0.02);
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

        .page-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 7rem 2rem 4rem;
          position: relative;
          z-index: 1;
        }

        .page-header { margin-bottom: 2.5rem; }

        .page-eyebrow {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--gold);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        h1 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 5vw, 3.5rem);
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 0.8rem;
        }

        .page-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 500px;
        }

        /* SEARCH + FILTERS */
        .controls {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .search-row {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .search-box {
          flex: 1;
          min-width: 220px;
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .search-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 0.85rem 1rem 0.85rem 2.6rem;
          color: var(--white);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .search-input:focus { border-color: var(--gold); }
        .search-input::placeholder { color: var(--text-muted); }

        .free-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.85rem;
          color: var(--text-muted);
          white-space: nowrap;
          user-select: none;
          transition: color 0.2s;
        }

        .free-toggle:hover { color: var(--white); }

        .toggle-box {
          width: 38px;
          height: 22px;
          border-radius: 100px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.05);
          position: relative;
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .toggle-box.on {
          background: var(--gold);
          border-color: var(--gold);
        }

        .toggle-knob {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--text-muted);
          position: absolute;
          top: 2px;
          left: 2px;
          transition: all 0.2s;
        }

        .toggle-box.on .toggle-knob {
          left: 18px;
          background: var(--black);
        }

        /* CATEGORY FILTERS */
        .cat-filters {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .cat-filter-btn {
          font-size: 0.78rem;
          padding: 0.4rem 1rem;
          border-radius: 100px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-muted);
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          transition: all 0.2s;
          letter-spacing: 0.02em;
        }

        .cat-filter-btn:hover {
          border-color: rgba(201,168,76,0.5);
          color: var(--white);
        }

        .cat-filter-btn.active {
          background: rgba(201,168,76,0.12);
          border-color: var(--gold);
          color: var(--gold);
          font-weight: 500;
        }

        /* RESULTS COUNT */
        .results-count {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .results-count span { color: var(--gold); font-weight: 500; }

        /* TOOLS GRID */
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1rem;
        }

        .tool-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.4rem;
          transition: all 0.25s;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .tool-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
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

        .tool-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 0.8rem;
        }

        .tool-icon {
          width: 42px; height: 42px;
          border-radius: 10px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem;
        }

        .tool-badge {
          font-size: 0.62rem;
          font-weight: 600;
          padding: 0.22rem 0.6rem;
          border-radius: 100px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .tool-category {
          font-size: 0.68rem;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 500;
          margin-bottom: 0.2rem;
        }

        .tool-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: var(--white);
          margin-bottom: 0.6rem;
        }

        .tool-desc {
          font-size: 0.83rem;
          color: var(--text-muted);
          line-height: 1.6;
          flex: 1;
          margin-bottom: 1rem;
        }

        .tool-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 0.8rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .tool-price {
          font-size: 0.78rem;
          color: var(--green-light);
          font-weight: 500;
        }

        .tool-cta {
          font-size: 0.75rem;
          color: var(--gold);
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        /* EMPTY STATE */
        .empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 4rem 2rem;
        }

        .empty-emoji { font-size: 3rem; margin-bottom: 1rem; display: block; }
        .empty h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .empty p { font-size: 0.85rem; color: var(--text-muted); }

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
          .tools-grid { grid-template-columns: 1fr; }
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

      <div className="page-wrap">
        <div className="page-header">
          <div className="page-eyebrow">Reviewed & tested by MelekhFad</div>
          <h1>AI Tools Directory</h1>
          <p className="page-sub">
            The best AI tools for African students, creators, and entrepreneurs —
            honestly reviewed and updated weekly.
          </p>
        </div>

        <div className="controls">
          <div className="search-row">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search tools..."
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <label
              className="free-toggle"
              onClick={() => setFreeOnly(!freeOnly)}
            >
              <div className={`toggle-box ${freeOnly ? "on" : ""}`}>
                <div className="toggle-knob" />
              </div>
              Free tools only
            </label>
          </div>

          <div className="cat-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`cat-filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="results-count">
          Showing <span>{filtered.length}</span> of {tools.length} tools
          {activeCategory !== "All" && <> in <span>{activeCategory}</span></>}
          {freeOnly && <> · <span>Free only</span></>}
        </div>

        <div className="tools-grid">
          {filtered.length > 0 ? (
            filtered.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="tool-card"
              >
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
                <div className="tool-category">{tool.category}</div>
                <div className="tool-name">{tool.name}</div>
                <div className="tool-desc">{tool.description}</div>
                <div className="tool-footer">
                  <span className="tool-price">{tool.price}</span>
                  <span className="tool-cta">Read review →</span>
                </div>
              </Link>
            ))
          ) : (
            <div className="empty">
              <span className="empty-emoji">🔍</span>
              <h3>No tools found</h3>
              <p>Try a different search term or category filter.</p>
            </div>
          )}
        </div>
      </div>

      <footer>
        <div className="footer-logo">Melekh<span>Fad</span></div>
        <div className="footer-copy">© 2026 MelekhFad · Dar es Salaam, Tanzania</div>
      </footer>
    </>
  );
}
