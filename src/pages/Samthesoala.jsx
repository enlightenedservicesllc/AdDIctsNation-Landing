import AboutSection from "../components/samthesoala/about-section";
import HeroSection from "../components/samthesoala/hero-section";
import RareSpecies from "../components/samthesoala/rare-species";
import MissionSection from "../components/samthesoala/sam'sMission";
import { SamsMissionCards } from "../constants/Sam";
import HelpSection from "../components/samthesoala/helping-section";
import SaolaIntro from "@/components/samthesoala/Helpers/SaolaIntro";
import FAQSection from "@/components/home/faq-section";

const Samthesoala = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#F9F9F9] md:p-2 p-0">
        <HeroSection />
        <AboutSection />
        <SaolaIntro />
        <RareSpecies />
        <MissionSection SamsMissionCards={SamsMissionCards} />
        <HelpSection />
        <FAQSection />
      </div>
    </>
  );
};

export default Samthesoala;
