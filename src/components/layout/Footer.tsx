import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.author.name}
        </p>
        <div className="flex items-center gap-4">
          {Object.entries(siteConfig.social).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground capitalize transition-colors hover:text-foreground"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
