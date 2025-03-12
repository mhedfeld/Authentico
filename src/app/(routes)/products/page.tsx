import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Smartphone, Building2, Shield, Clock, Award, FileCheck } from 'lucide-react';

export default function ProductsPage() {
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
              Our Authentication Solutions
            </h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              LEGIT APP offers comprehensive authentication services for both individual collectors and businesses.
            </p>
          </div>
        </div>
      </section>
      
      {/* B2C Product Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="h-8 w-8 text-amber-500" />
                <h2 className="text-3xl font-bold">Consumer Authentication</h2>
              </div>
              <p className="text-lg text-stone-300 mb-8">
                Our consumer authentication service provides fast, reliable verification for your luxury items. 
                Whether you're buying, selling, or just want peace of mind, our expert authenticators and AI technology 
                ensure you know exactly what you have.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Authentication</h3>
                    <p className="text-stone-400">Every item is verified by two or more experts with AI analysis to guarantee utmost accuracy.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
                    <p className="text-stone-400">Get results in as little as 10 minutes for sneakers or 30 minutes for luxury items.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FileCheck className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Digital Certificate</h3>
                    <p className="text-stone-400">Receive a FREE digital certificate as proof of authenticity for all verified items.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
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
            
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                <div className="absolute inset-2 rounded-2xl overflow-hidden">
                  {/* Replace with actual app screenshot */}
                  <div className="w-full h-full bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center">
                    <p className="text-stone-500">App Screenshot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* B2B Product Section */}
      <section className="py-20 relative bg-stone-900">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[100px] right-[100px] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[150px]"></div>
          <div className="absolute bottom-[100px] left-[100px] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[150px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[500px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                <div className="absolute inset-2 rounded-2xl overflow-hidden">
                  {/* Replace with actual B2B product image */}
                  <div className="w-full h-full bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center">
                    <p className="text-stone-500">Enterprise Solution Image</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="h-8 w-8 text-blue-500" />
                <h2 className="text-3xl font-bold">Enterprise Solutions</h2>
              </div>
              <p className="text-lg text-stone-300 mb-8">
                Our enterprise authentication solution provides businesses with powerful tools to verify the authenticity 
                of luxury goods at scale. Perfect for marketplaces, retailers, and authentication services.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">API Integration</h3>
                    <p className="text-stone-400">Seamlessly integrate our authentication service into your existing platforms and workflows.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">White-Label Solution</h3>
                    <p className="text-stone-400">Offer authentication under your own brand with our customizable white-label solution.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Bulk Processing</h3>
                    <p className="text-stone-400">Authenticate multiple items simultaneously with our efficient bulk processing system.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-10 md:p-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-stone-300 max-w-2xl mx-auto mb-8">
                Choose the authentication solution that's right for you and start verifying your items today.
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
