export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SectionProps {
  className?: string;
}
