import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-[#F8F5F0] text-[#5E503F] pt-20 pb-10 relative overflow-hidden">
      {/* Subtle luxury pattern overlay */}
      <div className="absolute inset-0 bg-[url('/luxury-pattern-light.png')] bg-repeat opacity-5"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6AC8E]/50 to-transparent"></div>
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20">
        <div className="absolute inset-0 rounded-full border border-[#C6AC8E]/20"></div>
        <div className="absolute inset-3 rounded-full border border-[#C6AC8E]/10"></div>
        <div className="absolute inset-6 rounded-full bg-[#C6AC8E]/5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center">
                <Image 
                  src="/logos/authentico-logo.png" 
                  alt="Authentico" 
                  width={40} 
                  height={40} 
                  className="mr-3"
                />
                <span className="text-2xl font-bold text-[#1A1A1A]">
                  <span className="text-[#C6AC8E]">Authentico</span>
                </span>
              </div>
            </Link>
            <p className="text-[#5E503F]/80 mb-6">The World's Leading Authentication Solution</p>
            <div className="mt-8 space-y-4">
              <p className="text-sm text-[#5E503F]/70 flex items-center">
                <svg className="w-4 h-4 mr-3 text-[#C6AC8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                +1 (800) 123-4567
              </p>
              <p className="text-sm text-[#5E503F]/70 flex items-center">
                <svg className="w-4 h-4 mr-3 text-[#C6AC8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                support@authentico.com
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-[#1A1A1A] font-medium mb-6 relative inline-block">
              Authentication
              <div className="absolute -bottom-2 left-0 w-8 h-px bg-[#C6AC8E]"></div>
            </h3>
            <ul className="space-y-4">
              <li><Link href="/products" className="hover:text-[#C6AC8E] transition-colors">Products</Link></li>
              <li><Link href="/products/app-authentication" className="hover:text-[#C6AC8E] transition-colors">Online App Authentication</Link></li>
              <li><Link href="/what-we-authenticate" className="hover:text-[#C6AC8E] transition-colors">What We Authenticate</Link></li>
              <li><Link href="/search-certificate" className="hover:text-[#C6AC8E] transition-colors">Search Certificate</Link></li>
              <li><Link href="/pricing" className="hover:text-[#C6AC8E] transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[#1A1A1A] font-medium mb-6 relative inline-block">
              Company
              <div className="absolute -bottom-2 left-0 w-8 h-px bg-[#C6AC8E]"></div>
            </h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="hover:text-[#C6AC8E] transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-[#C6AC8E] transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#C6AC8E] transition-colors">Contact</Link></li>
              <li><Link href="/terms" className="hover:text-[#C6AC8E] transition-colors">Terms of Use</Link></li>
              <li><Link href="/privacy" className="hover:text-[#C6AC8E] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[#1A1A1A] font-medium mb-6 relative inline-block">
              Connect
              <div className="absolute -bottom-2 left-0 w-8 h-px bg-[#C6AC8E]"></div>
            </h3>
            <p className="mb-6 text-[#5E503F]/80">Follow us on social media and join our community of luxury enthusiasts.</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Link 
                href="https://example.com/linkedin"
                className="flex items-center justify-center h-12 border border-[#E8E2D9] rounded-lg hover:border-[#C6AC8E] hover:bg-[#C6AC8E]/5 transition-all"
              >
                <svg className="w-5 h-5 text-[#5E503F]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
              </Link>
              
              <Link 
                href="https://example.com/instagram"
                className="flex items-center justify-center h-12 border border-[#E8E2D9] rounded-lg hover:border-[#C6AC8E] hover:bg-[#C6AC8E]/5 transition-all"
              >
                <svg className="w-5 h-5 text-[#5E503F]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </Link>
              
              <Link 
                href="https://example.com/discord"
                className="flex items-center justify-center h-12 border border-[#E8E2D9] rounded-lg hover:border-[#C6AC8E] hover:bg-[#C6AC8E]/5 transition-all"
              >
                <svg className="w-5 h-5 text-[#5E503F]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"></path>
                </svg>
              </Link>
              
              <Link 
                href="https://example.com/twitter"
                className="flex items-center justify-center h-12 border border-[#E8E2D9] rounded-lg hover:border-[#C6AC8E] hover:bg-[#C6AC8E]/5 transition-all"
              >
                <svg className="w-5 h-5 text-[#5E503F]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </Link>
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-medium text-[#1A1A1A] mb-3">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-l-md border border-[#E8E2D9] focus:outline-none focus:border-[#C6AC8E] text-[#5E503F] flex-grow"
                />
                <button className="bg-[#C6AC8E] text-white px-4 py-2 rounded-r-md hover:bg-[#5E503F] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#E8E2D9] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#5E503F]/70 text-sm mb-4 md:mb-0">© 2025 Authentico Inc. All Rights Reserved.</p>
            <p className="text-[#5E503F]/70 text-sm">Authentico is independent from any brand affiliation and is in no way affiliated with any brand it services.</p>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <Link href="/terms" className="text-xs text-[#5E503F]/70 hover:text-[#C6AC8E]">Terms</Link>
            <Link href="/privacy" className="text-xs text-[#5E503F]/70 hover:text-[#C6AC8E]">Privacy</Link>
            <Link href="/cookies" className="text-xs text-[#5E503F]/70 hover:text-[#C6AC8E]">Cookies</Link>
            <Link href="/accessibility" className="text-xs text-[#5E503F]/70 hover:text-[#C6AC8E]">Accessibility</Link>
            <Link href="/sitemap" className="text-xs text-[#5E503F]/70 hover:text-[#C6AC8E]">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
