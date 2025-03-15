"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, XCircle, HelpCircle, ChevronRight, ChevronDown, Shield, Clock, FileCheck } from 'lucide-react';
import { useState, useEffect } from 'react';
import { LuxuryPattern } from '@/components/ui/luxury-pattern';

export default function PricingPage() {
  // State management
  const [isAnnual, setIsAnnual] = useState(false);
  const [activeTab, setActiveTab] = useState('individual');
  const [isComparisonExpanded, setIsComparisonExpanded] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  
  // Animation states
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Create subtle animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('pricing-cards');
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
  
  // Define pricing plans
  const individualPlans = [
    {
      name: "Standard",
      description: "Perfect for occasional authentications",
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      savings: 19.89,
      creditsPerMonth: 3,
      featuredBenefit: "Results within 24 hours",
      features: [
        { name: "AI-powered primary verification", included: true },
        { name: "Expert secondary review", included: true },
        { name: "Digital certificate", included: true },
        { name: "Email support", included: true },
        { name: "Priority handling", included: false },
        { name: "Certificate sharing", included: false },
      ],
      popular: false,
      ctaText: "Select Plan",
      color: "from-[#C6AC8E]/70 to-[#5E503F]/70"
    },
    {
      name: "Premium",
      description: "Ideal for regular collectors and sellers",
      monthlyPrice: 19.99,
      annualPrice: 199.99,
      savings: 39.89,
      creditsPerMonth: 8,
      featuredBenefit: "Results within 6 hours",
      features: [
        { name: "AI-powered primary verification", included: true },
        { name: "Expert secondary review", included: true },
        { name: "Digital certificate", included: true },
        { name: "Priority email & chat support", included: true },
        { name: "Priority handling", included: true },
        { name: "Certificate sharing", included: true },
      ],
      popular: true,
      ctaText: "Select Plan",
      color: "from-[#C6AC8E] to-[#5E503F]"
    },
    {
      name: "Connoisseur",
      description: "For serious collectors and resellers",
      monthlyPrice: 39.99,
      annualPrice: 399.99,
      savings: 79.89,
      creditsPerMonth: 20,
      featuredBenefit: "Results within 1 hour",
      features: [
        { name: "AI-powered primary verification", included: true },
        { name: "Multiple expert reviews", included: true },
        { name: "Premium digital certificate", included: true },
        { name: "24/7 dedicated support", included: true },
        { name: "VIP priority handling", included: true },
        { name: "Authentication history archive", included: true },
      ],
      popular: false,
      ctaText: "Select Plan",
      color: "from-[#C6AC8E]/70 to-[#5E503F]/70"
    }
  ];
  
  const businessPlans = [
    {
      name: "Business",
      description: "For small businesses and shops",
      monthlyPrice: 99.99,
      annualPrice: 999.99,
      savings: 199.89,
      creditsPerMonth: 50,
      featuredBenefit: "Bulk authentications",
      features: [
        { name: "Business dashboard", included: true },
        { name: "Team member accounts (3)", included: true },
        { name: "API access (limited)", included: true },
        { name: "Bulk upload tool", included: true },
        { name: "Priority business support", included: true },
        { name: "White-label certificates", included: false },
      ],
      popular: false,
      ctaText: "Select Plan",
      color: "from-[#C6AC8E]/70 to-[#5E503F]/70"
    },
    {
      name: "Enterprise",
      description: "For marketplaces and large retailers",
      monthlyPrice: null, // Custom pricing
      annualPrice: null,
      savings: null,
      creditsPerMonth: "Custom",
      featuredBenefit: "White-label solution",
      features: [
        { name: "Full business platform", included: true },
        { name: "Unlimited team members", included: true },
        { name: "Complete API integration", included: true },
        { name: "Custom authentication workflow", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "White-label solution", included: true },
      ],
      popular: true,
      ctaText: "Contact Sales",
      color: "from-[#C6AC8E] to-[#5E503F]"
    }
  ];
  
  // FAQs related to pricing
  const faqs = [
    {
      question: "What is an authentication credit?",
      answer: "An authentication credit allows you to submit one item for authentication. Each plan includes a specific number of credits per month, which reset at the beginning of your billing cycle. Additional credits can be purchased separately if needed."
    },
    {
      question: "How does the billing cycle work?",
      answer: "For monthly plans, you're billed every 30 days from your sign-up date. Annual plans are billed once per year. You can change or cancel your subscription at any time through your account settings."
    },
    {
      question: "Do unused credits roll over?",
      answer: "No, authentication credits do not roll over to the next month. However, annual subscribers receive a 10% bonus on their monthly credits as an additional benefit."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the new rate will apply at the start of your next billing cycle."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 14-day money-back guarantee for all new subscriptions if you're not completely satisfied with our service."
    }
  ];
  
  // Get active plans based on current tab
  const activePlans = activeTab === 'individual' ? individualPlans : businessPlans;
  
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
              <span className="text-[#1A1A1A]">Investment in </span>
              <span className="text-[#C6AC8E]">Authenticity</span>
            </h1>
            
            <div className="h-[1px] w-40 mx-auto bg-gradient-to-r from-transparent via-[#C6AC8E]/70 to-transparent mb-8"></div>
            
            <p className="text-xl text-[#5E503F] max-w-3xl mx-auto leading-relaxed">
              Choose a plan that aligns with your authentication needs. From casual collectors to enterprise marketplaces, we offer tailored solutions with uncompromising quality.
            </p>
          </div>
          
          {/* Plan type toggle */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex rounded-xl p-1.5 bg-white border border-[#E8E2D9] shadow-sm">
              <button
                onClick={() => setActiveTab('individual')}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  activeTab === 'individual'
                    ? 'bg-[#C6AC8E]/10 text-[#C6AC8E]'
                    : 'text-[#5E503F] hover:text-[#5E503F]/80'
                }`}
              >
                Individual Plans
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  activeTab === 'business'
                    ? 'bg-[#C6AC8E]/10 text-[#C6AC8E]'
                    : 'text-[#5E503F] hover:text-[#5E503F]/80'
                }`}
              >
                Business Plans
              </button>
            </div>
          </div>
          
          {/* Billing toggle */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <div className="inline-flex items-center p-1 bg-white border border-[#E8E2D9] rounded-full shadow-sm mb-4">
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
                </button>
              </div>
              
              {/* Savings badge */}
              {isAnnual && (
                <div className="absolute -top-4 -right-4 bg-[#C6AC8E] text-white text-xs font-medium py-1 px-3 rounded-full animate-pulse">
                  Save up to 20%
                </div>
              )}
            </div>
            
            <p className="text-[#5E503F] text-sm">
              {isAnnual 
                ? "Save with our annual plans and get an additional 10% bonus credits."
                : "Switch to annual billing for up to 20% savings and bonus credits."
              }
            </p>
          </div>
        </div>
      </section>
            {/* Pricing Cards Section */}
            <section id="pricing-cards" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activePlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative rounded-xl overflow-hidden transition-all duration-500 ${
                  plan.popular 
                    ? 'md:scale-105 md:-translate-y-4 z-10 shadow-xl' 
                    : 'shadow-lg hover:shadow-xl hover:-translate-y-2'
                } ${isAnimating ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Top accent bar */}
                <div className={`h-2 w-full bg-gradient-to-r ${plan.color}`}></div>
                
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-6 bg-[#C6AC8E] text-white text-xs font-medium py-1.5 px-3 rounded-b-md shadow-md">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="bg-white p-8 h-full flex flex-col border border-t-0 border-[#E8E2D9]">
                  {/* Plan name and description */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#1A1A1A]">{plan.name}</h3>
                    <p className="text-[#5E503F] mt-1">{plan.description}</p>
                  </div>
                  
                  {/* Price */}
                  <div className="mb-6">
                    {plan.monthlyPrice !== null ? (
                      <>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-[#1A1A1A]">
                            ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                          </span>
                          <span className="text-[#5E503F]/80 ml-2 mb-1">
                            {isAnnual ? '/year' : '/month'}
                          </span>
                        </div>
                        
                        {/* Credits info */}
                        <div className="mt-2 flex items-center">
                          <div className="w-5 h-5 rounded-full bg-[#F8F5F0] flex items-center justify-center mr-2">
                            <span className="text-[#C6AC8E] text-xs font-bold">✓</span>
                          </div>
                          <span className="text-[#5E503F]">
                            {plan.creditsPerMonth} {typeof plan.creditsPerMonth === 'number' ? 'credits' : ''} per month
                          </span>
                        </div>
                        
                        {/* Savings callout for annual */}
                        {isAnnual && plan.savings && (
                          <div className="mt-2 text-sm text-[#C6AC8E] font-medium bg-[#F8F5F0] px-3 py-1 rounded-md inline-block">
                            Save ${plan.savings} per year
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-3xl font-bold text-[#1A1A1A]">Custom Pricing</div>
                    )}
                  </div>
                  
                  {/* Featured benefit */}
                  <div className="bg-[#F8F5F0] px-4 py-3 rounded-xl mb-6 border border-[#E8E2D9]">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-[#C6AC8E] mr-2 flex-shrink-0" />
                      <span className="text-[#5E503F] font-medium">{plan.featuredBenefit}</span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        {feature.included ? (
                          <CheckCircle2 className="h-5 w-5 text-[#C6AC8E] mr-3 mt-0.5 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-[#5E503F]/30 mr-3 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={`${feature.included ? 'text-[#5E503F]' : 'text-[#5E503F]/60'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Link 
                    href={plan.ctaText === "Contact Sales" ? "/contact" : "/signup"}
                    className={`w-full py-4 text-center rounded-lg transition-all duration-300 relative overflow-hidden group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] text-white hover:shadow-lg'
                        : 'bg-white border border-[#C6AC8E] text-[#5E503F] hover:bg-[#C6AC8E]/5'
                    }`}
                  >
                    <span className="relative z-10">{plan.ctaText}</span>
                    <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine"></div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enterprise callout for individual plans */}
          {activeTab === 'individual' && (
            <div className="mt-16 bg-white rounded-xl border border-[#E8E2D9] shadow-md p-8 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Need a custom solution?</h3>
                <p className="text-[#5E503F]">For businesses, marketplaces, or high-volume needs, our Enterprise solution offers customized authentication services.</p>
              </div>
              <Link href="/contact">
                <Button className="whitespace-nowrap bg-white border-2 border-[#C6AC8E] text-[#5E503F] hover:bg-[#C6AC8E]/5 px-6 py-3 rounded-lg">
                  Contact Sales
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
      
      {/* Features Comparison Section */}
      <section className="py-16 bg-[#F8F5F0] relative">
        <LuxuryPattern opacity={3} />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#1A1A1A]">Detailed Plan Comparison</h2>
            <p className="text-[#5E503F] max-w-3xl mx-auto">
              Compare features across our plans to find the perfect match for your authentication needs.
            </p>
          </div>
          
          {/* Comparison table with expandable sections */}
          <div className="bg-white rounded-xl shadow-lg border border-[#E8E2D9] overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-5 border-b border-[#E8E2D9]">
              <div className="col-span-2 p-5 bg-[#F8F5F0]">
                <h3 className="font-medium text-[#1A1A1A]">Features</h3>
              </div>
              {individualPlans.map((plan, index) => (
                <div key={index} className={`p-5 text-center ${plan.popular ? 'bg-[#C6AC8E]/10' : ''}`}>
                  <h3 className="font-medium text-[#1A1A1A]">{plan.name}</h3>
                </div>
              ))}
            </div>
            
            {/* Basic features section */}
            <div className="divide-y divide-[#E8E2D9]">
              <div className="grid grid-cols-5 hover:bg-[#F8F5F0]/50 transition-colors">
                <div className="col-span-2 p-5">
                  <span className="text-[#5E503F]">Authentication Credits</span>
                </div>
                {individualPlans.map((plan, index) => (
                  <div key={index} className={`p-5 text-center ${plan.popular ? 'bg-[#C6AC8E]/5' : ''}`}>
                    <span className="text-[#5E503F]">{plan.creditsPerMonth}/mo</span>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-5 hover:bg-[#F8F5F0]/50 transition-colors">
                <div className="col-span-2 p-5">
                  <span className="text-[#5E503F]">Authentication Speed</span>
                </div>
                <div className="p-5 text-center">
                  <span className="text-[#5E503F]">Within 24h</span>
                </div>
                <div className="p-5 text-center bg-[#C6AC8E]/5">
                  <span className="text-[#5E503F]">Within 6h</span>
                </div>
                <div className="p-5 text-center">
                  <span className="text-[#5E503F]">Within 1h</span>
                </div>
              </div>
              
              <div className="grid grid-cols-5 hover:bg-[#F8F5F0]/50 transition-colors">
                <div className="col-span-2 p-5">
                  <span className="text-[#5E503F]">AI Verification</span>
                </div>
                {individualPlans.map((plan, index) => (
                  <div key={index} className={`p-5 text-center ${plan.popular ? 'bg-[#C6AC8E]/5' : ''}`}>
                    <CheckCircle2 className="h-5 w-5 text-[#C6AC8E] mx-auto" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Expandable advanced features */}
            <div className={`transition-all duration-500 overflow-hidden ${isComparisonExpanded ? 'max-h-[1000px]' : 'max-h-0'}`}>
              <div className="divide-y divide-[#E8E2D9]">
                <div className="grid grid-cols-5 hover:bg-[#F8F5F0]/50 transition-colors">
                  <div className="col-span-2 p-5">
                    <span className="text-[#5E503F]">Expert Review Level</span>
                  </div>
                  <div className="p-5 text-center">
                    <span className="text-[#5E503F]">Single Expert</span>
                  </div>
                  <div className="p-5 text-center bg-[#C6AC8E]/5">
                    <span className="text-[#5E503F]">Single Expert</span>
                  </div>
                  <div className="p-5 text-center">
                    <span className="text-[#5E503F]">Multiple Experts</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-5 hover:bg-[#F8F5F0]/50 transition-colors">
                  <div className="col-span-2 p-5">
                    <span className="text-[#5E503F]">Certificate Quality</span>
                  </div>
                  <div className="p-5 text-center">
                    <span className="text-[#5E503F]">Standard</span>
                  </div>
                  <div className="p-5 text-center bg-[#C6AC8E]/5">
                    <span className="text-[#5E503F]">Enhanced</span>
                  </div>
                  <div className="p-5 text-center">
                    <span className="text-[#5E503F]">Premium</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-5 hover:bg-[#F8F5F0]/50 transition-colors">
                  <div className="col-span-2 p-5">
                    <span className="text-[#5E503F]">Certificate Sharing</span>
                  </div>
                  <div className="p-5 text-center">
                    <XCircle className="h-5 w-5 text-[#5E503F]/30 mx-auto" />
                  </div>
                  <div className="p-5 text-center bg-[#C6AC8E]/5">
                    <CheckCircle2 className="h-5 w-5 text-[#C6AC8E] mx-auto" />
                  </div>
                  <div className="p-5 text-center">
                    <CheckCircle2 className="h-5 w-5 text-[#C6AC8E] mx-auto" />
                  </div>
                </div>
                
                <div className="grid grid-cols-5 hover:bg-[#F8F5F0]/50 transition-colors">
                  <div className="col-span-2 p-5">
                    <span className="text-[#5E503F]">Authentication History</span>
                  </div>
                  <div className="p-5 text-center">
                    <span className="text-[#5E503F]">30 days</span>
                  </div>
                  <div className="p-5 text-center bg-[#C6AC8E]/5">
                    <span className="text-[#5E503F]">1 year</span>
                  </div>
                  <div className="p-5 text-center">
                    <span className="text-[#5E503F]">Unlimited</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-5 hover:bg-[#F8F5F0]/50 transition-colors">
                  <div className="col-span-2 p-5">
                    <span className="text-[#5E503F]">Support Type</span>
                  </div>
                  <div className="p-5 text-center">
                    <span className="text-[#5E503F]">Email</span>
                  </div>
                  <div className="p-5 text-center bg-[#C6AC8E]/5">
                    <span className="text-[#5E503F]">Email & Chat</span>
                  </div>
                  <div className="p-5 text-center">
                    <span className="text-[#5E503F]">24/7 Dedicated</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Expand/Collapse button */}
            <div 
              className="p-4 border-t border-[#E8E2D9] bg-[#F8F5F0] flex justify-center cursor-pointer hover:bg-[#E8E2D9]/30 transition-colors"
              onClick={() => setIsComparisonExpanded(!isComparisonExpanded)}
            >
              <div className="flex items-center text-[#5E503F] font-medium">
                {isComparisonExpanded ? 'Show Less' : 'Show All Features'}
                <ChevronDown className={`ml-2 h-5 w-5 transition-transform duration-300 ${isComparisonExpanded ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-[#C6AC8E] to-transparent"></div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">Frequently Asked Questions</h2>
            
            <p className="text-[#5E503F]">Find answers to common questions about our pricing plans and authentication credits.</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-[#E8E2D9] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div 
                  className="p-6 flex justify-between items-center cursor-pointer"
                  onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                >
                  <h3 className="text-lg font-medium text-[#1A1A1A] pr-4">{faq.question}</h3>
                  <div className={`w-8 h-8 rounded-full bg-[#F8F5F0] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${activeQuestion === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="h-5 w-5 text-[#C6AC8E]" />
                  </div>
                </div>
                
                <div className={`transition-all duration-300 overflow-hidden ${activeQuestion === index ? 'max-h-40' : 'max-h-0'}`}>
                  <div className="p-6 pt-0 border-t border-[#E8E2D9]">
                    <p className="text-[#5E503F]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-[#F8F5F0] relative">
        <LuxuryPattern opacity={4} />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl border border-[#E8E2D9] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left side - Image */}
              <div className="relative h-64 lg:h-auto order-2 lg:order-1">
                <Image
                  src="/cta/cta-app-image.png" // Replace with your image
                  alt="Authentico Premium Authentication"
                  fill
                  className="object-cover"
                />
                
                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-48 h-48 border border-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute w-64 h-64 border border-white/20 rounded-full"></div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="p-10 lg:p-16 order-1 lg:order-2 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="h-1 w-20 bg-[#C6AC8E]"></div>
                </div>
                
                <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">Ready to Authenticate with Confidence?</h2>
                
                <p className="text-[#5E503F] mb-8 leading-relaxed">
                  Start your authentication journey today with our premium service. Experience the peace of mind that comes with verified authenticity.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] hover:from-[#D9C4AA] hover:to-[#6E6049] text-white border-0 shadow-lg px-8 py-6 rounded-lg relative overflow-hidden group">
                    <span className="relative z-10">Download App</span>
                    <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine"></div>
                  </Button>
                  
                  <Button variant="outline" className="border-2 border-[#C6AC8E] text-[#5E503F] hover:bg-[#C6AC8E]/5 px-8 py-6 rounded-lg">
                    Try Demo
                  </Button>
                </div>
                              {/* Trust badge */}
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
                
                {/* Money-back guarantee */}
                <div className="mt-4 flex items-center text-[#5E503F]">
                  <Shield className="h-5 w-5 text-[#C6AC8E] mr-2" />
                  <span>14-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Add shine animation to global styles */}
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
