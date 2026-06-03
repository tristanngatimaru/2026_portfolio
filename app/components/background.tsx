import Image, { StaticImageData } from "next/image";

export interface BackgroundLayer {
  image: StaticImageData;
  duration?: number; // seconds
}

const COPIES = 8; // how many copies to fill the viewport seamlessly

interface InfiniteScrollRowProps {
  image: StaticImageData;
  duration?: number; // seconds
}

export function InfiniteScrollRow({
  image,
  duration = 19,
}: InfiniteScrollRowProps) {
  const aspectRatio = image.width / image.height;
  const tiles = Array.from({ length: COPIES }, (_, i) => i);
  return (
    <div className="overflow-hidden w-full h-full">
      <div
        className="flex h-full w-max"
        style={{ animation: `infinite-scroll ${duration}s linear infinite` }}
      >
        {tiles.map((i) => (
          <div
            key={`a-${i}`}
            className="relative h-full shrink-0"
            style={{ width: `calc(100vh * ${aspectRatio})` }}
          >
            <Image
              src={image}
              alt=""
              fill
              unoptimized
              className="object-cover"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
        ))}
        {tiles.map((i) => (
          <div
            key={`b-${i}`}
            className="relative h-full shrink-0"
            style={{ width: `calc(100vh * ${aspectRatio})` }}
          >
            <Image
              src={image}
              alt=""
              fill
              unoptimized
              className="object-cover"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

interface BackgroundProps {
  layers: BackgroundLayer[];
}

export default function Background({ layers }: BackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      {layers.map((layer, i) => (
        <div key={i} className="absolute inset-0">
          <InfiniteScrollRow image={layer.image} duration={layer.duration} />
        </div>
      ))}
    </div>
  );
}
