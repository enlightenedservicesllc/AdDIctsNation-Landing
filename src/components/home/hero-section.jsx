import { Button } from "../ui/button";
import BgImage from "../../assets/home/hero-bg.webp";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { URLS } from "@/constants";

const HeroSection = () => {
  return (
    <main className="flex-1 relative flex items-center justify-center lg:min-h-[750px] md:min-h-[600px] min-h-[300px]">
      {/* Background Image with fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:rounded-2xl"
        style={{
          backgroundImage: `url(${BgImage})`,
          filter: "brightness(0.4)",
        }}
      />

      {/* Content Overlay */}
      <div className="relative w-full container mx-auto px-4 py-8 mb-10 md:mb-0 md:py-0 mt-28 md:mt-0">
        <div className="max-w-3xl mx-auto md:mx-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-6xl font-normal text-white leading-tight mb-6"
          >
            Where Creativity Meets Community
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-xl text-white mb-8"
          >
            Adverts So Good, You'll Hit Pause on the Movie
          </motion.p>

          <div className="flex gap-5">
            <Link to={URLS.register}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white hover:bg-gray-100 text-black rounded-full px-6 py-2 flex items-center gap-2 group">
                  Get Started
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </Link>
            <Link to={URLS.login}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="rounded-full px-8 py-2 bg-primary text-white border-primary hover:border-white"
                  variant={"outline"}
                >
                  Login
                </Button>
              </motion.div>
            </Link>
          </div>
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
