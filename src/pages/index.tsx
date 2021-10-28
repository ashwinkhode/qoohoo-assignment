import Link from "next/link";
import Image from "next/image";
import {
  RiUserLine,
  RiMenu2Line,
  RiHeartLine,
  RiShoppingBag3Line,
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
  RiAddFill,
  RiArrowRightSLine,
} from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { IoLogoDeviantart } from "react-icons/io5";
import { Blob1, Blob2 } from "../components/svg";

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

export default function Home() {
  return (
    <div className="min-w-full min-h-screen flex flex-col justify-between items-stretch">
      {/* HEADER */}
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
          animate={{ border: 0 }}
          transition={{ duration: 1 }}
          exit={{ border: 2 }}
        >
          <motion.div
            className="h-full flex justify-center items-center bg-white"
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, x: 0 }}
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

      {/* HERO */}
      <main className="relative flex-1 flex justify-between items-stretch bg-green-50 overflow-hidden">
        <motion.div
          className="relative w-4/5 flex justify-around border-r-2 border-gray-200 z-0 overflow-hidden"
          initial={{ borderRightColor: "#ECFDF5" }}
          animate={{ borderRightColor: "#E5E7EB" }}
          transition={{ duration: 1, delay: 0.3 }}
          exit={{ borderRight: 0 }}
        >
          <AnimatePresence>
            <motion.div
              key="blob1"
              className="absolute h-full z-[-1]"
              initial={{ scale: 1.25, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ scale: 1.25, opacity: 0 }}
            >
              <Blob1 className="h-full opacity-50" />
            </motion.div>
            <motion.div
              key="blob2"
              className="absolute h-full z-[-1]"
              initial={{ scale: 1.25, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ scale: 1.25, opacity: 0 }}
            >
              <Blob2 className="h-full" />
            </motion.div>
            <motion.div
              key="mainLadyImage"
              className="absolute -bottom-24 z-0"
              initial={{ x: "-400px", opacity: 0 }}
              animate={{ x: "0", opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ x: "400px", opacity: 0 }}
            >
              <Image
                src="/main_lady.png"
                alt="lady in orange dress"
                width="600"
                height="600"
              />
            </motion.div>
          </AnimatePresence>
          <div className="w-2/4 flex justify-start items-center space-x-12 mx-16 z-10">
            <div className="text-4xl font-bold mt-24">
              <motion.h1
                initial={{ x: -400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ x: 400, opacity: 0 }}
              >
                TIED GREEN <br />
              </motion.h1>
              <motion.h1
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ x: -200, opacity: 0 }}
              >
                V-NECK SHIRT
              </motion.h1>
            </div>
            <div>
              <motion.button
                className="mt-24 px-3 py-3 rounded-full bg-black text-white"
                onClick={() => {}}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                exit={{ scale: 0 }}
              >
                <RiAddFill className="text-xl" />
              </motion.button>
            </div>
          </div>
          <motion.div
            className="w-1/4 flex space-y-8 flex-col justify-center z-10"
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ y: -400, opacity: 0 }}
          >
            {[1, 2].map((item) => (
              <article
                key={item}
                className="mx-auto bg-white flex justify-between items-stretch rounded-2xl shadow-2xl cursor-pointer"
              >
                <div className="w-1/2 p-4 space-y-2">
                  <h1 className="text-xs">Medium Crossbody Bag</h1>
                  <p className="text-xs font-bold">$34</p>
                </div>
                <div className="relative w-1/2">
                  <Image
                    src="/purse.png"
                    alt="yellow purse"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </article>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative w-1/5 flex flex-1">
          <motion.button
            className="absolute top-1/2 -left-6 bg-white px-3 py-3 rounded-full text-red-400 border-2 border-red-300 z-10"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, x: 200 }}
          >
            <RiArrowRightSLine className="text-xl" />
          </motion.button>
          <motion.div
            className="relative w-full flex items-center bg-white"
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, x: 400 }}
          >
            <motion.div
              className="relative h-[400px] overflow-hidden"
              initial={{ opacity: 0, height: "200px" }}
              animate={{ opacity: 1, height: "400px" }}
              transition={{ duration: 1, delay: 0.3 }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="w-full absolute top-1/2 left-0 rotate-90 z-10 font-bold text-4xl h1-stroke-effect">
                SUMMER 2020
              </div>
              <Image
                src="/summer_lady.png"
                alt="summer lady"
                width="400"
                height="500"
                layout="fixed"
                objectPosition="top center"
                className="z-10"
              />
              <div className="absolute top-0 left-1/2 bg-[#DECAC9] w-full h-full z-0"></div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="min-w-full flex justify-between items-stretch font-bold overflow-hidden">
        <motion.div
          className="w-4/5 flex-1 bg-green-50 flex items-center space-x-2 px-16 py-8 border-r-2"
          initial={{ borderRightColor: "#ECFDF5" }}
          animate={{ borderRightColor: "#E5E7EB" }}
          transition={{ duration: 1, delay: 0.3 }}
          exit={{ borderRightColor: "#ECFDF5" }}
        >
          <motion.div
            className=" px-1.5 py-1 rounded border-2 border-gray-200"
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
            className=" px-1.5 py-1 rounded border-2 border-gray-200"
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
            className=" px-1.5 py-1 rounded border-2 border-gray-200"
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
        <div className="w-1/5 min-h-full flex justify-center items-center bg-green-50">
          <motion.div
            className="flex justify-center items-center flex-1 font-bold text-center bg-white h-full"
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, x: 0 }}
          >
            SIZE GUIDE &gt;
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
