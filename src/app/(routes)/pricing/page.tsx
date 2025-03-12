import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, ShoppingBag, Watch, Footprints } from 'lucide-react';

export default function PricingPage() {
  // Pricing plans for different categories
  const pricingCategories = [
    {
      icon: <ShoppingBag className="h-10 w-10 text-amber-500" />,
      title: "Luxury Handbags",
      description: "Authentication for designer handbags, wallets, and accessories",
      startingPrice: "10",
      options: [
        { time: "30 Minutes", price: "20" },
        { time: "1 Hour", price: "15" },
        { time: "4 Hours", price: "10" }
      ],
      features: [
        "Reviews by two or more expert authenticators",
        "AI-assisted verification technology",
        "FREE digital certificate of authenticity",
        "Financial guarantee up to $10,000",
        "24/7 customer support"
      ],
      gradient: "from-amber-500/20 to-amber-700/20",
      accentColor: "text-amber-500",
      borderGradient: "from-amber-500/30 via-amber-700/30 to-amber-500/30"
    },
    {
      icon: <Watch className="h-10 w-10 text-blue-500" />,
      title: "Luxury Watches",
      description: "Authentication for premium and luxury timepieces",
      startingPrice: "30",
      options: [
        { time: "1 Hour", price: "50" },
        { time: "4 Hours", price: "40" },
        { time: "24 Hours", price: "30" }
      ],
      features: [
        "Reviews by certified horologists",
        "Movement and serial number verification",
        "FREE digital certificate of authenticity",
        "Financial guarantee up to $25,000",
        "24/7 customer support"
      ],
      gradient: "from-blue-500/20 to-blue-700/20",
      accentColor: "text-blue-500",
      borderGradient: "from-blue-500/30 via-blue-700/30 to-blue-500/30"
    },
    {
      icon: <Footprints className="h-10 w-10 text-green-500" />,
      title: "Sneakers",
      description: "Authentication for sneakers and athletic footwear",
      startingPrice: "3",
      options: [
        { time: "10 Minutes", price: "5" },
        { time: "15 Minutes", price: "4" },
        { time: "30 Minutes", price: "3" }
      ],
      features: [
        "Reviews by sneaker authentication experts",
        "AI-assisted verification technology",
        "FREE digital certificate of authenticity",
        "Financial guarantee up to $2,000",
        "24/7 customer support"
      ],
      gradient: "from-green-500/20 to-green-700/20",
      accentColor: "text-green-500",
      borderGradient: "from-green-500/30 via-green-700/30 to-green-500/30"
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How does the pricing work?",
      answer: "Our pricing is based on the type of item and your desired turnaround time. The faster you need results, the higher the price. You can choose the option that best fits your needs and budget."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. Payment is processed securely through our app at the time of submission."
    },
    {
      question: "Is there a refund if my item is deemed replica?",
      answer: "No, our fee is for the authentication service regardless of the outcome. However, knowing an item is a replica can save you from a much more expensive purchase."
    },
    {
      question: "Do you offer discounts for bulk authentication?",
      answer: "Yes, we offer special pricing for bulk authentication. Please contact our sales team for more information on enterprise pricing."
    },
    {
      question: "What is the financial guarantee?",
      answer: "Our financial guarantee provides compensation if we incorrectly authenticate an item. The coverage amount varies by item category and is subject to our terms and conditions."
    }
  ];

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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Choose the authentication service that fits your needs and budget.
              Pay only for what you need, with no hidden fees or subscriptions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing Cards Section */}
      <section className="py-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingCategories.map((category, index) => (
              <div key={index} className="relative group">
                {/* Animated border gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.borderGradient} rounded-2xl z-0 animate-pulse-slow`}></div>
                
                {/* Card content with glassmorphism */}
                <div className={`relative m-[1px] bg-gradient-to-br ${category.gradient} backdrop-blur-xl rounded-2xl overflow-hidden z-10 h-full`}>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/40 to-white/0"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/40 to-white/0"></div>
                  
                  <div className="px-8 py-10">
                    <div className="flex items-center gap-4 mb-6">
                      {category.icon}
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    </div>
                    <p className="text-stone-300 mb-8">{category.description}</p>
                    
                    <div className="mb-8">
                      <p className="text-sm text-stone-400 mb-1">Starting from</p>
                      <p className={`text-4xl font-bold ${category.accentColor}`}>${category.startingPrice} <span className="text-lg text-stone-400">USD</span></p>
                    </div>
                    
                    <div className="border-t border-b border-white/10 py-8 mb-8">
                      <p className="text-sm font-medium text-stone-300 mb-6">Turnaround Time Options</p>
                      {category.options.map((option, idx) => (
                        <div key={idx} className="flex justify-between mb-4">
                          <span className="text-stone-300">{option.time}</span>
                          <span className={`font-bold ${category.accentColor}`}>${option.price} USD</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mb-8">
                      <p className="text-sm font-medium text-stone-300 mb-6">All Services Include</p>
                      <ul className="space-y-4">
                        {category.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className={`p-1 rounded-full bg-gradient-to-br ${category.gradient} mr-3 flex-shrink-0`}>
                              <Check className="h-4 w-4 text-white" />
                            </div>
                            <span className="text-stone-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
                      Download App
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enterprise Pricing Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Enterprise Pricing</h2>
                <p className="text-lg text-stone-300 mb-8">
                  For businesses that need to authenticate items at scale, we offer custom pricing plans tailored to your specific needs.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-700/20 mr-3 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-stone-300">Volume discounts based on authentication quantity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-700/20 mr-3 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-stone-300">API integration for seamless workflow</span>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-700/20 mr-3 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-stone-300">White-label authentication solutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-700/20 mr-3 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-stone-300">Dedicated account manager and priority support</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white">
                    Contact Sales
                  </Button>
                </Link>
              </div>
              
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
                    <p className="text-stone-300 max-w-xs mx-auto">
                      Tailored pricing and features for marketplaces, retailers, and authentication services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 relative bg-stone-900">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[100px] right-[100px] w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[150px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto">
              Have questions about our pricing? Find answers to common questions below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6">
                <h3 className="text-xl font-bold mb-4">{item.question}</h3>
                <p className="text-stone-300">{item.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-stone-300 mb-6">
              Don't see your question here? Contact our support team for more information.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

            {/* CTA Section */}
    <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-amber-500/20 to-amber-700/20 backdrop-blur-md rounded-3xl border border-amber-500/30 p-10 md:p-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-stone-300 max-w-2xl mx-auto mb-8">
                Download the LEGIT APP today and get your items authenticated by our experts.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                  Download App
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
