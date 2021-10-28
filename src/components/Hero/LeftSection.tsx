import { motion, AnimatePresence } from "framer-motion";
import LadyAnimation from "./LadyAnimation";
import BlobAnimationGroup from "./BlobAnimationGroup";
import SideProducts from "./SideProducts";
import ProductDetails from "./ProductDetails";
import ProductHeading from "./ProductHeading";
import ShowProductButton from "../Buttons/ShowProductButton";

function LeftSection() {
  return (
    <AnimatePresence>
      <motion.div
        key="LeftSectionComponent"
        className="relative w-full flex justify-around border-r-2 border-gray-200 z-0 overflow-hidden"
        initial={{ borderRightColor: "#ECFDF5" }}
        animate={{ borderRightColor: "#E5E7EB" }}
        transition={{ duration: 1, delay: 0.3 }}
        exit={{ borderRight: 0 }}
      >
        <AnimatePresence>
          <BlobAnimationGroup key="BlobAnimationGroup" />
          <LadyAnimation key="LadyAnimation" />
        </AnimatePresence>
        <motion.div
          className="flex justify-start items-center space-x-12 mx-16 z-10 mr-auto"
          layout
        >
          <motion.div className="text-4xl font-bold mt-24 space-y-8" layout>
            <ProductHeading />
            <ProductDetails />
          </motion.div>
          <ShowProductButton />
        </motion.div>
        <SideProducts key="SideProducts" />
      </motion.div>
    </AnimatePresence>
  );
}

export default LeftSection;
