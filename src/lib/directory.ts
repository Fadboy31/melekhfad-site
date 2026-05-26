export type ToolCategory =
  | "Writing"
  | "Image"
  | "Video"
  | "Design"
  | "Productivity"
  | "Voice"
  | "Coding"
  | "Students"
  | "Free Tools";

export type DirectoryTool = {
  name: string;
  slug: string;
  category: Exclude<ToolCategory, "Students" | "Free Tools">;
  description: string;
  price: string;
  paid: string;
  badge: string;
  badgeColor: string;
  emoji: string;
  url: string;
  free: boolean;
  bestFor: string;
  audience: string;
};

export type CategoryHub = {
  name: ToolCategory;
  slug: string;
  eyebrow: string;
  headline: string;
  intro: string;
  commercialIntent: string;
  useCases: string[];
  playbook: string[];
};

export const directoryTools: DirectoryTool[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    category: "Writing",
    description:
      "The world's most popular AI assistant for writing, research, coding, brainstorming, and everyday productivity.",
    price: "Free",
    paid: "20",
    badge: "Most Popular",
    badgeColor: "#F59E0B",
    emoji: "🤖",
    url: "https://chat.openai.com",
    free: true,
    bestFor: "General AI work, study help, coding, and fast drafts",
    audience: "Students, creators, founders, and freelancers",
  },
  {
    name: "Claude",
    slug: "claude",
    category: "Writing",
    description:
      "Anthropic's AI assistant for long documents, thoughtful writing, analysis, editing, and research workflows.",
    price: "Free",
    paid: "20",
    badge: "Best for Writing",
    badgeColor: "#10B981",
    emoji: "✍️",
    url: "https://claude.ai",
    free: true,
    bestFor: "Long-form writing, document analysis, and nuanced editing",
    audience: "Writers, students, researchers, and journalists",
  },
  {
    name: "Midjourney",
    slug: "midjourney",
    category: "Image",
    description:
      "A premium AI image generator known for polished, cinematic, and artistic visuals from text prompts.",
    price: "Paid",
    paid: "10",
    badge: "Top Rated",
    badgeColor: "#8B5CF6",
    emoji: "🎨",
    url: "https://midjourney.com",
    free: false,
    bestFor: "High-quality concept art, campaign visuals, and creative direction",
    audience: "Designers, marketers, creators, and visual storytellers",
  },
  {
    name: "Canva AI",
    slug: "canva-ai",
    category: "Design",
    description:
      "AI-powered design tools inside Canva for presentations, flyers, social posts, logos, and simple brand assets.",
    price: "Free",
    paid: "15",
    badge: "Student Friendly",
    badgeColor: "#EC4899",
    emoji: "🖼️",
    url: "https://canva.com",
    free: true,
    bestFor: "Fast social graphics, presentations, and beginner-friendly design",
    audience: "Students, small businesses, clubs, and creators",
  },
  {
    name: "Notion AI",
    slug: "notion-ai",
    category: "Productivity",
    description:
      "AI writing, summarization, and organization inside a flexible workspace for notes, docs, databases, and projects.",
    price: "Free",
    paid: "10",
    badge: "Editor's Pick",
    badgeColor: "#06B6D4",
    emoji: "📋",
    url: "https://notion.so",
    free: true,
    bestFor: "Organizing notes, projects, research, and weekly planning",
    audience: "Students, solo founders, teams, and knowledge workers",
  },
  {
    name: "ElevenLabs",
    slug: "elevenlabs",
    category: "Voice",
    description:
      "AI voice generation for realistic narration, voiceovers, explainers, podcasts, and video content.",
    price: "Free",
    paid: "5",
    badge: "Trending",
    badgeColor: "#F97316",
    emoji: "🎙️",
    url: "https://elevenlabs.io",
    free: true,
    bestFor: "Natural voiceovers for video, audio, and storytelling",
    audience: "Video editors, podcasters, educators, and creators",
  },
  {
    name: "GitHub Copilot",
    slug: "github-copilot",
    category: "Coding",
    description:
      "AI coding assistant that suggests code, explains errors, and helps developers move faster inside their editor.",
    price: "Free trial",
    paid: "10",
    badge: "Developer Must-Have",
    badgeColor: "#6366F1",
    emoji: "💻",
    url: "https://github.com/features/copilot",
    free: true,
    bestFor: "Code completion, bug fixing, and learning unfamiliar code",
    audience: "Developers, CS students, and technical founders",
  },
  {
    name: "Runway ML",
    slug: "runway-ml",
    category: "Video",
    description:
      "AI video generation and editing suite for text-to-video, background removal, effects, and creative production.",
    price: "Free trial",
    paid: "12",
    badge: "Video Creators",
    badgeColor: "#EF4444",
    emoji: "🎬",
    url: "https://runwayml.com",
    free: true,
    bestFor: "AI video experiments, background removal, and creative clips",
    audience: "Video editors, filmmakers, marketers, and creators",
  },
  {
    name: "Grammarly",
    slug: "grammarly",
    category: "Writing",
    description:
      "AI writing assistant for grammar, clarity, tone, citations, and polished everyday communication.",
    price: "Free",
    paid: "12",
    badge: "Student Essential",
    badgeColor: "#10B981",
    emoji: "📝",
    url: "https://grammarly.com",
    free: true,
    bestFor: "Polishing essays, emails, reports, and professional writing",
    audience: "Students, writers, job seekers, and professionals",
  },
  {
    name: "DALL-E 3",
    slug: "dalle-3",
    category: "Image",
    description:
      "OpenAI image generation inside ChatGPT for turning written prompts into polished visuals and concepts.",
    price: "Free with ChatGPT",
    paid: "20",
    badge: "Easy to Use",
    badgeColor: "#8B5CF6",
    emoji: "🖼️",
    url: "https://openai.com/dall-e-3",
    free: true,
    bestFor: "Simple prompt-to-image generation inside a familiar assistant",
    audience: "Students, marketers, creators, and small teams",
  },
  {
    name: "Otter.ai",
    slug: "otter-ai",
    category: "Productivity",
    description:
      "AI transcription for lectures, meetings, interviews, and searchable voice notes.",
    price: "Free",
    paid: "10",
    badge: "For Students",
    badgeColor: "#06B6D4",
    emoji: "🎓",
    url: "https://otter.ai",
    free: true,
    bestFor: "Lecture notes, meeting transcripts, and interview capture",
    audience: "Students, researchers, journalists, and teams",
  },
  {
    name: "Descript",
    slug: "descript",
    category: "Video",
    description:
      "Text-based video and podcast editing with transcription, filler-word removal, captions, and AI voice tools.",
    price: "Free",
    paid: "12",
    badge: "Video Editors",
    badgeColor: "#F97316",
    emoji: "🎞️",
    url: "https://descript.com",
    free: true,
    bestFor: "Editing interviews, podcasts, reels, and talking-head videos",
    audience: "Video editors, podcasters, educators, and creators",
  },
  {
    name: "Perplexity AI",
    slug: "perplexity-ai",
    category: "Writing",
    description:
      "AI search engine that returns cited answers for research, learning, fact-checking, and discovery.",
    price: "Free",
    paid: "20",
    badge: "Research Tool",
    badgeColor: "#F59E0B",
    emoji: "🔍",
    url: "https://perplexity.ai",
    free: true,
    bestFor: "Research questions, source discovery, and quick fact checks",
    audience: "Students, researchers, writers, and analysts",
  },
  {
    name: "Adobe Firefly",
    slug: "adobe-firefly",
    category: "Image",
    description:
      "Adobe's commercially safer AI image system for generative fill, text effects, and creative asset production.",
    price: "Free",
    paid: "5",
    badge: "Designers",
    badgeColor: "#EC4899",
    emoji: "🔥",
    url: "https://firefly.adobe.com",
    free: true,
    bestFor: "Generative fill, design edits, and commercial creative assets",
    audience: "Designers, marketers, photographers, and creators",
  },
  {
    name: "Copy.ai",
    slug: "copy-ai",
    category: "Writing",
    description:
      "AI copywriting platform for marketing copy, emails, social posts, product descriptions, and sales workflows.",
    price: "Free",
    paid: "36",
    badge: "Marketers",
    badgeColor: "#6366F1",
    emoji: "📣",
    url: "https://copy.ai",
    free: true,
    bestFor: "Marketing copy, sales emails, and campaign drafts",
    audience: "Marketers, freelancers, founders, and sales teams",
  },
  {
    name: "Lumen5",
    slug: "lumen5",
    category: "Video",
    description:
      "AI video platform that turns articles, scripts, and blog posts into social and marketing videos.",
    price: "Free",
    paid: "19",
    badge: "Content Repurposing",
    badgeColor: "#EF4444",
    emoji: "📱",
    url: "https://lumen5.com",
    free: true,
    bestFor: "Turning written content into short videos",
    audience: "Content marketers, bloggers, educators, and creators",
  },
  {
    name: "Jasper AI",
    slug: "jasper-ai",
    category: "Writing",
    description:
      "AI content platform for brand-aware marketing copy, campaigns, blog posts, and business writing.",
    price: "Paid",
    paid: "39",
    badge: "Professional",
    badgeColor: "#F59E0B",
    emoji: "✨",
    url: "https://jasper.ai",
    free: false,
    bestFor: "Scaled marketing content with brand controls",
    audience: "Marketing teams, agencies, founders, and content teams",
  },
  {
    name: "Murf AI",
    slug: "murf-ai",
    category: "Voice",
    description:
      "AI voiceover studio with a large voice library for presentations, explainer videos, and narration.",
    price: "Free",
    paid: "19",
    badge: "120+ Voices",
    badgeColor: "#10B981",
    emoji: "🔊",
    url: "https://murf.ai",
    free: true,
    bestFor: "Voiceovers for explainers, courses, and presentations",
    audience: "Educators, video editors, marketers, and creators",
  },
  {
    name: "Tabnine",
    slug: "tabnine",
    category: "Coding",
    description:
      "AI code completion across major languages and IDEs, with a strong focus on developer productivity.",
    price: "Free",
    paid: "12",
    badge: "All Languages",
    badgeColor: "#6366F1",
    emoji: "⚡",
    url: "https://tabnine.com",
    free: true,
    bestFor: "Code completion across languages and editor setups",
    audience: "Developers, coding students, and engineering teams",
  },
  {
    name: "Stable Diffusion",
    slug: "stable-diffusion",
    category: "Image",
    description:
      "Open-source AI image generation model that can be used through many free and paid interfaces.",
    price: "100% Free",
    paid: "0",
    badge: "Completely Free",
    badgeColor: "#10B981",
    emoji: "🆓",
    url: "https://stability.ai",
    free: true,
    bestFor: "Free image generation and open-source creative workflows",
    audience: "Designers, students, hobbyists, and technical creators",
  },
];

