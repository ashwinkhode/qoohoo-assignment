import Image from "next/image";
import { motion } from "framer-motion";
import { useProductImage } from "../../context/ProductImageContext";

function ProductImage({
  item,
}: {
  item: {
    name: string;
    imagePath: string;
    delay: number;
  };
}) {
  const { setCurrentImage } = useProductImage();
  return (
    <motion.div
      key={item.imagePath}
      className="bg-green-100 w-20 h-32 overflow-hidden cursor-pointer"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: item.delay }}
      exit={{ x: -200, opacity: 0 }}
      onClick={() => setCurrentImage(item)}
    >
      <Image
        src={item.imagePath}
        alt="product images"
        width="84"
        height="128"
        objectFit="cover"
        objectPosition="top center"
        priority
      />
    </motion.div>
  );
}

export default ProductImage;
