import { motion } from "framer-motion";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";

function RightSection() {
  return (
    <motion.div
      className="relative w-1/5 flex flex-1"
      initial={{ width: "20%" }}
      exit={{ width: "0" }}
    >
      <motion.button
        className="absolute top-1/2 -left-6 bg-white px-3 py-3 rounded-full text-red-400 border-2 border-red-300 z-10"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, x: 200 }}
      >
        <RiArrowRightSLine className="text-xl" />
      </motion.button>
      <motion.div
        className="relative w-full flex items-center bg-white"
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, x: 400 }}
      >
        <motion.div
          className="relative h-[400px] overflow-hidden"
          initial={{ opacity: 0, height: "200px" }}
          animate={{ opacity: 1, height: "400px" }}
          transition={{ duration: 1, delay: 0.3 }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="w-full absolute top-1/2 left-0 rotate-90 z-10 font-bold text-4xl h1-stroke-effect">
            SUMMER 2020
          </div>
          <Image
            src="/rightSectionImage.png"
            alt="summer lady"
            width="400"
            height="500"
            layout="fixed"
            objectPosition="top center"
            className="!left-24 z-[5]"
          />
          <div className="absolute top-0 left-1/2 bg-[#DECAC9] w-full h-full z-0"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default RightSection;
