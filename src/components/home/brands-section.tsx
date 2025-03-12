import Link from 'next/link';

export function BrandsSection() {
  const brands = [
    { name: 'Louis Vuitton', slug: 'louis-vuitton', color: 'from-amber-500 to-amber-700' },
    { name: 'Chanel', slug: 'chanel', color: 'from-stone-800 to-stone-950' },
    { name: 'Hermes', slug: 'hermes', color: 'from-orange-500 to-orange-700' },
    { name: 'Air Jordan', slug: 'air-jordan', color: 'from-red-500 to-red-700' },
    { name: 'Nike', slug: 'nike', color: 'from-blue-500 to-blue-700' },
    { name: 'Dior', slug: 'dior', color: 'from-indigo-500 to-indigo-700' },
    { name: 'Gucci', slug: 'gucci', color: 'from-green-500 to-green-700' },
    { name: 'Prada', slug: 'prada', color: 'from-stone-500 to-stone-700' },
    { name: 'Balenciaga', slug: 'balenciaga', color: 'from-gray-500 to-gray-700' },
    { name: 'Fendi', slug: 'fendi', color: 'from-yellow-500 to-yellow-700' },
    { name: 'Adidas', slug: 'adidas', color: 'from-blue-400 to-blue-600' },
    { name: 'Yeezy', slug: 'yeezy', color: 'from-stone-400 to-stone-600' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-stone-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[300px] right-[300px] w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[150px]"></div>
        <div className="absolute bottom-[200px] left-[200px] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[150px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-amber-400 text-lg font-semibold uppercase tracking-wider mb-3">
            A Comprehensive Authentication Service
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Discover the Brands We Authenticate
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Link 
              key={brand.slug}
              href={`/what-we-authenticate/${brand.slug}`}
              className="group"
            >
              <div className={`bg-gradient-to-br ${brand.color} rounded-xl shadow-lg p-6 text-center h-full flex flex-col items-center justify-center border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300`}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all">
                  <div className="text-2xl font-bold text-white">
                    {brand.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white group-hover:text-white/90">
                  Authenticate {brand.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/what-we-authenticate"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-stone-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-lg transition-all duration-300 hover:shadow-amber-500/20"
          >
            View Full Brand List
          </Link>
        </div>
      </div>
    </section>
  );
}
