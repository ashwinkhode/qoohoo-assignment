import { motion } from "framer-motion";

function ShowSizeButton() {
  return (
    <div className="w-1/5 min-h-full flex justify-center items-center bg-green-50">
      <motion.button
        className="flex justify-center items-center flex-1 font-bold text-center bg-white h-full"
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, x: 0 }}
      >
        SIZE GUIDE &gt;
      </motion.button>
    </div>
  );
}

export default ShowSizeButton;
