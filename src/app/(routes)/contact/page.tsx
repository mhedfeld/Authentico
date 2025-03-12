'use client';

import { useState } from 'react';
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
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
              Contact Us
            </h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Have questions about our authentication services? Get in touch with our team and we'll be happy to help.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Info Section */}
      <section className="py-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 md:p-10">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16">
                  <div className="bg-green-500/20 rounded-full p-4 mb-6">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-stone-300 text-center max-w-md mb-8">
                    Thank you for reaching out. Our team will get back to you as soon as possible.
                  </p>
                  <Button 
                    onClick={() => setFormSubmitted(false)} 
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-stone-300">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-stone-500 focus:border-amber-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-stone-300">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-stone-500 focus:border-amber-500"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-stone-300">
                        Subject
                      </label>
                      <Select name="subject">
                        <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-amber-500">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent className="bg-stone-900 border-white/20 text-white">
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="authentication">Authentication Question</SelectItem>
                          <SelectItem value="business">Business Partnership</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-stone-300">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        required
                        rows={6}
                        className="bg-white/10 border-white/20 text-white placeholder:text-stone-500 focus:border-amber-500"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
            
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-stone-300 mb-8">
                  Our team is available to answer your questions and help you with your authentication needs.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-amber-500/20 rounded-full p-3 mr-4">
                      <Mail className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-stone-300">support@legitapp.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-amber-500/20 rounded-full p-3 mr-4">
                      <Phone className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-stone-300">+1 (888) LEGIT-APP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-amber-500/20 rounded-full p-3 mr-4">
                      <MapPin className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Headquarters</h3>
                      <p className="text-stone-300">
                        123 Authentication Street<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Business Inquiries</h2>
                <p className="text-stone-300 mb-6">
                  Interested in our enterprise solutions or partnership opportunities? Our business development team is ready to help.
                </p>
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                >
                  Contact Sales Team
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6">
                <h3 className="text-xl font-bold mb-4">Customer Support Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-stone-300">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 8:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-300">Saturday:</span>
                    <span className="font-medium">10:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-300">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 relative bg-stone-900">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[100px] right-[100px] w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[150px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6">
              <h3 className="text-xl font-bold mb-4">How long does authentication take?</h3>
              <p className="text-stone-300">
                Authentication times vary based on the service level you choose. We offer options ranging from 10 minutes to 24 hours, depending on the item type and your needs.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6">
              <h3 className="text-xl font-bold mb-4">What items can you authenticate?</h3>
              <p className="text-stone-300">
                We authenticate luxury handbags, watches, sneakers, clothing, accessories, and more from over 300 brands. Visit our "What We Authenticate" page for a complete list.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6">
              <h3 className="text-xl font-bold mb-4">How does the app work?</h3>
              <p className="text-stone-300">
                Simply download our app, take photos of your item following our guidelines, select your desired turnaround time, and submit for authentication. You'll receive results directly in the app.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6">
              <h3 className="text-xl font-bold mb-4">Do you offer refunds?</h3>
              <p className="text-stone-300">
                Our authentication fee is non-refundable as it covers the service provided, regardless of the outcome. However, we do offer a financial guarantee if we incorrectly authenticate an item.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-stone-300 mb-6">
              Have more questions? Visit our comprehensive FAQ page.
            </p>
            <Button variant="outline" className="border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
