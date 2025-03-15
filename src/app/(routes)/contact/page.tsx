'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Mail, Phone, MapPin, Send, CheckCircle, Calendar, Clock, ArrowRight } from 'lucide-react';
import { LuxuryPattern } from '@/components/ui/luxury-pattern';
import Image from 'next/image';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  // Form validation states
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact-form-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsAnimating(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormValues(prev => ({
      ...prev,
      subject: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
    
    // In a real implementation, you would submit the form data to your backend
    // const formData = new FormData(e.target as HTMLFormElement);
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   body: formData,
    // });
  };

  return (
    <main className="bg-gradient-to-b from-white to-[#F8F5F0] text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
        {/* Luxury pattern overlay */}
        <LuxuryPattern opacity={5} />
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-[#C6AC8E]/10 blur-[100px]"></div>
          <div className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] rounded-full bg-[#5E503F]/10 blur-[100px]"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-40 h-40 border border-[#C6AC8E]/10 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-[#C6AC8E]/5 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
              <div className="mx-4 w-2 h-2 rounded-full bg-[#C6AC8E]"></div>
              <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#1A1A1A]">Contact </span>
              <span className="text-[#C6AC8E]">Us</span>
            </h1>
            
            <div className="h-[1px] w-40 mx-auto bg-gradient-to-r from-transparent via-[#C6AC8E]/70 to-transparent mb-8"></div>
            
            <p className="text-xl text-[#5E503F] max-w-3xl mx-auto leading-relaxed">
              We welcome your inquiries about our authentication services. Our dedicated team is here to assist you with personalized support and expert guidance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Info Section */}
      <section id="contact-form-section" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Form - 3 columns */}
            <div className={`lg:col-span-3 transition-all duration-700 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="bg-white rounded-xl border border-[#E8E2D9] shadow-lg p-8 md:p-10 relative overflow-hidden">
                {/* Subtle pattern in background */}
                <div className="absolute inset-0 opacity-[0.03]">
                  <LuxuryPattern opacity={100} />
                </div>
                
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#C6AC8E]/20 rounded-br-xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#C6AC8E]/20 rounded-tl-xl"></div>
                
                <div className="relative">
                  {formSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-16">
                      <div className="w-20 h-20 rounded-full bg-[#F8F5F0] flex items-center justify-center mb-8">
                        <CheckCircle className="h-10 w-10 text-[#C6AC8E]" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Message Sent Successfully</h3>
                      <div className="h-[1px] w-16 bg-[#C6AC8E]/50 my-4"></div>
                      <p className="text-[#5E503F] text-center max-w-md mb-10 leading-relaxed">
                        Thank you for reaching out. Our team will review your message and respond promptly, typically within 24 hours.
                      </p>
                      <Button 
                        onClick={() => setFormSubmitted(false)} 
                        className="bg-white border-2 border-[#C6AC8E] text-[#5E503F] hover:bg-[#C6AC8E]/5 px-8 py-3 rounded-md relative overflow-hidden group"
                      >
                        <span className="relative z-10 flex items-center">
                          Send Another Message
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Send Us a Message</h2>
                        <div className="h-1 w-12 bg-[#C6AC8E] mb-4"></div>
                        <p className="text-[#5E503F]">We look forward to hearing from you. Please complete the form below.</p>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2 relative">
                            <label 
                              htmlFor="name" 
                              className={`text-sm font-medium transition-all duration-300 ${
                                focusedField === 'name' ? 'text-[#C6AC8E]' : 'text-[#5E503F]'
                              }`}
                            >
                              Full Name
                            </label>
                            <div className={`relative transition-all duration-300 ${
                              focusedField === 'name' ? 'transform scale-[1.02]' : ''
                            }`}>
                              <Input
                                id="name"
                                name="name"
                                placeholder="Your full name"
                                required
                                value={formValues.name}
                                onChange={handleFormChange}
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                                className="border-[#E8E2D9] bg-[#F8F5F0]/50 focus:border-[#C6AC8E] text-[#1A1A1A] placeholder:text-[#8A7968]/60 rounded-md px-4 py-3 focus:ring-1 focus:ring-[#C6AC8E]/30 focus:bg-white transition-all duration-300"
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2 relative">
                            <label 
                              htmlFor="email" 
                              className={`text-sm font-medium transition-all duration-300 ${
                                focusedField === 'email' ? 'text-[#C6AC8E]' : 'text-[#5E503F]'
                              }`}
                            >
                              Email Address
                            </label>
                            <div className={`relative transition-all duration-300 ${
                              focusedField === 'email' ? 'transform scale-[1.02]' : ''
                            }`}>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Your email address"
                                required
                                value={formValues.email}
                                onChange={handleFormChange}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                                className="border-[#E8E2D9] bg-[#F8F5F0]/50 focus:border-[#C6AC8E] text-[#1A1A1A] placeholder:text-[#8A7968]/60 rounded-md px-4 py-3 focus:ring-1 focus:ring-[#C6AC8E]/30 focus:bg-white transition-all duration-300"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 relative">
                          <label 
                            htmlFor="subject" 
                            className={`text-sm font-medium transition-all duration-300 ${
                              focusedField === 'subject' ? 'text-[#C6AC8E]' : 'text-[#5E503F]'
                            }`}
                          >
                            Subject
                          </label>
                          <div className={`relative transition-all duration-300 ${
                            focusedField === 'subject' ? 'transform scale-[1.02]' : ''
                          }`}>
                            <Select 
                              name="subject" 
                              onValueChange={handleSelectChange}
                              onOpenChange={(open) => {
                              // This handles both open and close states
                              if (open) {
                                setFocusedField('subject');
                              } else {
                                setFocusedField(null);
                              }
                                }}
                              >
                              <SelectTrigger className="border-[#E8E2D9] bg-[#F8F5F0]/50 focus:border-[#C6AC8E] text-[#1A1A1A] rounded-md px-4 py-3 h-auto focus:ring-1 focus:ring-[#C6AC8E]/30 focus:bg-white">
                                <SelectValue placeholder="Please select a topic" />
                              </SelectTrigger>
                              <SelectContent className="bg-white border-[#E8E2D9] text-[#1A1A1A] rounded-md shadow-lg">
                                <SelectItem value="general" className="hover:bg-[#F8F5F0]/80 focus:bg-[#F8F5F0]/80 py-2">General Inquiry</SelectItem>
                                <SelectItem value="authentication" className="hover:bg-[#F8F5F0]/80 focus:bg-[#F8F5F0]/80 py-2">Authentication Services</SelectItem>
                                <SelectItem value="enterprise" className="hover:bg-[#F8F5F0]/80 focus:bg-[#F8F5F0]/80 py-2">Enterprise Solutions</SelectItem>
                                <SelectItem value="support" className="hover:bg-[#F8F5F0]/80 focus:bg-[#F8F5F0]/80 py-2">Technical Support</SelectItem>
                                <SelectItem value="press" className="hover:bg-[#F8F5F0]/80 focus:bg-[#F8F5F0]/80 py-2">Press & Media</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="space-y-2 relative">
                          <label 
                            htmlFor="message" 
                            className={`text-sm font-medium transition-all duration-300 ${
                              focusedField === 'message' ? 'text-[#C6AC8E]' : 'text-[#5E503F]'
                            }`}
                          >
                            Message
                          </label>
                          <div className={`relative transition-all duration-300 ${
                            focusedField === 'message' ? 'transform scale-[1.02]' : ''
                          }`}>
                            <Textarea
                              id="message"
                              name="message"
                              placeholder="Please describe how we can assist you..."
                              required
                              rows={6}
                              value={formValues.message}
                              onChange={handleFormChange}
                              onFocus={() => setFocusedField('message')}
                              onBlur={() => setFocusedField(null)}
                              className="border-[#E8E2D9] bg-[#F8F5F0]/50 focus:border-[#C6AC8E] text-[#1A1A1A] placeholder:text-[#8A7968]/60 rounded-md px-4 py-3 resize-none focus:ring-1 focus:ring-[#C6AC8E]/30 focus:bg-white transition-all duration-300"
                            />
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] hover:from-[#D9C4AA] hover:to-[#6E6049] text-white shadow-md hover:shadow-lg rounded-md px-10 py-4 relative overflow-hidden group"
                            disabled={isSubmitting}
                          >
                            <span className="relative z-10 flex items-center justify-center">
                              {isSubmitting ? (
                                <>
                                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  Sending Your Message...
                                </>
                              ) : (
                                <>
                                  Send Message <Send className="ml-2 h-5 w-5" />
                                </>
                              )}
                            </span>
                            <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
                          </Button>
                        </div>
                        
                        <p className="text-sm text-[#8A7968] text-center pt-4">
                          We respect your privacy and will never share your information with third parties.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            {/* Contact Information - 2 columns */}
            <div className={`lg:col-span-2 transition-all duration-700 delay-300 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="space-y-10">
                {/* Contact Info Card */}
                <div className="bg-white rounded-xl border border-[#E8E2D9] shadow-lg p-8 relative">
                  <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#C6AC8E]/20 rounded-bl-xl"></div>
                  
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Contact Information</h2>
                  <div className="h-1 w-12 bg-[#C6AC8E] mb-6"></div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#F8F5F0] flex items-center justify-center flex-shrink-0 mr-4">
                        <Mail className="h-5 w-5 text-[#C6AC8E]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">Email</h3>
                        <a href="mailto:contact@authentico.com" className="text-[#5E503F] hover:text-[#C6AC8E] transition-colors">
                          contact@authentico.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#F8F5F0] flex items-center justify-center flex-shrink-0 mr-4">
                        <Phone className="h-5 w-5 text-[#C6AC8E]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">Telephone</h3>
                        <a href="tel:+18005551000" className="text-[#5E503F] hover:text-[#C6AC8E] transition-colors">
                          +1 (800) 555-1000
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#F8F5F0] flex items-center justify-center flex-shrink-0 mr-4">
                        <MapPin className="h-5 w-5 text-[#C6AC8E]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">Headquarters</h3>
                        <address className="text-[#5E503F] not-italic">
                          123 Authentication Avenue<br />
                          San Francisco, CA 94105<br />
                          United States
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
                                {/* Hours of Operation Card */}
                                <div className="bg-[#F8F5F0] rounded-xl border border-[#E8E2D9] p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                      <Clock className="h-5 w-5 text-[#C6AC8E]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A]">Hours of Operation</h3>
                  </div>
                  
                  <div className="space-y-3 pl-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[#5E503F]">Monday - Friday</span>
                      <span className="text-[#1A1A1A] font-medium">9:00 AM - 8:00 PM EST</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-[#5E503F]">Saturday</span>
                      <span className="text-[#1A1A1A] font-medium">10:00 AM - 6:00 PM EST</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-[#5E503F]">Sunday</span>
                      <span className="text-[#1A1A1A] font-medium">Closed</span>
                    </div>
                  </div>
                </div>
                
                {/* Business Inquiries Card */}
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2520] rounded-xl p-8 text-white shadow-lg relative overflow-hidden">
                  {/* Luxury pattern with higher opacity for dark background */}
                  <div className="absolute inset-0 opacity-10">
                    <LuxuryPattern opacity={100} />
                  </div>
                  
                  {/* Corner detail */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/10 rounded-br-xl"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/10 rounded-tl-xl"></div>
                  
                  <div className="relative">
                    <h3 className="text-xl font-bold mb-2">Enterprise Solutions</h3>
                    <div className="h-1 w-12 bg-[#C6AC8E] mb-4"></div>
                    <p className="text-white/80 mb-6">
                      For businesses looking for custom authentication solutions, our enterprise team is ready to help create the perfect package for your needs.
                    </p>
                    
                    <Button className="bg-white text-[#1A1A1A] hover:bg-[#F8F5F0] transition-colors group">
                      <span className="flex items-center">
                        Contact Enterprise Team
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </div>
                </div>
                
                {/* Map preview - Not fully interactive, just a visual element */}
                <div className="relative rounded-xl overflow-hidden h-48 shadow-lg border border-[#E8E2D9]">
                  <Image
                    src="/contact/map-preview.jpg"
                    alt="Location Map"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-[#E8E2D9]">
                      <MapPin className="h-6 w-6 text-[#C6AC8E]" />
                    </div>
                  </div>
                  <div className="absolute inset-0 border border-[#E8E2D9] pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-[#F8F5F0] relative">
        <LuxuryPattern opacity={4} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
              <div className="mx-4 w-2 h-2 rounded-full bg-[#C6AC8E]"></div>
              <div className="h-[1px] w-12 bg-[#C6AC8E]/70"></div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">
              Frequently Asked <span className="text-[#C6AC8E]">Questions</span>
            </h2>
            
            <p className="text-[#5E503F] max-w-3xl mx-auto">
              Find answers to common questions about our authentication services and processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-[#E8E2D9] p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">How long does authentication take?</h3>
              <div className="h-px w-full bg-[#E8E2D9] mb-4"></div>
              <p className="text-[#5E503F] leading-relaxed">
                Authentication times vary based on the service level you choose. We offer options ranging from 10 minutes to 24 hours, depending on the item type and your subscription plan.
              </p>
            </div>
            
            <div className="bg-white rounded-xl border border-[#E8E2D9] p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">What items can you authenticate?</h3>
              <div className="h-px w-full bg-[#E8E2D9] mb-4"></div>
              <p className="text-[#5E503F] leading-relaxed">
                We authenticate luxury handbags, watches, sneakers, clothing, accessories, and more from over 300 premium brands. Visit our "What We Authenticate" page for a complete listing.
              </p>
            </div>
            
            <div className="bg-white rounded-xl border border-[#E8E2D9] p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">How does the authentication app work?</h3>
              <div className="h-px w-full bg-[#E8E2D9] mb-4"></div>
              <p className="text-[#5E503F] leading-relaxed">
                Simply download our app, take photos of your item following our guidelines, select your desired turnaround time, and submit for authentication. You'll receive results directly in the app.
              </p>
            </div>
            
            <div className="bg-white rounded-xl border border-[#E8E2D9] p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Do you offer a guarantee?</h3>
              <div className="h-px w-full bg-[#E8E2D9] mb-4"></div>
              <p className="text-[#5E503F] leading-relaxed">
                Yes, we stand behind our authentication with a comprehensive financial guarantee. If we incorrectly authenticate an item, we'll provide compensation according to our guarantee policy.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-[#5E503F] mb-6">
              Have more questions? Visit our comprehensive FAQ page.
            </p>
            <Button className="bg-white border-2 border-[#C6AC8E] text-[#5E503F] hover:bg-[#C6AC8E]/5 px-8 py-3 rounded-md group">
              <span className="flex items-center">
                View All FAQs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Simple CTA Banner */}
      <section className="py-16 bg-white border-t border-[#E8E2D9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-6 text-[#1A1A1A]">
            Begin Your <span className="text-[#C6AC8E]">Authentication</span> Journey Today
          </h2>
          <p className="text-[#5E503F] mb-8 max-w-2xl mx-auto">
            Download our app and discover the confidence that comes with verified authenticity. Experience the premium authentication service trusted by collectors worldwide.
          </p>
          <Button className="bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] hover:from-[#D9C4AA] hover:to-[#6E6049] text-white px-8 py-4 rounded-md relative overflow-hidden group">
            <span className="relative z-10">Download Authentico App</span>
            <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
          </Button>
        </div>
      </section>
      
      {/* Shine animation for buttons */}
      <style jsx global>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
      `}</style>
    </main>
  );
}
