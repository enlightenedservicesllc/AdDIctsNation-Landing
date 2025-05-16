import Herosection from "@/components/guidelines/hero-section";
import TextSection from "@/components/guidelines/text-section";
import React from "react";

const Guidelines = () => {
  return (
    <div className="flex flex-col bg-[#F9F9F9] md:p-2 p-0">
      <Herosection />
      <TextSection />
    </div>
  );
};

export default Guidelines;
