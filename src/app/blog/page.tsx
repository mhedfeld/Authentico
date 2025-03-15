'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, User, Tag, ChevronRight, Search, ArrowRight, ChevronDown } from 'lucide-react';
import { LuxuryPattern } from '@/components/ui/luxury-pattern';
import { useState, useEffect } from 'react';

export default function BlogPage() {
  // Animation and interaction states
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState('newest');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Create subtle animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('blog-content');
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
  
  // Featured blog post
  const featuredPost = {
    id: "authentication-guide-2025",
    title: "The Ultimate Authentication Guide for 2025",
    excerpt: "Learn how to spot the latest counterfeit techniques and protect yourself when buying luxury items online. Our experts share their insights on the most sophisticated methods used by counterfeiters and how to stay one step ahead.",
    coverImage: "/blog/featured-authentication-guide.jpg", // Replace with actual image
    date: "March 5, 2025",
    author: "Sarah Johnson",
    authorImage: "/team/sarah-johnson.jpg", // Replace with actual image
    authorRole: "Head of Authentication",
    category: "Authentication Guides",
    readTime: "8 min read"
  };

  // Recent blog posts
  const recentPosts = [
    {
      id: "louis-vuitton-authentication",
      title: "How to Authenticate Louis Vuitton: The Definitive Guide",
      excerpt: "A comprehensive guide to authenticating Louis Vuitton bags, from canvas patterns to date codes and hardware details.",
      coverImage: "/blog/louis-vuitton-guide.jpg", // Replace with actual image
      date: "February 28, 2025",
      author: "Elena Rodriguez",
      authorImage: "/team/elena-rodriguez.jpg", // Replace with actual image
      category: "Authentication Guides",
      readTime: "12 min read"
    },
    {
      id: "sneaker-market-trends",
      title: "Sneaker Market Trends: What's Hot and What's Not in 2025",
      excerpt: "An analysis of the current sneaker market, including the most counterfeited models and how to avoid fakes.",
      coverImage: "/blog/sneaker-trends.jpg", // Replace with actual image
      date: "February 20, 2025",
      author: "Michael Chen",
      authorImage: "/team/michael-chen.jpg", // Replace with actual image
      category: "Market Insights",
      readTime: "10 min read"
    },
    {
      id: "counterfeit-technology",
      title: "The Evolution of Counterfeit Technology and How to Stay Ahead",
      excerpt: "As counterfeiters become more sophisticated, learn how authentication technology is evolving to combat fakes.",
      coverImage: "/blog/counterfeit-tech.jpg", // Replace with actual image
      date: "February 15, 2025",
      author: "James Wilson",
      authorImage: "/team/james-wilson.jpg", // Replace with actual image
      category: "Industry News",
      readTime: "7 min read"
    },
    {
      id: "rolex-authentication",
      title: "Rolex Authentication: 10 Details That Reveal a Fake",
      excerpt: "Expert tips on spotting fake Rolex watches, from movement details to dial printing and case finishing.",
      coverImage: "/blog/rolex-authentication.jpg", // Replace with actual image
      date: "February 8, 2025",
      author: "Thomas Wright",
      authorImage: "/team/thomas-wright.jpg", // Replace with actual image
      category: "Authentication Guides",
      readTime: "15 min read"
    },
    {
      id: "authentication-app-comparison",
      title: "Authentication Apps Compared: Which One Should You Trust?",
      excerpt: "A detailed comparison of the top authentication services in the market and why Authentico stands out.",
      coverImage: "/blog/app-comparison.jpg", // Replace with actual image
      date: "January 30, 2025",
      author: "Sarah Johnson",
      authorImage: "/team/sarah-johnson.jpg", // Replace with actual image
      category: "Reviews",
      readTime: "9 min read"
    },
    {
      id: "designer-bag-investment",
      title: "Designer Bags as Investments: What to Buy in 2025",
      excerpt: "Which luxury bags are worth investing in this year? Our experts analyze market trends and resale values.",
      coverImage: "/blog/designer-bag-investment.jpg", // Replace with actual image
      date: "January 22, 2025",
      author: "Elena Rodriguez",
      authorImage: "/team/elena-rodriguez.jpg", // Replace with actual image
      category: "Market Insights",
      readTime: "11 min read"
    }
  ];

  // Blog categories
  const categories = [
    "Authentication Guides",
    "Market Insights",
    "Industry News",
    "Reviews",
    "Tips & Tricks",
    "Company Updates"
  ];
  
  // Filter posts by category if needed
  const filteredPosts = activeCategory 
    ? recentPosts.filter(post => post.category === activeCategory)
    : recentPosts;

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
              <span className="text-[#1A1A1A]">Authentico </span>
              <span className="text-[#C6AC8E]">Journal</span>
            </h1>
            
            <div className="h-[1px] w-40 mx-auto bg-gradient-to-r from-transparent via-[#C6AC8E]/70 to-transparent mb-8"></div>
            
            <p className="text-xl text-[#5E503F] max-w-3xl mx-auto leading-relaxed">
              Expert insights, authentication guides, and industry news to help you navigate the world of luxury goods with confidence.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#C6AC8E]" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 bg-white border border-[#E8E2D9] rounded-xl text-[#1A1A1A] placeholder-[#8A7968] focus:outline-none focus:ring-2 focus:ring-[#C6AC8E] focus:border-transparent shadow-md transition-all duration-300"
                placeholder="Search articles..."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Category Tabs */}
      <section className="py-4 bg-white sticky top-20 z-30 border-y border-[#E8E2D9] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === null
                  ? 'bg-[#C6AC8E]/10 text-[#C6AC8E]'
                  : 'text-[#5E503F] hover:bg-[#F8F5F0] hover:text-[#C6AC8E]'
              }`}
            >
              All Articles
            </button>
            
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#C6AC8E]/10 text-[#C6AC8E]'
                    : 'text-[#5E503F] hover:bg-[#F8F5F0] hover:text-[#C6AC8E]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Post Section */}
      <section id="blog-content" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center mb-8">
            <div className="h-6 w-1 bg-[#C6AC8E] rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold text-[#1A1A1A]">Featured Article</h2>
          </div>
          
          <div 
            className={`bg-white rounded-xl border border-[#E8E2D9] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ${
              isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            onMouseEnter={() => setHoveredPost(featuredPost.id)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[300px] lg:h-auto overflow-hidden">
                <Image 
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredPost === featuredPost.id ? 'scale-105' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/0 via-[#1A1A1A]/0 to-[#1A1A1A]/30"></div>
                
                {/* Category badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm text-[#C6AC8E] px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-10">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-[#5E503F] text-sm flex items-center">
                    <Clock className="h-4 w-4 text-[#C6AC8E] mr-1.5" /> {featuredPost.readTime}
                  </span>
                  <span className="text-[#5E503F] text-sm">
                    {featuredPost.date}
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-[#1A1A1A]">{featuredPost.title}</h3>
                <p className="text-[#5E503F] mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E8E2D9] mr-3 relative">
                      <Image 
                        src={featuredPost.authorImage}
                        alt={featuredPost.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-[#1A1A1A]">{featuredPost.author}</p>
                      <p className="text-[#5E503F] text-sm">{featuredPost.authorRole}</p>
                    </div>
                  </div>
                  
                  <Link href={`/blog/${featuredPost.id}`}>
                    <Button 
                      className="bg-white border-2 border-[#C6AC8E] text-[#5E503F] hover:bg-[#C6AC8E]/5 group"
                    >
                      <span className="flex items-center">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Posts Section */}
      <section className="py-16 bg-[#F8F5F0] relative">
        <LuxuryPattern opacity={3} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center">
              <div className="h-6 w-1 bg-[#C6AC8E] rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                {activeCategory ? activeCategory : "Latest Articles"}
              </h2>
            </div>
            
            <div className="relative inline-block">
              <select 
                className="appearance-none bg-white border border-[#E8E2D9] rounded-lg text-[#1A1A1A] pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#C6AC8E] focus:border-transparent cursor-pointer"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <ChevronDown className="h-4 w-4 text-[#C6AC8E]" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link 
                href={`/blog/${post.id}`} 
                key={post.id}
                className="group"
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <div 
                  className={`bg-white rounded-xl border border-[#E8E2D9] overflow-hidden h-full shadow-md hover:shadow-lg transition-all duration-500 ${
                    isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image 
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className={`object-cover transition-transform duration-700 ${
                        hoveredPost === post.id ? 'scale-105' : 'scale-100'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/0 via-[#1A1A1A]/0 to-[#1A1A1A]/30"></div>
                    
                    {/* Category tag */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-[#C6AC8E] px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-[#5E503F] text-xs flex items-center">
                        <Clock className="h-3 w-3 text-[#C6AC8E] mr-1" /> {post.readTime}
                      </span>
                      <span className="text-[#5E503F] text-xs">
                        {post.date}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-[#1A1A1A] group-hover:text-[#C6AC8E] transition-colors duration-300">{post.title}</h3>
                    <p className="text-[#5E503F] text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#E8E2D9]">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-[#E8E2D9] mr-2 relative">
                          <Image 
                            src={post.authorImage}
                            alt={post.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-sm font-medium text-[#1A1A1A]">{post.author}</p>
                      </div>
                      
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#F8F5F0] text-[#C6AC8E] group-hover:bg-[#C6AC8E]/10 transition-colors duration-300">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <Button className="bg-white border-2 border-[#C6AC8E] text-[#5E503F] hover:bg-[#C6AC8E]/5 px-6 py-3 text-base font-medium rounded-lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
      
      {/* Categories and Subscribe Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Categories */}
            <div>
              <div className="flex items-center mb-8">
                <div className="h-6 w-1 bg-[#C6AC8E] rounded-full mr-4"></div>
                <h2 className="text-2xl font-bold text-[#1A1A1A]">Explore Categories</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className="bg-white rounded-xl border border-[#E8E2D9] p-4 hover:border-[#C6AC8E]/50 hover:shadow-md transition-all duration-300 text-left group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-[#F8F5F0] flex items-center justify-center mr-3 group-hover:bg-[#C6AC8E]/10 transition-colors duration-300">
                          <Tag className="h-5 w-5 text-[#C6AC8E]" />
                        </div>
                        <span className="text-[#1A1A1A] font-medium">{category}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-[#C6AC8E] transform transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Popular tags */}
              <div className="mt-12">
                <h3 className="text-lg font-medium mb-4 text-[#1A1A1A]">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Luxury Bags', 'Sneakers', 'Watches', 'Designer Fashion', 'Counterfeit Detection', 'Reselling Tips', 'Authentication', 'Vintage Items'].map((tag, index) => (
                    <span key={index} className="bg-[#F8F5F0] text-[#5E503F] px-3 py-1.5 rounded-md text-sm hover:bg-[#C6AC8E]/10 hover:text-[#C6AC8E] transition-colors duration-300 cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Subscribe */}
            <div>
              <div className="flex items-center mb-8">
                <div className="h-6 w-1 bg-[#C6AC8E] rounded-full mr-4"></div>
                <h2 className="text-2xl font-bold text-[#1A1A1A]">Join Our Newsletter</h2>
              </div>
              
              <div className="bg-[#F8F5F0] rounded-xl border border-[#E8E2D9] p-8 relative overflow-hidden">
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                  <LuxuryPattern opacity={100} />
                </div>
                
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#C6AC8E]/20 rounded-br-xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#C6AC8E]/20 rounded-tl-xl"></div>
                
                <div className="relative">
                  <p className="text-[#5E503F] mb-6 leading-relaxed">
                    Stay updated with the latest authentication guides, industry news, and exclusive content delivered straight to your inbox.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-grow bg-white border border-[#E8E2D9] rounded-lg px-4 py-3 text-[#1A1A1A] placeholder-[#8A7968] focus:outline-none focus:ring-2 focus:ring-[#C6AC8E] focus:border-transparent transition-all duration-300"
                    />
                    <Button className="bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] hover:from-[#D9C4AA] hover:to-[#6E6049] text-white px-6 relative overflow-hidden group">
                      <span className="relative z-10">Subscribe</span>
                      <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
                    </Button>
                  </div>
                  
                  <p className="text-[#8A7968] text-sm mt-4">
                    By subscribing, you agree to our Privacy Policy and consent to receive updates from Authentico.
                  </p>
                  
                  {/* Testimonial */}
                  <div className="mt-8 bg-white rounded-lg p-4 border border-[#E8E2D9] shadow-sm">
                    <p className="text-[#5E503F] italic text-sm mb-3">
                      "The Authentico newsletter has been invaluable in helping me navigate the luxury market with confidence."
                    </p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-[#F8F5F0] flex items-center justify-center mr-2">
                        <User className="h-4 w-4 text-[#C6AC8E]" />
                      </div>
                      <span className="text-[#1A1A1A] text-sm font-medium">Jennifer B., Collector</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#F8F5F0] to-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl border border-[#E8E2D9] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Content */}
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="h-1 w-16 bg-[#C6AC8E]"></div>
                </div>
                
                <h2 className="text-3xl font-bold mb-4 text-[#1A1A1A]">Authenticity At Your Fingertips</h2>
                
                <p className="text-[#5E503F] mb-8 leading-relaxed">
                  Take control of your luxury purchases with our authentication app. Get expert verification in as little as 10 minutes.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] hover:from-[#D9C4AA] hover:to-[#6E6049] text-white border-0 shadow-md relative overflow-hidden group">
                    <span className="relative z-10">Download App</span>
                    <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
                  </Button>
                  
                  <Link href="/what-we-authenticate">
                    <Button variant="outline" className="border-[#C6AC8E] text-[#5E503F] hover:bg-[#C6AC8E]/5">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/blog/authentication-app.jpg" // Replace with your image
                  alt="Authentico Authentication App"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/30 to-transparent"></div>
                
                {/* Floating badge */}
                <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-[#E8E2D9]">
                  <p className="font-medium text-[#1A1A1A]">
                    <span className="text-[#C6AC8E]">4.9★</span> App Store Rating
                  </p>
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
