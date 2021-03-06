import { motion } from "framer-motion";
import Link from "next/link";
import { RiFacebookFill, RiInstagramLine, RiTwitterFill } from "react-icons/ri";
import { useButtonAnimation } from "../../context/ButtonAnimationContext";
import ShowSizeButton from "../Buttons/FooterButton";

function Footer() {
  const { isVisible } = useButtonAnimation();
  return (
    <footer className="min-w-full flex justify-between items-stretch font-bold overflow-hidden">
      {isVisible && (
        <>
          <motion.div
            className="w-4/5 flex-1 bg-green-50 flex items-center space-x-2 px-16 py-8 border-r-2"
            initial={{ borderRightColor: "#ECFDF5" }}
            animate={{ borderRightColor: "#E5E7EB" }}
            transition={{ duration: 1, delay: 0.3 }}
            exit={{ borderRightColor: "#ECFDF5" }}
          >
            <motion.div
              className=" px-1.5 py-1 rounded border-2 border-gray-200 cursor-pointer"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ x: -50, opacity: 0 }}
            >
              <Link href="/" passHref>
                <RiFacebookFill className="text-xl" />
              </Link>
            </motion.div>
            <motion.div
              className=" px-1.5 py-1 rounded border-2 border-gray-200 cursor-pointer"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              exit={{ x: -50, opacity: 0 }}
            >
              <Link href="/" passHref>
                <RiInstagramLine className="text-xl" />
              </Link>
            </motion.div>
            <motion.div
              className=" px-1.5 py-1 rounded border-2 border-gray-200 cursor-pointer"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              exit={{ x: -50, opacity: 0 }}
            >
              <Link href="/" passHref>
                <RiTwitterFill className="text-xl" />
              </Link>
            </motion.div>
          </motion.div>

          <ShowSizeButton />
        </>
      )}
    </footer>
  );
}

export default Footer;
