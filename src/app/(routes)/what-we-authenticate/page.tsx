"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ChevronRight, Check, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { LuxuryPattern } from '@/components/ui/luxury-pattern';

export default function WhatWeAuthenticatePage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBrands, setFilteredBrands] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  
  // Reference for scrolling to brand details
  const brandDetailsRef = useRef<HTMLDivElement>(null);
  
  // Brand categories with their respective brands
  const categories = [
    {
      name: "Luxury Fashion",
      description: "Prestigious fashion houses known for their craftsmanship and timeless designs",
      image: "/categories/luxury-fashion-category.png",
      brands: [
        { name: "Louis Vuitton", slug: "louis-vuitton", logo: '/logos/louis_vuitton_logo.png', items: ["Handbags", "Wallets", "Accessories", "Clothing", "Shoes"] },
        { name: "Chanel", slug: "chanel", logo: '/logos/chanel_logo.png', items: ["Handbags", "Wallets", "Accessories", "Clothing", "Shoes", "Jewelry"] },
        { name: "Hermes", slug: "hermes", logo: '/logos/hermes_logo.png', items: ["Handbags", "Wallets", "Accessories", "Clothing", "Shoes"] },
        { name: "Gucci", slug: "gucci", logo: '/logos/gucci_logo.png', items: ["Handbags", "Wallets", "Accessories", "Clothing", "Shoes"] },
        { name: "Prada", slug: "prada", logo: '/logos/prada_logo.png', items: ["Handbags", "Wallets", "Accessories", "Clothing", "Shoes"] },
        { name: "Dior", slug: "dior", logo: '/logos/dior_logo.png', items: ["Handbags", "Wallets", "Accessories", "Clothing", "Shoes", "Jewelry"] },
        { name: "Balenciaga", slug: "balenciaga", logo: '/logos/balenciaga_logo.png', items: ["Handbags", "Wallets", "Accessories", "Clothing", "Shoes"] },
        { name: "Fendi", slug: "fendi", logo: '/logos/fendi_logo.png', items: ["Handbags", "Wallets", "Accessories", "Clothing", "Shoes"] }
      ]
    },
    {
      name: "Sportswear & Sneakers",
      description: "Athletic brands with cultural significance and collectible footwear",
      image: "/categories/sneakers-category.png",
      brands: [
        { name: "Nike", slug: "nike", logo: '/logos/nike_logo.png', items: ["Sneakers", "Clothing", "Accessories"] },
        { name: "Air Jordan", slug: "air-jordan", logo: '/logos/air_jordan_logo.png', items: ["Sneakers", "Clothing"] },
        { name: "Adidas", slug: "adidas", logo: '/logos/adidas_logo.png', items: ["Sneakers", "Clothing", "Accessories"] },
        { name: "Yeezy", slug: "yeezy", logo: '/logos/yeezy_logo.png', items: ["Sneakers", "Clothing"] },
        { name: "New Balance", slug: "new-balance", logo: '/logos/new_balance_logo.png', items: ["Sneakers"] },
        { name: "Converse", slug: "converse", logo: '/logos/converse_logo.png', items: ["Sneakers"] }
      ]
    },
    {
      name: "Watches & Jewelry",
      description: "Timepieces and fine jewelry representing the pinnacle of luxury craftsmanship",
      image: "/categories/watches-category.png",
      brands: [
        { name: "Rolex", slug: "rolex", logo: '/logos/rolex_logo.png', items: ["Watches"] },
        { name: "Omega", slug: "omega", logo: '/logos/omega_logo.png', items: ["Watches"] },
        { name: "Cartier", slug: "cartier", logo: '/logos/cartier_logo.png', items: ["Watches", "Jewelry"] },
        { name: "Patek Philippe", slug: "patek-philippe", logo: '/logos/patek_philippe_logo.png', items: ["Watches"] },
        { name: "Audemars Piguet", slug: "audemars-piguet", logo: '/logos/audemars_piguet_logo.png', items: ["Watches"] }
      ]
    }
  ];
  
  // Get all brands across categories for search functionality
  const allBrands = categories.flatMap(category => 
    category.brands.map(brand => ({
      ...brand,
      category: category.name
    }))
  );

  // Handle search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredBrands([]);
      setIsSearching(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = allBrands.filter(brand => 
      brand.name.toLowerCase().includes(query) || 
      brand.items.some((item: string) => item.toLowerCase().includes(query)) ||
      brand.category.toLowerCase().includes(query)
    );
    
    setFilteredBrands(results);
    setIsSearching(true);
  }, [searchQuery]);

  // Handle brand selection and scrolling
  const handleBrandSelect = (slug: string) => {
    setActiveBrand(slug);
    
    // Scroll to brand details section
    if (brandDetailsRef.current) {
      setTimeout(() => {
        brandDetailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  // Find currently active brand object
  const activeBrandObject = activeBrand 
    ? allBrands.find(brand => brand.slug === activeBrand) 
    : null;

  return (
    <main className="bg-gradient-to-b from-white to-[#F8F5F0] text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
      <LuxuryPattern opacity={5} />
        {/* Luxury pattern overlay */}
        <div className="absolute inset-0 bg-[url('/luxury-pattern-light.png')] bg-repeat opacity-5"></div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-[#C6AC8E]/10 blur-[100px]"></div>
          <div className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] rounded-full bg-[#5E503F]/10 blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-[#C6AC8E] to-transparent"></div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#1A1A1A]">What We </span>
              <span className="text-[#C6AC8E]">Authenticate</span>
            </h1>
            
            <p className="text-xl text-[#5E503F] max-w-3xl mx-auto leading-relaxed">
              Authentico verifies a wide range of luxury and designer items from over 300 prestigious brands.
              Our meticulous process ensures unparalleled confidence in your acquisitions.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16 relative">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#C6AC8E]" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 bg-white border border-[#E8E2D9] rounded-xl text-[#1A1A1A] placeholder-[#8A7968] focus:outline-none focus:ring-2 focus:ring-[#C6AC8E] focus:border-transparent shadow-md"
                placeholder="Search brands or items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              
              {/* Search results dropdown */}
              {isSearching && filteredBrands.length > 0 && (
                <div className="absolute mt-2 w-full bg-white border border-[#E8E2D9] rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto">
                  <div className="p-4 border-b border-[#E8E2D9]">
                    <p className="text-[#5E503F] font-medium">{filteredBrands.length} results found</p>
                  </div>
                  <div className="py-2">
                    
                    {filteredBrands.map((brand, index) => (
                      <button
                        key={index}
                        className="w-full text-left"
                        onClick={() => {
                          setSearchQuery('');
                          setIsSearching(false);
                          // Find and set the correct category
                          const categoryIndex = categories.findIndex(cat => 
                            cat.brands.some(b => b.slug === brand.slug)
                          );
                          if (categoryIndex !== -1) {
                            setActiveCategory(categoryIndex);
                            handleBrandSelect(brand.slug);
                          }
                        }}
                      >
                        <div className="px-4 py-3 hover:bg-[#F8F5F0] cursor-pointer transition-colors">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-[#E8E2D9] rounded-full flex items-center justify-center mr-3 p-2">
                              <Image 
                                src={brand.logo} 
                                alt={brand.name} 
                                width={24} 
                                height={24}
                                className="object-contain"
                              />
                            </div>
                            <div>
                              <h3 className="text-[#1A1A1A] font-medium">{brand.name}</h3>
                              <p className="text-sm text-[#5E503F]">{brand.category}</p>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {isSearching && filteredBrands.length === 0 && (
                <div className="absolute mt-2 w-full bg-white border border-[#E8E2D9] rounded-xl shadow-lg z-50">
                  <div className="p-6 text-center">
                    <p className="text-[#5E503F]">No brands found matching your search.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-12 bg-white relative border-y border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCategory(index);
                  setActiveBrand(null);
                }}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
                  activeCategory === index 
                    ? 'ring-2 ring-[#C6AC8E]' 
                    : 'hover:ring-1 hover:ring-[#C6AC8E]/50'
                }`}
              >
                <div className="relative h-40">
                  <Image 
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent transition-opacity duration-300 ${
                    activeCategory === index ? 'opacity-90' : 'opacity-60 group-hover:opacity-70'
                  }`}></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold">{category.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white inline-flex items-center">
                        <span className="mr-1">{category.brands.length}</span> brands
                      </div>
                      <ArrowRight className={`h-5 w-5 text-white transition-transform duration-300 ${
                        activeCategory === index ? 'translate-x-0' : '-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                      }`} />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Brands Grid */}
      <section className="py-16">
      <LuxuryPattern opacity={3} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">{categories[activeCategory].name}</h2>
            <div className="h-1 w-16 bg-[#C6AC8E] mt-2"></div>
            <p className="text-[#5E503F] mt-4 max-w-3xl">{categories[activeCategory].description}</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories[activeCategory].brands.map((brand) => (
              <button
                key={brand.slug}
                onClick={() => handleBrandSelect(brand.slug)}
                className={`group bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                  activeBrand === brand.slug 
                    ? 'border-[#C6AC8E] shadow-md scale-[1.03]' 
                    : 'border-[#E8E2D9] hover:border-[#C6AC8E]/50 hover:shadow-sm'
                }`}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <div className={`w-20 h-20 bg-[#E8E2D9] rounded-full flex items-center justify-center p-3 border transition-all duration-300 ${
                    activeBrand === brand.slug 
                      ? 'border-[#C6AC8E]' 
                      : 'border-[#D6CAB9] group-hover:border-[#C6AC8E]/50'
                  }`}>
                    <Image 
                      src={brand.logo} 
                      alt={brand.name} 
                      width={48} 
                      height={48}
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <h3 className="mt-5 text-lg font-medium text-[#1A1A1A]">{brand.name}</h3>
                  
                  <div className="mt-3 flex flex-wrap justify-center gap-1">
                    {brand.items.slice(0, 2).map((item, i) => (
                      <span key={i} className="inline-flex text-xs px-2 py-1 rounded-full bg-[#F8F5F0] text-[#5E503F]">
                        {item}
                      </span>
                    ))}
                    {brand.items.length > 2 && (
                      <span className="inline-flex text-xs px-2 py-1 rounded-full bg-[#F8F5F0] text-[#5E503F]">
                        +{brand.items.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className={`mt-4 text-xs font-medium transition-all duration-300 flex items-center ${
                    activeBrand === brand.slug 
                      ? 'text-[#C6AC8E]' 
                      : 'text-[#8A7968] group-hover:text-[#C6AC8E]'
                  }`}>
                    View details
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Brand Details Section - Only shown when a brand is selected */}
      {activeBrand && (
        <div ref={brandDetailsRef} className="py-16 bg-[#F8F5F0] border-y border-[#E8E2D9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeBrandObject && (
              <div className="bg-white rounded-2xl shadow-md border border-[#E8E2D9] overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* Brand identity column */}
                  <div className="p-8 bg-[#1A1A1A] text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <Image
                        src={`/brand-backgrounds/${activeBrandObject.slug}.png`}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center p-3">
                          <Image 
                            src={activeBrandObject.logo} 
                            alt={activeBrandObject.name} 
                            width={40} 
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-2xl font-bold">{activeBrandObject.name}</h3>
                          <p className="text-sm text-white/70">{activeBrandObject.category}</p>
                        </div>
                      </div>
                      
                      <div className="h-px w-full bg-white/20 mb-6"></div>
                      
                      <p className="text-sm text-white/80 mb-6">
                        Authentico provides comprehensive authentication services for {activeBrandObject.name} products, 
                        ensuring every detail is meticulously examined by our expert team.
                      </p>
                    </div>
                    
                    <Link href={`/what-we-authenticate/${activeBrandObject.slug}`}>
                      <Button className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20">
                        Learn more about {activeBrandObject.name}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Authentication details columns */}
                  <div className="col-span-2 p-8">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">Authentication Services</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-[#5E503F] font-medium mb-4 flex items-center">
                          <Check className="h-5 w-5 text-[#C6AC8E] mr-2" />
                          Items We Authenticate
                        </h4>
                        <div className="space-y-2">
                          {activeBrandObject.items.map((item, i) => (
                            <div key={i} className="flex items-center pl-7">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#C6AC8E] mr-3"></div>
                              <span className="text-[#1A1A1A]">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-[#5E503F] font-medium mb-4 flex items-center">
                          <Check className="h-5 w-5 text-[#C6AC8E] mr-2" />
                          Authentication Features
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center pl-7">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C6AC8E] mr-3"></div>
                            <span className="text-[#1A1A1A]">Expert multi-point inspection</span>
                          </div>
                          <div className="flex items-center pl-7">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C6AC8E] mr-3"></div>
                            <span className="text-[#1A1A1A]">Digital authentication certificate</span>
                          </div>
                          <div className="flex items-center pl-7">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C6AC8E] mr-3"></div>
                            <span className="text-[#1A1A1A]">Results in as little as 10 minutes</span>
                          </div>
                          <div className="flex items-center pl-7">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C6AC8E] mr-3"></div>
                            <span className="text-[#1A1A1A]">Authentication guarantee</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-[#E8E2D9]">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-[#F8F5F0] rounded-lg p-4 text-center">
                          <p className="text-[#C6AC8E] font-medium text-xl">10 min</p>
                          <p className="text-[#5E503F] text-sm">Fastest results</p>
                        </div>
                        <div className="bg-[#F8F5F0] rounded-lg p-4 text-center">
                          <p className="text-[#C6AC8E] font-medium text-xl">100%</p>
                          <p className="text-[#5E503F] text-sm">Money-back guarantee</p>
                        </div>
                        <div className="bg-[#F8F5F0] rounded-lg p-4 text-center">
                          <p className="text-[#C6AC8E] font-medium text-xl">24/7</p>
                          <p className="text-[#5E503F] text-sm">Available service</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Authentication Process */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[url('/luxury-pattern-light.png')] bg-repeat opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
              <div className="mx-4 w-2 h-2 rounded-full bg-[#C6AC8E]"></div>
              <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A1A1A]">
              Our <span className="text-[#C6AC8E]">Authentication</span> Process
            </h2>
            
            <p className="text-lg text-[#5E503F] max-w-3xl mx-auto leading-relaxed">
              Our comprehensive authentication approach combines expert knowledge with technological precision to deliver reliable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl border border-[#E8E2D9] p-8 shadow-md relative group hover:border-[#C6AC8E]/50 hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-[#C6AC8E] flex items-center justify-center font-bold text-white">1</div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Submit Photos</h3>
                <p className="text-[#5E503F] leading-relaxed mb-6">
                  Take clear photos of your item following our guidelines. Our app will guide you through exactly what angles and details we need.
                </p>
                <div className="h-px w-full bg-[#E8E2D9]"></div>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-xs uppercase tracking-wider text-[#8A7968]">Step One</span>
                  <div className="w-8 h-8 rounded-full bg-[#F8F5F0] flex items-center justify-center group-hover:bg-[#C6AC8E]/10 transition-all duration-300">
                    <svg className="w-4 h-4 text-[#C6AC8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-[#E8E2D9] p-8 shadow-md relative group hover:border-[#C6AC8E]/50 hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-[#C6AC8E] flex items-center justify-center font-bold text-white">2</div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Expert Review</h3>
                <p className="text-[#5E503F] leading-relaxed mb-6">
                  Your item is reviewed by multiple expert authenticators who specialize in the specific brand and item category.
                </p>
                <div className="h-px w-full bg-[#E8E2D9]"></div>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-xs uppercase tracking-wider text-[#8A7968]">Step Two</span>
                  <div className="w-8 h-8 rounded-full bg-[#F8F5F0] flex items-center justify-center group-hover:bg-[#C6AC8E]/10 transition-all duration-300">
                    <svg className="w-4 h-4 text-[#C6AC8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-[#E8E2D9] p-8 shadow-md relative group hover:border-[#C6AC8E]/50 hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-[#C6AC8E] flex items-center justify-center font-bold text-white">3</div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Get Results</h3>
                <p className="text-[#5E503F] leading-relaxed mb-6">
                  Receive a clear verdict: Authentic or Replica, along with a digital certificate for authentic items that you can share with buyers.
                </p>
                <div className="h-px w-full bg-[#E8E2D9]"></div>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-xs uppercase tracking-wider text-[#8A7968]">Step Three</span>
                  <div className="w-8 h-8 rounded-full bg-[#F8F5F0] flex items-center justify-center group-hover:bg-[#C6AC8E]/10 transition-all duration-300">
                    <svg className="w-4 h-4 text-[#C6AC8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#F8F5F0] relative border-t border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-xl shadow-lg border border-[#E8E2D9] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Content */}
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="h-1 w-16 bg-[#C6AC8E]"></div>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#1A1A1A]">Ready to Authenticate?</h2>
                <p className="text-[#5E503F] mb-8">
                  Download the Authentico app today and get your designer items authenticated by our expert team in as little as 10 minutes.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] hover:from-[#D9C4AA] hover:to-[#6E6049] text-white border-0 shadow-md">
                    Download App
                  </Button>
                  <Link href="/pricing">
                    <Button variant="outline" className="border-[#C6AC8E] text-[#5E503F] hover:bg-[#C6AC8E]/5">
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/cta/cta-app-image.png" // Replace with your image
                  alt="Authentico Authentication Process"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent mix-blend-overlay"></div>
                
                {/* Floating badge */}
                <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg border border-[#E8E2D9]">
                  <p className="font-medium text-[#1A1A1A]">
                    <span className="text-[#C6AC8E]">300+</span> Brands Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
