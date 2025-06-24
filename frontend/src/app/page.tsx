import TestimonialCards from "../components/TestimonialCards";
import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection"
import Whychooseus from "../components/Whychooseus";
import UpcomingWebinars from "../components/UpcomingWebinars";
import Instructors from "../components/Instructors";
import Footer from "../components/Footer";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection />  
    <FeatureSection />
    <Whychooseus />
    <TestimonialCards />
    <UpcomingWebinars />
    <Instructors />
    <Footer />
   </main>
  );
}
