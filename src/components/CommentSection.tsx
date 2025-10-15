import { useState } from "react";
import { mockComments } from "@/data/mockComments";
import { CommentItem } from "./CommentItem";
import { CommentComposer } from "./CommentComposer";
import { Button } from "./ui/button";

interface CommentSectionProps {
  articleId: string;
}

export function CommentSection({ articleId }: CommentSectionProps) {
  const [comments] = useState(mockComments);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'popular'>('newest');
  const [visibleCount, setVisibleCount] = useState(5);

  const handleNewComment = (content: string) => {
    console.log("New comment:", content, "for article:", articleId);
  };

  const sortedComments = [...comments].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      case 'oldest':
        return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
      case 'popular':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const visibleComments = sortedComments.slice(0, visibleCount);
  const hasMore = visibleCount < comments.length;

  return (
    <section className="mt-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-display font-semibold text-[3.2rem] md:text-[4rem] text-foreground">
          Thoughts & Reflections
          <span className="text-muted-foreground ml-3">({comments.length})</span>
        </h2>
        
        <div className="flex gap-2">
          <button
            onClick={() => setSortBy('newest')}
            className={`px-4 py-2 rounded-md font-sans text-[1.4rem] font-medium transition-colors ${
              sortBy === 'newest' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Newest
          </button>
          <button
            onClick={() => setSortBy('popular')}
            className={`px-4 py-2 rounded-md font-sans text-[1.4rem] font-medium transition-colors ${
              sortBy === 'popular' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Popular
          </button>
          <button
            onClick={() => setSortBy('oldest')}
            className={`px-4 py-2 rounded-md font-sans text-[1.4rem] font-medium transition-colors ${
              sortBy === 'oldest' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Oldest
          </button>
        </div>
      </div>

      {/* Comment Composer */}
      <div className="mb-12">
        <CommentComposer onSubmit={handleNewComment} />
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {visibleComments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="mt-8 text-center">
          <Button
            variant="outline"
            onClick={() => setVisibleCount(visibleCount + 5)}
            className="font-sans text-[1.5rem] px-8 py-6"
          >
            Load More Comments
          </Button>
        </div>
      )}
    </section>
  );
}
