'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X, ChevronDown, Search, LogIn, UserCircle, LogOut } from 'lucide-react';
import { useAuth } from '@/lib/auth'; // Adjust path as needed

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout, loading } = useAuth();
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-white/80 backdrop-blur-md'
    }`}>

      {/* Gold accent bar at top */}
      <div className="h-1 bg-gradient-to-r from-[#C6AC8E] via-[#DFCDB3] to-[#C6AC8E]"></div>
      
      <div className="relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="mr-3 relative overflow-hidden rounded-full w-10 h-10 flex items-center justify-center bg-[#F8F5F0] border border-[#E8E2D9]">
                <Image 
                  src="/logos/authentico-logo.png" 
                  alt="Authentico" 
                  width={90} 
                  height={90}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                {/* Shine effect */}
                <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#1A1A1A]">
                  Auth<span className="text-[#C6AC8E]">entico</span>
                </span>
              </div>
            </Link>
          </div>
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/products" className="relative text-[#5E503F] hover:text-[#C6AC8E] px-4 py-2 rounded-md text-sm font-medium transition-colors group">
              Products
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#C6AC8E] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </Link>
            <Link href="/what-we-authenticate" className="relative text-[#5E503F] hover:text-[#C6AC8E] px-4 py-2 rounded-md text-sm font-medium transition-colors group">
              What We Authenticate
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#C6AC8E] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </Link>
            <Link href="/pricing" className="relative text-[#5E503F] hover:text-[#C6AC8E] px-4 py-2 rounded-md text-sm font-medium transition-colors group">
              Pricing
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#C6AC8E] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </Link>
            <Link href="/contact" className="relative text-[#5E503F] hover:text-[#C6AC8E] px-4 py-2 rounded-md text-sm font-medium transition-colors group">
              Contact
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#C6AC8E] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative text-[#5E503F] hover:text-[#C6AC8E] hover:bg-transparent flex items-center gap-1 px-4 group">
                  More 
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#C6AC8E] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/95 backdrop-blur-md border-[#E8E2D9] shadow-lg rounded-md p-1 min-w-[200px]">
                <DropdownMenuItem className="hover:bg-[#F8F5F0] focus:bg-[#F8F5F0] hover:text-[#C6AC8E] focus:text-[#C6AC8E] rounded-sm px-3 py-2 transition-colors">
                  <Link href="/search-certificate" className="w-full">Search Certificate</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#F8F5F0] focus:bg-[#F8F5F0] hover:text-[#C6AC8E] focus:text-[#C6AC8E] rounded-sm px-3 py-2 transition-colors">
                  <Link href="/faq" className="w-full">FAQ</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#F8F5F0] focus:bg-[#F8F5F0] hover:text-[#C6AC8E] focus:text-[#C6AC8E] rounded-sm px-3 py-2 transition-colors">
                  <Link href="/about" className="w-full">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#F8F5F0] focus:bg-[#F8F5F0] hover:text-[#C6AC8E] focus:text-[#C6AC8E] rounded-sm px-3 py-2 transition-colors">
                  <Link href="/blog" className="w-full">Blog</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Search button */}
            <button className="relative text-[#5E503F] hover:text-[#C6AC8E] p-2 rounded-full transition-colors group">
              <Search className="h-5 w-5" />
              <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-[#C6AC8E]/30 transition-all"></span>
            </button>
            
            <div className="h-8 w-px bg-[#E8E2D9] mx-2"></div>
            
            {/* Auth section */}
            {loading ? (
              <div className="flex items-center px-3 text-[#5E503F]">
                <div className="h-4 w-4 rounded-full border-2 border-[#C6AC8E] border-t-transparent animate-spin mr-2"></div>
                <span className="text-sm">Loading...</span>
              </div>
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative text-[#5E503F] hover:text-[#C6AC8E] hover:bg-transparent flex items-center gap-1 px-4 group">
                    <UserCircle className="h-5 w-5 mr-1" />
                    <span className="text-sm font-medium truncate max-w-[100px]">{user.name}</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#C6AC8E] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/95 backdrop-blur-md border-[#E8E2D9] shadow-lg rounded-md p-1 min-w-[200px]">
                  <DropdownMenuItem className="hover:bg-[#F8F5F0] focus:bg-[#F8F5F0] hover:text-[#C6AC8E] focus:text-[#C6AC8E] rounded-sm px-3 py-2 transition-colors">
                    <Link href="/dashboard" className="w-full">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-[#F8F5F0] focus:bg-[#F8F5F0] hover:text-[#C6AC8E] focus:text-[#C6AC8E] rounded-sm px-3 py-2 transition-colors">
                    <Link href="/profile" className="w-full">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="hover:bg-[#F8F5F0] focus:bg-[#F8F5F0] hover:text-red-500 focus:text-red-500 rounded-sm px-3 py-2 transition-colors"
                    onClick={logout}
                  >
                    <div className="w-full flex items-center">
                      <LogOut className="h-4 w-4 mr-2" />
                      <span>Logout</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="ghost" className="relative text-[#5E503F] hover:text-[#C6AC8E] hover:bg-transparent flex items-center group px-3">
                    <LogIn className="h-4 w-4 mr-1" />
                    <span>Login</span>
                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#C6AC8E] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-gradient-to-r from-[#5E503F] to-[#C6AC8E] hover:from-[#6E6049] hover:to-[#D9C4AA] text-white border-0 shadow-md rounded-md px-4 hover:scale-105 transition-all duration-300 group overflow-hidden">
                    <span className="relative z-10">Register</span>
                    <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine"></div>
                  </Button>
                </Link>
              </div>
            )}
            
            <Button className="ml-2 bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] hover:from-[#D9C4AA] hover:to-[#6E6049] text-white border-0 shadow-lg rounded-md px-6 hover:scale-105 transition-all duration-300 group overflow-hidden">
              <span className="relative z-10">Download App</span>
              <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine"></div>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#5E503F] hover:text-[#C6AC8E] hover:bg-[#F8F5F0] focus:outline-none transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-[#E8E2D9] overflow-hidden relative">
          <div className="px-4 pt-3 pb-5 space-y-2 relative z-10">
            <Link 
              href="/products" 
              className="block text-[#5E503F] hover:text-[#C6AC8E] px-3 py-2.5 rounded-md text-base font-medium border border-transparent hover:border-[#E8E2D9] hover:bg-[#F8F5F0] transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/what-we-authenticate" 
              className="block text-[#5E503F] hover:text-[#C6AC8E] px-3 py-2.5 rounded-md text-base font-medium border border-transparent hover:border-[#E8E2D9] hover:bg-[#F8F5F0] transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              What We Authenticate
            </Link>
            <Link 
              href="/pricing" 
              className="block text-[#5E503F] hover:text-[#C6AC8E] px-3 py-2.5 rounded-md text-base font-medium border border-transparent hover:border-[#E8E2D9] hover:bg-[#F8F5F0] transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className="block text-[#5E503F] hover:text-[#C6AC8E] px-3 py-2.5 rounded-md text-base font-medium border border-transparent hover:border-[#E8E2D9] hover:bg-[#F8F5F0] transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="w-full h-px bg-[#E8E2D9] my-2"></div>
            
            <Link 
              href="/search-certificate" 
              className="block text-[#5E503F] hover:text-[#C6AC8E] px-3 py-2.5 rounded-md text-base font-medium border border-transparent hover:border-[#E8E2D9] hover:bg-[#F8F5F0] transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Search Certificate
            </Link>
            <Link 
              href="/faq" 
              className="block text-[#5E503F] hover:text-[#C6AC8E] px-3 py-2.5 rounded-md text-base font-medium border border-transparent hover:border-[#E8E2D9] hover:bg-[#F8F5F0] transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/about" 
              className="block text-[#5E503F] hover:text-[#C6AC8E] px-3 py-2.5 rounded-md text-base font-medium border border-transparent hover:border-[#E8E2D9] hover:bg-[#F8F5F0] transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="block text-[#5E503F] hover:text-[#C6AC8E] px-3 py-2.5 rounded-md text-base font-medium border border-transparent hover:border-[#E8E2D9] hover:bg-[#F8F5F0] transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            
            <div className="w-full h-px bg-[#E8E2D9] my-2"></div>
            
            {/* Mobile Auth Section */}
            {loading ? (
              <div className="flex items-center px-3 py-2.5 text-[#5E503F]">
                <div className="h-4 w-4 rounded-full border-2 border-[#C6AC8E] border-t-transparent animate-spin mr-2"></div>
                <span>Loading...</span>
              </div>
            ) : user ? (
              <>
                <div className="px-3 py-2.5 text-[#5E503F] font-medium flex items-center">
                  <UserCircle className="h-5 w-5 mr-2 text-[#C6AC8E]" />
                  <span>Hello, {user.name}</span>
                </div>
                <Link
                  href="/dashboard"
                  className="block text-[#5E503F] hover:text-[#C6AC8E] px-3 py-2.5 rounded-md text-base font-medium border border-transparent hover:border-[#E8E2D9] hover:bg-[#F8F5F0] transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="block text-[#5E503F] hover:text-[#C6AC8E] px-3 py-2.5 rounded-md text-base font-medium border border-transparent hover:border-[#E8E2D9] hover:bg-[#F8F5F0] transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left text-red-500 hover:text-red-600 px-3 py-2.5 rounded-md text-base font-medium border border-transparent hover:border-red-100 hover:bg-red-50 transition-all flex items-center"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block text-[#5E503F] hover:text-[#C6AC8E] px-3 py-2.5 rounded-md text-base font-medium border border-transparent hover:border-[#E8E2D9] hover:bg-[#F8F5F0] transition-all flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block text-[#C6AC8E] font-medium px-3 py-2.5 rounded-md text-base border border-[#C6AC8E] hover:bg-[#C6AC8E] hover:text-white transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
            
            <div className="pt-4">
              <Button 
                className="w-full bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] hover:from-[#D9C4AA] hover:to-[#6E6049] text-white border-0 shadow-lg rounded-md py-6 group overflow-hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 text-base">Download App</span>
                <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine"></div>
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Add shine animation */}
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
    </nav>
  );
}
