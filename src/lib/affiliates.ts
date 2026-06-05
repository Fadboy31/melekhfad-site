// ============================================================
// MELEKHFAD — AFFILIATE LINKS CENTRAL FILE
// ============================================================
// How to use:
// 1. When you get approved for an affiliate program, replace
//    the placeholder URL with your real affiliate link
// 2. Every tool page automatically uses the updated link
// 3. Track which programs are active vs pending below
// ============================================================

export type AffiliateStatus = "active" | "pending" | "not_applied";

export type AffiliateLink = {
  slug: string;
  name: string;
  directUrl: string;       // Real tool URL (always works)
  affiliateUrl: string;    // Your affiliate link (earns commission)
  status: AffiliateStatus; // Track your application status
  commission: string;      // What you earn per referral
  program: string;         // Where to sign up
  notes: string;           // Any useful notes
};

export const affiliateLinks: AffiliateLink[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    directUrl: "https://chat.openai.com",
    affiliateUrl: "https://chat.openai.com", // No public affiliate program yet
    status: "not_applied",
    commission: "N/A — no public program",
    program: "N/A",
    notes: "OpenAI has no public affiliate program. Link directly.",
  },
  {
    slug: "claude",
    name: "Claude",
    directUrl: "https://claude.ai",
    affiliateUrl: "https://claude.ai", // No public affiliate program yet
    status: "not_applied",
    commission: "N/A — no public program",
    program: "N/A",
    notes: "Anthropic has no public affiliate program. Link directly.",
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    directUrl: "https://midjourney.com",
    affiliateUrl: "https://midjourney.com", // Replace when approved
    status: "not_applied",
    commission: "TBD",
    program: "midjourney.com/affiliate",
    notes: "Apply when you have 500+ monthly visitors.",
  },
  {
    slug: "canva-ai",
    name: "Canva AI",
    directUrl: "https://canva.com",
    affiliateUrl: "https://canva.com", // Replace with: https://canva.com/?utm_source=YOUR_ID
    status: "not_applied",
    commission: "20% recurring",
    program: "canva.com/affiliates",
    notes: "Requires active social media. Apply after building audience.",
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    directUrl: "https://notion.so",
    affiliateUrl: "https://notion.so", // Replace when approved
    status: "not_applied",
    commission: "$10 per paid upgrade",
    program: "notion.so/affiliates",
    notes: "Easy approval. Apply now.",
  },
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    directUrl: "https://elevenlabs.io",
    affiliateUrl: "https://elevenlabs.io", // Replace when approved
    status: "pending",
    commission: "22% recurring",
    program: "elevenlabs.io/affiliates",
    notes: "Applied. Waiting for approval.",
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    directUrl: "https://github.com/features/copilot",
    affiliateUrl: "https://github.com/features/copilot",
    status: "not_applied",
    commission: "TBD",
    program: "github.com/sponsors",
    notes: "No standard affiliate program. Link directly.",
  },
  {
    slug: "runway-ml",
    name: "Runway ML",
    directUrl: "https://runwayml.com",
    affiliateUrl: "https://runwayml.com", // Replace when approved
    status: "not_applied",
    commission: "TBD",
    program: "runwayml.com/affiliates",
    notes: "Apply when you have video content audience.",
  },
  {
    slug: "grammarly",
    name: "Grammarly",
    directUrl: "https://grammarly.com",
    affiliateUrl: "https://grammarly.com", // Replace when approved
    status: "not_applied",
    commission: "$0.20 per free + $20 per paid",
    program: "grammarly.com/affiliates",
    notes: "High volume program. Easy approval. Apply now.",
  },
  {
    slug: "otter-ai",
    name: "Otter.ai",
    directUrl: "https://otter.ai",
    affiliateUrl: "https://otter.ai", // Replace when approved
    status: "not_applied",
    commission: "TBD",
    program: "otter.ai/affiliates",
    notes: "Great for student audience. Apply now.",
  },
  {
    slug: "descript",
    name: "Descript",
    directUrl: "https://descript.com",
    affiliateUrl: "https://descript.com", // Replace when approved
    status: "not_applied",
    commission: "15% recurring",
    program: "descript.com/affiliates",
    notes: "Perfect for your video editor audience.",
  },
  {
    slug: "perplexity-ai",
    name: "Perplexity AI",
    directUrl: "https://perplexity.ai",
    affiliateUrl: "https://perplexity.ai",
    status: "not_applied",
    commission: "TBD",
    program: "perplexity.ai/affiliates",
    notes: "Check for affiliate program updates.",
  },
  {
    slug: "adobe-firefly",
    name: "Adobe Firefly",
    directUrl: "https://firefly.adobe.com",
    affiliateUrl: "https://firefly.adobe.com", // Replace when approved
    status: "not_applied",
    commission: "85% first month + 8.33% recurring",
    program: "adobe.com/affiliates",
    notes: "Adobe affiliate program pays very well. Apply now.",
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    directUrl: "https://copy.ai",
    affiliateUrl: "https://copy.ai", // Replace when approved
    status: "not_applied",
    commission: "TBD — program restructured",
    program: "copy.ai/affiliates",
    notes: "Program restructured in 2026. Check current status.",
  },
  {
    slug: "lumen5",
    name: "Lumen5",
    directUrl: "https://lumen5.com",
    affiliateUrl: "https://lumen5.com", // Replace when approved
    status: "not_applied",
    commission: "TBD",
    program: "lumen5.com/affiliates",
    notes: "Good for content repurposing audience.",
  },
  {
    slug: "jasper-ai",
    name: "Jasper AI",
    directUrl: "https://jasper.ai",
    affiliateUrl: "https://jasper.ai", // Replace when approved
    status: "not_applied",
    commission: "TBD — program paused",
    program: "jasper.ai/affiliates",
    notes: "Program paused in 2026. Monitor for reopening.",
  },
  {
    slug: "murf-ai",
    name: "Murf AI",
    directUrl: "https://murf.ai",
    affiliateUrl: "https://murf.ai", // Replace when approved
    status: "not_applied",
    commission: "20% recurring",
    program: "murf.ai/affiliates",
    notes: "Good program. Apply when voice content audience grows.",
  },
  {
    slug: "tabnine",
    name: "Tabnine",
    directUrl: "https://tabnine.com",
    affiliateUrl: "https://tabnine.com", // Replace when approved
    status: "not_applied",
    commission: "TBD",
    program: "tabnine.com/affiliates",
    notes: "Good for developer audience.",
  },
  {
    slug: "stable-diffusion",
    name: "Stable Diffusion",
    directUrl: "https://stability.ai",
    affiliateUrl: "https://stability.ai",
    status: "not_applied",
    commission: "N/A — open source",
    program: "N/A",
    notes: "Open source — no affiliate program. Link directly.",
  },
  // ============================================================
  // PRIORITY PROGRAMS — APPLY FOR THESE FIRST
  // ============================================================
  // 1. Adobe affiliate — adobe.com/affiliates (85% first month!)
  // 2. Grammarly — grammarly.com/affiliates (easy approval)
  // 3. Writesonic — writesonic.com/affiliate (30% lifetime)
  // 4. NeuronWriter — neuronwriter.com/affiliate (30% forever)
  // 5. Pictory AI — pictory.ai/affiliates (30% recurring)
  // 6. Surfer SEO — surferseo.com/affiliate (25% recurring)
  // ============================================================
];

// Get affiliate URL for a tool — returns affiliate link if active,
// falls back to direct URL if pending or not applied
export function getAffiliateUrl(slug: string): string {
  const link = affiliateLinks.find((l) => l.slug === slug);
  if (!link) return "#";
  if (link.status === "active") return link.affiliateUrl;
  return link.directUrl;
}

// Get full affiliate data for a tool
export function getAffiliateData(slug: string): AffiliateLink | undefined {
  return affiliateLinks.find((l) => l.slug === slug);
}

// Get all active affiliate programs
export function getActiveAffiliates(): AffiliateLink[] {
  return affiliateLinks.filter((l) => l.status === "active");
}

// Get all programs you should apply for next
export function getPendingApplications(): AffiliateLink[] {
  return affiliateLinks.filter((l) => l.status === "not_applied");
}