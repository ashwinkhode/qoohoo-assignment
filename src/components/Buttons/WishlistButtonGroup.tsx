import Link from "next/link";
import { motion } from "framer-motion";
import { RiHeartLine } from "react-icons/ri";

function WishlistButtonGroup() {
  return (
    <motion.div
      className="flex items-center px-4 sm:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative px-6 sm:px-2 py-4 cursor-pointer">
        <Link href="/" passHref>
          <RiHeartLine className="text-xl" />
        </Link>
        <div className="absolute top-2 right-0 px-1 bg-black text-white text-xs font-bold rounded-full">
          0
        </div>
      </div>
      <button className="font-bold px-6 py-4" onClick={() => {}}>
        SEARCH
      </button>
    </motion.div>
  );
}

export default WishlistButtonGroup;
