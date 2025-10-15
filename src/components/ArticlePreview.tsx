interface ArticlePreviewProps {
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  publishDate: string;
  description?: string;
  category?: string;
  className?: string;
}

export default function ArticlePreview({
  title,
  slug,
  image,
  imageAlt,
  publishDate,
  description,
  category,
  className = "",
}: ArticlePreviewProps) {
  return (
    <article className={`relative flex flex-col ${className}`}>
      <figure className="relative order-[-1] mb-[2rem] pb-[100%] rounded-[0.6rem] overflow-hidden bg-muted group/image">
        <a href="/article/editorial-elegance" title={imageAlt}>
          <img 
            alt={imageAlt} 
            src={image} 
            className="absolute w-full h-full rounded-[0.6rem] object-cover transition-transform duration-500 ease-out group-hover/image:scale-105" 
          />
        </a>
      </figure>

      <div className="flex items-center gap-3 order-[-1] mb-[0.8rem]">
        {category && (
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[1.1rem] font-sans font-medium uppercase tracking-wide">
            {category}
          </span>
        )}
        <time className="uppercase text-muted-foreground text-[1.2rem] font-sans">
          {publishDate}
        </time>
      </div>

      <h3 className="mt-[0.3rem] text-[2.2rem] md:text-[2.7rem] leading-[1.4] font-display font-semibold tracking-[-0.02em]">
        <a
          href="/article/editorial-elegance"
          className="inline-block transition-colors duration-300 text-foreground hover:text-primary"
        >
          {title}
        </a>
      </h3>

      {description && (
        <p className="mt-3 font-sans text-[1.5rem] leading-relaxed text-muted-foreground italic">
          {description}
        </p>
      )}
    </article>
  );
}
