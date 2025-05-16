import React from "react";
import Herosection from "@/components/faqs/hero-section";
import FaqSection from "@/components/faqs/faq-section";

const Faq = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F9] md:p-2 p-0">
      <Herosection />
      <FaqSection />
    </div>
  );
};

export default Faq;
