import React from "react";
import Herosection from "@/components/privacy/hero-section";
import TextSection from "@/components/privacy/text-section";

const Privacy = () => {
  return (
    <div className="flex flex-col bg-[#F9F9F9] md:p-2 p-0">
      <Herosection />
      <TextSection />
    </div>
  );
};

export default Privacy;
