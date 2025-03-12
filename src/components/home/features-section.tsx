import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Award, FileCheck } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-purple-400" />,
      title: 'Multi-Layered Authentication',
      description: 'Every item is verified by two or more experts with AI analysis to guarantee utmost accuracy and confidence in your results.',
      gradient: 'from-purple-500/20 to-purple-700/20'
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-400" />,
      title: 'Anywhere & Anytime',
      description: 'Our mobile app provides 24/7 access to our expert authentication team, ensuring you can buy and sell with confidence.',
      gradient: 'from-blue-500/20 to-blue-700/20'
    },
    {
      icon: <Award className="h-10 w-10 text-amber-400" />,
      title: 'Fast and Reliable Results',
      description: 'Get your authentication results in as little as 10 minutes or choose a longer turnaround time to suit your needs.',
      gradient: 'from-amber-500/20 to-amber-700/20'
    },
    {
      icon: <FileCheck className="h-10 w-10 text-emerald-400" />,
      title: 'Proof of Authenticity',
      description: 'Receive a FREE digital certificate as proof of authenticity. Safeguard your purchase against fraudulent claims.',
      gradient: 'from-emerald-500/20 to-emerald-700/20'
    }
  ];

  return (
    <section className="py-20 bg-stone-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[100px] right-[100px] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px]"></div>
        <div className="absolute bottom-[100px] left-[100px] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-amber-400 text-lg font-semibold uppercase tracking-wider mb-3">
            Comprehensive Features
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            The Ultimate Authentication Tool
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-stone-300">
            LEGIT APP is designed with collectors in mind. Our comprehensive authentication service offers:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`bg-gradient-to-br ${feature.gradient} border-0 backdrop-blur-md bg-opacity-10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden rounded-xl`}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/40 to-white/0"></div>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/40 to-white/0"></div>
              <CardContent className="p-8">
                <div className="bg-white/10 rounded-full p-4 inline-block mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-stone-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
