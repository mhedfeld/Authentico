import Link from 'next/link';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      source: 'HYPEBEAST',
      type: 'Press',
      quote: 'Use LEGIT App to Authenticate Handbags, Sneakers and Streetwear in 12 hours.',
      link: 'https://example.com/testimonial1',
      gradient: 'from-purple-500/20 to-indigo-700/20'
    },
    {
      source: 'SneakerFreaker',
      type: 'Press',
      quote: 'Dont Get Duped: LEGIT APP Offers Rapid Sneaker Authentication',
      link: 'https://example.com/testimonial2',
      gradient: 'from-blue-500/20 to-cyan-700/20'
    },
    {
      source: 'WearTesters',
      type: 'YouTuber',
      quote: 'They legit check your shoes and they do it really well.',
      link: 'https://example.com/testimonial3',
      gradient: 'from-amber-500/20 to-orange-700/20'
    },
    {
      source: 'JumperMan Kris',
      type: 'YouTuber',
      quote: 'FAKE OR REAL ?? BEST WAY TO LEGIT CHECK SNEAKERS *LEGIT APP*',
      link: 'https://example.com/testimonial4',
      gradient: 'from-green-500/20 to-emerald-700/20'
    }
  ];

  return (
    <section className="py-20 bg-stone-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[150px] left-[150px] w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[150px]"></div>
        <div className="absolute bottom-[100px] right-[100px] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[150px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-amber-400 text-lg font-semibold uppercase tracking-wider mb-3">
            Hear What Our Users Say
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            People love LEGIT APP
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-stone-300">
            Millions of satisfied users have trusted LEGIT APP for their authentication needs and rated us 5 stars on App Store and Google Play.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          {/* Stats cards with glassmorphism */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center shadow-lg hover:shadow-amber-500/5 transition-all hover:-translate-y-1">
            <p className="text-5xl font-bold text-amber-400 mb-2">4.9</p>
            <p className="text-stone-300">App Store Rating</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center shadow-lg hover:shadow-amber-500/5 transition-all hover:-translate-y-1">
            <p className="text-5xl font-bold text-amber-400 mb-2">1.8M+</p>
            <p className="text-stone-300">Users</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center shadow-lg hover:shadow-amber-500/5 transition-all hover:-translate-y-1">
            <p className="text-5xl font-bold text-amber-400 mb-2">3M+</p>
            <p className="text-stone-300">Cases Completed</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Link 
              key={index}
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className={`bg-gradient-to-br ${testimonial.gradient} backdrop-blur-md border border-white/10 rounded-xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <p className="font-bold text-white">{testimonial.source}</p>
                    <p className="text-sm text-stone-300">{testimonial.type}</p>
                  </div>
                  <p className="text-stone-200 flex-grow mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 text-lg font-medium"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
