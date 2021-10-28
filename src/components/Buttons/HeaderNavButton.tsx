import { motion } from "framer-motion";
import Link from "next/link";

function HeaderNavButton({
  item,
  delay = 0,
}: {
  item: {
    title: string;
    href: string;
  };
  delay?: number;
}) {
  return (
    <motion.button
      key={item.title}
      className="px-6 sm:px-2 py-4 font-bold"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: Number(`0.${2 + delay}`) }}
      exit={{ opacity: 0, x: 100 }}
    >
      <Link href={item.href}>{item.title}</Link>
    </motion.button>
  );
}

export default HeaderNavButton;
