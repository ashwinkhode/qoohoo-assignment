import { motion } from "framer-motion";

function ProductHeading() {
  return (
    <div className="uppercase">
      <motion.h1
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ x: 400, opacity: 0 }}
      >
        Casual Sleeves <br />
      </motion.h1>
      <motion.h1
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ x: -200, opacity: 0 }}
      >
        Green Top
      </motion.h1>
    </div>
  );
}

export default ProductHeading;
