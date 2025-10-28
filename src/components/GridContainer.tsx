import { ReactNode } from "react";

interface GridContainerProps {
  children: ReactNode;
  className?: string;
}

interface GridWrapperProps {
  children: ReactNode;
  full?: boolean;
  className?: string;
}

/**
 * Grid Container - Main grid with 18/22/30 columns and responsive margins
 * Margins: 2rem (base) → 4.375rem (768px) → 6rem (1180px) → 8rem (1920px)
 */
export function GridContainer({
  children,
  className = "",
}: GridContainerProps) {
  return <div className={`grid-container ${className}`}>{children}</div>;
}

export function GridContent({ children, className }: GridContainerProps) {
  return <div className={`grid-content ${className}`}>{children}</div>;
}

/**
 * Grid Wrapper - Content wrapper with optional FULL modifier
 *
 * Default: Full width (1 / -1)
 * With full prop:
 *   - Base: cols 2-17 (16 columns)
 *   - Tablet (768px): cols 3-20 (18 columns)
 *   - Desktop (1180px): cols 3-28 (26 columns)
 */
export function GridWrapper({ children, className = "" }: GridWrapperProps) {
  return <div className={`grid-wrapper FULL ${className}`}>{children}</div>;
}
