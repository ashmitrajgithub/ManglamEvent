import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all crawlers including AI bots
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // OpenAI — ChatGPT search & ChatGPT browsing
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      // Google — Gemini training & AI Overviews
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      // Perplexity AI
      { userAgent: "PerplexityBot", allow: "/" },
      // Anthropic — Claude AI
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      // Bing / Microsoft Copilot
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "msnbot", allow: "/" },
      // Common Crawl (used by many AI models for training)
      { userAgent: "CCBot", allow: "/" },
      // Meta AI
      { userAgent: "FacebookBot", allow: "/" },
      // Apple
      { userAgent: "Applebot", allow: "/" },
    ],
    sitemap: "https://manglamevents.in/sitemap.xml",
    host: "https://manglamevents.in",
  }
}
