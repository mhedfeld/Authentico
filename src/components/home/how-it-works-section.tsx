import Link from 'next/link';
import { Camera, Users, FileCheck } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: 'Submit Photos',
      description: 'Choose your desired turnaround time and capture clear product photos according to our easy-to-follow guidelines.',
      icon: <Camera className="h-10 w-10 text-amber-400" />,
      gradient: 'from-amber-500/20 to-amber-700/20'
    },
    {
      number: 2,
      title: 'Expert Review',
      description: 'Two or more expert authenticators with AI meticulously analyzes your photos in our multi-layered process.',
      icon: <Users className="h-10 w-10 text-blue-400" />,
      gradient: 'from-blue-500/20 to-blue-700/20'
    },
    {
      number: 3,
      title: 'Receive Results',
      description: 'Get a clear and concise verdict: AUTHENTIC or REPLICA with a FREE digital certificate as proof.',
      icon: <FileCheck className="h-10 w-10 text-green-400" />,
      gradient: 'from-green-500/20 to-green-700/20'
    }
  ];

  return (
    <section className="py-20 bg-stone-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[200px] left-[200px] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[150px]"></div>
        <div className="absolute bottom-[100px] right-[100px] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[150px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-amber-400 text-lg font-semibold uppercase tracking-wider mb-3">
            How It Works
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Your Guide to Easy Authentication
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-stone-300">
            Authenticating your luxury items has never been easier. With LEGIT APP, you can get expert results in as little as 10 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line between steps */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-blue-500 to-green-500 transform -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={step.number} className="relative z-10">
              <div className={`bg-stone-800/80 backdrop-blur-md rounded-xl border border-white/10 p-8 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${index === 1 ? 'md:translate-y-8' : ''}`}>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-stone-900 to-stone-800 w-12 h-12 rounded-full flex items-center justify-center border-2 border-amber-500 shadow-lg shadow-amber-500/20">
                  <span className="text-amber-400 font-bold">{step.number}</span>
                </div>
                
                <div className={`bg-gradient-to-br ${step.gradient} rounded-full p-4 inline-block mb-6 mt-4`}>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-stone-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 text-lg font-medium"
          >
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  );
}
