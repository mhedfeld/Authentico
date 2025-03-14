"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function BrandsSection() {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Create subtle animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('brands-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsAnimating(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const brands = [
    { name: 'Louis Vuitton', slug: 'louis-vuitton', logo: '/logos/louis_vuitton_logo.png' },
    { name: 'Chanel', slug: 'chanel', logo: '/logos/chanel_logo.png' },
    { name: 'Hermes', slug: 'hermes', logo: '/logos/hermes_logo.png' },
    { name: 'Air Jordan', slug: 'air-jordan', logo: '/logos/air_jordan_logo.png' },
    { name: 'Nike', slug: 'nike', logo: '/logos/nike_logo.png' },
    { name: 'Dior', slug: 'dior', logo: '/logos/dior_logo.png' },
    { name: 'Gucci', slug: 'gucci', logo: '/logos/gucci_logo.png' },
    { name: 'Prada', slug: 'prada', logo: '/logos/prada_logo.png' },
    { name: 'Balenciaga', slug: 'balenciaga', logo: '/logos/balenciaga_logo.png' },
    { name: 'Fendi', slug: 'fendi', logo: '/logos/fendi_logo.png' },
    { name: 'Adidas', slug: 'adidas', logo: '/logos/adidas_logo.png' },
    { name: 'Yeezy', slug: 'yeezy', logo: '/logos/yeezy_logo.png' },
  ];

  return (
    <section id="brands-section" className="py-24 bg-gradient-to-b from-white to-[#F8F5F0] relative overflow-hidden">
      {/* Luxury pattern overlay */}
      <div className="absolute inset-0 bg-[url('/luxury-pattern-light.png')] bg-repeat opacity-5"></div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[300px] right-[300px] w-[600px] h-[600px] rounded-full bg-[#C6AC8E]/5 blur-[150px]"></div>
        <div className="absolute bottom-[200px] left-[200px] w-[500px] h-[500px] rounded-full bg-[#5E503F]/5 blur-[150px]"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-16 right-16 w-32 h-32 border border-[#C6AC8E]/10 rounded-full"></div>
      <div className="absolute bottom-16 left-16 w-48 h-48 border border-[#C6AC8E]/5 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
            <div className="mx-4 w-2 h-2 rounded-full bg-[#C6AC8E]"></div>
            <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
          </div>
          
          <h3 className="text-[#C6AC8E] text-lg font-medium uppercase tracking-[0.25em] mb-4">
            Exceptional Authentication Service
          </h3>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">
            Distinguished <span className="text-[#C6AC8E]">Brands</span> We Authenticate
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-[#5E503F] text-xl leading-relaxed">
              Our expertise spans across <span className="text-[#C6AC8E] font-semibold">{brands.length}+</span> prestigious luxury brands, ensuring accurate and reliable verification for every item.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Link 
              key={brand.slug}
              href={`/what-we-authenticate/${brand.slug}`}
              className="group"
              onMouseEnter={() => setHoveredBrand(brand.slug)}
              onMouseLeave={() => setHoveredBrand(null)}
            >
              <div 
                className={`bg-white rounded-xl shadow-md p-8 text-center h-full flex flex-col items-center justify-center border border-[#E8E2D9] hover:border-[#C6AC8E]/70 transition-all duration-500 ${
                  isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  transform: hoveredBrand === brand.slug ? 'translateY(-8px)' : 'translateY(0)'
                }}
              >
                <div className="relative w-20 h-20 mb-6">
                  <div className={`absolute inset-0 rounded-full bg-[#E8E2D9] border border-[#D6CAB9] transition-all duration-500 ${
                    hoveredBrand === brand.slug ? 'scale-110' : 'scale-100'
                  }`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                      src={brand.logo} 
                      alt={brand.name} 
                      width={64} 
                      height={64}
                      className="object-contain relative z-10 transition-transform duration-500"
                      style={{ 
                        transform: hoveredBrand === brand.slug ? 'scale(1.1)' : 'scale(1)' 
                      }}
                    />
                  </div>
                </div>
                
                <h3 className="text-lg font-medium text-[#1A1A1A] group-hover:text-[#C6AC8E] transition-colors duration-300">
                  {brand.name}
                </h3>
                
                {/* Subtle corner accents */}
                <div className={`absolute top-0 left-0 w-8 h-8 border-t border-l border-[#C6AC8E] rounded-br-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
                  hoveredBrand === brand.slug ? 'opacity-30' : 'opacity-0'
                }`}></div>
                <div className={`absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#C6AC8E] rounded-tl-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
                  hoveredBrand === brand.slug ? 'opacity-30' : 'opacity-0'
                }`}></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/what-we-authenticate"
            className="group relative inline-flex items-center justify-center overflow-hidden"
          >
            <div className="relative z-10 rounded-md bg-white border-2 border-[#C6AC8E] px-10 py-4 transition-all duration-300 hover:bg-[#C6AC8E]/5">
              <span className="relative flex items-center justify-center text-lg font-medium text-[#5E503F] group-hover:text-[#C6AC8E]">
                Explore Our Complete Brand Collection
                <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </div>
            
            {/* Shine effect on hover */}
            <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
          </Link>
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
