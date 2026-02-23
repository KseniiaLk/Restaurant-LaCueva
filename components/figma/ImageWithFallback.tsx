"use client";

import * as React from "react";

import { cn } from "../ui/utils";

const defaultFallback =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'>" +
      "<rect width='800' height='600' fill='#E8DFD5' />" +
      "<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#7A5C44' font-family='Arial, sans-serif' font-size='24'>" +
      "Image unavailable" +
      "</text>" +
      "</svg>",
  );

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = defaultFallback,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <img
      {...props}
      src={hasError ? fallbackSrc : src}
      alt={alt}
      className={cn("block", className)}
      onError={() => setHasError(true)}
    />
  );
}
