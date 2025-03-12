import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-stone-900 to-black py-20 md:py-28 overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-[100px]"></div>
        <div className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-amber-500 rounded-full w-3 h-3"></div>
              <span className="text-sm font-medium text-stone-300">For Handbags, Sneakers & Designer Products</span>
            </div>
            
            {/* Placeholder for 3D Text - we'll replace this with Spline */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-extrabold text-amber-500 mb-2">
                Fast & Reliable
              </h1>
              <h1 className="text-5xl md:text-6xl font-extrabold text-amber-500">
                Authentication
              </h1>
            </div>
            
            <p className="text-xl text-stone-300 mb-10 max-w-lg">
              Powered by expert authenticators and AI technology for unmatched accuracy and confidence.
            </p>
            
            {/* Glassmorphism buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 h-14 px-8 text-lg rounded-xl shadow-lg">
                Download App
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 h-14 px-8 text-lg rounded-xl">
                Learn More
              </Button>
            </div>
            
            {/* Stats with glassmorphism */}
            <div className="mt-12 flex items-center gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 px-6 border border-white/20">
                <div className="text-3xl font-bold text-amber-400">4.9</div>
                <div className="text-sm text-stone-300">App Store Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 px-6 border border-white/20">
                <div className="text-3xl font-bold text-amber-400">1.8M+</div>
                <div className="text-sm text-stone-300">Users</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] md:h-[600px]">
            {/* Phone mockup with glassmorphism effect */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
              <div className="absolute inset-2 rounded-2xl overflow-hidden">
                <Image
                  src="/hero-image.png" // Path to your image
                  alt="LEGIT APP Authentication on smartphone"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Phone notch */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-full"></div>
            </div>
            
            {/* Floating badges/elements */}
            <div className="absolute top-10 -right-10 bg-white/15 backdrop-blur-md rounded-xl p-3 border border-white/20 shadow-lg rotate-6">
              <div className="text-sm font-bold text-green-400">AUTHENTIC</div>
            </div>
            <div className="absolute bottom-20 -left-10 bg-white/15 backdrop-blur-md rounded-xl p-3 border border-white/20 shadow-lg -rotate-6">
              <div className="text-sm font-bold text-red-400">REPLICA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
