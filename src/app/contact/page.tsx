import HeroSection from '@/Components/contact/HeroSection';
import ContactCards from '@/Components/contact/ContactCard';
import ContactForm from '@/Components/contact/ContactForm';
import BusinessInquiry from '@/Components/contact/BusinessInquiry';
import GoogleMap from '@/Components/contact/GoogleMap';
import FinalCTA from '@/Components/contact/FinalCTA';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <HeroSection />
      
      {/* 2. Contact Cards */}
      <ContactCards />
      
      {/* 3. Contact Form + We're Ready to Help */}
      <ContactForm />

      {/* 4. Business & Dealer Inquiries */}
      <BusinessInquiry />
      
      {/* 5. Google Map */}
      <GoogleMap />
      
      {/* 6. Final CTA */}
      <FinalCTA />
    </main>
  );
}
