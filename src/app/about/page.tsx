'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Users, Award, Globe, Zap, TrendingUp, ChevronRight, ArrowRight } from 'lucide-react';
import { LuxuryPattern } from '@/components/ui/luxury-pattern';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  // Animation states
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Create subtle animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about-content');
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

  // Company milestones
  const milestones = [
    {
      year: "2019",
      title: "Founded in San Francisco",
      description: "Authentico was founded with a mission to combat the growing counterfeit market in luxury goods."
    },
    {
      year: "2020",
      title: "Mobile App Launch",
      description: "Launched our mobile app, making authentication accessible to consumers worldwide."
    },
    {
      year: "2021",
      title: "AI Technology Integration",
      description: "Integrated proprietary AI technology to enhance our authentication process."
    },
    {
      year: "2022",
      title: "1 Million Users Milestone",
      description: "Reached 1 million users and authenticated over 2 million items."
    },
    {
      year: "2023",
      title: "Enterprise Solutions Launch",
      description: "Expanded our services to include enterprise solutions for businesses and marketplaces."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Opened offices in Europe and Asia to better serve our growing international user base."
    }
  ];

  // Core values
  const coreValues = [
    {
      icon: <Shield className="h-8 w-8 text-[#C6AC8E]" />,
      title: "Integrity",
      description: "We uphold the highest standards of honesty and ethics in everything we do."
    },
    {
      icon: <Award className="h-8 w-8 text-[#C6AC8E]" />,
      title: "Excellence",
      description: "We strive for excellence in our authentication process and customer service."
    },
    {
      icon: <Users className="h-8 w-8 text-[#C6AC8E]" />,
      title: "Collaboration",
      description: "We work together as a team and with our partners to achieve the best results."
    },
    {
      icon: <Zap className="h-8 w-8 text-[#C6AC8E]" />,
      title: "Innovation",
      description: "We continuously innovate to improve our technology and services."
    }
  ];

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
              <span className="text-[#1A1A1A]">About </span>
              <span className="text-[#C6AC8E]">Authentico</span>
            </h1>
            
            <div className="h-[1px] w-40 mx-auto bg-gradient-to-r from-transparent via-[#C6AC8E]/70 to-transparent mb-8"></div>
            
            <p className="text-xl text-[#5E503F] max-w-3xl mx-auto leading-relaxed">
              We're on a mission to create a more trustworthy luxury marketplace by eliminating counterfeits and giving collectors confidence in their acquisitions.
            </p>
          </div>
          
          {/* Brand Story Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white rounded-xl border border-[#E8E2D9] p-6 shadow-md text-center hover:shadow-lg transition-all duration-300 hover:border-[#C6AC8E]/30">
              <div className="text-3xl md:text-4xl font-bold text-[#C6AC8E] mb-2">2019</div>
              <p className="text-[#5E503F]">Founded</p>
            </div>
            
            <div className="bg-white rounded-xl border border-[#E8E2D9] p-6 shadow-md text-center hover:shadow-lg transition-all duration-300 hover:border-[#C6AC8E]/30">
              <div className="text-3xl md:text-4xl font-bold text-[#C6AC8E] mb-2">1.8M+</div>
              <p className="text-[#5E503F]">Active Users</p>
            </div>
            
            <div className="bg-white rounded-xl border border-[#E8E2D9] p-6 shadow-md text-center hover:shadow-lg transition-all duration-300 hover:border-[#C6AC8E]/30">
              <div className="text-3xl md:text-4xl font-bold text-[#C6AC8E] mb-2">5M+</div>
              <p className="text-[#5E503F]">Items Authenticated</p>
            </div>
            
            <div className="bg-white rounded-xl border border-[#E8E2D9] p-6 shadow-md text-center hover:shadow-lg transition-all duration-300 hover:border-[#C6AC8E]/30">
              <div className="text-3xl md:text-4xl font-bold text-[#C6AC8E] mb-2">99.8%</div>
              <p className="text-[#5E503F]">Accuracy Rate</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section id="about-content" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`bg-white rounded-xl border border-[#E8E2D9] p-10 md:p-16 text-center shadow-lg transition-all duration-700 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[#C6AC8E]/20 rounded-br-xl"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#C6AC8E]/20 rounded-tl-xl"></div>
              
              <div className="mb-6">
                <div className="h-1 w-20 mx-auto bg-[#C6AC8E]"></div>
              </div>
              
              <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">Our Mission</h2>
              
              <p className="text-xl text-[#5E503F] max-w-3xl mx-auto italic leading-relaxed">
                "To create a world where authenticity is never in question, empowering collectors and businesses to trade luxury goods with absolute confidence."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
            <div className={`transition-all duration-700 delay-100 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="flex items-center mb-6">
                <div className="h-6 w-1 bg-[#C6AC8E] rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-[#1A1A1A]">Who We Are</h2>
              </div>
              
              <p className="text-lg text-[#5E503F] mb-6 leading-relaxed">
                Authentico is the world's leading authentication service for luxury items, sneakers, and designer products. Founded in 2019, we've quickly grown to become the most trusted name in authentication, serving over 1.8 million users worldwide.
              </p>
              
              <p className="text-lg text-[#5E503F] mb-6 leading-relaxed">
                Our team consists of expert authenticators with decades of combined experience, technology specialists, and customer service professionals dedicated to providing the highest level of service.
              </p>
              
              <p className="text-lg text-[#5E503F] leading-relaxed">
                We believe that everyone deserves to know exactly what they're buying, whether it's a luxury handbag, a rare watch, or a limited-edition sneaker. By combining expert knowledge with cutting-edge technology, we're creating a future where authenticity is never in question.
              </p>
              
              <div className="mt-10 relative">
                <div className="absolute -left-5 -top-5 w-10 h-10 border-t border-l border-[#C6AC8E]/30 rounded-sm"></div>
                <Image
                  src="/about/team-photo.jpg" // You'll need this image
                  alt="The Authentico team"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
            
            <div className={`transition-all duration-700 delay-200 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="flex items-center mb-6">
                <div className="h-6 w-1 bg-[#C6AC8E] rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-[#1A1A1A]">What We Do</h2>
              </div>
              
              <p className="text-lg text-[#5E503F] mb-6 leading-relaxed">
                We provide fast, reliable authentication services for luxury items, sneakers, and designer products. Our multi-layered authentication process combines expert human verification with advanced AI technology to deliver accurate results.
              </p>
              
              <p className="text-lg text-[#5E503F] mb-6 leading-relaxed">
                For consumers, we offer peace of mind when buying pre-loved luxury items. For sellers, we provide credibility and trust that helps items sell faster and at better prices. For businesses, we offer enterprise solutions that integrate seamlessly into existing platforms.
              </p>
              
              <p className="text-lg text-[#5E503F] mb-6 leading-relaxed">
                With turnaround times as quick as 10 minutes and a financial guarantee backing our verdicts, we're revolutionizing how authentication is done in the luxury goods market.
              </p>
              
              <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#E8E2D9]">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4">
                    <Globe className="h-5 w-5 text-[#C6AC8E]" />
                  </div>
                  <h3 className="text-xl font-medium text-[#1A1A1A]">Global Reach</h3>
                </div>
                <p className="text-[#5E503F]">
                  With offices in San Francisco, London, and Tokyo, we serve customers in over 150 countries, providing authentication services for luxury items worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Core Values Section */}
            <section className="py-24 bg-white relative">
        <LuxuryPattern opacity={4} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
              <div className="mx-4 w-2 h-2 rounded-full bg-[#C6AC8E]"></div>
              <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">
              Our Core <span className="text-[#C6AC8E]">Values</span>
            </h2>
            
            <p className="text-lg text-[#5E503F] max-w-3xl mx-auto">
              These values guide everything we do at Authentico, from how we build our technology to how we serve our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-[#E8E2D9] p-8 shadow-md hover:shadow-lg hover:border-[#C6AC8E]/50 transition-all duration-300 flex flex-col items-center text-center group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-[#F8F5F0] flex items-center justify-center mb-6 border border-[#E8E2D9] group-hover:bg-[#C6AC8E]/10 group-hover:border-[#C6AC8E]/30 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">{value.title}</h3>
                <p className="text-[#5E503F]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Milestones Section */}
      <section className="py-24 bg-[#F8F5F0] relative overflow-hidden">
        <LuxuryPattern opacity={3} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
              <div className="mx-4 w-2 h-2 rounded-full bg-[#C6AC8E]"></div>
              <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">
              Our <span className="text-[#C6AC8E]">Journey</span>
            </h2>
            
            <p className="text-lg text-[#5E503F] max-w-3xl mx-auto">
              From our founding to today, we've been on a mission to make authentication accessible to everyone.
            </p>
          </div>
          
          <div className="relative px-4">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-[#C6AC8E]/0 via-[#C6AC8E] to-[#C6AC8E]/0 rounded-full"></div>
            
            <div className="space-y-20">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-1/2"></div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#C6AC8E] bg-white z-10"></div>
                  
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16'}`}>
                    <div className="bg-white rounded-xl border border-[#E8E2D9] p-6 shadow-md hover:shadow-lg hover:border-[#C6AC8E]/30 transition-all duration-300">
                      <div className="text-[#C6AC8E] font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">{milestone.title}</h3>
                      <p className="text-[#5E503F]">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
              <div className="mx-4 w-2 h-2 rounded-full bg-[#C6AC8E]"></div>
              <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">
              Leadership <span className="text-[#C6AC8E]">Team</span>
            </h2>
            
            <p className="text-lg text-[#5E503F] max-w-3xl mx-auto">
              Meet the passionate experts leading Authentico's mission to ensure authenticity in every transaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team members - would be dynamically generated in a real app */}
            <div className="bg-white rounded-xl border border-[#E8E2D9] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-80">
                <Image
                  src="/about/team-member1.jpg" // You'll need this image
                  alt="Alex Morgan, CEO"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">Alex Morgan</h3>
                <p className="text-[#C6AC8E] mb-4">Chief Executive Officer</p>
                <p className="text-[#5E503F]">Former executive at a leading luxury marketplace with 15+ years of experience in the industry.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-[#E8E2D9] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-80">
                <Image
                  src="/about/team-member2.jpg" // You'll need this image
                  alt="Sarah Chen, CTO"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">Sarah Chen</h3>
                <p className="text-[#C6AC8E] mb-4">Chief Technology Officer</p>
                <p className="text-[#5E503F]">AI specialist with a background in computer vision and machine learning at leading tech companies.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-[#E8E2D9] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-80">
                <Image
                  src="/about/team-member3.jpg" // You'll need this image
                  alt="Marcus Williams, Head of Authentication"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">Marcus Williams</h3>
                <p className="text-[#C6AC8E] mb-4">Head of Authentication</p>
                <p className="text-[#5E503F]">Former authenticator at a premier auction house with over 20 years of experience in luxury goods.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/careers">
              <Button className="bg-white border-2 border-[#C6AC8E] text-[#5E503F] hover:bg-[#C6AC8E]/5 px-8 py-3 rounded-md group">
                <span className="flex items-center">
                  Join Our Team
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-[#F8F5F0] relative">
        <LuxuryPattern opacity={5} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl border border-[#E8E2D9] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left side - Image */}
              <div className="relative h-64 lg:h-auto order-2 lg:order-1">
                <Image
                  src="/about/cta-image.jpg" // You'll need this image
                  alt="Authentico App in use"
                  fill
                  className="object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/30 to-transparent"></div>
                
                {/* Decorative element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 border border-white/30 rounded-full"></div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="p-10 lg:p-16 order-1 lg:order-2 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="h-1 w-20 bg-[#C6AC8E]"></div>
                </div>
                
                <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">Join Our Mission</h2>
                
                <p className="text-[#5E503F] mb-8 leading-relaxed">
                  Help us create a more trustworthy marketplace for luxury goods. Download the Authentico app today and experience the difference.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5">
                  <Button className="bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] hover:from-[#D9C4AA] hover:to-[#6E6049] text-white border-0 shadow-lg rounded-md px-8 py-6 text-base font-medium group overflow-hidden relative">
                    <span className="relative z-10">Download App</span>
                    <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine"></div>
                  </Button>
                  
                  <Link href="/contact">
                    <Button variant="outline" className="border-2 border-[#C6AC8E] text-[#5E503F] hover:bg-[#C6AC8E]/5 px-8 py-6 text-base font-medium rounded-md">
                      Contact Us
                    </Button>
                  </Link>
                </div>
                
                {/* Trust indicators */}
                <div className="mt-10 flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#C6AC8E]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-[#5E503F]">4.9 out of 5 stars from 2,000+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Add shine animation */}
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
