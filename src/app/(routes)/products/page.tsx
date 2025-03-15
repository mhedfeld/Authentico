"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Smartphone, Building2, Shield, Clock, Award, FileCheck, ChevronRight } from 'lucide-react';
import { LuxuryPattern } from '@/components/ui/luxury-pattern';
import { useState } from 'react';

export default function ProductsPage() {
  const [isHoveringConsumer, setIsHoveringConsumer] = useState(false);
  const [isHoveringEnterprise, setIsHoveringEnterprise] = useState(false);

  return (
    <main className="bg-gradient-to-b from-white to-[#F8F5F0] text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
        {/* Luxury pattern overlay */}
        <LuxuryPattern opacity={5} />
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-[#C6AC8E]/10 blur-[100px]"></div>
          <div className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] rounded-full bg-[#5E503F]/10 blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
              <div className="mx-4 w-2 h-2 rounded-full bg-[#C6AC8E]"></div>
              <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-[#C6AC8E]">Authentication</span> Solutions
            </h1>
            
            <div className="h-[1px] w-40 mx-auto bg-gradient-to-r from-transparent via-[#C6AC8E]/70 to-transparent mb-8"></div>
            
            <p className="text-xl text-[#5E503F] max-w-3xl mx-auto leading-relaxed">
              Authentico offers comprehensive authentication services for both individual collectors and enterprises, ensuring confidence in every transaction.
            </p>
          </div>
          
          {/* Featured Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-xl p-8 border border-[#E8E2D9] shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#C6AC8E]/50 group">
              <div className="w-14 h-14 bg-[#F8F5F0] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C6AC8E]/10 transition-colors duration-300">
                <Shield className="h-7 w-7 text-[#C6AC8E]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Expert Authentication</h3>
              <p className="text-[#5E503F] leading-relaxed">Every item is meticulously verified by experts with specialized knowledge of luxury goods and brands.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-[#E8E2D9] shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#C6AC8E]/50 group">
              <div className="w-14 h-14 bg-[#F8F5F0] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C6AC8E]/10 transition-colors duration-300">
                <Clock className="h-7 w-7 text-[#C6AC8E]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Rapid Results</h3>
              <p className="text-[#5E503F] leading-relaxed">Receive authentication results in as little as 10 minutes, depending on the item category and service tier.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-[#E8E2D9] shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#C6AC8E]/50 group">
              <div className="w-14 h-14 bg-[#F8F5F0] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C6AC8E]/10 transition-colors duration-300">
                <FileCheck className="h-7 w-7 text-[#C6AC8E]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Digital Certificates</h3>
              <p className="text-[#5E503F] leading-relaxed">Each authentic item comes with a tamper-proof digital certificate, enhancing resale value and trust.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Consumer Authentication Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6 bg-[#F8F5F0] rounded-full px-4 py-2">
                <Smartphone className="h-5 w-5 text-[#C6AC8E]" />
                <span className="text-[#5E503F] font-medium">Consumer Solution</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A1A1A]">
                Individual <span className="text-[#C6AC8E]">Authentication</span>
              </h2>
              
              <div className="h-1 w-16 bg-[#C6AC8E] mb-6"></div>
              
              <p className="text-lg text-[#5E503F] mb-8 leading-relaxed">
                Our consumer authentication service provides fast, reliable verification for your luxury items. 
                Whether you're buying, selling, or seeking peace of mind, our expert authenticators and AI technology 
                ensure you know exactly what you have.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F8F5F0] flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-5 w-5 text-[#C6AC8E]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#1A1A1A]">Expert Authentication</h3>
                    <p className="text-[#5E503F]">Every item is verified by two or more experts with AI analysis to guarantee utmost accuracy.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F8F5F0] flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-[#C6AC8E]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#1A1A1A]">Fast Turnaround</h3>
                    <p className="text-[#5E503F]">Get results in as little as 10 minutes for sneakers or 30 minutes for luxury items.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F8F5F0] flex items-center justify-center flex-shrink-0 mt-1">
                    <FileCheck className="h-5 w-5 text-[#C6AC8E]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#1A1A1A]">Digital Certificate</h3>
                    <p className="text-[#5E503F]">Receive a complimentary digital certificate as proof of authenticity for all verified items.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] hover:from-[#D9C4AA] hover:to-[#6E6049] text-white border-0 shadow-lg rounded-md px-8 py-6 text-base font-medium group overflow-hidden relative"
                  onMouseEnter={() => setIsHoveringConsumer(true)}
                  onMouseLeave={() => setIsHoveringConsumer(false)}
                >
                  <span className="relative z-10">Download App</span>
                  <div className={`absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 transition-all duration-500 ${isHoveringConsumer ? 'animate-shine' : ''}`}></div>
                </Button>
                
                <Link href="/pricing">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-[#C6AC8E] bg-white text-[#5E503F] hover:bg-[#C6AC8E]/5 px-8 py-6 text-base font-medium rounded-md"
                  >
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[9/16] relative rounded-xl overflow-hidden shadow-xl">
                {/* Decorative frame */}
                <div className="absolute inset-0 border border-[#C6AC8E]/20 z-20 pointer-events-none"></div>
                <div className="absolute inset-[1px] border border-[#C6AC8E]/10 z-20 pointer-events-none"></div>
                
                {/* App screenshot */}
                <Image 
                  src="/products/b2c-product-image.png" 
                  alt="Authentico mobile app interface" 
                  fill 
                  className="object-cover"
                />
                
                {/* Luxury corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#C6AC8E]/30 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#C6AC8E]/30 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#C6AC8E]/30 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#C6AC8E]/30 pointer-events-none"></div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white shadow-lg rounded-full px-4 py-2 border border-[#E8E2D9]">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#C6AC8E] fill-[#C6AC8E]" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-xs font-medium text-[#1A1A1A]">4.9 App Store</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-full px-4 py-2 border border-[#E8E2D9]">
                <div className="text-xs font-medium text-[#C6AC8E]">Results in 10 minutes</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enterprise Solutions Section */}
      <section className="py-24 bg-[#F8F5F0] relative overflow-hidden">
        {/* Luxury pattern for subtle background */}
        <LuxuryPattern opacity={3} />
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[100px] right-[100px] w-[500px] h-[500px] rounded-full bg-[#C6AC8E]/5 blur-[150px]"></div>
          <div className="absolute bottom-[100px] left-[100px] w-[400px] h-[400px] rounded-full bg-[#5E503F]/5 blur-[150px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-square relative rounded-xl overflow-hidden shadow-xl">
                {/* Luxury frame */}
                <div className="absolute inset-0 border border-[#C6AC8E]/20 z-20 pointer-events-none"></div>
                <div className="absolute inset-[1px] border border-[#C6AC8E]/10 z-20 pointer-events-none"></div>
                
                {/* Enterprise solution image */}
                <Image 
                  src="/products/b2b-product-image.png" 
                  alt="Authentico Enterprise Authentication Dashboard" 
                  fill 
                  className="object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 via-transparent to-transparent"></div>
                
                {/* Luxury corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#C6AC8E]/30 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#C6AC8E]/30 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#C6AC8E]/30 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#C6AC8E]/30 pointer-events-none"></div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-xl p-4 border border-[#E8E2D9]">
                <p className="text-[#1A1A1A] font-bold">200+ Enterprise Clients</p>
                <p className="text-[#5E503F] text-sm">Trusted solution</p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-3 mb-6 bg-[#F8F5F0] rounded-full px-4 py-2 border border-[#E8E2D9]">
                <Building2 className="h-5 w-5 text-[#C6AC8E]" />
                <span className="text-[#5E503F] font-medium">Enterprise Solution</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A1A1A]">
                <span className="text-[#C6AC8E]">Enterprise</span> Authentication
              </h2>
              
              <div className="h-1 w-16 bg-[#C6AC8E] mb-6"></div>
              
              <p className="text-lg text-[#5E503F] mb-8 leading-relaxed">
                Our enterprise authentication solution provides businesses with powerful tools to verify the authenticity 
                of luxury goods at scale. Perfect for marketplaces, retailers, and authentication services looking for a premium experience.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-5 w-5 text-[#C6AC8E]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#1A1A1A]">API Integration</h3>
                    <p className="text-[#5E503F]">Seamlessly integrate our authentication service into your existing platforms and workflows.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-5 w-5 text-[#C6AC8E]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#1A1A1A]">White-Label Solution</h3>
                    <p className="text-[#5E503F]">Offer authentication under your own brand with our customizable white-label solution.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-[#C6AC8E]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#1A1A1A]">Bulk Processing</h3>
                    <p className="text-[#5E503F]">Authenticate multiple items simultaneously with our efficient bulk processing system.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-white border-2 border-[#C6AC8E] text-[#5E503F] hover:bg-[#C6AC8E]/5 px-8 py-6 text-base font-medium rounded-md relative overflow-hidden group"
                  onMouseEnter={() => setIsHoveringEnterprise(true)}
                  onMouseLeave={() => setIsHoveringEnterprise(false)}
                >
                  <span className="relative z-10 flex items-center">
                    Contact Sales
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className={`absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-[#C6AC8E] opacity-10 transition-all duration-500 ${isHoveringEnterprise ? 'animate-shine' : ''}`}></div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-[#F8F5F0] to-white rounded-2xl shadow-lg border border-[#E8E2D9] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left side - Content */}
              <div className="p-10 md:p-12 flex flex-col justify-center relative">
                <div className="mb-6">
                  <div className="h-1 w-16 bg-[#C6AC8E]"></div>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#1A1A1A]">Ready to Get Started?</h2>
                <p className="text-[#5E503F] mb-8 leading-relaxed">
                  Choose the authentication solution that's right for you and start verifying your items today with confidence and ease.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] hover:from-[#D9C4AA] hover:to-[#6E6049] text-white border-0 shadow-md relative overflow-hidden group">
                    <span className="relative z-10">Download App</span>
                    <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine"></div>
                  </Button>
                  <Link href="/contact">
                    <Button variant="outline" className="border-[#C6AC8E] text-[#5E503F] hover:bg-[#C6AC8E]/5">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Right side - Image */}
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/cta/cta-app-image.png" // Replace with your luxury image
                  alt="Authentico Authentication"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>
                
                {/* Floating badge */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg border border-[#E8E2D9] text-center">
                  <p className="font-medium text-[#1A1A1A]">Start authenticating today</p>
                  <p className="text-[#C6AC8E] font-bold">100% Satisfaction Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Shine animation */}
      <style jsx global>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
      `}</style>
    </main>
  );
}
