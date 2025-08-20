'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface CharacterImageProps {
  src?: string;
  alt: string;
  className?: string;
}

const CharacterImage: React.FC<CharacterImageProps> = ({ src, alt, className = '' }) => {
  const [imageError, setImageError] = useState(false);

  // If no image source is provided or there was an error loading the image, show a placeholder
  if (!src || imageError) {
    return (
      <div className={`bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">{alt} Image</span>
      </div>
    );
  }

  // Try to load the actual image, fallback to placeholder if it doesn't exist
  return (
    <div className={`relative overflow-hidden rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${className}`}>
      <Image 
        src={src} 
        alt={alt} 
        fill
        className="object-cover rounded-lg"
        onError={() => setImageError(true)}
      />
    </div>
  );
};

export default CharacterImage;