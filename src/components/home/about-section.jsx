import React from "react";
import FeatureCard from "./feature-card";
import { featureCards } from "@/constants";
import { motion } from "framer-motion";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-10">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="flex flex-col" variants={itemVariants}>
            <h2 className="text-xl md:text-3xl font-semibold tracking-tight">
              ABOUT US
            </h2>
          </motion.div>
          <motion.div variants={itemVariants} className="animate-fade-in">
            <p className="text-lg font-normal leading-relaxed mb-3">
              AdDictsNation is the global meeting point for advert lovers, ad creators, and brands. Join a passionate community where you can watch, rate, and review TV commercials, digital ads, and brand campaigns from around the world.
            </p>

            <p className="text-lg font-normal leading-relaxed mb-3">
              Celebrate creativity, critique mediocrity—and connect with others who love advertising just as much as you do.
            </p>

            <p className="text-lg font-normal leading-relaxed mb-3">
              Are you a brand or advertiser? Join as an AdMover and get authentic feedback on your ad campaigns from a nation of AdDicts who value creative storytelling.
            </p>

            <p className="text-lg font-normal leading-relaxed mb-3">
              Welcome to AdDictsNation — Where Creativity Meets Community.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FeatureCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
