import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Shield, Users, Award, Globe, Zap, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  // Company milestones
  const milestones = [
    {
      year: "2019",
      title: "Founded in San Francisco",
      description: "LEGIT APP was founded with a mission to combat the growing counterfeit market in luxury goods."
    },
    {
      year: "2020",
      title: "Mobile App Launch",
      description: "Launched our mobile app, making authentication accessible to consumers worldwide."
    },
    {
      year: "2021",
      title: "AI Technology Integration",
      description: "Integrated proprietary AI technology to enhance our authentication process."
    },
    {
      year: "2022",
      title: "1 Million Users Milestone",
      description: "Reached 1 million users and authenticated over 2 million items."
    },
    {
      year: "2023",
      title: "Enterprise Solutions Launch",
      description: "Expanded our services to include enterprise solutions for businesses and marketplaces."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Opened offices in Europe and Asia to better serve our growing international user base."
    }
  ];

  // Core values
  const coreValues = [
    {
      icon: <Shield className="h-8 w-8 text-amber-500" />,
      title: "Integrity",
      description: "We uphold the highest standards of honesty and ethics in everything we do."
    },
    {
      icon: <Award className="h-8 w-8 text-amber-500" />,
      title: "Excellence",
      description: "We strive for excellence in our authentication process and customer service."
    },
    {
      icon: <Users className="h-8 w-8 text-amber-500" />,
      title: "Collaboration",
      description: "We work together as a team and with our partners to achieve the best results."
    },
    {
      icon: <Zap className="h-8 w-8 text-amber-500" />,
      title: "Innovation",
      description: "We continuously innovate to improve our technology and services."
    }
  ];

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
              About LEGIT APP
            </h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              We're on a mission to create a more trustworthy luxury marketplace by eliminating counterfeits and giving consumers confidence in their purchases.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              "To create a world where authenticity is never in question, empowering consumers and businesses to trade luxury goods with absolute confidence."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-stone-300 mb-6">
                LEGIT APP is the world's leading authentication service for luxury items, sneakers, and designer products. Founded in 2019, we've quickly grown to become the most trusted name in authentication, serving over 1.8 million users worldwide.
              </p>
              <p className="text-lg text-stone-300 mb-6">
                Our team consists of expert authenticators with decades of combined experience, technology specialists, and customer service professionals dedicated to providing the highest level of service.
              </p>
              <p className="text-lg text-stone-300">
                We believe that everyone deserves to know exactly what they're buying, whether it's a luxury handbag, a rare watch, or a limited-edition sneaker. By combining expert knowledge with cutting-edge technology, we're creating a future where authenticity is never in question.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Do</h2>
              <p className="text-lg text-stone-300 mb-6">
                We provide fast, reliable authentication services for luxury items, sneakers, and designer products. Our multi-layered authentication process combines expert human verification with advanced AI technology to deliver accurate results.
              </p>
              <p className="text-lg text-stone-300 mb-6">
                For consumers, we offer peace of mind when buying pre-loved luxury items. For sellers, we provide credibility and trust that helps items sell faster and at better prices. For businesses, we offer enterprise solutions that integrate seamlessly into existing platforms.
              </p>
              <p className="text-lg text-stone-300">
                With turnaround times as quick as 10 minutes and a financial guarantee backing our verdicts, we're revolutionizing how authentication is done in the luxury goods market.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-20 relative bg-stone-900">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[100px] right-[100px] w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[150px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-stone-300 max-w-3xl mx-auto">
              These values guide everything we do at LEGIT APP, from how we build our technology to how we interact with our users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 hover:bg-white/15 transition-all hover:shadow-lg hover:shadow-amber-500/5 hover:-translate-y-1">
                <div className="bg-white/10 rounded-full p-4 inline-block mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-stone-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Milestones Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-lg text-stone-300 max-w-3xl mx-auto">
              From our founding to today, we've been on a mission to make authentication accessible to everyone.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-500 to-amber-700 rounded-full"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-1/2"></div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-amber-500 z-10"></div>
                  
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16'}`}>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6">
                      <div className="text-amber-500 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-stone-300">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-amber-500/20 to-amber-700/20 backdrop-blur-md rounded-3xl border border-amber-500/30 p-10 md:p-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-lg text-stone-300 max-w-2xl mx-auto mb-8">
                Help us create a more trustworthy marketplace for luxury goods. Download the LEGIT APP today and experience the difference.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                  Download App
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20">
                    Contact Us
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
