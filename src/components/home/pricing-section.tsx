import Link from 'next/link';
import { Check } from 'lucide-react';

export function PricingSection() {
  const pricingPlans = [
    {
      title: 'Luxury Authentication',
      description: 'For handbags, clothing, shoes, accessories in most luxury designer brands',
      startingPrice: '10 USD',
      options: [
        { time: '30 Minutes', price: '20 USD' },
        { time: '1 Hour', price: '15 USD' },
        { time: '4 Hours', price: '10 USD' },
      ],
      features: [
        'Reviews by two or more expert authenticators',
        'Reviews by AI analysis',
        'FREE certificate of authenticity',
        'Financial Guarantee',
        '24/7 customer support',
      ],
      gradient: 'from-purple-500/20 to-indigo-700/20',
      accentColor: 'text-purple-400',
      borderGradient: 'from-purple-500/30 via-indigo-500/30 to-purple-500/30'
    },
    {
      title: 'Sneaker Authentication',
      description: 'For sneakers in Nike, Jordan, Adidas, Yeezy and most popular sports brands',
      startingPrice: '3 USD',
      options: [
        { time: '10 Minutes', price: '5 USD' },
        { time: '15 Minutes', price: '4 USD' },
        { time: '30 Minutes', price: '3 USD' },
      ],
      features: [
        'Reviews by two or more expert authenticators',
        'Reviews by AI analysis',
        'FREE certificate of authenticity',
        'Financial Guarantee',
        '24/7 customer support',
      ],
      gradient: 'from-blue-500/20 to-cyan-700/20',
      accentColor: 'text-blue-400',
      borderGradient: 'from-blue-500/30 via-cyan-500/30 to-blue-500/30'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-stone-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-[200px] right-[100px] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[150px]"></div>
        <div className="absolute bottom-[50px] left-[100px] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[150px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-amber-400 text-lg font-semibold uppercase tracking-wider mb-3">
            Our Service Pricing
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Affordable Authentication
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-stone-300">
            Choose the authentication plan that best suits your needs.<br />
            We offer flexible options to cater to all budgets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2`}>
              {/* Animated border gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.borderGradient} rounded-2xl z-0 animate-pulse-slow`}></div>
              
              {/* Card content with glassmorphism */}
              <div className={`relative m-[1px] bg-gradient-to-br ${plan.gradient} backdrop-blur-xl rounded-2xl overflow-hidden z-10`}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/40 to-white/0"></div>
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/40 to-white/0"></div>
                
                <div className="px-8 py-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                  <p className="text-stone-300 mb-8">{plan.description}</p>
                  
                  <div className="mb-8">
                    <p className="text-sm text-stone-400 mb-1">Start From</p>
                    <p className={`text-4xl font-bold ${plan.accentColor}`}>{plan.startingPrice}</p>
                  </div>
                  
                  <div className="border-t border-b border-white/10 py-8 mb-8">
                    <p className="text-sm font-medium text-stone-300 mb-6">Turnaround Time Options</p>
                    {plan.options.map((option, idx) => (
                      <div key={idx} className="flex justify-between mb-4">
                        <span className="text-stone-300">{option.time}</span>
                        <span className={`font-bold ${plan.accentColor}`}>{option.price}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-stone-300 mb-6">All Services Include</p>
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className={`p-1 rounded-full bg-gradient-to-br ${plan.gradient} mr-3 flex-shrink-0`}>
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-stone-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/pricing"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-stone-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-lg transition-all duration-300 hover:shadow-amber-500/20"
          >
            Learn More About Pricing Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
