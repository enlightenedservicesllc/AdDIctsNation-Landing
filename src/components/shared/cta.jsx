import React from "react";
import { ArrowRight } from "lucide-react";
import ctaImage from "@/assets/cta-bg.webp";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { URLS } from "@/constants";

const CTA = () => {
  return (
    // <div className="container mx-auto px-4 md:px-8 lg:px-16">
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full bg-primary overflow-hidden rounded-t-3xl"
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:bg-primary/70 rounded-t-3xl"
        style={{
          backgroundImage: `url(${ctaImage})`,
        }}
      ></div>
      <div className="container mx-auto px-4 md:px-10 py-16 md:py-20 relative z-10">
        <div className="h-full flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Where Creativity Meets Community
            </h2>
          </motion.div>

          {/* Right Content */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to={URLS.register}>
              <Button
                size="lg"
                className="bg-white text-black rounded-4xl hover:bg-white/90 flex items-center justify-center"
              >
                Get Started
                <ChevronRight />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
    // </div>
  );
};

export default CTA;