export const categoryHubs: CategoryHub[] = [
  {
    name: "Writing",
    slug: "writing",
    eyebrow: "AI writing tools",
    headline: "Write sharper essays, scripts, emails, and articles with AI.",
    intro:
      "The writing stack for African students and creators should be affordable, fast on normal internet, and useful beyond empty content generation. These tools help with drafts, research, editing, and publishing.",
    commercialIntent:
      "Best for users ready to compare free AI writing tools, ChatGPT alternatives, essay helpers, and content writing platforms.",
    useCases: ["Essay drafting", "Article outlines", "Research summaries", "Email polishing"],
    playbook: ["Start with Claude for long drafts.", "Use Perplexity for cited research.", "Polish final work with Grammarly."],
  },
  {
    name: "Image",
    slug: "image",
    eyebrow: "AI image tools",
    headline: "Create campaign visuals, concepts, and design assets from prompts.",
    intro:
      "AI image tools are powerful for creators who need fast visuals without hiring a full design team for every idea. This hub separates premium art tools from free and practical options.",
    commercialIntent:
      "Best for people comparing AI image generators, free Midjourney alternatives, and design-safe image tools.",
    useCases: ["Social visuals", "Presentation images", "Brand concepts", "Poster ideas"],
    playbook: ["Use Midjourney when beauty matters.", "Use DALL-E inside ChatGPT for speed.", "Use Stable Diffusion when budget is zero."],
  },
  {
    name: "Video",
    slug: "video",
    eyebrow: "AI video tools",
    headline: "Edit, caption, repurpose, and generate video faster.",
    intro:
      "Video is the hardest content format to scale manually. AI video tools help African creators produce faster by handling captions, rough cuts, background removal, and content repurposing.",
    commercialIntent:
      "Best for creators searching for AI video editors, text-to-video tools, caption tools, and content repurposing software.",
    useCases: ["Short-form clips", "Captions", "Rough cuts", "AI video experiments"],
    playbook: ["Use Descript for rough cuts.", "Use Runway for visual experiments.", "Use Lumen5 to repurpose articles."],
  },
  {
    name: "Design",
    slug: "design",
    eyebrow: "AI design tools",
    headline: "Design better social posts, flyers, decks, and brand assets.",
    intro:
      "Design tools should help non-designers produce professional work quickly while giving real designers more speed. This hub focuses on practical tools that fit student, freelance, and small business work.",
    commercialIntent:
      "Best for users comparing Canva AI, free design tools, and beginner-friendly AI design workflows.",
    useCases: ["Flyers", "Logos", "Social posts", "Pitch decks"],
    playbook: ["Start in Canva AI for layout.", "Use Firefly for image edits.", "Build repeatable templates for clients."],
  },
  {
    name: "Productivity",
    slug: "productivity",
    eyebrow: "AI productivity tools",
    headline: "Turn notes, meetings, lectures, and tasks into organized action.",
    intro:
      "The best productivity tools do not just save time; they reduce mental clutter. These AI tools are strong for students, teams, and solo builders who need searchable systems.",
    commercialIntent:
      "Best for users comparing AI note takers, meeting transcription tools, and AI productivity apps.",
    useCases: ["Lecture notes", "Meeting summaries", "Project planning", "Research databases"],
    playbook: ["Capture with Otter.", "Organize in Notion.", "Review weekly with an AI summary."],
  },
  {
    name: "Voice",
    slug: "voice",
    eyebrow: "AI voice tools",
    headline: "Generate clean narration, voiceovers, and audio for content.",
    intro:
      "Voice tools unlock professional sound for creators who do not have studio access. This hub focuses on realistic voices, usable free tiers, and workflows for video and education.",
    commercialIntent:
      "Best for users comparing AI voice generators, text-to-speech tools, and voiceover software.",
    useCases: ["YouTube narration", "Podcast intros", "Course audio", "Presentation voiceovers"],
    playbook: ["Draft the script first.", "Generate voice in ElevenLabs or Murf.", "Edit timing inside your video editor."],
  },
  {
    name: "Coding",
    slug: "coding",
    eyebrow: "AI coding tools",
    headline: "Code faster, debug smarter, and learn programming with AI.",
    intro:
      "AI coding tools are most valuable when they help you understand the code, not just paste it. This hub focuses on tools that help students and developers build real projects.",
    commercialIntent:
      "Best for users comparing GitHub Copilot, AI code completion tools, and AI programming assistants.",
    useCases: ["Code completion", "Bug fixing", "Explaining errors", "Learning frameworks"],
    playbook: ["Use Copilot for speed.", "Use ChatGPT for error explanations.", "Ask every tool to explain before you paste."],
  },
  {
    name: "Free Tools",
    slug: "free-tools",
    eyebrow: "Free AI tools",
    headline: "Start using AI without paying for subscriptions.",
    intro:
      "Free AI tools matter because many students and early builders cannot justify monthly subscriptions yet. This hub highlights tools with useful free tiers, not fake free trials.",
    commercialIntent:
      "Best for users searching for free AI tools, free ChatGPT alternatives, and no-budget AI workflows.",
    useCases: ["Study help", "Writing", "Design", "Research"],
    playbook: ["Build a free stack first.", "Pay only when the tool earns money or saves serious time.", "Track limits before client work."],
  },
  {
    name: "Students",
    slug: "students",
    eyebrow: "AI tools for students",
    headline: "Study, research, write, and organize university life with AI.",
    intro:
      "Students need AI tools that are affordable, easy to learn, and useful across assignments, revision, research, design, and early freelancing.",
    commercialIntent:
      "Best for students comparing free AI study tools, essay helpers, note takers, and research assistants.",
    useCases: ["Lecture notes", "Essay drafts", "Research sources", "Presentations"],
    playbook: ["Use Claude for long readings.", "Use Perplexity for sources.", "Use Canva AI for presentations."],
  },
];

export function getCategoryHub(slug: string) {
  return categoryHubs.find((category) => category.slug === slug);
}

export function getToolsForCategory(category: ToolCategory) {
  if (category === "Free Tools") {
    return directoryTools.filter((tool) => tool.free);
  }

  if (category === "Students") {
    return directoryTools.filter((tool) =>
      ["Writing", "Design", "Productivity", "Image", "Voice"].includes(tool.category),
    );
  }

  return directoryTools.filter((tool) => tool.category === category);
}

export function getCategoryToolCount(category: ToolCategory) {
  return getToolsForCategory(category).length;
}
