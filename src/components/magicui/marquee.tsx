import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ 
  children, 
  className, 
  reverse, 
  pauseOnHover = false 
}) => {
  return (
    <div className={cn("relative flex w-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex min-w-full shrink-0 animate-marquee items-center justify-around gap-4",
          reverse && "animate-marquee-reverse",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 animate-marquee items-center justify-around gap-4",
          reverse && "animate-marquee-reverse",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Marquee; 