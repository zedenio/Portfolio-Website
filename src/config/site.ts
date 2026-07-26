export const siteConfig = {
  name: "Portfolio",
  title: "Developer Portfolio",
  description: "Full-stack developer portfolio showcasing modern web experiences",
  url: "https://portfolio.dev",
  author: {
    name: "Your Name",
    email: "hello@portfolio.dev",
    role: "Full-Stack Developer",
    bio: "Crafting elegant digital experiences with modern technologies.",
  },
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
  navigation: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ] as const,
} as const;

export type SiteConfig = typeof siteConfig;
