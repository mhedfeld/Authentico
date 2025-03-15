"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { LuxuryPattern } from '@/components/ui/luxury-pattern';

export function HeroSection() {
  // Array of image paths
  const images = [
    "/hero-image.png",
    "/hero-image-2.png",
    "/hero-image-3.png",
    // Add more image paths as needed
  ];
  
  // State to track current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Effect to rotate images every 7 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // 7 seconds
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to handle manual image change with type annotation
  const handleImageChange = (index: number): void => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative bg-gradient-to-r from-[#F8F5F0] to-white py-20 md:py-28 overflow-hidden">
      {/* Add the luxury pattern */}
      <LuxuryPattern opacity={5} />
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-[#C6AC8E]/10 blur-[100px]"></div>
        <div className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] rounded-full bg-[#5E503F]/10 blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-[#C6AC8E] rounded-full w-3 h-3"></div>
              <span className="text-sm font-medium text-[#5E503F]">For Handbags, Sneakers & Designer Products</span>
            </div>
            
            {/* Placeholder for 3D Text - we'll replace this with Spline */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#1A1A1A] mb-2">
                Fast & Reliable
              </h1>
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#C6AC8E]">
                Authentication
              </h1>
            </div>
            
            <p className="text-xl text-[#5E503F] mb-10 max-w-lg">
              Powered by expert authenticators and AI technology for unmatched accuracy and confidence.
            </p>
            
            {/* Elegant buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" className="bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] hover:from-[#5E503F] hover:to-[#C6AC8E] text-white border-0 h-14 px-8 text-lg rounded-xl shadow-lg group overflow-hidden">
                <span className="relative z-10">Download App</span>
                <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine"></div>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[#C6AC8E] bg-white text-[#5E503F] hover:bg-[#C6AC8E]/10 h-14 px-8 text-lg rounded-xl">
                Learn More
              </Button>
            </div>
            
            {/* Stats with light luxury style */}
            <div className="mt-12 flex items-center gap-6">
              <div className="bg-white shadow-md rounded-xl p-4 px-6 border border-[#E8E2D9]">
                <div className="text-3xl font-bold text-[#C6AC8E]">4.9</div>
                <div className="text-sm text-[#5E503F]">App Store Rating</div>
              </div>
              <div className="bg-white shadow-md rounded-xl p-4 px-6 border border-[#E8E2D9]">
                <div className="text-3xl font-bold text-[#C6AC8E]">1.8M+</div>
                <div className="text-sm text-[#5E503F]">Users</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] md:h-[600px]">
            {/* Phone mockup with elegant effect */}
            <div className="absolute inset-0 bg-white shadow-xl rounded-3xl border border-[#E8E2D9] overflow-hidden">
              <div className="absolute inset-2 rounded-2xl overflow-hidden">
                {/* Image carousel with fade transition */}
                {images.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`Authentico Authentication on smartphone ${index + 1}`}
                    fill
                    className="object-cover transition-opacity duration-1000"
                    style={{ 
                      opacity: currentImageIndex === index ? 1 : 0,
                      zIndex: currentImageIndex === index ? 10 : 0 
                    }}
                    priority={index === 0}
                  />
                ))}
              </div>
            </div>
            
            {/* Image indicators/dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#E8E2D9] shadow-md">
                <div className="flex space-x-3">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageChange(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentImageIndex === index 
                          ? 'bg-[#C6AC8E] scale-125' 
                          : 'bg-[#E8E2D9] hover:bg-[#D6CAB9]'
                      }`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating badges/elements */}
            <div className="absolute top-10 -right-10 bg-white backdrop-blur-md rounded-xl p-3 border border-[#E8E2D9] shadow-lg rotate-6">
              <div className="text-sm font-bold text-green-600">AUTHENTIC</div>
            </div>
            <div className="absolute bottom-20 -left-10 bg-white backdrop-blur-md rounded-xl p-3 border border-[#E8E2D9] shadow-lg -rotate-6">
              <div className="text-sm font-bold text-red-600">REPLICA</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add shine animation if not already in your global styles */}
      <style jsx global>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        
        .animate-shine {
          animation: shine 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
