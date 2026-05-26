import Link from "next/link";

const posts = [
  {
    slug: "best-free-ai-tools-for-african-students",
    title: "10 Best Free AI Tools Every African Student Should Use in 2026",
    excerpt:
      "You don't need a big budget to use AI. These 10 tools are completely free, work perfectly across Africa, and will save you hours every week as a student.",
    category: "Free Tools",
    categoryColor: "#10B981",
    emoji: "🆓",
    date: "May 20, 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "chatgpt-vs-claude-for-students",
    title: "ChatGPT vs Claude: Which AI is Better for Students?",
    excerpt:
      "Both are free, both are powerful — but they're built for different things. I tested both for essay writing, research, and summarizing lecture notes. Here's the honest verdict.",
    category: "Comparison",
    categoryColor: "#F59E0B",
    emoji: "⚔️",
    date: "May 15, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "how-to-make-money-with-ai-as-a-student",
    title: "How to Make Your First $100 Online as a Student Using AI Tools",
    excerpt:
      "Freelancing, content creation, graphic design — AI tools cut the time it takes by 80%. Here's exactly how a student in Tanzania can start making money online this month.",
    category: "Make Money",
    categoryColor: "#C9A84C",
    emoji: "💰",
    date: "May 10, 2026",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "ai-tools-for-video-editors",
    title: "The 7 Best AI Tools for Video Editors in 2026",
    excerpt:
      "From auto-captioning to background removal and voice generation — these AI tools will make your Premiere Pro workflow 3x faster.",
    category: "Video",
    categoryColor: "#EF4444",
    emoji: "🎬",
    date: "May 5, 2026",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "canva-ai-complete-guide",
    title: "Canva AI Complete Guide: Everything You Can Do For Free",
    excerpt:
      "Most people use 10% of what Canva AI can do. This guide covers every free AI feature — from image generation to the AI copywriter — with real examples.",
    category: "Design",
    categoryColor: "#EC4899",
    emoji: "🎨",
    date: "April 28, 2026",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "ai-tools-that-work-in-tanzania",
    title: "AI Tools That Actually Work in Tanzania — No VPN Needed",
    excerpt:
      "Not every AI tool is accessible in Africa. I tested 50 tools from Dar es Salaam and listed every one that works without a VPN, blocked payment, or region restriction.",
    category: "Africa",
    categoryColor: "#2D9E6B",
    emoji: "🌍",
    date: "April 20, 2026",
    readTime: "11 min read",
    featured: false,
  },
];

const categories = ["All", "Free Tools", "Comparison", "Make Money", "Video", "Design", "Africa"];

