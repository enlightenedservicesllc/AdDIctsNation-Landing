import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqQuestion = ({ question, answer, defaultOpen = false }) => {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpen ? "item" : undefined}
    >
      <AccordionItem value="item" className="border-b border-gray-200">
        <AccordionTrigger className="py-5 text-base font-medium">
          {question}
        </AccordionTrigger>
        <AccordionContent className="pb-5">
          <p className="text-black">{answer}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqQuestion;
