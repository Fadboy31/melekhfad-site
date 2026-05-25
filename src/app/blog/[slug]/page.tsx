import { notFound } from "next/navigation";
import Link from "next/link";

const posts = [
  {
    slug: "best-free-ai-tools-for-african-students",
    title: "10 Best Free AI Tools Every African Student Should Use in 2026",
    category: "Free Tools",
    categoryColor: "#10B981",
    emoji: "🆓",
    date: "May 20, 2026",
    readTime: "6 min read",
    intro:
      "You don't need money to use AI. The tools on this list are 100% free, work perfectly from Tanzania and across Africa, and will genuinely save you hours every single week. I've tested every one of them personally.",
    sections: [
      {
        title: "1. ChatGPT — Your All-Purpose AI Assistant",
        body: "ChatGPT is where most people start and for good reason. The free tier now gives you access to GPT-4o which can write essays, summarize research papers, help you understand difficult lecture content, translate languages, and brainstorm ideas for assignments. For a journalism student, this alone can cut your research time in half. Go to chat.openai.com — no credit card needed.",
        tip: "Pro tip: Paste your entire lecture notes into ChatGPT and ask it to summarize the 5 most important points. Saves hours of revision.",
      },
      {
        title: "2. Claude — Best for Long Documents and Deep Writing",
        body: "Claude by Anthropic is arguably the best AI for writing quality and handling long documents. You can paste an entire research paper or book chapter and ask it questions. For university assignments that require analyzing lengthy texts, Claude is unmatched. The free tier has no hourly limits which makes it better than ChatGPT free for heavy daily use. Go to claude.ai.",
        tip: "Pro tip: Ask Claude to 'improve the flow and clarity' of your essay draft. The rewrites are noticeably better than most AI tools.",
      },
      {
        title: "3. Canva Free — Design Without a Designer",
        body: "Every student needs to create presentations, posters, and social media graphics at some point. Canva's free tier gives you thousands of templates and AI-powered design tools. The background remover, AI image generator, and text-to-design features are all accessible on the free plan. No Photoshop skills needed. Go to canva.com.",
        tip: "Pro tip: Apply for Canva for Education with your UDSM email — it gives you the Pro plan completely free as a student.",
      },
      {
        title: "4. Grammarly Free — Never Submit a Weak Essay Again",
        body: "Grammarly checks your grammar, spelling, tone, and clarity in real time as you type. The free browser extension works inside Google Docs, Gmail, and any website. For journalism students who write a lot, this is essential. It catches mistakes you'd never notice yourself. Go to grammarly.com and install the Chrome extension.",
        tip: "Pro tip: Use Grammarly alongside Claude — Claude writes the draft, Grammarly polishes the final version.",
      },
      {
        title: "5. Notion Free — Organize Your Entire Student Life",
        body: "Notion is your second brain. Use it to take lecture notes, manage assignment deadlines, build a research database, and plan projects. The free plan handles everything a student needs with no limitations for personal use. Once you set it up properly you'll never go back to scattered notes and missed deadlines. Go to notion.so.",
        tip: "Pro tip: Create one Notion page per course. Link your notes, deadlines, and resources all in one place. Your GPA will thank you.",
      },
      {
        title: "6. Perplexity AI — Better Than Google for Research",
        body: "Perplexity is an AI-powered search engine that gives you cited answers instead of a list of links to click through. Ask it any research question and it returns a direct, sourced answer with references you can verify. For academic research this is a game changer — you find what you need in seconds instead of minutes. Go to perplexity.ai.",
        tip: "Pro tip: Use Perplexity to find sources, then use Claude to help you analyze and write about them.",
      },
      {
        title: "7. ElevenLabs Free — Professional Voiceovers in Seconds",
        body: "If you ever need to add voiceover to a video project, presentation, or creative assignment — ElevenLabs generates realistic AI voices in seconds. The free tier gives you enough monthly credits for most student projects. For journalism and media students, this is a powerful tool. Go to elevenlabs.io.",
        tip: "Pro tip: Use ElevenLabs to narrate your documentary or video assignment if you're not comfortable recording your own voice.",
      },
      {
        title: "8. Adobe Firefly — AI Image Generation Inside Photoshop",
        body: "If you already use Photoshop, Adobe Firefly is built right in. Generate images from text, use generative fill to edit photos, and remove or replace backgrounds instantly. The free tier gives you monthly generation credits. For graphic design work this is incredibly powerful. Go to firefly.adobe.com.",
        tip: "Pro tip: Use generative fill to remove unwanted objects from photos for your design projects — what used to take 30 minutes now takes 10 seconds.",
      },
      {
        title: "9. Otter.ai — Transcribe Your Lectures Automatically",
        body: "Otter.ai records and transcribes audio in real time. Take your phone to a lecture, open Otter, and it creates a searchable text transcript automatically. The free plan gives you 300 minutes of transcription per month — more than enough for most students. Never miss an important point from a lecture again. Go to otter.ai.",
        tip: "Pro tip: Always get permission from your lecturer before recording. Most will say yes if you explain it's for personal study notes.",
      },
      {
        title: "10. Stable Diffusion — Unlimited Free Image Generation",
        body: "Unlike Midjourney which costs $10/month, Stable Diffusion is completely open source and free to use online through platforms like DreamStudio or Hugging Face Spaces. Generate unlimited images from text descriptions with no subscription. For design projects, presentations, and creative work — this is your free alternative to paid image generators.",
        tip: "Pro tip: Go to huggingface.co/spaces and search 'Stable Diffusion' — you'll find free interfaces that require no installation.",
      },
    ],
    conclusion:
      "All 10 of these tools are free, accessible from Tanzania, and genuinely useful for students. You don't need to use all of them — start with ChatGPT and Claude for your writing, Grammarly for editing, and Notion for organization. Add the others as your needs grow. The students who learn to use these tools well today are building a serious advantage for their careers tomorrow.",
    relatedSlugs: ["chatgpt-vs-claude-for-students", "ai-tools-that-work-in-tanzania"],
  },
  {
    slug: "chatgpt-vs-claude-for-students",
    title: "ChatGPT vs Claude: Which AI is Better for Students?",
    category: "Comparison",
    categoryColor: "#F59E0B",
    emoji: "⚔️",
    date: "May 15, 2026",
    readTime: "8 min read",
    intro:
      "Both ChatGPT and Claude are free. Both are powerful. But they are built differently and they perform differently depending on what you're trying to do. I tested both extensively for essay writing, research, summarizing lecture notes, and coding assignments. Here's the honest verdict.",
    sections: [
      {
        title: "Writing Quality: Claude Wins",
        body: "When I asked both tools to write a 500-word analysis of media ethics in Tanzania, Claude produced more nuanced, better-structured writing with clearer arguments. ChatGPT's version was competent but felt more generic. For journalism and humanities students who care about the quality of their writing, Claude has a clear edge. The sentences flow better and the arguments are more developed.",
        tip: "Use Claude when writing quality matters — essays, reports, analysis, and anything that needs to sound genuinely intelligent.",
      },
      {
        title: "Research and Accuracy: Perplexity Beats Both — But Claude is Safer",
        body: "ChatGPT can confidently give you wrong answers and present them as facts. Claude is more likely to say 'I'm not certain about this' when it doesn't know something. For academic work where accuracy matters, Claude's honesty about its limitations is actually more valuable. Neither should be your only research source — always verify with Perplexity or Google Scholar.",
        tip: "Never submit AI-generated facts without verifying them from a real source. Both tools can hallucinate — Claude just does it less often.",
      },
      {
        title: "Long Documents: Claude Wins by a Mile",
        body: "This is where Claude completely dominates. You can paste an entire 50-page research paper into Claude and ask it to summarize key arguments, find contradictions, or explain complex sections. ChatGPT free has a much shorter context window and will forget earlier parts of a long conversation. For literature reviews, dissertation research, and analyzing long texts — Claude is in a different league.",
        tip: "Upload your entire course reading list to Claude at the start of semester. Ask it to create a study guide. This alone is worth using it for.",
      },
      {
        title: "Coding Help: ChatGPT Wins",
        body: "For web development assignments, debugging JavaScript, and understanding programming concepts — ChatGPT is slightly better and has a larger community of developers sharing prompts and techniques. The difference is small but real. If you're working on a coding project, start with ChatGPT. Both are excellent at explaining what code does line by line.",
        tip: "When you get an error in VS Code, paste the error message directly into ChatGPT and ask 'what does this mean and how do I fix it?' — works almost every time.",
      },
      {
        title: "Daily Usage Limits: Claude is More Generous on Free",
        body: "ChatGPT free throttles usage during peak hours and frequently shows 'ChatGPT is at capacity' messages. Claude free has more consistent availability with no hourly caps. For a student who needs reliable access throughout the day, Claude is less frustrating to work with on the free tier.",
        tip: "Have both bookmarked. Use Claude as your primary and switch to ChatGPT when Claude is running slow — which is rare.",
      },
      {
        title: "The Verdict: Use Both, But Default to Claude",
        body: "There is no single winner because they excel at different things. For most student tasks — writing essays, summarizing papers, analyzing texts, improving your drafts — Claude is the better daily driver. For quick questions, coding help, and tasks where ChatGPT's huge community of prompts is useful — use ChatGPT. The best students use both strategically rather than picking one and ignoring the other.",
        tip: "Create a browser bookmark folder called 'AI Tools' with Claude, ChatGPT, and Perplexity all saved. Open whichever fits the task.",
      },
    ],
    conclusion:
      "Both tools are free and both will make you a more productive student immediately. Start with Claude for writing-heavy work and ChatGPT for everything else. As you use them more you'll naturally develop a sense for which one to reach for first. The most important thing is to start using them today — the students who figure this out now will have a real advantage in their careers.",
    relatedSlugs: ["best-free-ai-tools-for-african-students", "how-to-make-money-with-ai-as-a-student"],
  },
  {
    slug: "how-to-make-money-with-ai-as-a-student",
    title: "How to Make Your First $100 Online as a Student Using AI Tools",
    category: "Make Money",
    categoryColor: "#C9A84C",
    emoji: "💰",
    date: "May 10, 2026",
    readTime: "10 min read",
    intro:
      "Making money online as a student in Tanzania is more realistic than ever before — because AI tools have cut the time and skill barrier for most digital services in half. Here's exactly how to make your first $100 online this month using free AI tools you can access right now.",
    sections: [
      {
        title: "Service 1: Graphic Design (Fastest Path to First Payment)",
        body: "With Canva AI and Adobe Firefly, you can create professional logos, social media posts, flyers, and business cards in minutes. Local businesses, event organizers, and student organizations all need design work constantly. Charge Tsh 10,000–30,000 per design project. Post in UDSM WhatsApp groups and Facebook pages offering your services. Your first client is closer than you think — it's probably someone you already know.",
        tip: "Start with a simple offer: 'I design professional flyers and social media posts — Tsh 15,000 per design, delivered in 24 hours.' Simple, clear, and affordable enough that people say yes easily.",
      },
      {
        title: "Service 2: Article and Blog Writing",
        body: "Your journalism training combined with AI writing tools makes you a highly capable content writer. Businesses need blog posts, website copy, and social media content constantly. On platforms like Upwork and Fiverr, blog posts sell for $10–$50 each. Use Claude or ChatGPT to draft the structure and research, then use your journalism skills to edit and add your voice. You produce a quality 1000-word article in 1–2 hours instead of 4–5.",
        tip: "Your journalism degree is your credibility on Upwork. Put 'Journalism Student, UDSM' in your profile. Clients see that as professional training, not inexperience.",
      },
      {
        title: "Service 3: Video Editing",
        body: "You already know Premiere Pro — that's a marketable skill right now. AI tools like Descript and Runway ML make editing even faster by automating captions, removing filler words, and cleaning up audio automatically. Small businesses, YouTubers, and event organizers need video editing constantly. Charge $20–$80 per video depending on length and complexity. This is your strongest service because few people your age combine Premiere Pro skills with AI tools.",
        tip: "Create a 60-second sample edit from publicly available footage and post it as your portfolio. You need to show work, not just describe it.",
      },
      {
        title: "Service 4: Social Media Management",
        body: "Many small businesses in Dar es Salaam have social media accounts they never update because they don't have time. Offer to manage their Instagram or Facebook for Tsh 50,000–150,000 per month — you create and schedule 3–4 posts per week using Canva AI for graphics and Claude for captions. This becomes recurring monthly income, not one-off payments.",
        tip: "Walk into 3 local businesses near UDSM, show them their empty Instagram, and offer to fix it for Tsh 50,000/month. Physical outreach converts better than online for local clients.",
      },
      {
        title: "Where to Find Clients: The 3 Best Platforms",
        body: "Fiverr is the easiest starting point — create a gig for graphic design or article writing and wait for orders to come to you. Upwork requires a stronger profile but pays better rates. For local Tanzanian clients, WhatsApp groups, Facebook marketplace, and simply walking into businesses are the most effective methods. Start with one platform only — trying all three at once leads to doing none well.",
        tip: "On Fiverr, your first 5 reviews are everything. Consider doing your first 2–3 jobs at a discount just to get those reviews. Then raise your prices.",
      },
      {
        title: "Payment: How to Receive International Money in Tanzania",
        body: "For international clients on Fiverr and Upwork, you can withdraw to PayPal and then transfer to your Tanzanian bank account or M-Pesa through services like Chipper Cash or WorldRemit. For local clients, M-Pesa works perfectly. Set this up before you start so you're ready the moment your first payment arrives.",
        tip: "Create your PayPal account now even before you have clients. Verification can take a few days — get it done early.",
      },
    ],
    conclusion:
      "Your first $100 online is not a dream — it's a plan. Pick one service from this list that matches your strongest skill right now. For you that's graphic design or video editing. Set up one profile on Fiverr this week. Tell 10 people you know that you offer this service. Your first client will come from your existing network, not from strangers online. Start today.",
    relatedSlugs: ["best-free-ai-tools-for-african-students", "ai-tools-for-video-editors"],
  },
  {
    slug: "ai-tools-for-video-editors",
    title: "The 7 Best AI Tools for Video Editors in 2026",
    category: "Video",
    categoryColor: "#EF4444",
    emoji: "🎬",
    date: "May 5, 2026",
    readTime: "7 min read",
    intro:
      "Video editing used to mean spending hours on tasks that AI now handles in minutes — captions, background removal, noise reduction, color grading, and even generating entire clips from text. Here are the 7 AI tools that will make your Premiere Pro workflow significantly faster in 2026.",
    sections: [
      {
        title: "1. Adobe Firefly — AI Inside Premiere Pro",
        body: "Adobe has integrated Firefly AI directly into Premiere Pro and After Effects. Generative extend lets you extend clips that are too short. Generative fill removes unwanted objects from video frames. The text-based editing lets you search for specific moments in your footage by typing what happens in the scene. If you already use Premiere Pro, these features are already available in your version — explore the AI panel.",
        tip: "Use generative extend to fix that moment where your clip ends 0.5 seconds too early. Saves a reshoot entirely.",
      },
      {
        title: "2. Descript — Edit Video by Editing Text",
        body: "Descript transcribes your video automatically and lets you edit the footage by editing the text transcript. Delete a word from the transcript and that section of video disappears. It removes filler words like 'um' and 'uh' automatically with one click. For interview-style videos, documentary content, and talking head videos — this cuts editing time by 60%. Has a generous free tier.",
        tip: "Record your raw footage, drop it into Descript for the rough cut, then bring the cleaned version into Premiere Pro for final color and audio work.",
      },
      {
        title: "3. ElevenLabs — AI Voiceover in 120+ Voices",
        body: "Need a professional voiceover for a project but don't want to record your own voice? ElevenLabs generates realistic voiceovers in 120+ voices and 29 languages including Swahili. The free tier gives you enough monthly credits for most projects. For corporate videos, explainers, and documentary narration — this is a professional-grade solution at zero cost.",
        tip: "Clone your own voice with ElevenLabs — record 1 minute of yourself speaking clearly and it creates an AI version of your voice you can type into.",
      },
      {
        title: "4. Runway ML — AI Video Generation and Editing",
        body: "Runway ML is the most powerful AI video tool available right now. Generate video clips from text prompts, remove backgrounds from video without a green screen, apply cinematic style transfers, and use the AI magic eraser to remove objects from moving footage. The free tier is limited but enough to test all features. This is the future of video production.",
        tip: "Use Runway's background removal on footage shot anywhere — no green screen needed. Works surprisingly well even on complex backgrounds.",
      },
      {
        title: "5. Topaz Video AI — Make Low Quality Footage Look Professional",
        body: "Topaz Video AI upscales low-resolution footage to HD or 4K using AI, removes noise from dark or grainy footage, and stabilizes shaky camera work. If you're working with client footage that was shot on a phone or older camera, this tool can save the project. It's a paid tool but has a free trial with enough credits to test on real projects.",
        tip: "Use Topaz to rescue shaky phone footage from a client who filmed their own event. Turn a problem into a professional deliverable.",
      },
      {
        title: "6. Auphonic — AI Audio Mastering for Video",
        body: "Good video with bad audio loses viewers immediately. Auphonic automatically balances audio levels, removes background noise, and masters your audio to broadcast standards. The free tier gives you 2 hours of processing per month — enough for most student and freelance projects. Run every video's audio through Auphonic before final export.",
        tip: "Auphonic alone can make a video shot on a phone sound like it was recorded in a studio. Audio quality matters more than most editors realize.",
      },
      {
        title: "7. Captions.ai — Automatic Captions That Look Professional",
        body: "Captions generates automatic subtitles that are accurate, animated, and styled professionally. Huge for social media videos where 85% of people watch without sound. The app is mobile-first but exports clean caption files you can import into Premiere Pro. The free tier handles most basic projects and the paid tiers are very affordable.",
        tip: "Always add captions to any video intended for social media. It's not optional anymore — platforms penalize captionless content in their algorithms.",
      },
    ],
    conclusion:
      "You don't need all 7 of these tools. Start with what solves your current biggest problem. If captions take too long — start with Captions.ai. If audio is your weakness — start with Auphonic. If you want to cut editing time in half — start with Descript. Pick one, master it, then add the next. Your Premiere Pro workflow will never be the same.",
    relatedSlugs: ["best-free-ai-tools-for-african-students", "how-to-make-money-with-ai-as-a-student"],
  },
  {
    slug: "ai-tools-that-work-in-tanzania",
    title: "AI Tools That Actually Work in Tanzania — No VPN Needed",
    category: "Africa",
    categoryColor: "#2D9E6B",
    emoji: "🌍",
    date: "April 20, 2026",
    readTime: "11 min read",
    intro:
      "Not every AI tool works in Africa. Some are geo-blocked. Some don't accept Tanzanian payment methods. Some work but are painfully slow on local internet. I tested 30+ AI tools from Dar es Salaam and here's the honest list of what works without a VPN, blocked payments, or regional restrictions.",
    sections: [
      {
        title: "Fully Accessible — No VPN, No Workarounds",
        body: "These tools work perfectly from Tanzania right now: ChatGPT (chat.openai.com), Claude (claude.ai), Perplexity AI (perplexity.ai), Canva AI (canva.com), Notion AI (notion.so), Grammarly (grammarly.com), ElevenLabs (elevenlabs.io), Adobe Firefly (firefly.adobe.com), Otter.ai (otter.ai), and GitHub Copilot (github.com/features/copilot). All of these load fast on standard Tanzanian mobile data and fiber connections.",
        tip: "Bookmark this page. When a friend asks 'which AI tools work in Tanzania?' — send them here.",
      },
      {
        title: "Payment Workarounds for Paid Plans",
        body: "The biggest barrier for Tanzanian users isn't access — it's paying for premium plans. Most AI tools don't accept M-Pesa directly. The solution: get a virtual Visa or Mastercard from Chipper Cash, Nala, or Vodacom M-Pesa's virtual card service. Load it with the amount you need and use it like any international card. Works on ChatGPT Plus, Midjourney, Notion Pro, and most other platforms.",
        tip: "Chipper Cash is the most reliable virtual card service for Tanzania in 2026. Download the app, verify your account, and you can pay for any international subscription.",
      },
      {
        title: "Tools That Are Geo-Restricted or Slow",
        body: "Some tools have inconsistent access from Tanzania: Midjourney works but Discord can be slow on mobile data. Jasper.ai is accessible but expensive for Tanzanian budgets. Some newer US-only tools require a VPN — these are not worth the hassle when excellent free alternatives exist. Always check if a free alternative exists before paying for a VPN to access a tool.",
        tip: "If a tool requires a VPN, it's a signal that the company doesn't prioritize African users. Look for alternatives that do.",
      },
      {
        title: "Best Free Tools for Low Bandwidth Connections",
        body: "On slow connections or when data is expensive, these tools are the most bandwidth-efficient: Claude and ChatGPT work on 2G connections because they're text-only. Perplexity loads fast even on weak signals. Grammarly browser extension works offline after loading. Canva is heavier but works well on WiFi. Avoid video generation tools on mobile data — they use significant bandwidth.",
        tip: "Use AI tools on UDSM WiFi for heavy tasks and text-based tools like Claude and ChatGPT when on mobile data.",
      },
      {
        title: "The Complete Free Toolkit for Tanzanian Students",
        body: "Based on testing from Dar es Salaam, here is the optimal free AI toolkit for a Tanzanian student: ChatGPT for quick questions and coding, Claude for writing and long documents, Perplexity for research, Canva AI for design, Grammarly for editing, Notion for organization, and ElevenLabs for voiceovers. Every tool on this list is free, works without a VPN, and is accessible on standard Tanzanian internet connections.",
        tip: "Total cost of this entire toolkit: Tsh 0. These free tiers are genuinely powerful enough for most student and early freelancer needs.",
      },
    ],
    conclusion:
      "Tanzania has better access to AI tools than most people realize. The barrier is usually awareness, not technology. Share this article with every student and entrepreneur you know in Tanzania — the information advantage is real and it's available to everyone right now.",
    relatedSlugs: ["best-free-ai-tools-for-african-students", "chatgpt-vs-claude-for-students"],
  },
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => post.relatedSlugs.includes(p.slug));

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
        .nav-links a:hover, .nav-links a.active { color: var(--gold); }

        .wrap { max-width: 740px; margin: 0 auto; padding: 7rem 2rem 5rem; position: relative; z-index: 1; }

        .breadcrumb { display: flex; align-items: center; gap: 0.5rem; font-size: 0.78rem; color: var(--text-muted); margin-bottom: 2rem; flex-wrap: wrap; }
        .breadcrumb a { color: var(--gold); text-decoration: none; }
        .breadcrumb a:hover { text-decoration: underline; }

        .post-header { margin-bottom: 2.5rem; padding-bottom: 2.5rem; border-bottom: 1px solid var(--border); }
        .post-emoji { font-size: 2.5rem; display: block; margin-bottom: 1rem; }
        .post-cat { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.12em; font-weight: 600; margin-bottom: 0.8rem; }
        h1 { font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.8rem, 4vw, 2.8rem); letter-spacing: -0.02em; line-height: 1.1; margin-bottom: 1rem; }
        .post-meta { display: flex; align-items: center; gap: 0.8rem; font-size: 0.78rem; color: var(--text-muted); }
        .meta-dot { width: 3px; height: 3px; border-radius: 50%; background: var(--text-muted); flex-shrink: 0; }

        .post-intro { font-size: 1.05rem; color: var(--white); line-height: 1.8; font-weight: 400; margin-bottom: 2.5rem; padding: 1.5rem; background: rgba(201,168,76,0.05); border-left: 3px solid var(--gold); border-radius: 0 8px 8px 0; }

        .post-section { margin-bottom: 2.5rem; }
        h2 { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1.2rem; letter-spacing: -0.01em; margin-bottom: 0.8rem; color: var(--white); }
        .post-body { font-size: 0.95rem; color: var(--text-muted); line-height: 1.85; margin-bottom: 0.8rem; }
        .post-body strong { color: var(--white); font-weight: 500; }

        .tip-box { background: rgba(45,158,107,0.08); border: 1px solid rgba(45,158,107,0.2); border-radius: 8px; padding: 0.9rem 1.1rem; display: flex; gap: 0.7rem; align-items: flex-start; }
        .tip-icon { font-size: 0.9rem; flex-shrink: 0; margin-top: 1px; }
        .tip-text { font-size: 0.83rem; color: var(--text-muted); line-height: 1.6; }
        .tip-text strong { color: #2D9E6B; font-weight: 500; }

        .conclusion { background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem; margin: 2.5rem 0; }
        .conclusion h3 { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--gold); margin-bottom: 0.7rem; }
        .conclusion p { font-size: 0.92rem; color: var(--text-muted); line-height: 1.8; }

        .divider { border: none; border-top: 1px solid var(--border); margin: 2.5rem 0; }

        .related h3 { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 1rem; }
        .related-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.8rem; }
        .related-card { background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 10px; padding: 1rem 1.2rem; text-decoration: none; transition: all 0.2s; display: block; }
        .related-card:hover { border-color: rgba(201,168,76,0.4); transform: translateY(-2px); }
        .related-card-cat { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; margin-bottom: 0.3rem; }
        .related-card-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.88rem; color: var(--white); line-height: 1.3; }

        .back-link { display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; color: var(--text-muted); text-decoration: none; margin-top: 2rem; transition: color 0.2s; }
        .back-link:hover { color: var(--gold); }

        footer { border-top: 1px solid var(--border); padding: 2rem 2.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; position: relative; z-index: 1; margin-top: 2rem; }
        .footer-logo { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.1rem; }
        .footer-logo span { color: var(--gold); }
        .footer-copy { font-size: 0.75rem; color: var(--text-muted); }

        @media (max-width: 768px) {
          nav { padding: 1rem 1.2rem; }
          .nav-links { display: none; }
        }
      `}</style>

      <nav>
        <a href="/" className="nav-logo">Melekh<span>Fad</span></a>
        <ul className="nav-links">
          <li><a href="/tools">Tools</a></li>
          <li><a href="/blog" className="active">Blog</a></li>
          <li><a href="/newsletter">Newsletter</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>

      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Home</a> /
          <a href="/blog">Blog</a> /
          <span>{post.title}</span>
        </div>

        <div className="post-header">
          <span className="post-emoji">{post.emoji}</span>
          <div className="post-cat" style={{ color: post.categoryColor }}>{post.category}</div>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span>By MelekhFad</span>
            <div className="meta-dot" />
            <span>{post.date}</span>
            <div className="meta-dot" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="post-intro">{post.intro}</div>

        {post.sections.map((section, i) => (
          <div key={i} className="post-section">
            <h2>{section.title}</h2>
            <p className="post-body">{section.body}</p>
            <div className="tip-box">
              <span className="tip-icon">💡</span>
              <div className="tip-text"><strong>Pro tip: </strong>{section.tip}</div>
            </div>
          </div>
        ))}

        <div className="conclusion">
          <h3>The Bottom Line</h3>
          <p>{post.conclusion}</p>
        </div>

        <div className="divider" />

        {related.length > 0 && (
          <div className="related">
            <h3>Read Next</h3>
            <div className="related-grid">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="related-card">
                  <div className="related-card-cat" style={{ color: r.categoryColor }}>{r.category}</div>
                  <div className="related-card-title">{r.title}</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <Link href="/blog" className="back-link">← Back to all articles</Link>
      </div>

      <footer>
        <div className="footer-logo">Melekh<span>Fad</span></div>
        <div className="footer-copy">© 2026 MelekhFad · Dar es Salaam, Tanzania</div>
      </footer>
    </>
  );
}