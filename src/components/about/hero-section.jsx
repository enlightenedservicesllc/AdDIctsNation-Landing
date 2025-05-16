import banner from "../../assets/about/about-banner.webp";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <main className="flex-1 relative flex items-center justify-center lg:min-h-[580px] md:min-h-[500px] min-h-[450px] mb-5">
      {/* Background Image with fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:rounded-2xl"
        style={{
          backgroundImage: `url(${banner})`,
          filter: "brightness(0.8)",
        }}
      />

      {/* Content Overlay */}
      {/* mx-auto px-4 py-8 mb-50  */}
      <div className="relative w-full container flex items-center justify-center text-center md:mb-0 md:py-0 mt-20 md:mt-15">
        <div className="max-w-3xl mx-auto md:mx-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-6xl font-normal text-white tracking-wide mb-4"
          >
            Where Ads <br />
            Inspire, Connect, and Shine!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl text-white tracking-wide"
          >
            AdDictsNation provides multiple advertising <br />
            opportunities:
          </motion.p>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
