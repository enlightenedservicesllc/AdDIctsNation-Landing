import { motion } from "framer-motion";
import SaolaImage from "../../../assets/sam-the-soala/about-img.webp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { DOC_URL } from "@/constants";

const SaolaIntro = () => {
  return (
    <section className="w-full py-5 md:py-15">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-15 items-center">
          {/* Image Section */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={SaolaImage}
              className="w-full max-w-xl sm:max-w-md md:max-w-xl"
              alt="Sam the Saola"
            />
          </motion.div>
          {/* Text Section */}
          <motion.div
            className="text-center md:text-left mt-4 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-5xl md:text-5xl font-normal mb-4">
              Who is <br />
              Sam the Saola?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-6">
              Sam is the friendly face of the conservation movement and the
              heart of AdDictsNation.com. With his captivating presence, Sam
              embodies both the spirit of advertising excellence and the urgency
              of environmental sustainability. As the official mascot of
              AdDictsNation, Sam connects the global ad community with a greater
              cause—preserving the rare and beautiful Saola.
            </p>

            {/* Call-to-Action Button */}
            <Link to={DOC_URL} target="_blank">
              <Button
                className="px-6 py-3 text-white 
          rounded-full font-semibold shadow-lg transition duration-300"
              >
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SaolaIntro;
