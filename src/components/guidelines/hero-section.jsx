import banner from "../../assets/guidelines/banner.webp";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <main className="flex-1 relative flex items-center justify-center lg:min-h-[470px] md:min-h-[500px] min-h-[350px] mb-5">
      {/* Background Image with fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:rounded-2xl"
        style={{
          backgroundImage: `url(${banner})`,
          filter: "brightness(0.4)",
        }}
      />

      {/* Content Overlay */}
      <div className="relative w-full container flex items-center justify-center text-center md:mb-0 md:py-0 mt-18 md:mt-15">
        <div className="max-w-3xl mx-auto md:mx-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl md:text-5xl font-normal text-white tracking-wider mb-4 px-4 md:px-0"
          >
            Community Guidelines
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-white tracking-wide px-2 md:px-0"
          >
            Last updated : 1 MAY 2025
          </motion.p>
        </div>
      </div>
    </main>
  );
};

export default Herosection;
