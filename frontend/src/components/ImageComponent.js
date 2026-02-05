"use client";

import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { ImageOff } from "lucide-react"; // Import an icon for missing image

const ImageComponent = ({
  imageName,
  className = "",
  altName = "",
  skeletonHeight = 200,
}) => {
  const [imageSrc, setImageSrc] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false); // New state to track error

  useEffect(() => {
    setHasError(false); // Reset error state on new imageName
    if (imageName && process.env.NEXT_PUBLIC_API_URL) {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL.replace("/api", "");
      setImageSrc(`${baseUrl}/uploads/${imageName}`);
      setIsLoading(true); // Start loading again for new image
    } else {
      setImageSrc("");
      setIsLoading(false); // No image to load
      setHasError(true); // Mark as error if no imageName
    }
  }, [imageName, process.env.NEXT_PUBLIC_API_URL]); // Add env var to dependency array

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
    setImageSrc(""); // Clear imageSrc so it doesn't try to load again
  };

  return (
    <div className={`relative ${className}`} style={{ minHeight: skeletonHeight }}> {/* Ensure a minimum height */}
      {isLoading && !hasError && <Skeleton height={skeletonHeight} width="100%" />}
      {imageSrc && !hasError && (
        <img
          src={imageSrc}
          alt={altName}
          className={`w-full h-full object-cover ${isLoading ? "hidden" : "block"}`} // Image is hidden while loading
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
      {hasError && !isLoading && ( // Display placeholder if there's an error or no image
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-500 rounded-lg">
          <ImageOff size={48} />
          <p className="mt-2 text-sm">Image Missing</p>
        </div>
      )}
    </div>
  );
};

export default ImageComponent;