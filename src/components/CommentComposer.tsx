import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface CommentComposerProps {
  onSubmit: (content: string) => void;
  onCancel?: () => void;
  placeholder?: string;
  submitLabel?: string;
  isReply?: boolean;
}

export function CommentComposer({
  onSubmit,
  onCancel,
  placeholder = "Share your thoughts on this piece...",
  submitLabel = "Publish Comment",
  isReply = false,
}: CommentComposerProps) {
  const [content, setContent] = useState("");
  const maxChars = 500;

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content);
      setContent("");
    }
  };

  const charsRemaining = maxChars - content.length;
  const isOverLimit = charsRemaining < 0;

  return (
    <div className={`rounded-lg border border-input bg-background p-4 ${isReply ? 'mt-4' : ''}`}>
      <div className="flex gap-3">
        <div className="w-[4rem] h-[4rem] rounded-full overflow-hidden flex-shrink-0 bg-muted">
          <img 
            src="https://i.pravatar.cc/150?img=70" 
            alt="Your avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={placeholder}
            className="min-h-[8rem] resize-none font-sans text-[1.5rem] border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <div className="flex items-center justify-between mt-3">
            <span 
              className={`font-sans text-[1.3rem] ${
                isOverLimit ? 'text-destructive' : 'text-muted-foreground'
              }`}
            >
              {charsRemaining} characters remaining
            </span>
            <div className="flex gap-2">
              {onCancel && (
                <Button
                  variant="ghost"
                  onClick={onCancel}
                  className="font-sans text-[1.4rem]"
                >
                  Cancel
                </Button>
              )}
              <Button
                onClick={handleSubmit}
                disabled={!content.trim() || isOverLimit}
                className="font-sans text-[1.4rem] font-medium"
              >
                {submitLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
