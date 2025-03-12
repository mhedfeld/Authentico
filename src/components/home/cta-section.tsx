import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-stone-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[100px] left-[100px] w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[150px]"></div>
        <div className="absolute bottom-[100px] right-[100px] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[150px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h3 className="text-amber-400 text-lg font-semibold uppercase tracking-wider mb-3">
            Download Now
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Start LEGIT APP Authentication
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-stone-300 mb-10">
            Experience the power of LEGIT APP's authentication technology. Download the app today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Link 
              href="https://example.com/app-store"
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-8 py-4 relative z-10 flex items-center justify-center gap-3 group-hover:bg-white/20 transition-all">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
                </svg>
                <span className="text-lg font-medium text-white">Download on App Store</span>
              </div>
            </Link>
            
            <Link 
              href="https://example.com/play-store"
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-8 py-4 relative z-10 flex items-center justify-center gap-3 group-hover:bg-white/20 transition-all">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.423-.29.684v.065c0 .36.186.687.484.873.298.186.671.204.988.047l.065-.033 11.53-6.524c.409-.23.661-.662.661-1.12v-.078c0-.458-.252-.89-.661-1.12L4.856.927c-.317-.157-.69-.14-.988.047-.298.186-.484.513-.484.873v.065c0 .262.109.504.29.684z"></path>
                </svg>
                <span className="text-lg font-medium text-white">Get it on Google Play</span>
              </div>
            </Link>
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/10">
            <p className="text-stone-400 font-medium text-xl">The World's Leading Authentication Solution</p>
          </div>
        </div>
      </div>
    </section>
  );
}
