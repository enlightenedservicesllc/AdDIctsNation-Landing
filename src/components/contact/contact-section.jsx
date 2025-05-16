
import React from "react";
import { motion } from "framer-motion";
import contactInfo from "./Helpers/ContactData"; // Import the data file

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
  },
};

const ContactSection = () => {

  return (
    <div className="flex flex-wrap justify-center gap-6 my-10 px-4 mb-20">
      {contactInfo.map((contact) => (
        <motion.div
          key={contact.id}
          className="bg-[#F6F2EE] p-6 rounded-md shadow-md text-center w-full sm:w-[360px] h-auto flex flex-col justify-center items-center"
          initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        >
          {/* Circle behind emoji */}
          <div className="w-14 h-14 bg-white flex items-center justify-center rounded-full mb-4 shadow-md">
            <img src={contact.icon} alt="" className="w-10 h-10" />
          </div>

          <h3 className="text-xl font-medium">{contact.title}</h3>
          <p className="text-gray-600 text-md">{contact.detail}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactSection;



