import React from "react";
import { cn } from "@/lib/utils";

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: string | string[];
  className?: string;
  children: React.ReactNode;
}

/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 * @param borderRadius defines the radius of the border.
 * @param borderWidth defines the width of the border.
 * @param duration defines the animation duration to be applied on the shining border
 * @param color a string or string array to define border color.
 * @param className defines the class name to be applied to the component
 * @param children contains react node elements.
 */
const ShineBorder: React.FC<ShineBorderProps> = ({
  borderRadius = 8,
  borderWidth = 3,
  duration = 14,
  color = "#000000",
  className,
  children,
}) => {
  const gradientColor = Array.isArray(color) ? color.join(",") : color;

  return (
    <div
      style={{
        "--border-radius": `${borderRadius}px`,
      } as React.CSSProperties}
      className={cn(
        "relative grid w-full place-items-center rounded-[--border-radius] bg-transparent",
        className
      )}
    >
      <div
        style={{
          "--border-width": `${borderWidth}px`,
          "--border-radius": `${borderRadius}px`,
          "--shine-pulse-duration": `${duration}s`,
          "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          "--background-radial-gradient": `radial-gradient(transparent,transparent, ${gradientColor},transparent,transparent)`,
        } as React.CSSProperties}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 rounded-[--border-radius] p-[--border-width] [background-image:--background-radial-gradient] [background-size:300%_300%] [mask:--mask-linear-gradient] [mask-composite:exclude] motion-safe:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]" />
      </div>
      {children}
    </div>
  );
};

export default ShineBorder; 