import Image from "next/image";
import { motion } from "framer-motion";
import { useButtonAnimation } from "../../context/ButtonAnimationContext";

const SIDE_PRODUCTS = [
  {
    name: "Medium Crossbody Bag",
    imagePath: "/purse.png",
    price: 34,
  },
  {
    name: "Women Black Flats Sandal",
    imagePath: "/sandals.png",
    price: 18,
  },
];

function SideProducts() {
  const { isVisible } = useButtonAnimation();
  return isVisible ? (
    <motion.div
      key="product card"
      className="w-1/4 flex space-y-8 flex-col justify-center items-stretch z-10"
      initial={{ y: 400, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ y: -400, opacity: 0 }}
    >
      {SIDE_PRODUCTS.map((item) => (
        <motion.article
          key={item.name}
          className="mx-auto max-w-[160px] bg-white flex justify-between items-stretch rounded-2xl shadow-2xl cursor-pointer"
        >
          <div className="w-1/2 p-4 space-y-2">
            <h1 className="text-xs capitalize">{item.name}</h1>
            <p className="text-xs font-bold">$ {item.price}</p>
          </div>
          <div className="relative w-1/2">
            <Image
              src={item.imagePath}
              alt={item.name}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </motion.article>
      ))}
    </motion.div>
  ) : null;
}

export default SideProducts;
