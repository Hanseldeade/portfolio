import React from "react";
import Marquee from "./marquee";
import { cn } from "@/lib/utils";

interface ArtworkCardProps {
  image: string;
}

const MarqueeComponent: React.FC = () => {
  const artworks = [
    { id: 1, image: "/projects/Art/Art 1.png" },
    { id: 2, image: "/projects/Art/Art 2.png" },
    { id: 3, image: "/projects/Art/Art 3.png" },
    { id: 4, image: "/projects/Art/Art 4.png" },
    { id: 5, image: "/projects/Art/Art 5.png" },
    { id: 6, image: "/projects/Art/Art 6.png" },
    { id: 7, image: "/projects/Art/Art 7.png" },
  ];

  // Split artworks into two rows for alternating directions
  const firstRow = artworks.slice(0, 4);
  const secondRow = artworks.slice(4);

  const ArtworkCard: React.FC<ArtworkCardProps> = ({ image }) => {
    return (
      <div
        className={cn(
          "relative mx-4 h-64 w-64 cursor-pointer overflow-hidden rounded-xl border",
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
          "transition-all duration-300 hover:scale-105"
        )}
      >
        <img
          src={image}
          alt="Artwork"
          className="h-full w-full object-cover"
        />
      </div>
    );
  };

  return (
    <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-8 overflow-hidden bg-background py-8">
      <Marquee pauseOnHover>
        {firstRow.map((artwork) => (
          <ArtworkCard key={`first-${artwork.id}`} {...artwork} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover>
        {secondRow.map((artwork) => (
          <ArtworkCard key={`second-${artwork.id}`} {...artwork} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent"></div>
    </div>
  );
};

export default MarqueeComponent; 