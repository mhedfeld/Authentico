// src/components/auth/login-form.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LuxuryPattern } from "@/components/ui/luxury-pattern";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

export function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true);
    
    // Simulate API call
    try {
      // This would be replaced with your actual authentication API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect after successful login
      router.push("/profile");
      
    } catch (error) {
      console.error("Login failed:", error);
      // Handle error state
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left side - Branding */}
        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#22333B] to-[#0A0908] overflow-hidden hidden md:block">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-[#C6AC8E]/10 blur-[80px]"></div>
            <div className="absolute bottom-[10%] right-[10%] w-[250px] h-[250px] rounded-full bg-[#5E503F]/10 blur-[100px]"></div>
          </div>
          
          <LuxuryPattern opacity={8} />
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
            <Link href="/" className="mb-8 flex items-center group">
              <div className="mr-4 relative overflow-hidden rounded-full w-14 h-14 flex items-center justify-center bg-[#F8F5F0] border border-[#E8E2D9]">
                <Image 
                  src="/logos/authentico-logo.png" 
                  alt="Authentico" 
                  width={100} 
                  height={100}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
              </div>
              <div>
                <span className="text-3xl font-bold text-white">
                  Auth<span className="text-[#C6AC8E]">entico</span>
                </span>
              </div>
            </Link>
            
            <h2 className="text-2xl text-white font-medium mb-4">
              Premium Authentication <br/>
              <span className="text-[#C6AC8E]">Exclusively For You</span>
            </h2>
            
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#C6AC8E] to-transparent mb-6"></div>
            
            <p className="text-[#EAE0D5] text-center max-w-xs mb-8">
              Secure access to your authentication profile, history, and certificates.
            </p>
            
            {/* Testimonial */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 max-w-xs">
              <div className="flex items-start mb-3">
                <div className="flex-shrink-0 mr-3">
                  <Image 
                    src="/testimonials/james.jpg" 
                    alt="James"
                    width={40} 
                    height={40}
                    className="rounded-full border-2 border-[#C6AC8E]"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm">James Thompson</h4>
                  <div className="flex mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-3 h-3 text-[#C6AC8E]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/90 text-xs italic">
                "The member portal alone is worth signing up. Every authentication is detailed and the certificates are perfect for reselling."
              </p>
            </div>
          </div>
        </div>
        
        {/* Right side - Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E8E2D9]">
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-[#1A1A1A]">Welcome Back</h1>
              <p className="mt-2 text-[#5E503F]">Sign in to your Authentico account</p>
            </div>
            
            {/* Social login options */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 rounded-lg border border-[#E8E2D9] bg-white p-3 text-[#5E503F] hover:bg-[#F8F5F0] transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                  <path fill="none" d="M1 1h22v22H1z" />
                </svg>
                <span className="text-sm font-medium">Google</span>
              </button>
              
              <button className="flex items-center justify-center gap-2 rounded-lg border border-[#E8E2D9] bg-white p-3 text-[#5E503F] hover:bg-[#F8F5F0] transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                  />
                </svg>
                <span className="text-sm font-medium">Facebook</span>
              </button>
            </div>
            
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-[#E8E2D9]"></div>
              <span className="mx-4 flex-shrink text-[#5E503F] text-sm">or continue with</span>
              <div className="flex-grow border-t border-[#E8E2D9]"></div>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#5E503F]">Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#5E503F]" />
                          <Input 
                            placeholder="your@email.com" 
                            className="pl-10 bg-white border-[#E8E2D9] focus:border-[#C6AC8E] focus:ring-[#C6AC8E]/30" 
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#5E503F]">Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#5E503F]" />
                          <Input 
                            type={showPassword ? "text" : "password"} 
                            className="pl-10 pr-10 bg-white border-[#E8E2D9] focus:border-[#C6AC8E] focus:ring-[#C6AC8E]/30" 
                            {...field}
                          />
                          <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5E503F] hover:text-[#C6AC8E]"
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500" />
                      <div className="flex justify-end">
                        <Link 
                          href="/forgot-password" 
                          className="text-sm text-[#C6AC8E] hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] hover:from-[#D9C4AA] hover:to-[#6E6049] text-white group overflow-hidden"
                  disabled={isLoading}
                >
                  <span className="relative z-10 flex items-center">
                    {isLoading ? "Signing in..." : "Sign in"}
                    {!isLoading && (
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </span>
                  <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine"></div>
                </Button>
              </form>
            </Form>
            
            <div className="text-center">
              <p className="text-[#5E503F]">
                Don't have an account?{" "}
                <Link href="/register" className="text-[#C6AC8E] hover:underline font-medium">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
