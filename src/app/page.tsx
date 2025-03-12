import { HeroSection } from '@/components/layout/hero-section';
import { FeaturesSection } from '@/components/home/features-section';
import { BrandsSection } from '@/components/home/brands-section';
import { HowItWorksSection } from '@/components/home/how-it-works-section';
import { PricingSection } from '@/components/home/pricing-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { CTASection } from '@/components/home/cta-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <BrandsSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
