'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { LuxuryPattern } from '@/components/ui/luxury-pattern';
import Image from 'next/image';

export default function FAQPage() {
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<number | null>(0);
  const [highlightedFAQ, setHighlightedFAQ] = useState<number | null>(null);

  // Animation states
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Create subtle animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('faq-content');
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

  const toggleFAQ = (index: number) => {
    setHighlightedFAQ(index);
    if (openFAQs.includes(index)) {
      setOpenFAQs(openFAQs.filter(i => i !== index));
    } else {
      setOpenFAQs([...openFAQs, index]);
    }
  };

  const handleCategoryChange = (index: number | null) => {
    setActiveCategory(index);
    setSearchQuery('');
  };

  // FAQ categories with questions and answers
  const faqCategories = [
    {
      title: "General Questions",
      icon: "/icons/faq-general.svg",
      faqs: [
        {
          question: "What is Authentico?",
          answer: "Authentico is a premium authentication service for luxury items, sneakers, and designer products. We use a combination of expert authenticators and AI technology to verify the authenticity of items, helping collectors and sellers trade with confidence."
        },
        {
          question: "How accurate is your authentication?",
          answer: "Our authentication process is highly accurate, with a success rate of over 99.8%. We use a multi-layered approach where each item is reviewed by at least two expert authenticators, along with our proprietary AI technology. This combination ensures the highest level of accuracy in the industry."
        },
        {
          question: "Do you offer a guarantee?",
          answer: "Yes, we offer a financial guarantee on our authentication services. If we incorrectly authenticate an item (which is extremely rare), we provide compensation up to a certain amount based on the item category. Full details are available in our Terms of Service."
        }
      ]
    },
    {
      title: "Using the Service",
      icon: "/icons/faq-service.svg",
      faqs: [
        {
          question: "How do I submit an item for authentication?",
          answer: "To submit an item, download our mobile app, create an account, and follow the guided process to take photos of your item. Our app will walk you through exactly which angles and details we need. Once submitted, you'll receive your results based on your selected turnaround time."
        },
        {
          question: "What information do I need to provide?",
          answer: "You'll need to provide clear photos of your item following our guidelines, which typically include overall views, close-ups of logos, hardware, stitching, serial numbers, and other brand-specific authentication points. The app will guide you through the exact photos needed for your specific item."
        },
        {
          question: "How long does authentication take?",
          answer: "Authentication times vary based on the service level you choose and the type of item. We offer options ranging from as quick as 10 minutes for sneakers to 24 hours for complex luxury items. You can select your preferred turnaround time when submitting your item."
        }
      ]
    },
    {
      title: "Pricing & Payment",
      icon: "/icons/faq-pricing.svg",
      faqs: [
        {
          question: "How much does authentication cost?",
          answer: "Our pricing varies based on the item type and your desired turnaround time. Sneaker authentication starts from $3, while luxury handbags start from $10. Faster turnaround times cost more. You can view our full pricing details on our Pricing page."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. Payment is processed securely through our app at the time of submission."
        },
        {
          question: "Do you offer refunds?",
          answer: "Our authentication fee is non-refundable as it covers the service provided, regardless of the outcome. However, knowing an item is a replica before purchasing can save you from a much more expensive mistake."
        }
      ]
    },
    {
      title: "Certificates & Results",
      icon: "/icons/faq-certificates.svg",
      faqs: [
        {
          question: "What does the authentication certificate include?",
          answer: "Our digital certificate includes details about the authenticated item, a unique verification code, date of authentication, result (authentic or replica), and a secure link that can be shared with potential buyers to verify the authentication."
        },
        {
          question: "How long are certificates valid?",
          answer: "Our authentication certificates do not expire and remain valid indefinitely. However, in cases where a brand significantly changes their production methods or materials, a new authentication may be recommended for items authenticated more than 3 years ago."
        },
        {
          question: "Can I share my certificate with others?",
          answer: "Yes, our digital certificates include a secure sharing option. When an item is verified as authentic, you'll receive a unique link that you can share with potential buyers or include in your listing."
        }
      ]
    }
  ];

  // Filter FAQs based on search query and active category
  const filteredFAQs = searchQuery.trim() === '' 
    ? (activeCategory !== null ? [faqCategories[activeCategory]] : faqCategories) 
    : faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.faqs.length > 0);

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
              <span className="text-[#1A1A1A]">Frequently Asked </span>
              <span className="text-[#C6AC8E]">Questions</span>
            </h1>
            
            <div className="h-[1px] w-40 mx-auto bg-gradient-to-r from-transparent via-[#C6AC8E]/70 to-transparent mb-8"></div>
            
            <p className="text-xl text-[#5E503F] max-w-3xl mx-auto leading-relaxed">
              Find detailed answers to common questions about our authentication services, processes, and certifications.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#C6AC8E]" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 bg-white border border-[#E8E2D9] rounded-xl text-[#1A1A1A] placeholder-[#8A7968] focus:outline-none focus:ring-2 focus:ring-[#C6AC8E] focus:border-transparent shadow-md transition-all duration-300"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value.trim() !== '') {
                    setActiveCategory(null);
                  }
                }}
              />
              
              {searchQuery && (
                <button 
                  className="absolute inset-y-0 right-0 pr-5 flex items-center text-[#5E503F] hover:text-[#C6AC8E] transition-colors"
                  onClick={() => setSearchQuery('')}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Category Tabs - Only show when not searching */}
      {!searchQuery && (
        <section className="py-4 bg-white shadow-sm sticky top-20 z-40 border-y border-[#E8E2D9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-nowrap overflow-x-auto hide-scrollbar gap-2 justify-center">
              {faqCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(index)}
                  className={`px-6 py-3 whitespace-nowrap text-sm font-medium rounded-lg transition-all duration-300 flex items-center ${
                    activeCategory === index
                      ? 'bg-[#C6AC8E]/10 text-[#C6AC8E]'
                      : 'text-[#5E503F] hover:bg-[#F8F5F0] hover:text-[#C6AC8E]'
                  }`}
                >
                  {/* Placeholder for icon - you would replace with actual icons */}
                  <div className="w-4 h-4 mr-2 bg-[#C6AC8E]/20 rounded-full"></div>
                  {category.title}
                </button>
              ))}
              {activeCategory !== null && (
                <button
                  onClick={() => handleCategoryChange(null)}
                  className="px-6 py-3 whitespace-nowrap text-sm font-medium rounded-lg transition-all duration-300 text-[#5E503F] hover:bg-[#F8F5F0] hover:text-[#C6AC8E]"
                >
                  View All
                </button>
              )}
            </div>
          </div>
        </section>
      )}
            {/* FAQ Content Section */}
            <section id="faq-content" className="py-16 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((category, categoryIndex) => (
              category.faqs.length > 0 && (
                <div 
                  key={categoryIndex} 
                  className={`mb-16 transition-all duration-700 ${
                    isAnimating 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 150}ms` }}
                >
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">{category.title}</h2>
                    <div className="h-1 w-16 bg-[#C6AC8E]"></div>
                  </div>
                  
                  <div className="space-y-6">
                    {category.faqs.map((faq, faqIndex) => {
                      const index = categoryIndex * 100 + faqIndex;
                      const isOpen = openFAQs.includes(index);
                      const isHighlighted = highlightedFAQ === index;
                      
                      return (
                        <div 
                          key={faqIndex} 
                          className={`bg-white rounded-xl border transition-all duration-300 ${
                            isHighlighted
                              ? 'border-[#C6AC8E] shadow-lg'
                              : 'border-[#E8E2D9] shadow-sm hover:shadow-md'
                          }`}
                        >
                          <button
                            className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                          >
                            <h3 className={`text-lg font-medium pr-8 transition-colors duration-300 ${
                              isHighlighted ? 'text-[#C6AC8E]' : 'text-[#1A1A1A]'
                            }`}>
                              {faq.question}
                            </h3>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                              isOpen 
                                ? 'bg-[#C6AC8E]/10 rotate-180' 
                                : 'bg-[#F8F5F0]'
                            }`}>
                              <ChevronDown className="h-5 w-5 text-[#C6AC8E] flex-shrink-0" />
                            </div>
                          </button>
                          
                          <div 
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                              isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <div className="px-6 pb-6 border-t border-[#E8E2D9] pt-4">
                              <p className="text-[#5E503F] leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-[#E8E2D9] shadow-md">
              <div className="w-16 h-16 mx-auto bg-[#F8F5F0] rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-[#C6AC8E]/50" />
              </div>
              <h3 className="text-xl font-medium text-[#1A1A1A] mb-2">No Results Found</h3>
              <p className="text-[#5E503F] max-w-md mx-auto mb-6">
                We couldn't find any FAQs that match your search query. Please try different keywords or browse by category.
              </p>
              <Button 
                onClick={() => setSearchQuery('')}
                className="bg-white border-2 border-[#C6AC8E] text-[#5E503F] hover:bg-[#C6AC8E]/5"
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Still Have Questions Section */}
      <section className="py-24 bg-[#F8F5F0] relative">
        <LuxuryPattern opacity={3} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl border border-[#E8E2D9] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left side - Content */}
              <div className="p-12 md:p-16 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-[#C6AC8E]/20 rounded-br-[100px]"></div>
                
                <div className="relative">
                  <div className="mb-6">
                    <div className="h-1 w-20 bg-[#C6AC8E]"></div>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">
                    Still Have Questions?
                  </h2>
                  
                  <p className="text-[#5E503F] mb-8 leading-relaxed">
                    If you couldn't find the answer you were looking for, our dedicated support team is here to help with your inquiry. We typically respond within 24 hours.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-5">
                    <Link href="/contact">
                      <Button className="bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] hover:from-[#D9C4AA] hover:to-[#6E6049] text-white border-0 shadow-md px-8 py-3 text-base rounded-lg group overflow-hidden relative">
                        <span className="relative z-10">Contact Support</span>
                        <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
                      </Button>
                    </Link>
                    
                    <Button variant="outline" className="border-2 border-[#C6AC8E] bg-white text-[#5E503F] hover:bg-[#C6AC8E]/5 px-8 py-3 text-base rounded-lg">
                      View Documentation
                    </Button>
                  </div>
                  
                  {/* Support info */}
                  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#F8F5F0] flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-[#C6AC8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <span className="text-sm text-[#5E503F]">24/7 App Support</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#F8F5F0] flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-[#C6AC8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <span className="text-sm text-[#5E503F]">Email: support@authentico.com</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Image */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/cta/customer-service.png" // Replace with your actual image
                  alt="Authentico Support Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/30 to-transparent"></div>
                
                {/* Floating badge */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg border border-[#E8E2D9] max-w-[80%]">
                  <p className="font-medium text-[#1A1A1A] text-center">
                    "Our expert team is available to assist with any authentication questions you may have."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mt-16 text-center">
            <p className="text-[#5E503F] mb-6">
              You might also find these resources helpful:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/what-we-authenticate">
                <Button variant="outline" size="sm" className="border-[#C6AC8E] text-[#5E503F] hover:bg-[#C6AC8E]/5">
                  What We Authenticate
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="sm" className="border-[#C6AC8E] text-[#5E503F] hover:bg-[#C6AC8E]/5">
                  Pricing Plans
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" size="sm" className="border-[#C6AC8E] text-[#5E503F] hover:bg-[#C6AC8E]/5">
                  Authentication Guide
                </Button>
              </Link>
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
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
