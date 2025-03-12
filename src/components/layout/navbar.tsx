'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">LEGIT APP</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/products" className="text-stone-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Products
            </Link>
            <Link href="/what-we-authenticate" className="text-stone-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              What We Authenticate
            </Link>
            <Link href="/pricing" className="text-stone-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-stone-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-stone-300 hover:text-amber-400 hover:bg-white/5 flex items-center gap-1">
                  More <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-stone-900/90 backdrop-blur-md border-white/10 text-stone-300">
                <DropdownMenuItem className="hover:bg-white/10 hover:text-amber-400 focus:bg-white/10 focus:text-amber-400">
                  <Link href="/search-certificate" className="w-full">Search Certificate</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/10 hover:text-amber-400 focus:bg-white/10 focus:text-amber-400">
                  <Link href="/faq" className="w-full">FAQ</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/10 hover:text-amber-400 focus:bg-white/10 focus:text-amber-400">
                  <Link href="/about" className="w-full">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/10 hover:text-amber-400 focus:bg-white/10 focus:text-amber-400">
                  <Link href="/blog" className="w-full">Blog</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button className="ml-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-lg">
              Download App
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-amber-400 hover:bg-white/5 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-stone-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/products" className="block text-stone-300 hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium">
              Products
            </Link>
            <Link href="/what-we-authenticate" className="block text-stone-300 hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium">
              What We Authenticate
            </Link>
            <Link href="/pricing" className="block text-stone-300 hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link href="/contact" className="block text-stone-300 hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <Link href="/search-certificate" className="block text-stone-300 hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium">
              Search Certificate
            </Link>
            <Link href="/faq" className="block text-stone-300 hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium">
              FAQ
            </Link>
            <Link href="/about" className="block text-stone-300 hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/blog" className="block text-stone-300 hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium">
              Blog
            </Link>
            <div className="pt-4 pb-2">
              <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-lg">
                Download App
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
