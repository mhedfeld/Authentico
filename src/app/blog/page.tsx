import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, User, Tag, ChevronRight } from 'lucide-react';

export default function BlogPage() {
  // Featured blog post
  const featuredPost = {
    id: "authentication-guide-2025",
    title: "The Ultimate Authentication Guide for 2025",
    excerpt: "Learn how to spot the latest counterfeit techniques and protect yourself when buying luxury items online.",
    coverImage: "/placeholder-blog-featured.jpg", // Replace with actual image
    date: "March 5, 2025",
    author: "Sarah Johnson",
    authorRole: "Head of Authentication",
    category: "Guides",
    readTime: "8 min read"
  };

  // Recent blog posts
  const recentPosts = [
    {
      id: "louis-vuitton-authentication",
      title: "How to Authenticate Louis Vuitton: The Definitive Guide",
      excerpt: "A comprehensive guide to authenticating Louis Vuitton bags, from canvas patterns to date codes and hardware details.",
      coverImage: "/placeholder-blog-1.jpg", // Replace with actual image
      date: "February 28, 2025",
      author: "Elena Rodriguez",
      category: "Authentication Guides",
      readTime: "12 min read"
    },
    {
      id: "sneaker-market-trends",
      title: "Sneaker Market Trends: What's Hot and What's Not in 2025",
      excerpt: "An analysis of the current sneaker market, including the most counterfeited models and how to avoid fakes.",
      coverImage: "/placeholder-blog-2.jpg", // Replace with actual image
      date: "February 20, 2025",
      author: "Michael Chen",
      category: "Market Insights",
      readTime: "10 min read"
    },
    {
      id: "counterfeit-technology",
      title: "The Evolution of Counterfeit Technology and How to Stay Ahead",
      excerpt: "As counterfeiters become more sophisticated, learn how authentication technology is evolving to combat fakes.",
      coverImage: "/placeholder-blog-3.jpg", // Replace with actual image
      date: "February 15, 2025",
      author: "James Wilson",
      category: "Industry News",
      readTime: "7 min read"
    },
    {
      id: "rolex-authentication",
      title: "Rolex Authentication: 10 Details That Reveal a Fake",
      excerpt: "Expert tips on spotting fake Rolex watches, from movement details to dial printing and case finishing.",
      coverImage: "/placeholder-blog-4.jpg", // Replace with actual image
      date: "February 8, 2025",
      author: "Thomas Wright",
      category: "Authentication Guides",
      readTime: "15 min read"
    },
    {
      id: "authentication-app-comparison",
      title: "Authentication Apps Compared: Which One Should You Trust?",
      excerpt: "A detailed comparison of the top authentication services in the market and why LEGIT APP stands out.",
      coverImage: "/placeholder-blog-5.jpg", // Replace with actual image
      date: "January 30, 2025",
      author: "Sarah Johnson",
      category: "Reviews",
      readTime: "9 min read"
    },
    {
      id: "designer-bag-investment",
      title: "Designer Bags as Investments: What to Buy in 2025",
      excerpt: "Which luxury bags are worth investing in this year? Our experts analyze market trends and resale values.",
      coverImage: "/placeholder-blog-6.jpg", // Replace with actual image
      date: "January 22, 2025",
      author: "Elena Rodriguez",
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
              LEGIT APP Blog
            </h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Expert insights, authentication guides, and industry news to help you navigate the world of luxury goods.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Post Section */}
      <section className="py-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[300px] lg:h-auto">
                <div className="absolute inset-0 bg-stone-800 flex items-center justify-center">
                  <p className="text-stone-500">Featured Image</p>
                </div>
              </div>
              
              <div className="p-8 lg:p-10">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-stone-400 text-sm flex items-center">
                    <Clock className="h-4 w-4 mr-1" /> {featuredPost.readTime}
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-stone-300 mb-6">{featuredPost.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-stone-700 mr-3 flex items-center justify-center">
                      <User className="h-5 w-5 text-stone-400" />
                    </div>
                    <div>
                      <p className="font-medium">{featuredPost.author}</p>
                      <p className="text-stone-400 text-sm">{featuredPost.date}</p>
                    </div>
                  </div>
                  
                  <Link href={`/blog/${featuredPost.id}`}>
                    <Button variant="ghost" className="text-amber-400 hover:text-amber-300 hover:bg-white/5 p-0">
                      Read More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Posts Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Recent Articles</h2>
            <div className="relative">
              <select className="bg-white/10 border border-white/20 rounded-lg text-white px-4 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
              </select>
              <ChevronRight className="h-4 w-4 text-white absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden h-full hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-stone-800 flex items-center justify-center">
                      <p className="text-stone-500">Post Image</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-stone-400 text-xs flex items-center">
                        <Clock className="h-3 w-3 mr-1" /> {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-stone-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-stone-700 mr-2 flex items-center justify-center">
                          <User className="h-4 w-4 text-stone-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{post.author}</p>
                          <p className="text-stone-400 text-xs">{post.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button variant="outline" className="border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
      
      {/* Categories and Subscribe Section */}
      <section className="py-16 relative bg-stone-900">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[100px] right-[100px] w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[150px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Categories */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Categories</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map((category, index) => (
                  <Link href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 hover:bg-white/15 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <span>{category}</span>
                        <ChevronRight className="h-4 w-4 text-amber-400" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Subscribe */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Subscribe to Our Newsletter</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8">
                <p className="text-stone-300 mb-6">
                  Stay updated with the latest authentication guides, industry news, and exclusive content delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                    Subscribe
                  </Button>
                </div>
                <p className="text-stone-400 text-sm mt-4">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from LEGIT APP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
