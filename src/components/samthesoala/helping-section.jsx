import { motion } from "framer-motion";
import helpContent from "./Helpers/HelpData.js";
import { Button } from "../ui/button";
import { DOC_URL } from "@/constants/index.jsx";

const HelpSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-25 px-6 md:px-16 py-12  mb-10">
      {/* Image Section with Motion */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={helpContent.image}
          alt="Help Image"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </motion.div>

      {/* Content Section with Motion */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h2
          className="text-5xl md:text-6xl font-normal mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {helpContent.title}
        </motion.h2>

        {/* List with Dotted Line */}
        <motion.ul className="relative space-y-6 mb-7">
          {helpContent.points.map((point, index) => (
            <motion.li
              key={index}
              className="relative flex items-start space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 2, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
            >
              {/* Red Dot & Dashed Line */}
              <div className="relative flex flex-col items-center">
                {/* Red Dot */}
                <span className="w-3 h-3 bg-primary rounded-full top-0"></span>

                {/* Dotted line - Always show, but shorter for the last item */}
                <span
                  className={`absolute top-3 left-1/2 transform -translate-x-1/2 w-px ${
                    index !== helpContent.points.length - 1 ? "h-21 " : "h-3"
                  } bg-gray-600 border-l-2 border-dashed`}
                ></span>
              </div>

              {/* Text */}
              <p className="text-md md:text-xl text-gray-800 leading-6 mb-2">
                {point}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href={DOC_URL} target="_blank" className="w-max-content">
            <Button className="text-white text-lg rounded-full p-5 flex items-center  group">
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
      </motion.div>
    </section>
  );
};

export default HelpSection;
