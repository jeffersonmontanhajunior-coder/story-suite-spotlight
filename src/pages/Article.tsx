import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import {
  Article as ArticleWrapper,
  ArticleHeader,
  ArticleHero,
  ArticleContainer,
  ArticleContent,
  TopShares,
} from "@/components/ArticleComponents";
import ArticlePreview from "@/components/ArticlePreview";
import { CommentSection } from "@/components/CommentSection";
import { CommentStats } from "@/components/CommentStats";
import desertDreams from "@/assets/desert-dreams.jpg";
const malmo01 = "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&auto=format&fit=crop&q=80";
const malmo02 = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&auto=format&fit=crop&q=80";
const malmo03 = "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1200&auto=format&fit=crop&q=80";
const malmo11 = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&auto=format&fit=crop&q=80";
const malmo13 = "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=1200&auto=format&fit=crop&q=80";
const malmo16 = "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&auto=format&fit=crop&q=80";
const malmo17 = "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&auto=format&fit=crop&q=80";

// Related articles images
const malmo04 = "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=1200&auto=format&fit=crop&q=80";
const malmo05 = "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&auto=format&fit=crop&q=80";
const malmo12 = "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&auto=format&fit=crop&q=80";

// Author avatar
import authorMarcus from "@/assets/author-marcus.jpg";

