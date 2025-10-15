import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin } from "lucide-react";

interface BlogHeroProps {
  title: string;
  description: string;
}

const BlogHero = ({ title, description }: BlogHeroProps) => {
  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  ];

  return (
    <div className="mb-24 mt-12">
      {/* Title - Full Width */}
      <h1 className="font-display font-semibold text-foreground mb-12 text-[8rem] leading-[0.85] md:text-[16rem] lg:text-[20rem]">
        {title}
      </h1>

      {/* Description (Left) and Social Links (Right) */}
      <div className="flex items-start justify-between gap-12">
        <p className="flex-1 text-muted-foreground text-[1.8rem] md:text-[2.4rem] leading-relaxed max-w-[60ch]">
          {description}
        </p>

        <nav className="flex flex-col gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <link.icon className="w-6 h-6" />
              <span className="text-[1.8rem] font-medium">
                <span className="inline-block bg-current [background-image:linear-gradient(90deg,hsl(27_100%_55%)_0%,hsl(14_100%_57%)_46%,hsl(var(--foreground))_54%,hsl(var(--foreground))_100%)] bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent group-hover:bg-[position:0%_0] transition-[background-position] duration-[400ms]">
                  {link.label}
                </span>
              </span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default BlogHero;
