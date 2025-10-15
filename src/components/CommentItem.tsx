import { useState } from "react";
import { Heart, MessageCircle, CheckCircle } from "lucide-react";
import { Comment } from "@/data/mockComments";
import { CommentComposer } from "./CommentComposer";
import { formatDistanceToNow } from "date-fns";

interface CommentItemProps {
  comment: Comment;
  isReply?: boolean;
}

export function CommentItem({ comment, isReply = false }: CommentItemProps) {
  const [isLiked, setIsLiked] = useState(comment.isLiked);
  const [likes, setLikes] = useState(comment.likes);
  const [showReplyComposer, setShowReplyComposer] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleReply = (content: string) => {
    console.log("Reply:", content);
    setShowReplyComposer(false);
  };

  const timeAgo = formatDistanceToNow(new Date(comment.timestamp), { addSuffix: true });

  return (
    <article className={`group ${isReply ? 'ml-[4rem] mt-4' : ''}`}>
      <div className="flex gap-3 p-4 rounded-lg transition-colors hover:bg-muted/30">
        <div className={`${isReply ? 'w-[3.2rem] h-[3.2rem]' : 'w-[4rem] h-[4rem]'} rounded-full overflow-hidden flex-shrink-0`}>
          <img 
            src={comment.author.avatar} 
            alt={comment.author.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-display font-semibold text-[1.6rem] text-foreground">
              {comment.author.name}
            </h4>
            {comment.author.isVerified && (
              <CheckCircle 
                className="w-[1.6rem] h-[1.6rem] flex-shrink-0"
                style={{ color: 'hsl(27 100% 55%)' }}
                fill="hsl(27 100% 55%)"
              />
            )}
            {comment.author.title && (
              <span className="font-sans text-[1.3rem] text-muted-foreground">
                · {comment.author.title}
              </span>
            )}
          </div>
          
          <time className="font-sans text-[1.3rem] text-muted-foreground block mb-2">
            {timeAgo}
          </time>
          
          <p className="font-sans text-[1.5rem] leading-relaxed text-foreground/90 mb-3">
            {comment.content}
          </p>
          
          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              className="flex items-center gap-1.5 font-sans text-[1.4rem] font-medium text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
            >
              <Heart 
                className={`w-[1.6rem] h-[1.6rem] transition-all duration-150 ${
                  isLiked ? 'fill-current scale-110' : ''
                }`}
                style={isLiked ? {
                  color: 'hsl(14 100% 57%)',
                } : {}}
              />
              <span>{likes}</span>
            </button>
            
            {!isReply && (
              <button
                onClick={() => setShowReplyComposer(!showReplyComposer)}
                className="flex items-center gap-1.5 font-sans text-[1.4rem] font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <MessageCircle className="w-[1.6rem] h-[1.6rem]" />
                <span>Reply</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {showReplyComposer && (
        <div className="ml-[4rem] mt-2">
          <CommentComposer
            onSubmit={handleReply}
            onCancel={() => setShowReplyComposer(false)}
            placeholder={`Reply to ${comment.author.name}...`}
            submitLabel="Post Reply"
            isReply
          />
        </div>
      )}
      
      {comment.replies && comment.replies.length > 0 && (
        <div className="border-l-2 border-border/50 ml-[2rem]">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} isReply />
          ))}
        </div>
      )}
    </article>
  );
}
