import { useState, useEffect } from "react";

interface ProgressiveImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholderSrc?: string;
}

export const ProgressiveImg = ({
  src,
  placeholderSrc = "/placeholder.svg",
  className,
  alt = "",
  ...props
}: ProgressiveImgProps) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src || "";
    img.onload = () => {
      setImgSrc(src || "");
      setIsLoading(false);
    };
  }, [src]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${isLoading ? "opacity-50" : "opacity-100"} ${className}`}
      loading="lazy"
      {...props}
    />
  );
};