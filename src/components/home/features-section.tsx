"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Award, FileCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { LuxuryPattern } from '@/components/ui/luxury-pattern';

export function FeaturesSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Shield className="h-10 w-10 text-[#C6AC8E]" />,
      title: 'Multi-Layered Authentication',
      description: 'Every item is verified by two or more experts with AI analysis to guarantee utmost accuracy and confidence in your results.',
      accentColor: 'bg-[#C6AC8E]',
      pattern: '/patterns/pattern1.png'
    },
    {
      icon: <Clock className="h-10 w-10 text-[#C6AC8E]" />,
      title: 'Anywhere & Anytime',
      description: 'Our mobile app provides 24/7 access to our expert authentication team, ensuring you can buy and sell with confidence.',
      accentColor: 'bg-[#C6AC8E]',
      pattern: '/patterns/pattern2.png'
    },
    {
      icon: <Award className="h-10 w-10 text-[#C6AC8E]" />,
      title: 'Fast and Reliable Results',
      description: 'Get your authentication results in as little as 10 minutes or choose a longer turnaround time to suit your needs.',
      accentColor: 'bg-[#C6AC8E]',
      pattern: '/patterns/pattern3.png'
    },
    {
      icon: <FileCheck className="h-10 w-10 text-[#C6AC8E]" />,
      title: 'Proof of Authenticity',
      description: 'Receive a FREE digital certificate as proof of authenticity. Safeguard your purchase against fraudulent claims.',
      accentColor: 'bg-[#C6AC8E]',
      pattern: '/patterns/pattern4.png'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F8F5F0] relative overflow-hidden">

      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[100px] right-[100px] w-[500px] h-[500px] rounded-full bg-[#C6AC8E]/10 blur-[120px]"></div>
        <div className="absolute bottom-[100px] left-[100px] w-[500px] h-[500px] rounded-full bg-[#5E503F]/10 blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
            <div className="mx-4 w-2 h-2 rounded-full bg-[#C6AC8E]"></div>
            <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
          </div>
          
          <h3 className="text-[#C6AC8E] text-lg font-medium uppercase tracking-widest mb-3">
            Exceptional Features
          </h3>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">
            <span className="text-[#C6AC8E]">Unparalleled</span> Authentication Experience
          </h2>
          
          <div className="h-[1px] w-40 mx-auto bg-gradient-to-r from-transparent via-[#C6AC8E]/70 to-transparent mb-8"></div>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-[#5E503F] leading-relaxed">
            Crafted with discerning collectors in mind. Our premium authentication service delivers excellence at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`bg-white border border-[#E8E2D9] overflow-hidden rounded-xl shadow-md transition-all duration-500 ${
                hoveredFeature === index 
                  ? 'border-[#C6AC8E] shadow-lg transform scale-[1.02]' 
                  : 'hover:border-[#C6AC8E]/50 hover:shadow-lg hover:translate-y-[-4px]'
              }`}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Left accent bar with grow animation on hover */}
                  <div className={`w-full h-2 md:h-auto md:w-2 ${feature.accentColor} transition-all duration-500 ${
                    hoveredFeature === index ? 'md:w-4' : ''
                  }`}></div>
                  
                  <div className="p-8 flex-1 relative overflow-hidden">
                    {/* Subtle pattern background with movement on hover */}
                    <div className={`absolute inset-0 opacity-5 transition-transform duration-700 ${
                      hoveredFeature === index ? 'scale-110' : 'scale-100'
                    }`}>
                      {feature.pattern ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={feature.pattern}
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <LuxuryPattern opacity={100} />
                      )}
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        {/* Icon container with animation */}
                        <div className={`p-3 rounded-full transition-all duration-500 ${
                          hoveredFeature === index 
                            ? 'bg-[#C6AC8E]/20 border-[#C6AC8E]/50 transform scale-110' 
                            : 'bg-[#F8F5F0] border border-[#E8E2D9]'
                        } mr-4`}>
                          {/* Animated icon */}
                          <div className={`transition-transform duration-500 ${
                            hoveredFeature === index ? 'transform scale-110' : ''
                          }`}>
                            {feature.icon}
                          </div>
                        </div>
                        
                        {/* Title with color transition */}
                        <h3 className={`text-2xl font-medium transition-colors duration-300 ${
                          hoveredFeature === index ? 'text-[#C6AC8E]' : 'text-[#1A1A1A]'
                        }`}>
                          {feature.title}
                        </h3>
                      </div>
                      
                      {/* Animated divider */}
                      <div className={`h-[1px] w-full bg-gradient-to-r from-[#C6AC8E]/50 to-transparent mb-6 transition-all duration-500 ${
                        hoveredFeature === index ? 'w-[120%]' : 'w-full'
                      }`}></div>
                      
                      <p className="text-[#5E503F] leading-relaxed">{feature.description}</p>
                      
                      {/* Learn more link that appears on hover */}
                      <div className={`mt-6 flex items-center transition-all duration-500 ${
                        hoveredFeature === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}>
                        <span className="text-[#C6AC8E] font-medium mr-2">Learn more</span>
                        <ArrowRight className="h-4 w-4 text-[#C6AC8E] transition-transform duration-300 transform group-hover:translate-x-1" />
                      </div>
                      
                      {/* Animated corner accent */}
                      <div className={`absolute bottom-0 right-0 w-20 h-20 border-b border-r transition-all duration-500 ${
                        hoveredFeature === index 
                          ? 'border-[#C6AC8E] rounded-tl-[80px] w-24 h-24' 
                          : 'border-[#C6AC8E]/20 rounded-tl-[100px]'
                      }`}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Luxury badge/seal with continuous animation */}
        <div className="mt-20 flex justify-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-[#C6AC8E]/30 animate-pulse"></div>
            <div className="absolute inset-3 rounded-full border border-[#C6AC8E]/20"></div>
            <div className="absolute inset-6 rounded-full bg-[#C6AC8E]/5 flex items-center justify-center">
              <div className="animate-float">
                <Award className="h-12 w-12 text-[#C6AC8E]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add float animation */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
