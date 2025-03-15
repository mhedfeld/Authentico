"use client";

import Link from 'next/link';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { LuxuryPattern } from '@/components/ui/luxury-pattern';

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: "Standard",
      description: "Perfect for occasional authentication needs",
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      features: [
        "Authentication within 24 hours",
        "AI-powered verification",
        "Digital certificate",
        "Email support"
      ],
      accentColor: "#C6AC8E",
      isPopular: false,
      buttonText: "Select Plan"
    },
    {
      name: "Premium",
      description: "Ideal for regular collectors and resellers",
      monthlyPrice: 19.99,
      annualPrice: 199.99,
      features: [
        "Authentication within 6 hours",
        "AI + Expert dual verification",
        "Digital certificate with seal",
        "Priority email & chat support",
        "Authentication history archive"
      ],
      accentColor: "#C6AC8E",
      isPopular: true,
      buttonText: "Select Plan"
    },
    {
      name: "Connoisseur",
      description: "For serious collectors and professional resellers",
      monthlyPrice: 39.99,
      annualPrice: 399.99,
      features: [
        "Authentication within 1 hour",
        "AI + Multiple expert verification",
        "Premium digital certificate",
        "24/7 dedicated support",
        "Authentication history archive",
        "Reseller verification badge"
      ],
      accentColor: "#C6AC8E",
      isPopular: false,
      buttonText: "Select Plan"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#F8F5F0] to-white relative overflow-hidden">
      {/* Replace the hardcoded pattern with LuxuryPattern component */}
      <LuxuryPattern opacity={5} />
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-[200px] right-[100px] w-[600px] h-[600px] rounded-full bg-[#C6AC8E]/5 blur-[150px]"></div>
        <div className="absolute bottom-[50px] left-[100px] w-[500px] h-[500px] rounded-full bg-[#5E503F]/5 blur-[150px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-20">
          {/* Decorative element */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
            <div className="mx-4">
              <div className="w-2 h-2 rounded-full bg-[#C6AC8E]/70"></div>
            </div>
            <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
          </div>
          
          <h3 className="text-[#C6AC8E] text-lg font-medium uppercase tracking-[0.25em] mb-4">
            Investment in Authenticity
          </h3>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 text-center max-w-3xl">
            <span className="text-[#C6AC8E]">Curated</span> Authentication Plans
          </h2>
          
          <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-[#C6AC8E]/70 to-transparent mb-8"></div>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-[#5E503F] text-center leading-relaxed">
            Select the authentication experience that best complements your collection. 
            Each plan offers exceptional value with varying levels of service.
          </p>
          
          {/* Toggle switch */}
          <div className="mt-12 inline-flex items-center p-1 bg-white border border-[#E8E2D9] rounded-full shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                !isAnnual 
                  ? 'bg-[#C6AC8E]/20 text-[#C6AC8E]' 
                  : 'text-[#5E503F]/70 hover:text-[#5E503F]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                isAnnual 
                  ? 'bg-[#C6AC8E]/20 text-[#C6AC8E]' 
                  : 'text-[#5E503F]/70 hover:text-[#5E503F]'
              }`}
            >
              Annual Billing
              <span className="ml-2 text-xs py-0.5 px-2 bg-[#C6AC8E]/20 text-[#C6AC8E] rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-lg overflow-hidden transition-all duration-500 group hover:translate-y-[-8px] ${
                plan.isPopular ? 'md:scale-105 z-10' : ''
              }`}
            >
              {/* Top accent border */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#C6AC8E]/70 to-[#5E503F]/70"></div>
              
              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-6 bg-[#C6AC8E] text-white text-xs font-medium py-1.5 px-3 rounded-b-md">
                  MOST POPULAR
                </div>
              )}
              
              <div className="bg-white border border-t-0 border-[#E8E2D9] group-hover:border-[#C6AC8E]/70 p-8 h-full flex flex-col shadow-md">
                {/* Plan name and description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-medium text-[#1A1A1A] mb-2">{plan.name}</h3>
                  <p className="text-[#5E503F]/80">{plan.description}</p>
                </div>
                
                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-[#1A1A1A]">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-[#5E503F]/80 ml-2 mb-1">
                      {isAnnual ? '/year' : '/month'}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-[#C6AC8E] text-sm mt-2">
                      ${(plan.monthlyPrice * 12).toFixed(2)} billed annually
                    </p>
                  )}
                </div>
                
                {/* Divider */}
                <div className="h-[1px] w-full bg-gradient-to-r from-[#C6AC8E]/50 to-transparent mb-8"></div>
                
                {/* Features */}
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#C6AC8E] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[#5E503F]">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Button */}
                <Link 
                  href="/pricing"
                  className={`w-full py-4 text-center rounded-md transition-all duration-300 relative overflow-hidden group ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] text-white font-medium hover:shadow-lg hover:shadow-[#C6AC8E]/20'
                      : 'bg-white border border-[#C6AC8E]/70 text-[#5E503F] hover:bg-[#C6AC8E]/10 hover:border-[#C6AC8E] hover:text-[#5E503F]'
                  }`}
                >
                  <span className="relative z-10">{plan.buttonText}</span>
                  
                  {/* Add shine effect to buttons */}
                  <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
                </Link>
                
                {/* Decorative corner elements */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#C6AC8E]/10 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#C6AC8E]/10 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center px-8 py-6 bg-white border border-[#E8E2D9] rounded-lg max-w-3xl shadow-md">
            <div className="flex items-center">
              <div className="mr-6">
                <div className="w-12 h-12 rounded-full bg-[#C6AC8E]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#C6AC8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
              </div>
              <div className="text-left">
                <h4 className="text-[#1A1A1A] font-medium mb-1">100% Satisfaction Guarantee</h4>
                <p className="text-[#5E503F]/80">If you're not completely satisfied with our service, we offer a full refund within 14 days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add shine animation if not already in global styles */}
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
