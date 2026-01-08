"use client";

import Image from "next/image";
import { Carousel } from "antd";
import Container from "./Container";
import H1 from "./H1";

export default function BannerCarousel({
  images = [],
  title = "",
  subtitle = "",
  autoplay = true,
  arrows = true,
  dots = true,
  dotPlacement = "bottom",
  height = "70vh",
}) {
  if (!Array.isArray(images) || images.length === 0) return null;

  return (
    <div className="w-full">
      <Carousel
        autoplay={autoplay}
        arrows={arrows}
        dots={dots}
        dotPosition={dotPlacement}
      >
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-[80vh]">
            <Image
              src={`http://localhost:8001/storage/${img}`}
              alt={title}
              fill
              priority={index === 0}
              className="object-cover w-full h-full"
            />

            {(title || subtitle) && (
              <Container>
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
                {title && (
                  <H1 className="text-white font-bold">
                    {title}
                  </H1>
                )}
                {subtitle && (
                  <p className="mt-4 text-white text-lg md:text-2xl max-w-3xl">
                    {subtitle}
                  </p>
                )}
              </div>
              </Container>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
