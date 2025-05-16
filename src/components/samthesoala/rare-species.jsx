import RareSpeciesImg from "../../assets/sam-the-soala/rare-species-img.webp";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
const RareSpecies = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#F0E9E3] rounded-2xl mb-5 overflow-hidden">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-6">
              <motion.p
                className="text-center md:text-left text-md font-semibold text-black uppercase mb-2"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                THE SAOLA:
              </motion.p>
              <motion.h2
                className="text-5xl md:text-6xl font-normal mb-4 text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                A Rare & <br />
                Mysterious Species
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                The Saola (Pseudoryx nghetinhensis) is one of the rarest and
                most elusive animals on Earth. Found only in the Annamite
                Mountains of Laos and Vietnam, this beautiful yet highly
                endangered species is at risk due to habitat loss and illegal
                hunting. Conservationists estimate that fewer than a few hundred
                remain in the wild
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:w-1/2 flex justify-end items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <motion.img
              src={RareSpeciesImg}
              alt="Saola illustration"
              className="w-full rounded-lg shadow-lg"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default RareSpecies;
