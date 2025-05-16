import React, { useState } from "react";
import FaqCategory from "./faq-category";
import FaqQuestion from "./faq-question";
import { faqData } from "../../constants/faq";

const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4 space-y-2">
          {faqData.map((category, index) => (
            <FaqCategory
              key={index}
              title={category.title}
              isActive={activeCategory === index}
              onClick={() => setActiveCategory(index)}
            />
          ))}
        </div>

        {/* Questions */}
        <div className="md:w-3/4 space-y-1">
          {faqData[activeCategory].questions.map((item, index) => (
            <FaqQuestion
              key={index}
              question={item.question}
              answer={item.answer}
              defaultOpen={index === 0 && activeCategory === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
