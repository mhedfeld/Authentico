import Link from 'next/link';
import Image from 'next/image';

export function BrandsSection() {
  const brands = [
    { name: 'Louis Vuitton', slug: 'louis-vuitton', logo: '/logos/louis_vuitton_logo.png' },
    { name: 'Chanel', slug: 'chanel', logo: '/logos/chanel_logo.png' },
    { name: 'Hermes', slug: 'hermes', logo: '/logos/hermes_logo.png' },
    { name: 'Air Jordan', slug: 'air-jordan', logo: '/logos/air_jordan_logo.png' },
    { name: 'Nike', slug: 'nike', logo: '/logos/nike_logo.png' },
    { name: 'Dior', slug: 'dior', logo: '/logos/dior_logo.png' },
    { name: 'Gucci', slug: 'gucci', logo: '/logos/gucci_logo.png' },
    { name: 'Prada', slug: 'prada', logo: '/logos/prada_logo.png' },
    { name: 'Balenciaga', slug: 'balenciaga', logo: '/logos/balenciaga_logo.png' },
    { name: 'Fendi', slug: 'fendi', logo: '/logos/fendi_logo.png' },
    { name: 'Adidas', slug: 'adidas', logo: '/logos/adidas_logo.png' },
    { name: 'Yeezy', slug: 'yeezy', logo: '/logos/yeezy_logo.png' },
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
              <div className={`bg-gradient-to-br from-stone-800/80 to-stone-900/80 rounded-xl shadow-lg p-6 text-center h-full flex flex-col items-center justify-center border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300`}>
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all p-2">
                  <Image 
                    src={brand.logo} 
                    alt={brand.name} 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-medium text-white group-hover:text-white/90">
                  {brand.name}
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
