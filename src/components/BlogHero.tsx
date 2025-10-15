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
      <h1 className="font-display font-semibold text-foreground mb-12 fluid-title">
        {title}
      </h1>

      <p className="flex-1 text-muted-foreground text-[1.8rem] md:text-[2.4rem] leading-relaxed max-w-[60ch]">
        {description}
      </p>
    </div>
  );
};

export default BlogHero;
