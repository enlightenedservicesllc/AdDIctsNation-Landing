import React from "react";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import trendingImage from "@/assets/home/trending.webp";
import { motion } from "framer-motion";
import { URLS } from "@/constants";
import { Link } from "react-router";

const TrendingSection = () => {
  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-6">
              <motion.div
                className="inline-block mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2,
                }}
              >
                <p className="text-primary text-3xl font-bold">🚀</p>
                {/* <Rocket className="text-primary h-8 w-8" /> */}
              </motion.div>
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Where Trends
                <br />
                Take Flight!
              </motion.h2>
              <motion.p
                className="text-base md:text-lg text-gray-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Stay ahead of the curve with Trending Ads, a real-time showcase
                of the most engaging and top-rated campaigns. From eye-catching
                visuals to viral marketing genius, see what's capturing the
                audience's attention right now!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={URLS.register}>
                  <Button className="bg-primary hover:bg-primary/80 text-white rounded-full px-6 py-6 h-12">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Post Feed */}
          <motion.div
            className="lg:w-1/2 flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <motion.img
              src={trendingImage}
              alt="trending"
              className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-xl"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrendingSection;
