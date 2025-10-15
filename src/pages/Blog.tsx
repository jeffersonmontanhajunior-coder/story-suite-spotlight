import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import ArticlePreview from "@/components/ArticlePreview";
import BlogHero from "@/components/BlogHero";
import WavyBackground from "@/components/WavyBackground";
import blog1 from "@/assets/blog-1.avif";
import blog2 from "@/assets/blog-2.avif";
import blog3 from "@/assets/blog-3.avif";
import blog4 from "@/assets/blog-4.avif";
import blog5 from "@/assets/blog-5.avif";
import blog6 from "@/assets/blog-6.avif";
import blog7 from "@/assets/blog-7.avif";
import blog8 from "@/assets/blog-8.avif";
import blog9 from "@/assets/blog-9.avif";
import blog10 from "@/assets/blog-10.avif";

const Blog = () => {
  const articlesRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }, // Changed from 0.5 to 0.1 - triggers earlier
    );

    articlesRef.current.forEach((article) => {
      if (article) observer.observe(article);
    });

    return () => observer.disconnect();
  }, []);

  const allArticles = [
    {
      title: "Editorial Elegance",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop",
      publishDate: "March 15, 2024",
      slug: "editorial-elegance",
    },
    {
      title: "Urban Runway",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop",
      publishDate: "March 12, 2024",
      slug: "urban-runway",
    },
    {
      title: "Beauty in Motion",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop",
      publishDate: "March 8, 2024",
      slug: "beauty-in-motion",
    },
    {
      title: "Backstage Stories",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop",
      publishDate: "March 5, 2024",
      slug: "backstage-stories",
    },
    {
      title: "Portrait Sessions",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop",
      publishDate: "March 1, 2024",
      slug: "portrait-sessions",
    },
    {
      title: "Campaign Work",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop",
      publishDate: "February 28, 2024",
      slug: "campaign-work",
    },
    {
      title: "Black & White Classics",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop",
      publishDate: "February 24, 2024",
      slug: "black-white-classics",
    },
    {
      title: "Color Theory",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&auto=format&fit=crop",
      publishDate: "February 20, 2024",
      slug: "color-theory",
    },
    {
      title: "Minimalist Aesthetic",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop",
      publishDate: "February 16, 2024",
      slug: "minimalist-aesthetic",
    },
    {
      title: "Avant-Garde Vision",
      image: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=800&auto=format&fit=crop",
      publishDate: "February 12, 2024",
      slug: "avant-garde-vision",
    },
    {
      title: "Golden Hour Shoots",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea1c8ba5?w=800&auto=format&fit=crop",
      publishDate: "February 8, 2024",
      slug: "golden-hour-shoots",
    },
    {
      title: "Studio Classics",
      image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&auto=format&fit=crop",
      publishDate: "February 5, 2024",
      slug: "studio-classics",
    },
    {
      title: "Accessory Focus",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop",
      publishDate: "February 1, 2024",
      slug: "accessory-focus",
    },
    {
      title: "Movement & Flow",
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop",
      publishDate: "January 28, 2024",
      slug: "movement-flow",
    },
    {
      title: "Cultural Fusion",
      image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800&auto=format&fit=crop",
      publishDate: "January 24, 2024",
      slug: "cultural-fusion",
    },
    {
      title: "Sustainable Style",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop",
      publishDate: "January 20, 2024",
      slug: "sustainable-style",
    },
    {
      title: "Night Sessions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
      publishDate: "January 16, 2024",
      slug: "night-sessions",
    },
    {
      title: "Candid Moments",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop",
      publishDate: "January 12, 2024",
      slug: "candid-moments",
    },
    {
      title: "Textile Stories",
      image: "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?w=800&auto=format&fit=crop",
      publishDate: "January 8, 2024",
      slug: "textile-stories",
    },
    {
      title: "New Faces",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop",
      publishDate: "January 5, 2024",
      slug: "new-faces",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <WavyBackground />
      <Header />

      <Section>
        <BlogHero
          title="BLOG"
          description="Voyager Press is a modern travel and lifestyle newsroom that showcases inspiring stories, destination features, and travel industry updates."
        />
      </Section>

      {/* More Articles Section */}
      <Section>
        <div className="grid list-none gap-x-16 gap-y-24 py-8 text-left sm:grid-cols-2">
          {allArticles.map((article, index) => (
            <div
              key={index}
              ref={(el) => (articlesRef.current[index] = el)}
              className="blog-feed__item"
              style={{
                animationDelay: `${(index % 2) * 150}ms`,
              }}
            >
              <ArticlePreview
                title={article.title}
                slug={article.slug}
                image={article.image}
                imageAlt={article.title}
                publishDate={article.publishDate}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="mx-auto py-12" style={{ maxWidth: "86.25rem", padding: "2rem calc(18vw - 10rem)" }}>
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Fashion Photography. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
