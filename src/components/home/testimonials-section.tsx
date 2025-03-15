"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sophia Laurent",
      title: "Luxury Reseller",
      quote: "Authentico has transformed my business. Their authentication certificates give my clients complete confidence when purchasing high-value designer bags. The quick turnaround time is impressive.",
      avatar: "/testimonials/sophia.jpg",
      logo: "/brands/vogue.png",
      source: "Featured in Vogue",
      rating: 5
    },
    {
      name: "Alexander Chen",
      title: "Sneaker Collector",
      quote: "As someone who invests in rare sneakers, I can't afford to make mistakes. Authentico's expert team has saved me from purchasing counterfeits multiple times. Worth every penny.",
      avatar: "/testimonials/alexander.jpg",
      logo: "/brands/hypebeast.svg",
      source: "Hypebeast Contributor",
      rating: 5
    },
    {
      name: "Isabella Rodriguez",
      title: "Fashion Influencer",
      quote: "Authentico is my secret weapon. In a world of replicas, I need to ensure every item I showcase is genuine. Their mobile app lets me verify items before I even leave the store.",
      avatar: "/testimonials/isabella.jpg",
      logo: "/brands/elle.png",
      source: "Elle Magazine",
      rating: 5
    },
    {
      name: "James Montgomery",
      title: "Vintage Watch Dealer",
      quote: "The level of detail in Authentico's reports is remarkable. Their experts identified subtle nuances in a vintage Rolex that even I had missed. Their service has become an essential part of my acquisition process.",
      avatar: "/testimonials/james.jpg",
      logo: "/brands/hodinkee.png",
      source: "Hodinkee Partner",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-[#F8F5F0] to-white relative overflow-hidden">
      {/* Luxury pattern overlay */}
      <div className="absolute inset-0 bg-[url('/luxury-pattern-light.png')] bg-repeat opacity-5"></div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[150px] left-[150px] w-[500px] h-[500px] rounded-full bg-[#C6AC8E]/10 blur-[150px]"></div>
        <div className="absolute bottom-[100px] right-[100px] w-[400px] h-[400px] rounded-full bg-[#5E503F]/10 blur-[150px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-20">
          {/* Decorative element */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
            <div className="mx-4">
              <Quote className="h-6 w-6 text-[#C6AC8E] rotate-180" />
            </div>
            <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
          </div>
          
          <h3 className="text-[#C6AC8E] text-lg font-medium uppercase tracking-[0.25em] mb-4">
            Client Testimonials
          </h3>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 text-center max-w-3xl">
            The <span className="text-[#C6AC8E]">Authentico</span> Experience
          </h2>
          
          <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-[#C6AC8E]/70 to-transparent mb-8"></div>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-[#5E503F] text-center leading-relaxed">
            Discover why discerning collectors and luxury connoisseurs trust Authentico 
            for their authentication needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-20">
          {/* Stats cards with light luxury styling */}
          <div className="bg-white border border-[#E8E2D9] rounded-lg p-8 text-center shadow-lg transition-all duration-500 hover:border-[#C6AC8E] group">
            <div className="mb-3 flex justify-center">
              <div className="w-12 h-1 bg-gradient-to-r from-[#C6AC8E] to-[#5E503F]"></div>
            </div>
            <p className="text-5xl font-bold text-[#C6AC8E] mb-2 group-hover:scale-110 transition-transform duration-500">4.9</p>
            <p className="text-[#5E503F]">App Store Rating</p>
          </div>
          <div className="bg-white border border-[#E8E2D9] rounded-lg p-8 text-center shadow-lg transition-all duration-500 hover:border-[#C6AC8E] group">
            <div className="mb-3 flex justify-center">
              <div className="w-12 h-1 bg-gradient-to-r from-[#C6AC8E] to-[#5E503F]"></div>
            </div>
            <p className="text-5xl font-bold text-[#C6AC8E] mb-2 group-hover:scale-110 transition-transform duration-500">1.8M+</p>
            <p className="text-[#5E503F]">Users</p>
          </div>
          <div className="bg-white border border-[#E8E2D9] rounded-lg p-8 text-center shadow-lg transition-all duration-500 hover:border-[#C6AC8E] group">
            <div className="mb-3 flex justify-center">
              <div className="w-12 h-1 bg-gradient-to-r from-[#C6AC8E] to-[#5E503F]"></div>
            </div>
            <p className="text-5xl font-bold text-[#C6AC8E] mb-2 group-hover:scale-110 transition-transform duration-500">3M+</p>
            <p className="text-[#5E503F]">Cases Completed</p>
          </div>
        </div>

        {/* Featured testimonial carousel */}
        <div className="relative mb-20">
          {/* Large quote mark */}
          <div className="absolute -top-10 left-10 opacity-10">
            <Quote className="h-32 w-32 text-[#C6AC8E]" />
          </div>
          
          <div className="bg-white border border-[#E8E2D9] rounded-xl overflow-hidden shadow-xl">
            <div className="relative h-[500px] md:h-[400px]">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div className="h-full grid grid-cols-1 md:grid-cols-3">
                    {/* Left side - Avatar */}
                    <div className="relative h-48 md:h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-20"></div>
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="col-span-2 p-8 md:p-12 flex flex-col justify-center relative">
                      {/* Company logo */}
                      <div className="absolute top-8 right-8 h-10 w-auto opacity-70">
                        <Image
                          src={testimonial.logo}
                          alt={testimonial.source}
                          width={120}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-[#C6AC8E] fill-[#C6AC8E]" />
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-xl md:text-2xl text-[#1A1A1A] font-light italic leading-relaxed mb-8">
                        "{testimonial.quote}"
                      </p>
                      
                      <div className="mt-auto">
                        <h4 className="text-xl font-medium text-[#C6AC8E]">{testimonial.name}</h4>
                        <p className="text-[#5E503F]">{testimonial.title}</p>
                        <p className="text-sm text-[#8A7968] mt-1">{testimonial.source}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Navigation buttons */}
              <div className="absolute bottom-8 right-8 flex space-x-3 z-20">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-[#E8E2D9] flex items-center justify-center text-[#8A7968] hover:text-[#C6AC8E] hover:border-[#C6AC8E] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-[#E8E2D9] flex items-center justify-center text-[#8A7968] hover:text-[#C6AC8E] hover:border-[#C6AC8E] transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              
              {/* Indicators */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-[#C6AC8E] w-6' 
                        : 'bg-[#E8E2D9] w-2 hover:bg-[#D6CAB9]'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Press mentions */}
        <div className="mt-20">
          <h3 className="text-center text-[#8A7968] uppercase tracking-widest text-sm mb-12">
            As Featured In
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="opacity-50 hover:opacity-100 transition-opacity duration-300">
              <Image src="/brands/vogue.png" alt="Vogue" width={120} height={40} />
            </div>
            <div className="opacity-50 hover:opacity-100 transition-opacity duration-300">
              <Image src="/brands/hypebeast.svg" alt="Hypebeast" width={120} height={40} />
            </div>
            <div className="opacity-50 hover:opacity-100 transition-opacity duration-300">
              <Image src="/brands/elle.png" alt="Elle" width={120} height={40} />
            </div>
            <div className="opacity-50 hover:opacity-100 transition-opacity duration-300">
              <Image src="/brands/hodinkee.png" alt="Hodinkee" width={120} height={40} />
            </div>
            <div className="opacity-50 hover:opacity-100 transition-opacity duration-300">
              <Image src="/brands/forbes.png" alt="Forbes" width={120} height={40} />
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link 
            href="/about"
            className="inline-flex items-center px-8 py-4 bg-white border border-[#C6AC8E] text-[#C6AC8E] rounded-md hover:bg-[#C6AC8E]/5 transition-all duration-300 text-lg font-medium group"
          >
            Discover More About Authentico
            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
