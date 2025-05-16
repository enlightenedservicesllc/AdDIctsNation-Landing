import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqContent } from "@/constants";
import { Link } from "react-router";

const FAQSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-[#F7F0EA] py-16 px-4 md:px-10 lg:px-20 mb-4 rounded-3xl"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl font-normal text-center mb-12 text-gray-800"
        >
          Frequently Asked Questions
        </motion.h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqContent.map((faq) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <AccordionItem value={`item-${faq.id}`} className="border-b ">
                <motion.div whileTap={{ scale: 0.995 }}>
                  <AccordionTrigger className="flex justify-between py-4 text-xl text-left font-light">
                    <span>{faq.question}</span>
                  </AccordionTrigger>
                </motion.div>
                <AccordionContent className="py-2 text-[16px] text-black">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-10"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to={"/faqs"}>
              <Button
                variant="default"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
              >
                View More
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
