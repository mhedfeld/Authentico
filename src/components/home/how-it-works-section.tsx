"use client";

import Link from 'next/link';
import { Camera, Users, FileCheck, Play, Pause } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { LuxuryPattern } from '@/components/ui/luxury-pattern';

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([null, null, null]);

  // Updated steps with video sources
  const steps = [
    {
      number: 1,
      title: 'Submit Photos',
      description: 'Choose your desired turnaround time and capture clear product photos according to our easy-to-follow guidelines.',
      icon: <Camera className="h-10 w-10 text-[#C6AC8E]" />,
      video: '/videos/submit-photos.mp4',
      poster: '/how-it-works/submit-photos.jpg', // Fallback image for video poster
      duration: "0:04" // Video duration display
    },
    {
      number: 2,
      title: 'Expert Review',
      description: 'Two or more expert authenticators with AI meticulously analyzes your photos in our multi-layered process.',
      icon: <Users className="h-10 w-10 text-[#C6AC8E]" />,
      video: '/videos/expert-review.mp4',
      poster: '/how-it-works/expert-review.jpg',
      duration: "0:05"
    },
    {
      number: 3,
      title: 'Receive Results',
      description: 'Get a clear and concise verdict: AUTHENTIC or REPLICA with a FREE digital certificate as proof.',
      icon: <FileCheck className="h-10 w-10 text-[#C6AC8E]" />,
      video: '/videos/receive-results.mp4',
      poster: '/how-it-works/receive-results.jpg',
      duration: "0:05"
    }
  ];

  // Set up video playback and auto-advancement
  useEffect(() => {
    const currentVideo = videoRefs.current[activeStep - 1];
    
    // Reset all videos
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index + 1 !== activeStep) {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
    
    // Handle current video
    if (currentVideo) {
      // Add event listeners
      const handleVideoEnd = () => {
        if (autoAdvance) {
          // Advance to next step or loop back to first
          const nextStep = activeStep === steps.length ? 1 : activeStep + 1;
          setActiveStep(nextStep);
        }
      };
      
      currentVideo.addEventListener('ended', handleVideoEnd);
      
      // Play or pause based on state
      if (isPlaying) {
        const playPromise = currentVideo.play();
        
        // Handle play promise (might be rejected if browser prevents autoplay)
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Autoplay prevented:", error);
            setIsPlaying(false);
          });
        }
      } else {
        currentVideo.pause();
      }
      
      // Clean up event listeners
      return () => {
        currentVideo.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [activeStep, isPlaying, autoAdvance, steps.length]);

  // Handle manual step change
  const handleStepChange = (stepNumber: number) => {
    setActiveStep(stepNumber);
    setIsPlaying(true); // Auto-play when manually changing steps
  };
  
  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  // Toggle auto-advance
  const toggleAutoAdvance = () => {
    setAutoAdvance(!autoAdvance);
  };

  return (
    <section className="py-32 bg-[#F8F5F0] relative overflow-hidden">
      <LuxuryPattern opacity={5} />
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[200px] left-[200px] w-[500px] h-[500px] rounded-full bg-[#C6AC8E]/5 blur-[150px]"></div>
        <div className="absolute bottom-[100px] right-[100px] w-[400px] h-[400px] rounded-full bg-[#5E503F]/5 blur-[150px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-20">
          {/* Decorative element */}
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#C6AC8E] to-transparent mb-8"></div>
          
          <h3 className="text-[#C6AC8E] text-lg font-medium uppercase tracking-[0.25em] mb-4">
            The Experience
          </h3>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 text-center max-w-3xl">
            Effortless Authentication <span className="text-[#C6AC8E]">Process</span>
          </h2>
          
          <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-[#C6AC8E] to-transparent mb-8"></div>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-[#5E503F] text-center leading-relaxed">
            Experience our seamless three-step authentication journey, delivering expert verification with unparalleled elegance and precision.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side: Interactive steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div 
                key={step.number}
                className={`group relative cursor-pointer transition-all duration-500 ease-in-out ${
                  activeStep === step.number 
                    ? 'scale-105' 
                    : 'opacity-70 hover:opacity-90'
                }`}
                onClick={() => handleStepChange(step.number)}
              >
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C6AC8E]/30 to-transparent"></div>
                
                <div className="flex items-start pl-8 relative">
                  {/* Step number */}
                  <div className={`absolute left-[-15px] top-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${
                    activeStep === step.number 
                      ? 'border-[#C6AC8E] bg-[#C6AC8E]/10' 
                      : 'border-[#C6AC8E]/30 bg-white'
                  }`}>
                    <span className={`font-serif text-lg ${
                      activeStep === step.number 
                        ? 'text-[#C6AC8E]' 
                        : 'text-[#C6AC8E]/70'
                    }`}>
                      {step.number}
                    </span>
                  </div>
                  
                  <div className="ml-4">
                    <div className="flex items-center mb-3">
                      <div className={`p-2 rounded-full transition-all duration-500 ${
                        activeStep === step.number 
                          ? 'bg-[#C6AC8E]/10' 
                          : 'bg-white'
                      }`}>
                        {step.icon}
                      </div>
                      <h3 className={`text-2xl font-medium ml-3 transition-all duration-500 ${
                        activeStep === step.number 
                          ? 'text-[#1A1A1A]' 
                          : 'text-[#1A1A1A]/70'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    
                    <div className={`h-[1px] w-full bg-gradient-to-r from-[#C6AC8E]/50 to-transparent mb-4 transition-all duration-500 ${
                      activeStep === step.number 
                        ? 'opacity-100' 
                        : 'opacity-30'
                    }`}></div>
                    
                    <p className={`text-lg leading-relaxed transition-all duration-500 ${
                      activeStep === step.number 
                        ? 'text-[#5E503F]' 
                        : 'text-[#5E503F]/70'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="pt-8">
              <Link 
                href="/products"
                className="inline-flex items-center px-8 py-4 bg-white border border-[#C6AC8E]/70 text-[#C6AC8E] rounded-md hover:bg-[#C6AC8E]/5 transition-all duration-300 text-lg font-medium group shadow-sm overflow-hidden relative"
              >
                <span className="relative z-10">Explore Our Process</span>
                <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
                {/* Add shine effect */}
                <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
              </Link>
            </div>
          </div>
          
          {/* Right side: Video player */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-md overflow-hidden shadow-xl bg-[#1A1A1A]/5">
              {/* Decorative frame */}
              <div className="absolute inset-0 border border-[#C6AC8E]/20 z-30 pointer-events-none"></div>
              <div className="absolute inset-[1px] border border-[#C6AC8E]/10 z-30 pointer-events-none"></div>
              
              {/* Videos */}
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    activeStep === step.number ? 'opacity-100 z-20' : 'opacity-0 z-10'
                  }`}
                >
                  <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                poster={step.poster}
                playsInline
                muted
                className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={step.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 via-transparent to-transparent z-20 pointer-events-none"></div>
                </div>
              ))}
              
              {/* Video controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent p-6 z-30 flex justify-between items-center">
                <div className="flex items-center">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlayPause();
                    }}
                    className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-colors mr-4"
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5 text-[#C6AC8E] fill-[#C6AC8E]" />
                    ) : (
                      <Play className="h-5 w-5 text-[#C6AC8E] fill-[#C6AC8E] ml-0.5" />
                    )}
                  </button>
                  
                  <div className="text-white text-sm font-medium">
                    Step {activeStep} • {steps[activeStep-1].duration}
                  </div>
                </div>
                
                <div className="flex items-center">
                  <label className="text-white text-sm mr-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={autoAdvance} 
                      onChange={(e) => {
                        e.stopPropagation();
                        toggleAutoAdvance();
                      }}
                      className="mr-2 accent-[#C6AC8E]"
                    />
                    Auto-play next
                  </label>
                </div>
              </div>
              
              {/* Luxury corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#C6AC8E]/30 pointer-events-none z-30"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#C6AC8E]/30 pointer-events-none z-30"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#C6AC8E]/30 pointer-events-none z-30"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#C6AC8E]/30 pointer-events-none z-30"></div>
              
              {/* Step indicators */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
                {steps.map((step) => (
                  <button
                    key={step.number}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStepChange(step.number);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeStep === step.number 
                        ? 'bg-[#C6AC8E] scale-150' 
                        : 'bg-white/80 hover:bg-white'
                    }`}
                    aria-label={`View step ${step.number}: ${step.title}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-white border border-[#C6AC8E]/70 rounded-full px-6 py-3 shadow-xl">
              <span className="text-[#C6AC8E] font-medium">Premium Service</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add shine animation if not already in global styles */}
      <style jsx global>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        
        .animate-shine {
          animation: shine 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
