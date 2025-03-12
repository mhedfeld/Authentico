'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (index: number) => {
    if (openFAQs.includes(index)) {
      setOpenFAQs(openFAQs.filter(i => i !== index));
    } else {
      setOpenFAQs([...openFAQs, index]);
    }
  };

  // FAQ categories with questions and answers
  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What is LEGIT APP?",
          answer: "LEGIT APP is a leading authentication service for luxury items, sneakers, and designer products. We use a combination of expert authenticators and AI technology to verify the authenticity of items, helping buyers and sellers trade with confidence."
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
    }
  ];

  // Filter FAQs based on search query
  const filteredFAQs = searchQuery.trim() === '' 
    ? faqCategories 
    : faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.faqs.length > 0);

  return (
    <main className="bg-gradient-to-b from-black to-stone-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-[100px]"></div>
          <div className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Find answers to common questions about our authentication services, process, and more.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-stone-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Sections */}
      <section className="py-10 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((category, categoryIndex) => (
              category.faqs.length > 0 && (
                <div key={categoryIndex} className="mb-16">
                  <h2 className="text-2xl font-bold mb-8 text-amber-400">{category.title}</h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const index = categoryIndex * 100 + faqIndex;
                      const isOpen = openFAQs.includes(index);
                      
                      return (
                        <div 
                          key={faqIndex} 
                          className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden transition-all duration-300"
                        >
                          <button
                            className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                          >
                            <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-amber-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-amber-500 flex-shrink-0" />
                            )}
                          </button>
                          <div 
                            className={`px-6 overflow-hidden transition-all duration-300 ${
                              isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                            }`}
                          >
                            <p className="text-stone-300">{faq.answer}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-stone-300">No FAQs match your search. Please try a different query.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 relative bg-stone-900">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[100px] right-[100px] w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[150px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-amber-500/20 to-amber-700/20 backdrop-blur-md rounded-3xl border border-amber-500/30 p-10 md:p-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-lg text-stone-300 max-w-2xl mx-auto mb-8">
                If you couldn't find the answer you were looking for, our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                    Contact Support
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20">
                  Download App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
