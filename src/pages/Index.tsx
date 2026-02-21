import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TradeHistory from "@/components/TradeHistory";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import GroupLinks from "@/components/GroupLinks";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TradeHistory />
      <VideoSection />
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="groups">
        <GroupLinks />
      </div>
      <FooterCTA />
    </div>
  );
};

export default Index;
