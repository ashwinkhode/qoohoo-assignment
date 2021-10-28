import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { RiAddFill } from "react-icons/ri";
import { Blob1, Blob2 } from "../svg";

interface ILeftSectionProps {
  triggerAnimation: () => void;
  isVisible: boolean;
}

function LeftSection({ isVisible, triggerAnimation }: ILeftSectionProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="relative w-full flex justify-around border-r-2 border-gray-200 z-0 overflow-hidden"
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
            animate={
              isVisible
                ? { scale: 1, opacity: 1 }
                : { scale: 1, opacity: 1, x: "400px" }
            }
            transition={{ duration: 1 }}
            exit={{ scale: 1.25, opacity: 0 }}
          >
            <Blob1 className="h-full opacity-50" />
          </motion.div>
          <motion.div
            key="blob2"
            className="absolute h-full z-[-1]"
            initial={{ scale: 1.25, opacity: 0 }}
            animate={
              isVisible
                ? { scale: 1, opacity: 1 }
                : { scale: 1, opacity: 1, x: "400px" }
            }
            transition={{ duration: 1 }}
            exit={{ scale: 1.25, opacity: 0 }}
          >
            <Blob2 className="h-full" />
          </motion.div>
          <motion.div
            key="mainLadyImage"
            className="absolute -bottom-24 z-0"
            initial={{ x: "-400px", opacity: 0 }}
            animate={
              isVisible ? { x: "0", opacity: 1 } : { x: "400px", opacity: 1 }
            }
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
        <motion.div
          className="flex justify-start items-center space-x-12 mx-16 z-10 mr-auto"
          layout
        >
          <motion.div className="text-4xl font-bold mt-24 space-y-8" layout>
            <div>
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
            {!isVisible && (
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum, modi? Tempore alias dolores architecto
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
                    {/* TODO: Add state like disabled/selected and clsx */}
                    {["S", "M", "L"].map((item) => (
                      <button
                        key={item}
                        className="w-8 h-8 rounded-full border-2 border-black text-sm"
                        onClick={() => {}}
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
                  {[0.4, 0.6, 0.8, 1.0].map((item) => (
                    <motion.div
                      key={item}
                      className="bg-green-100 w-32 h-32 overflow-hidden"
                      initial={{ x: 200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: item }}
                      exit={{ x: -200, opacity: 0 }}
                    >
                      <Image
                        src="/main_lady.png"
                        alt="lady"
                        width="128"
                        height="128"
                        objectFit="fill"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </motion.div>
          <div>
            <motion.button
              className="mt-24 px-3 py-3 rounded-full bg-black text-white"
              onClick={() => {
                triggerAnimation?.();
              }}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={
                isVisible ? { duration: 1, delay: 0.3 } : { duration: 0.1 }
              }
              exit={{ opacity: 0 }}
            >
              <RiAddFill className="text-xl" />
            </motion.button>
          </div>
        </motion.div>
        {isVisible && (
          <motion.div
            key="product card"
            className="w-1/4 flex space-y-8 flex-col justify-center z-10"
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ y: -400, opacity: 0 }}
          >
            {[1, 2].map((item) => (
              <motion.article
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
              </motion.article>
            ))}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default LeftSection;
