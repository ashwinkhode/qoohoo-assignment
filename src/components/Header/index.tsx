import Link from "next/link";
import { motion } from "framer-motion";
import {
  RiHeartLine,
  RiMenu2Line,
  RiShoppingBag3Line,
  RiUserLine,
} from "react-icons/ri";
import { IoLogoDeviantart } from "react-icons/io5";
import { useButtonAnimation } from "../../context/ButtonAnimationContext";

const HEADER_LINKS = [
  {
    title: "NEW",
    href: "/",
  },
  {
    title: "SALE",
    href: "/",
  },
  {
    title: "MAN",
    href: "/",
  },
  {
    title: "WOMEN",
    href: "/",
  },
];

function Header() {
  const { isVisible } = useButtonAnimation();
  return (
    <header className="min-w-full flex justify-between items-stretch font-bold overflow-hidden">
      <motion.div
        className="w-4/5 flex items-center border-b-2 border-r-2 bg-green-50 cursor-pointer"
        initial={{
          borderBottomColor: "#ECFDF5",
          borderRightColor: "#ECFDF5",
        }}
        animate={{
          borderBottomColor: "#E5E7EB",
          borderRightColor: "#E5E7EB",
        }}
        transition={{ duration: 1, delay: 0.3 }}
        exit={{ borderRightColor: "#ECFDF5", borderBottomColor: "#ECFDF5" }}
      >
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
        <div className="w-full flex justify-between items-center">
          <div className="flex space-x-1 sm:space-x-0 px-4 sm:px-2 overflow-hidden">
            {HEADER_LINKS.map((item, index) => (
              <motion.button
                key={item.title}
                className="px-6 sm:px-2 py-4 font-bold"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: Number(`0.${2 + index}`) }}
                exit={{ opacity: 0, x: 100 }}
              >
                <Link href={item.href}>{item.title}</Link>
              </motion.button>
            ))}
          </div>
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
        </div>
      </motion.div>
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
    </header>
  );
}

export default Header;
