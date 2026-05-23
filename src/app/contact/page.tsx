import HeroSection from '../../components/contact/herosection';
import ContactCards from '../../components/contact/contactcard';
import ContactForm from '../../components/contact/contactform';
import BusinessInquiry from '../../components/contact/businessinquiry';
import GoogleMap from '../../components/contact/googlemap';
import FinalCTA from '../../components/contact/finalcta';

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
