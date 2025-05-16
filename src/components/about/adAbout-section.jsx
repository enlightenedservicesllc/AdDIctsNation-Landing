import React from "react";
import { motion } from "framer-motion";
import aboutData from "../about/Helpers/AboutData"; // Adjust the path if needed

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutAdsSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="w-full flex flex-col md:flex-row items-center gap-6 px-4 sm:px-6 md:px-12 py-8 mt-8 md:mt-20 mb-8 md:mb-20"
    >
      {/* Left Side - Image */}
      <motion.div
        variants={itemVariants}
        className="w-full md:w-1/2 flex justify-center"
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={aboutData.image}
          alt="Ad Billboard"
          className="w-full max-w-[450px] max-h-full rounded-xl object-cover"
        />
      </motion.div>

      {/* Right Side - Text Content */}
      <motion.div
        variants={itemVariants}
        className="w-full md:w-1/2 text-center md:text-left px-4 sm:px-6"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-light md:leading-15 text-black md:mb-6 "
        >
          {aboutData.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-[#454545] text-lg md:leading-9 mt-4 md:me-30 me-0"
        >
          <div dangerouslySetInnerHTML={{ __html: aboutData.description }} />
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default AboutAdsSection;


