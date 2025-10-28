import { ReactNode } from "react";

interface CenteredContentProps {
  children: ReactNode;
  className?: string;
}

const CenteredContent = ({ children, className = "" }: CenteredContentProps) => {
  return (
    <div className="article-grid-container">
      <div className={`article-content-centered ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default CenteredContent;
