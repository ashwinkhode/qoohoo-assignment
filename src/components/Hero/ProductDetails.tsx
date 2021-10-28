import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useButtonAnimation } from "../../context/ButtonAnimationContext";
import ProductImage from "./ProductImage";

const PRODUCT_IMAGES = [
  {
    name: "main_lady_1",
    imagePath: "/main_lady_1.png",
    delay: 0.4,
  },
  {
    name: "main_lady_2",
    imagePath: "/main_lady_2.png",
    delay: 0.6,
  },
  {
    name: "main_lady_3",
    imagePath: "/main_lady_3.png",
    delay: 0.8,
  },
  {
    name: "main_lady_4",
    imagePath: "/main_lady_4.png",
    delay: 1.0,
  },
];

function ProductDetails() {
  const sizeOptions = ["S", "M", "L"] as const;
  const [size, setSize] = useState<"S" | "M" | "L">("S");
  const { isVisible } = useButtonAnimation();

  return !isVisible ? (
    <AnimatePresence>
      <motion.h1
        key="product price"
        className="font-light text-5xl"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        exit={{ y: -200, opacity: 0 }}
      >
        $67
      </motion.h1>
      <div
        key="description button group"
        className="flex items-center space-x-8"
      >
        <motion.p
          key="product description"
          className="font-normal text-base w-1/2"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          exit={{ y: -200, opacity: 0 }}
        >
          Casual Regular Solid Women Green Top with round collar. Long Sleeves
          without cuff. Made with Polycotton. Highly Durable.
        </motion.p>
        <motion.button
          className="py-7 px-6 rounded-full bg-red-600 bg-opacity-90 text-white text-base font-bold"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          ADD
        </motion.button>
      </div>
      <motion.div
        key="select size input"
        className="flex flex-col justify-start items-start"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        exit={{ y: -200, opacity: 0 }}
      >
        <label className="text-base">SELECT SIZE</label>
        <div className="space-x-2">
          {sizeOptions.map((item) => (
            <button
              key={item}
              className={clsx(
                "w-8 h-8 rounded-full border-2 border-black text-sm",
                size === item ? "opacity-100" : "opacity-40"
              )}
              onClick={() => {
                setSize(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </motion.div>
      <motion.div
        key="product image grid"
        className="flex space-x-4"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.4,
        }}
        exit={{ y: -200, opacity: 0 }}
      >
        {PRODUCT_IMAGES.map((item) => (
          <ProductImage key={item.imagePath} item={item} />
        ))}
      </motion.div>
    </AnimatePresence>
  ) : null;
}

export default ProductDetails;
