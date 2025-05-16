import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import engagementMetricsImage from "@/assets/home/brands.webp";
import { Link } from "react-router";

const WhyBrandsSection = () => {
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
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
      className="w-full py-16 px-4 md:px-8 lg:px-16"
    >
      <div className="container mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl font-medium text-center mb-12"
        >
          Why Brands Should Join
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {/* Engagement Metrics Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-[#F7F0EA] rounded-3xl p-8 flex flex-col items-center justify-center"
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm"
            >
              <p className="text-primary text-3xl font-bold">🤘</p>
            </motion.div>
            <h3 className="text-2xl font-semibold mb-3">Engagement Metrics</h3>
            <p className="text-gray-600 text-center">
              Show live audience insights (e.g., 65% of users watched your ad to
              the end).
            </p>
          </motion.div>

          {/* Center Image Section */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl overflow-hidden h-full"
          >
            <img
              src={engagementMetricsImage}
              alt="People engaging with content"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Success Stories Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-[#F7F0EA] rounded-3xl p-8 flex flex-col items-center justify-center"
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm"
            >
              <p className="text-primary text-3xl font-bold">💪</p>
            </motion.div>
            <h3 className="text-2xl font-semibold mb-3">Success Stories</h3>
            <p className="text-gray-600 text-center">
              Including case studies of brands leveraging AdDictsNation's
              feedback to refine their campaigns
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-8"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to={"https://app.addictsnation.com/register"}>
              <Button className="bg-primary hover:bg-primary/80 text-white rounded-full px-8 py-6 h-12 text-base">
                Submit Your Ad & Get Instant Feedback!
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyBrandsSection;
