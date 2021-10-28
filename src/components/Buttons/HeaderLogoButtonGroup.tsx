import Link from "next/link";
import { motion } from "framer-motion";
import { IoLogoDeviantart } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";

function HeaderLogoButtonGroup() {
  return (
    <>
      <motion.div
        className="px-6 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <Link href="/" passHref>
          <RiMenu2Line className="text-xl" />
        </Link>
      </motion.div>
      <motion.div
        className="px-6 py-4 border-l-2 border-r-2 border-gray-200 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        exit={{ opacity: 0 }}
      >
        <Link href="/" passHref>
          <IoLogoDeviantart className="text-xl" />
        </Link>
      </motion.div>
    </>
  );
}

export default HeaderLogoButtonGroup;