export default function BlogPage() {
  const featured = posts.filter((p) => p.featured);
  const regular = posts.filter((p) => !p.featured);

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
        .nav-links a:hover, .nav-links a.active { color: var(--gold); }

        .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 7rem 2rem 5rem;
          position: relative;
          z-index: 1;
        }

        /* HEADER */
        .page-header { margin-bottom: 3rem; }
        .eyebrow {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--gold);
          font-weight: 500;
          margin-bottom: 0.6rem;
        }
        h1 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 5vw, 3.2rem);
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

        /* CATEGORY FILTERS */
        .cat-filters {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }
        .cat-pill {
          font-size: 0.78rem;
          padding: 0.4rem 1rem;
          border-radius: 100px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-muted);
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          transition: all 0.2s;
        }
        .cat-pill:hover {
          border-color: rgba(201,168,76,0.5);
          color: var(--white);
        }
        .cat-pill.active {
          background: rgba(201,168,76,0.12);
          border-color: var(--gold);
          color: var(--gold);
          font-weight: 500;
        }

        /* FEATURED POSTS */
        .section-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.2rem;
          margin-bottom: 3rem;
        }

        .featured-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.8rem;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
        }

        .featured-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--green-light));
          opacity: 0;
          transition: opacity 0.3s;
        }

        .featured-card:hover {
          border-color: rgba(201,168,76,0.35);
          background: rgba(201,168,76,0.04);
          transform: translateY(-3px);
        }

        .featured-card:hover::before { opacity: 1; }

        .post-emoji {
          font-size: 2rem;
          margin-bottom: 1rem;
          display: block;
        }

        .post-category {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .post-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--white);
          line-height: 1.3;
          margin-bottom: 0.8rem;
          letter-spacing: -0.01em;
        }

        .post-excerpt {
          font-size: 0.83rem;
          color: var(--text-muted);
          line-height: 1.65;
          flex: 1;
          margin-bottom: 1.2rem;
        }

        .post-meta {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .post-meta-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--text-muted);
          flex-shrink: 0;
        }

        .read-more {
          font-size: 0.78rem;
          color: var(--gold);
          font-weight: 600;
          margin-top: 1rem;
          display: inline-block;
          transition: gap 0.2s;
        }

        /* REGULAR POSTS */
        .posts-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .post-row {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          padding: 1.4rem 0;
          border-bottom: 1px solid var(--border);
          text-decoration: none;
          transition: all 0.2s;
          border-radius: 0;
        }

        .post-row:first-child { border-top: 1px solid var(--border); }

        .post-row:hover .post-row-title { color: var(--gold); }

        .post-row-emoji {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .post-row-body { flex: 1; }

        .post-row-cat {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .post-row-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--white);
          line-height: 1.3;
          margin-bottom: 0.4rem;
          transition: color 0.2s;
        }

        .post-row-excerpt {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 0.5rem;
        }

        .post-row-meta {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        /* NEWSLETTER CTA */
        .newsletter-strip {
          background: linear-gradient(135deg, rgba(26,107,69,0.12), rgba(201,168,76,0.06));
          border: 1px solid rgba(26,107,69,0.25);
          border-radius: 14px;
          padding: 2.5rem;
          text-align: center;
          margin-top: 3rem;
        }

        .newsletter-strip h2 {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 0.6rem;
        }

        .newsletter-strip p {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .newsletter-form {
          display: flex;
          gap: 0.75rem;
          max-width: 380px;
          margin: 0 auto;
          flex-wrap: wrap;
          justify-content: center;
        }

        .newsletter-input {
          flex: 1;
          min-width: 200px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 0.8rem 1rem;
          color: var(--white);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .newsletter-input:focus { border-color: var(--gold); }
        .newsletter-input::placeholder { color: var(--text-muted); }

        .btn-primary {
          background: var(--gold);
          color: var(--black);
          padding: 0.8rem 1.6rem;
          border-radius: 4px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.88rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
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
          .featured-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <nav>
        <Link href="/" className="nav-logo">Melekh<span>Fad</span></Link>
        <ul className="nav-links">
          <li><Link href="/tools">Tools</Link></li>
          <li><Link href="/blog" className="active">Blog</Link></li>
          <li><Link href="/newsletter">Newsletter</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>

      <div className="wrap">

        <div className="page-header">
          <div className="eyebrow">Honest reviews · African perspective</div>
          <h1>The Blog</h1>
          <p className="page-sub">
            AI tool reviews, comparisons, and practical guides — written from
            Dar es Salaam for students and builders across Africa.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="cat-filters">
          {categories.map((cat) => (
            <span key={cat} className={`cat-pill ${cat === "All" ? "active" : ""}`}>
              {cat}
            </span>
          ))}
        </div>

        {/* FEATURED */}
        <div className="section-label">Featured Articles</div>
        <div className="featured-grid">
          {featured.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="featured-card">
              <span className="post-emoji">{post.emoji}</span>
              <div
                className="post-category"
                style={{ color: post.categoryColor }}
              >
                {post.category}
              </div>
              <div className="post-title">{post.title}</div>
              <div className="post-excerpt">{post.excerpt}</div>
              <div className="post-meta">
                <span>{post.date}</span>
                <div className="post-meta-dot" />
                <span>{post.readTime}</span>
              </div>
              <span className="read-more">Read article →</span>
            </Link>
          ))}
        </div>

        {/* ALL POSTS */}
        <div className="section-label">All Articles</div>
        <div className="posts-list">
          {regular.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="post-row">
              <div className="post-row-emoji">{post.emoji}</div>
              <div className="post-row-body">
                <div
                  className="post-row-cat"
                  style={{ color: post.categoryColor }}
                >
                  {post.category}
                </div>
                <div className="post-row-title">{post.title}</div>
                <div className="post-row-excerpt">{post.excerpt}</div>
                <div className="post-row-meta">
                  <span>{post.date}</span>
                  <div className="post-meta-dot" style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--text-muted)" }} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* NEWSLETTER */}
        <div className="newsletter-strip">
          <h2>Never Miss a New Article</h2>
          <p>
            Get the latest AI tool reviews and guides delivered to your inbox
            every Tuesday. Free forever.
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="your@email.com"
              className="newsletter-input"
            />
            <button className="btn-primary">Subscribe →</button>
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
