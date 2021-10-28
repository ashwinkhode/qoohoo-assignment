import { AnimatePresence, motion } from "framer-motion";
import { useButtonAnimation } from "../../context/ButtonAnimationContext";
import { Blob1, Blob2 } from "../svg";

function BlobAnimationGroup() {
  const { isVisible } = useButtonAnimation();
  return (
    <AnimatePresence>
      {/* Blob1 */}
      <motion.div
        key="blob1"
        className="absolute h-full z-[-1]"
        initial={{ scale: 1.25, opacity: 0 }}
        animate={
          isVisible
            ? { scale: 1, opacity: 1 }
            : { scale: 1, opacity: 1, x: "400px" }
        }
        transition={{ duration: 1 }}
        exit={{ scale: 1.25, opacity: 0 }}
      >
        <Blob1 className="h-full opacity-50" />
      </motion.div>

      {/* Blob2 */}
      <motion.div
        key="blob2"
        className="absolute h-full z-[-1]"
        initial={{ scale: 1.25, opacity: 0 }}
        animate={
          isVisible
            ? { scale: 1, opacity: 1 }
            : { scale: 1, opacity: 1, x: "400px" }
        }
        transition={{ duration: 1 }}
        exit={{ scale: 1.25, opacity: 0 }}
      >
        <Blob2 className="h-full" />
      </motion.div>
    </AnimatePresence>
  );
}

export default BlobAnimationGroup;