const Article = () => {
  const relatedArticles = [
    {
      title: "Editorial Elegance",
      description:
        "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
      image: malmo04,
      tag: "Editorial",
      slug: "editorial-elegance",
    },
    {
      title: "Urban Runway",
      description:
        "Street style meets high fashion in downtown Manhattan. Spontaneous moments of style captured in natural light.",
      image: malmo05,
      tag: "Portrait",
      slug: "urban-runway",
    },
    {
      title: "Beauty in Motion",
      description:
        "Exploring fluidity and grace through beauty editorial work. Shot on medium format film for timeless quality.",
      image: malmo12,
      tag: "Beauty",
      slug: "beauty-in-motion",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <ArticleWrapper>
        {/* Title-Dominant Hero Section */}
        <section className="relative px-4 md:px-[calc(18vw-10rem)] py-20">
          {/* Back Button - Floating Top Left */}
          <div className="absolute top-8 left-4 md:left-[calc(18vw-10rem)] z-20">
            <Link
              to="/blog"
              className="inline-flex items-center text-[1.4rem] font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Back
            </Link>
          </div>

          {/* Date - Top Right */}
          <div className="absolute top-8 right-4 md:right-[calc(18vw-10rem)] z-20">
            <time className="block text-muted-foreground text-[1.4rem] font-sans tracking-wide">March 15, 2024</time>
          </div>

          {/* Main Content Container */}
          <div className="relative w-full max-w-[140rem] mx-auto mt-20">
            {/* Massive Title */}
            <h1 className="font-display font-bold text-[8rem] md:text-[12rem] lg:text-[18rem] xl:text-[24rem] leading-[0.9] tracking-[-0.03em] mb-12">
              <span className="block">EDITORIAL</span>
              <span className="block">ELEGANCE</span>
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-[1.8rem] md:text-[2.2rem] text-muted-foreground max-w-[50rem] mb-8 leading-relaxed">
              A Study in Minimalist Fashion
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-[5rem] h-[5rem] rounded-full overflow-hidden">
                <img src={authorMarcus} alt="Sofia Andersson" className="w-full h-full object-cover" />
              </div>
              <div className="font-sans">
                <p className="text-[1.6rem] font-semibold text-foreground">Sofia Andersson</p>
                <p className="text-[1.4rem] text-muted-foreground">Fashion Photographer</p>
              </div>
            </div>

            {/* Hero Image - Full Width */}
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden">
              <img src={desertDreams} alt="Editorial fashion photography" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <ArticleContainer>
          <TopShares
            facebookUrl="https://www.facebook.com/sharer/sharer.php?u=https://example.com/article"
            twitterUrl="https://twitter.com/intent/tweet?url=https://example.com/article"
            linkedinUrl="https://www.linkedin.com/shareArticle?url=https://example.com/article"
          />
          <ArticleContent>
            <p>
              Fashion photography is more than capturing clothing—it's about distilling a moment of beauty into its
              purest visual form. During Milan Fashion Week, I had the privilege of shooting an editorial that explored
              the intersection of haute couture and architectural minimalism, where every line, shadow, and gesture
              carried intention.
            </p>

            <p>
              The concept was deceptively simple: monochromatic sophistication set against clean, geometric backdrops.
              But simplicity in fashion photography is never simple. It requires stripping away everything extraneous
              until only the essential remains—the fall of fabric, the angle of light, the model's quiet confidence.
            </p>

            <p>
              This editorial wasn't just about the clothes. It was a meditation on restraint, on the power of negative
              space, and on how fashion can transcend trends to become timeless. Each frame was carefully composed to
              honor both the designer's vision and the inherent grace of the human form.
            </p>

            <h2>The Language of Light and Form</h2>

            <p>
              Fashion photography lives and dies by light. In this shoot, I chose to work exclusively with natural light
              filtering through floor-to-ceiling windows. The soft, diffused quality created a luminous atmosphere that
              felt both ethereal and grounded—perfect for highlighting the architectural quality of the garments.
            </p>

            <figure className="my-12">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-muted">
                <img src={malmo01} alt="Minimalist fashion editorial" className="w-full h-full object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-center text-muted-foreground">
                Natural light transforms fabric into sculpture
              </figcaption>
            </figure>

            <p>
              The garments themselves were masterclasses in construction—clean lines, precise tailoring, fabrics that
              moved with deliberate grace. My job was to capture not just how they looked, but how they felt. The weight
              of silk, the structure of wool, the fluidity of movement.
            </p>

            <h2>Composition as Storytelling</h2>

            <p>
              Every photograph tells a story, even when that story is whispered rather than shouted. In editorial work,
              composition becomes the narrative structure. Where the model stands, how they hold themselves, the
              relationship between figure and space—all of these choices communicate meaning.
            </p>

            <figure className="my-12">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                <img src={malmo02} alt="Portrait with geometric background" className="w-full h-full object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-center text-muted-foreground">
                Geometric precision meets organic beauty
              </figcaption>
            </figure>

            <p>
              For this series, I embraced negative space as an active element of composition. The empty areas weren't
              voids—they were breathing room, allowing the eye to rest and appreciate the intentionality of every
              element within the frame. Less became exponentially more.
            </p>

            <figure className="my-12">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-muted">
                <img src={malmo03} alt="Fashion detail shot" className="w-full h-full object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-center text-muted-foreground">
                The poetry of simplicity
              </figcaption>
            </figure>

            <figure className="blockquote-big">
              <blockquote>
                "Fashion photography is the art of making people stop and look at what they might otherwise walk past."
              </blockquote>
              <figcaption>Irving Penn, Photographer</figcaption>
            </figure>

            <h2>The Model as Collaborator</h2>

            <p>
              Great fashion photography is always a collaboration. The model isn't simply a mannequin—they're an
              interpreter, bringing their own understanding and emotion to each pose. Working with experienced editorial
              models means working with artists who understand the subtle language of gesture and expression.
            </p>

            <figure className="my-12">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-muted">
                <img src={malmo11} alt="Model in elegant pose" className="w-full h-full object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-center text-muted-foreground">
                Quiet confidence speaks louder than drama
              </figcaption>
            </figure>

            <p>
              In this shoot, we worked in near silence, communicating through glances and subtle adjustments. The best
              moments came not from direction, but from allowing space for intuition. When a model truly inhabits a
              garment, magic happens—and the photographer's job is simply to be ready to capture it.
            </p>

            <h2>Monochrome as Palette</h2>

            <p>
              Color can be powerful, but it can also be a distraction. For this editorial, we committed to a
              monochromatic palette—blacks, whites, grays, and the occasional hint of cream. This restriction forced us
              to focus on form, texture, and the interplay of light and shadow.
            </p>

            <figure className="my-12">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                <img src={malmo13} alt="Monochromatic fashion shot" className="w-full h-full object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-center text-muted-foreground">
                Monochrome reveals what color conceals
              </figcaption>
            </figure>

            <p>
              Without the anchoring effect of color, the eye travels differently across an image. It notices the fall of
              fabric, the architecture of a silhouette, the quality of light on skin. Monochrome photography strips
              fashion to its essence—line, proportion, and presence.
            </p>

            <figure className="my-12">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-muted">
                <img src={malmo16} alt="Architectural fashion photography" className="w-full h-full object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-center text-muted-foreground">
                When fashion becomes architecture
              </figcaption>
            </figure>

            <figure className="my-8">
              <blockquote className="italic text-lg border-l-4 border-primary pl-6 my-6">
                "I photograph fashion as if it were sculpture—something to be studied from every angle, understood in
                three dimensions, appreciated for its form."
              </blockquote>
              <figcaption className="text-sm text-muted-foreground pl-6">— Sofia Andersson</figcaption>
            </figure>

            <h2>The Technical Dance</h2>

            <p>
              Behind every seemingly effortless fashion photograph is a complex technical dance. Camera settings,
              lighting ratios, lens choice—each decision affects the final image in ways both subtle and profound. For
              this shoot, I worked primarily with a medium format camera and a 80mm lens, creating a compression that
              emphasized the graphic quality of the compositions.
            </p>

            <figure className="my-12">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-muted">
                <img src={malmo17} alt="Detail of fashion garment" className="w-full h-full object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-center text-muted-foreground">
                Precision in every detail
              </figcaption>
            </figure>

            <p>
              But technique is only a tool. The real art is knowing when to break the rules, when to embrace
              imperfection, when to let instinct override calculation. Fashion photography taught me that perfection is
              often less interesting than the beautiful accident, the unexpected moment that could never be planned.
            </p>

            <p>
              As I continue to explore fashion photography, I'm drawn to work that feels both contemporary and timeless.
              Trends fade, but great imagery endures. This editorial was an attempt to create something that would feel
              just as relevant a decade from now—a study in elegance that transcends the moment of its creation.
            </p>

            <p>
              The camera is my tool, but fashion is my language. Through it, I explore beauty, identity, and the endless
              possibilities of visual storytelling. Each shoot is a new chapter, a fresh exploration of what it means to
              capture not just clothing, but the essence of style itself.
            </p>
          </ArticleContent>
        </ArticleContainer>

        {/* Comment Section */}
        <section className="border-t border-border mt-24 pt-16">
          <ArticleContainer>
            <CommentStats readTime="8 min" commentCount={34} viewCount="2.4k" shareCount={89} />
            <CommentSection articleId="editorial-elegance" />
          </ArticleContainer>
        </section>
      </ArticleWrapper>

      {/* Related Articles */}
      <section className="box-content max-w-[138rem] px-[1.5rem] md:px-[calc(18vw-10rem)] mx-auto mt-[3rem] md:mt-[6rem] lg:mt-[9rem] mb-[3rem] md:mb-[6rem] lg:mb-[9rem]">
        <h2 className="text-[3.6rem] md:text-[4.8rem] font-display font-bold mb-12">Related Articles</h2>
        <div className="grid list-none gap-x-16 gap-y-24 text-left sm:grid-cols-2 w-full">
          {relatedArticles.map((article) => (
            <ArticlePreview
              key={article.slug}
              title={article.title}
              slug={article.slug}
              image={article.image}
              imageAlt={article.title}
              publishDate="Recent"
              category={article.tag}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="mx-auto py-12" style={{ maxWidth: "86.25rem", padding: "2rem calc(18vw - 10rem)" }}>
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Fashion Photography. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Article;
