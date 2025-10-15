import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import ArticlePreview from "@/components/ArticlePreview";
import BlogHero from "@/components/BlogHero";
import WavyBackground from "@/components/WavyBackground";
import desertDreams from "@/assets/desert-dreams.jpg";
import vintageHighway from "@/assets/vintage-highway.jpg";
import lavenderFields from "@/assets/lavender-fields.jpg";
import coastalClassic from "@/assets/coastal-classic.jpg";
import storiesUnbound from "@/assets/stories-unbound.jpg";
import circularHorizons from "@/assets/circular-horizons.jpg";
import retroRevival from "@/assets/retro-revival.jpg";
import goldenSpheres from "@/assets/golden-spheres.jpg";
import azureAwakening from "@/assets/azure-awakening.jpg";
import minimalistVoyage from "@/assets/minimalist-voyage.jpg";

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
      title: "Desert Dreams",
      image: desertDreams,
      publishDate: "March 15, 2024",
      slug: "desert-dreams",
    },
    {
      title: "Vintage Highway",
      image: vintageHighway,
      publishDate: "March 12, 2024",
      slug: "vintage-highway",
    },
    {
      title: "Lavender Fields",
      image: lavenderFields,
      publishDate: "March 8, 2024",
      slug: "lavender-fields",
    },
    {
      title: "Coastal Classic",
      image: coastalClassic,
      publishDate: "March 5, 2024",
      slug: "coastal-classic",
    },
    {
      title: "Stories Unbound",
      image: storiesUnbound,
      publishDate: "March 1, 2024",
      slug: "stories-unbound",
    },
    {
      title: "Circular Horizons",
      image: circularHorizons,
      publishDate: "February 28, 2024",
      slug: "circular-horizons",
    },
    {
      title: "Retro Revival",
      image: retroRevival,
      publishDate: "February 24, 2024",
      slug: "retro-revival",
    },
    {
      title: "Golden Spheres",
      image: goldenSpheres,
      publishDate: "February 20, 2024",
      slug: "golden-spheres",
    },
    {
      title: "Azure Awakening",
      image: azureAwakening,
      publishDate: "February 16, 2024",
      slug: "azure-awakening",
    },
    {
      title: "Minimalist Voyage",
      image: minimalistVoyage,
      publishDate: "February 12, 2024",
      slug: "minimalist-voyage",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <WavyBackground />
      <Header />

      <Section>
        <BlogHero
          title="Voyager"
          description="Voyager Press is a modern travel and lifestyle newsroom that showcases inspiring stories, destination features, and travel industry updates."
        />
      </Section>

      {/* More Articles Section */}
      <Section>
        <div className="grid list-none gap-x-16 gap-y-24 py-8 text-left sm:grid-cols-2 w-full">
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
