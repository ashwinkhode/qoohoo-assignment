import Image from "next/image";
import { motion } from "framer-motion";
import { useButtonAnimation } from "../../context/ButtonAnimationContext";
import { useProductImage } from "../../context/ProductImageContext";

function LadyAnimation() {
  const { isVisible } = useButtonAnimation();
  const { currentImage } = useProductImage();

  return (
    <motion.div
      key={currentImage.name}
      className="absolute -bottom-24 z-10"
      initial={{ x: "-400px", opacity: 0 }}
      animate={isVisible ? { x: "0", opacity: 1 } : { x: "400px", opacity: 1 }}
      transition={{ duration: 1, bounce: 0 }}
      exit={{ x: "400px", opacity: 0 }}
    >
      <Image
        className="z-20"
        src={currentImage.imagePath}
        alt="lady in olive dress"
        width="400"
        height="600"
        layout="intrinsic"
        priority
      />
    </motion.div>
  );
}

export default LadyAnimation;
