import { Button } from "../ui/button";
import banner from "../../assets/sam-the-soala/Soala-banner.webp";
import { motion } from "framer-motion";
import bannerImage from "../../assets/sam-the-soala/banner-img.webp";
import { DOC_URL } from "@/constants";

const HeroSection = () => {
  return (
    <main className="flex-1 relative flex items-center justify-center lg:min-h-[750px] md:min-h-[600px] min-h-[300px] mb-5 ">
      {/* Background Image with fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[100%] md:rounded-2xl"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      />

      {/* Content Overlay */}
      <div className="relative w-full container mx-auto px-4 py-8 flex md:flex-row flex-col items-center justify-evenly mb-0 md:py-0 mt-28 md:mt-0">
        <div className="max-w-3xl mx-auto md:mx-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-6xl font-normal text-black leading-tight mb-6"
          >
            Sam the Saola
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-xl text-black mb-8"
          >
            The Official Mascot of AdDictsNation <br />
            Welcome to Sam the Saola's Page on AdDictsNation.com!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={DOC_URL} target="_blank" className="w-max-content">
              <Button className="text-white text-lg rounded-full p-5 flex items-center group">
                Know More
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </Button>
            </a>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          />{" "}
          <img src={bannerImage} alt="" className="w-lg mt-12 bannerImage" />
        </div>
      </div>

      {/* White Shape Overlay with slide up */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-1/2 h-1/5 bg-[#F9F9F9] rounded-tr-4xl hidden md:block"
      />
    </main>
  );
};

export default HeroSection;
