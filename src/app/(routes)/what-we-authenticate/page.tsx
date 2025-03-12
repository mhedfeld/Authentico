import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';

export default function WhatWeAuthenticatePage() {
  // Brand categories with their respective brands
  const categories = [
    {
      name: "Luxury Fashion",
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
      brands: [
        { name: "Rolex", slug: "rolex", logo: '/logos/rolex_logo.png', items: ["Watches"] },
        { name: "Omega", slug: "omega", logo: '/logos/omega_logo.png', items: ["Watches"] },
        { name: "Cartier", slug: "cartier", logo: '/logos/cartier_logo.png', items: ["Watches", "Jewelry"] },
        { name: "Patek Philippe", slug: "patek-philippe", logo: '/logos/patek_philippe_logo.png', items: ["Watches"] },
        { name: "Audemars Piguet", slug: "audemars-piguet", logo: '/logos/audemars_piguet_logo.png', items: ["Watches"] }
      ]
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
              What We Authenticate
            </h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              LEGIT APP authenticates a wide range of luxury and designer items across multiple categories.
              Our expert team verifies over 300 brands to ensure you can buy and sell with confidence.
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
                placeholder="Search brands or items..."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories and Brands Section */}
      {categories.map((category, index) => (
        <section key={index} className={`py-16 ${index % 2 === 1 ? 'bg-stone-900/50' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-amber-400">{category.name}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.brands.map((brand) => (
                <div 
                  key={brand.slug}
                  className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all hover:shadow-lg hover:shadow-amber-500/5 hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 p-2">
                        <Image 
                          src={brand.logo} 
                          alt={brand.name} 
                          width={32} 
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{brand.name}</h3>
                    </div>
                    <div className="space-y-2 mb-6">
                      <p className="text-sm text-stone-400">We authenticate:</p>
                      <ul className="text-stone-300 text-sm space-y-1">
                        {brand.items.map((item, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={`/what-we-authenticate/${brand.slug}`}>
                      <Button variant="link" className="text-amber-400 p-0 hover:text-amber-300">
                        Learn more →
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      
      {/* Process Section */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[100px] right-[100px] w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[150px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How Our Authentication Works</h2>
            <p className="text-lg text-stone-300 max-w-3xl mx-auto">
              Our rigorous authentication process ensures that every item is thoroughly examined by experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-black">1</div>
              <h3 className="text-xl font-bold mb-4 mt-2">Submit Photos</h3>
              <p className="text-stone-300">
                Take clear photos of your item following our guidelines. Our app will guide you through exactly what angles and details we need.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-black">2</div>
              <h3 className="text-xl font-bold mb-4 mt-2">Expert Review</h3>
              <p className="text-stone-300">
                Your item is reviewed by multiple expert authenticators who specialize in the specific brand and item category.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-black">3</div>
              <h3 className="text-xl font-bold mb-4 mt-2">Get Results</h3>
              <p className="text-stone-300">
                Receive a clear verdict: Authentic or Replica, along with a digital certificate for authentic items that you can share with buyers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-amber-500/20 to-amber-700/20 backdrop-blur-md rounded-3xl border border-amber-500/30 p-10 md:p-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Authenticate Your Items?</h2>
              <p className="text-lg text-stone-300 max-w-2xl mx-auto mb-8">
                Download the LEGIT APP today and get your items authenticated by our experts in as little as 10 minutes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                  Download App
                </Button>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20">
                    View Pricing
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
