import Herosection from "@/components/career/hero-section";
import JobOpenings from "@/components/career/jobOpenings";
import FAQSection from "@/components/home/faq-section";

const Career = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F9] md:p-2 p-0">
      <Herosection />
      <JobOpenings />
      <FAQSection />
    </div>
  );
};

export default Career;
