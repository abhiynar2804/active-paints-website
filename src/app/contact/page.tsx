import HeroSection from '@/Components/contact/herosection';
import ContactCards from '@/Components/contact/contactcard';
import ContactForm from '@/Components/contact/contactform';
import BusinessInquiry from '@/Components/contact/businessinquiry';
import GoogleMap from '@/Components/contact/googlemap';
import FinalCTA from '@/Components/contact/finalcta';

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
