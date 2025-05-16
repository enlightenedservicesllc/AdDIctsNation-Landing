import { motion } from "framer-motion";
import jobData from "./Helpers/JobData"; // Import job data
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

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
const JobOpenings = () => {
  return (
    <section className="w-full md:py-20 md:my-0 mt-6">
      {/* Animated Heading */}
      <motion.h2
        className="md:text-5xl text-4xl font-medium text-center md:mb-12 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Current Openings
      </motion.h2>

      {/* Job Cards */}
      {/* Commented out Job Cards Section */}
      {/*
<motion.div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-10"
  initial="hidden"
  animate="visible"
  whileInView="visible"
  viewport={{ once: true }}
  variants={containerVariants}
>
  {jobData.map((job, index) => (
    <motion.div
      key={index}
      className="bg-[#fdf7f2] p-8 rounded-xl shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      variants={itemVariants}
    >
      <h3 className="text-2xl font-medium">{job.title}</h3>
      <p className="text-[#454545] text-md mt-4 mb-2">
        <strong>Exp lvl      </strong> {job.exp}
      </p>
      <p className="text-[#454545] text-md">
        <strong>Location       </strong> {job.location}
      </p>

      <div className="flex justify-between items-center mt-7">
        <Button className="text-white px-4 py-2.5 rounded-sm text-md font-normal">
          Apply Now
        </Button>

        <motion.div
          className="inline-flex items-center gap-2 cursor-pointer relative group"
          whileHover={{ x: 5 }}
        >
          <span className="text-black text-lg font-semibold">
            Read more
          </span>
          <motion.span
            className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight size={14} />
          </motion.span>

          <motion.div className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </motion.div>
      </div>
    </motion.div>
  ))}
</motion.div>
*/}
<p className="text-center">Currently, there are no open positions, but please check back soon for exciting opportunities!</p>
    </section>
  );
};

export default JobOpenings;
