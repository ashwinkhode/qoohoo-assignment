import { AnimatePresence, motion } from "framer-motion";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function Hero() {
  return (
    <motion.main
      className="relative flex-1 flex justify-between items-stretch bg-green-50 overflow-hidden"
      transition={{
        layout: { duration: 0.3, ease: "easeIn", bounce: 0 },
      }}
      //@ts-ignore
      layout
    >
      <AnimatePresence>
        <LeftSection key="LeftSection" />
        <RightSection key="RightSection" />
      </AnimatePresence>
    </motion.main>
  );
}

export default Hero;
