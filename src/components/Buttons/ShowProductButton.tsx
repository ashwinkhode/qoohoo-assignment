import { motion } from "framer-motion";
import { RiAddFill } from "react-icons/ri";
import { useButtonAnimation } from "../../context/ButtonAnimationContext";

function ShowProductButton() {
  const { isVisible, setVisibility } = useButtonAnimation();

  return (
    <div>
      <motion.button
        className="mt-24 px-3 py-3 rounded-full bg-black text-white"
        onClick={() => {
          setVisibility(!isVisible);
        }}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={isVisible ? { duration: 1, delay: 0.3 } : { duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <RiAddFill className="text-xl" />
      </motion.button>
    </div>
  );
}

export default ShowProductButton;
