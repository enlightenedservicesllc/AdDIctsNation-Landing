import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const SamMission = ({ icon, title, description, className }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "SamMission bg-[#F6F2EE] shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-center mb-6",
        className
      )}
    > 
      <div className="icon-circle flex items-center justify-center w-16 h-16 bg-white rounded-full">
        <span className="text-4xl">{icon}</span>
      </div>
      <h3 className="text-2xl text-black mt-4 font-normal">{title}</h3>
      <p className="text-sm text-gray-600 mt-2 text-center">{description}</p>
    </motion.div>
  );
};

const MissionSection = ({ SamsMissionCards }) => {
  return (
    <section className="px-6 md:px-16 py-12">
      {/* Heading */}
      <motion.h2
        className="text-5xl md:text-6xl font-normal text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Sam's Mission
      </motion.h2>

      {/* Mission Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {SamsMissionCards.map((card, index) => (
          <SamMission
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default MissionSection;

