import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TradeHistory from "@/components/TradeHistory";
import ProfitCalculator from "@/components/ProfitCalculator";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import GroupLinks from "@/components/GroupLinks";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TradeHistory />
      {/* <ProfitCalculator /> */}
      {/* <VideoSection /> */}
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="groups">
        <GroupLinks />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <FooterCTA />
    </div>
  );
};

export default Index;
