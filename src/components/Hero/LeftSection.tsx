import { motion, AnimatePresence } from "framer-motion";
import { RiAddFill } from "react-icons/ri";
import LadyAnimation from "./LadyAnimation";
import BlobAnimationGroup from "./BlobAnimationGroup";
import SideProducts from "./SideProducts";
import ProductDetails from "./ProductDetails";
import ProductHeading from "./ProductHeading";

interface ILeftSectionProps {
  triggerAnimation: () => void;
  isVisible: boolean;
}

function LeftSection({ isVisible, triggerAnimation }: ILeftSectionProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="relative w-full flex justify-around border-r-2 border-gray-200 z-0 overflow-hidden"
        initial={{ borderRightColor: "#ECFDF5" }}
        animate={{ borderRightColor: "#E5E7EB" }}
        transition={{ duration: 1, delay: 0.3 }}
        exit={{ borderRight: 0 }}
      >
        <AnimatePresence>
          <BlobAnimationGroup />
          <LadyAnimation />
        </AnimatePresence>
        <motion.div
          className="flex justify-start items-center space-x-12 mx-16 z-10 mr-auto"
          layout
        >
          <motion.div className="text-4xl font-bold mt-24 space-y-8" layout>
            <ProductHeading />
            <ProductDetails />
          </motion.div>
          <div>
            <motion.button
              className="mt-24 px-3 py-3 rounded-full bg-black text-white"
              onClick={() => {
                triggerAnimation?.();
              }}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={
                isVisible ? { duration: 1, delay: 0.3 } : { duration: 0.1 }
              }
              exit={{ opacity: 0 }}
            >
              <RiAddFill className="text-xl" />
            </motion.button>
          </div>
        </motion.div>
        <SideProducts />
      </motion.div>
    </AnimatePresence>
  );
}

export default LeftSection;
