import { motion } from "framer-motion";
import { RiShoppingBag3Line, RiUserLine } from "react-icons/ri";
import { useButtonAnimation } from "../../context/ButtonAnimationContext";

function CartUserButtonGroup() {
  const { isVisible } = useButtonAnimation();
  return (
    <motion.div
      className="w-1/5 min-h-full bg-green-50 border-green-50"
      initial={{ border: 2 }}
      animate={isVisible ? { border: 0 } : { border: 2 }}
      transition={{ duration: 1 }}
      exit={{ border: 2 }}
    >
      <motion.div
        className="h-full flex justify-center items-center"
        initial={{ opacity: 0, x: 400, backgroundColor: "#fff" }}
        animate={
          isVisible
            ? { opacity: 1, x: 0, backgroundColor: "#fff" }
            : { opacity: 1, x: 0, backgroundColor: "#ECFDF5" }
        }
        transition={isVisible ? { duration: 1 } : { duration: 0.3 }}
        exit={{ opacity: 0, x: 0, backgroundColor: "transparent" }}
      >
        <button className="px-6 py-4">
          <RiShoppingBag3Line className="text-xl" />
        </button>
        <button className="px-6 py-4">
          <RiUserLine className="text-xl" />
        </button>
      </motion.div>
    </motion.div>
  );
}

export default CartUserButtonGroup;
