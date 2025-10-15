import { Clock, MessageCircle, Eye, Share2 } from "lucide-react";

interface CommentStatsProps {
  readTime: string;
  commentCount: number;
  viewCount: string;
  shareCount: number;
}

export function CommentStats({ readTime, commentCount, viewCount, shareCount }: CommentStatsProps) {
  return (
    <div className="flex flex-wrap items-center gap-6 md:gap-8 text-muted-foreground font-sans text-[1.4rem] mb-8 pb-6 border-b border-border">
      <div className="flex items-center gap-2">
        <Clock className="w-[1.6rem] h-[1.6rem]" />
        <span>{readTime} read</span>
      </div>
      <div className="flex items-center gap-2">
        <MessageCircle className="w-[1.6rem] h-[1.6rem]" />
        <span>{commentCount} comments</span>
      </div>
      <div className="flex items-center gap-2">
        <Eye className="w-[1.6rem] h-[1.6rem]" />
        <span>{viewCount} views</span>
      </div>
      <div className="flex items-center gap-2">
        <Share2 className="w-[1.6rem] h-[1.6rem]" />
        <span>{shareCount} shares</span>
      </div>
    </div>
  );
}
