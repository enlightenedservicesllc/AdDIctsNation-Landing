import banner from "../../assets/advertise/advertise-banner.webp";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import AdvertiseCards from "./advertise-card";

const HeroSection = () => {
  return (
    <main className="flex-1 relative flex flex-col items-center justify-center lg:min-h-[580px] md:min-h-[500px] min-h-[400px] mb-0 md:mb-50 px-4">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat md:rounded-2xl"
        style={{ backgroundImage: `url(${banner})`, filter: "brightness(0.7)" }}
      />

      {/* Content Overlay */}
      <div className="relative w-full max-w-4xl text-center z-10 flex flex-col items-center justify-center space-y-4 mt-36 md:mt-0 md:top-40">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-wide px-2"
        >
          Want to get your ad noticed?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-xl text-white tracking-wide"
        >
          AdDictsNation provides multiple advertising{" "}
          <br className="hidden sm:block" /> opportunities:
        </motion.p>

        {/* Centered Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/contact" className="w-max-content">
            <Button className="text-white text-lg rounded-full px-6 py-3 md:px-8 md:py-5">
              Know More
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Advertise Cards (Ensure it does not push the text) */}
      <div className="relative w-full z-10 mt-12 md:mt-10 md:top-45">
        <AdvertiseCards />
      </div>
    </main>
  );
};

export default HeroSection;
