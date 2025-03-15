"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export function CTASection() {
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Create a pulsing animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 1500);
      
      return () => clearTimeout(timeout);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F8F5F0] relative overflow-hidden">
      {/* Luxury pattern overlay */}
      <div className="absolute inset-0 bg-[url('/luxury-pattern-light.png')] bg-repeat opacity-5"></div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[100px] left-[100px] w-[600px] h-[600px] rounded-full bg-[#C6AC8E]/10 blur-[150px]"></div>
        <div className="absolute bottom-[100px] right-[100px] w-[500px] h-[500px] rounded-full bg-[#5E503F]/10 blur-[150px]"></div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/6 w-16 h-16 rounded-full border border-[#C6AC8E]/30 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/6 w-24 h-24 rounded-full border-2 border-[#C6AC8E]/20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full bg-[#C6AC8E]/10 animate-ping"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl border border-[#E8E2D9] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side - Content */}
            <div className="p-12 md:p-16 flex flex-col justify-center relative">
              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-[#C6AC8E]/20 rounded-br-[100px]"></div>
              
              <div className="relative">
                <div className="mb-6">
                  <div className="h-1 w-20 bg-gradient-to-r from-[#C6AC8E] to-[#5E503F]"></div>
                </div>
                
                <h3 className="text-[#C6AC8E] text-lg font-medium uppercase tracking-[0.25em] mb-4">
                  Experience Excellence
                </h3>
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                  Begin Your <span className="text-[#C6AC8E]">Authentico</span> Journey
                </h2>
                
                <p className="mt-4 text-xl text-[#5E503F] mb-10 leading-relaxed">
                  Elevate your authentication experience with our premium service. 
                  Download the app today and join our community of discerning collectors.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 mb-10">
                  <Link 
                    href="https://example.com/app-store"
                    className={`group relative overflow-hidden transition-all duration-500 ${isAnimating ? 'scale-105' : ''}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="bg-white border-2 border-[#C6AC8E] rounded-xl px-8 py-4 relative z-10 flex items-center justify-center gap-3 group-hover:border-transparent transition-all">
                      <svg className="w-8 h-8 text-[#C6AC8E] group-hover:text-white transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
                      </svg>
                      <div className="flex flex-col items-start">
                        <span className="text-xs text-[#5E503F] group-hover:text-white/80 transition-colors duration-500">Download on</span>
                        <span className="text-lg font-medium text-[#1A1A1A] group-hover:text-white transition-colors duration-500">App Store</span>
                      </div>
                    </div>
                    
                    {/* Shine effect on hover */}
                    <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
                  </Link>
                  
                  <Link 
                    href="https://example.com/play-store"
                    className="group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="bg-white border-2 border-[#C6AC8E] rounded-xl px-8 py-4 relative z-10 flex items-center justify-center gap-3 group-hover:border-transparent transition-all">
                      <svg className="w-8 h-8 text-[#C6AC8E] group-hover:text-white transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.423-.29.684v.065c0 .36.186.687.484.873.298.186.671.204.988.047l.065-.033 11.53-6.524c.409-.23.661-.662.661-1.12v-.078c0-.458-.252-.89-.661-1.12L4.856.927c-.317-.157-.69-.14-.988.047-.298.186-.484.513-.484.873v.065c0 .262.109.504.29.684z"></path>
                      </svg>
                      <div className="flex flex-col items-start">
                        <span className="text-xs text-[#5E503F] group-hover:text-white/80 transition-colors duration-500">Get it on</span>
                        <span className="text-lg font-medium text-[#1A1A1A] group-hover:text-white transition-colors duration-500">Google Play</span>
                      </div>
                    </div>
                    
                    {/* Shine effect on hover */}
                    <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
                  </Link>
                </div>
                
                {/* Trust badges */}
                <div className="flex flex-wrap justify-start items-center gap-6 mt-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#C6AC8E]/10 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-[#C6AC8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-[#5E503F]">Secure & Private</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#C6AC8E]/10 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-[#C6AC8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-[#5E503F]">24/7 Service</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#C6AC8E]/10 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-[#C6AC8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-[#5E503F]">Premium Experience</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="relative h-[400px] md:h-auto overflow-hidden">
              <Image
                src="/cta/cta-app-image.png" // Replace with your luxury product image
                alt="Authentico Premium Authentication"
                fill
                className="object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#C6AC8E]/30 to-transparent mix-blend-overlay"></div>
              
              {/* Floating badge */}
              <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-[#C6AC8E]/30 flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#C6AC8E] fill-[#C6AC8E]" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-xs font-medium text-[#1A1A1A]">4.9 App Store Rating</span>
              </div>
              
              {/* Animated download counter */}
              <div className={`absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg border border-[#C6AC8E]/30 transition-transform duration-700 ${isAnimating ? 'scale-110' : ''}`}>
                <p className="text-[#1A1A1A] font-bold text-xl">1.8M+</p>
                <p className="text-[#5E503F] text-sm">Satisfied Users</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-[#5E503F] font-medium text-xl">
            The World's Leading <span className="text-[#C6AC8E]">Authentication Solution</span>
          </p>
          
          {/* App store badges */}
          <div className="flex justify-center mt-8 space-x-6">
            <div className="opacity-60 hover:opacity-100 transition-opacity">
              <Image src="/badges/app-store.svg" alt="App Store" width={120} height={40} />
            </div>
            <div className="opacity-60 hover:opacity-100 transition-opacity">
              <Image src="/badges/google-play.svg" alt="Google Play" width={120} height={40} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Add shine animation to Tailwind config */}
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
    </section>
  );
}
