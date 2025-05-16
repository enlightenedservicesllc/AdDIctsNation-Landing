import { motion } from "framer-motion";
import { AdvertiseCardData } from "./Helpers/AdvertiseData"; // Make sure this is correctly imported

const AdvertiseCards = () => {
  return (
    //container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-center gap-6 mt-8
    <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-center gap-7 mt-8 mb-20">
  {AdvertiseCardData.map((item, index) => (
    <motion.div
      key={index}
      
      className="bg-[#F6F2EE] p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-full md:w-[340px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-4xl bg-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
        {item.icon}
      </div>
      <h3 className="text-xl font-medium">{item.title}</h3>
      <p className="text-gray-600 mt-2">{item.description}</p>
    </motion.div>
  ))}
</div>
  )
}

export default AdvertiseCards

