import HeroSection from "../components/home/hero-section";
import AboutSection from "../components/home/about-section";
import FAQSection from "../components/home/faq-section";
import TrendingSection from "../components/home/trending-section";
import WhyBrandsSection from "../components/home/why-brands-section";
import RewardSection from "../components/home/reward-section";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F9] md:p-2 p-0">
      <HeroSection />
      <AboutSection />
      <TrendingSection />
      <WhyBrandsSection />
      <RewardSection />
      <FAQSection />
    </div>
  );
};

export default Home;
