
import { motion } from "framer-motion";
import SaolaIntro from "./Helpers/SaolaIntro";

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
    <section className="w-full md:py-20 px-4 md:px-10">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col md:justify-between md:flex-row mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="flex flex-col" variants={itemVariants}>
            <h2 className="text-xl md:text-3xl font-semibold tracking-tight w-60">
            ABOUT SAM
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="animate-fade-in">
            <p className="text-lg md:text-2xl font-normal leading-relaxed md:mt-0 mt-5">
            Sam the Saola is the official mascot of AdDictsNation.com, symbolizing creativity, rarity, and the power of storytelling in advertising.
             Just as great ads leave a lasting impact, Sam represents the importance of preserving unique and endangered species.
              As an ambassador for wildlife conservation, Sam’s mission is to educate, inspire, and 
              promote efforts to protect the critically endangered Saola, often called the "Asian Unicorn.“
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;