import { motion } from "framer-motion";
import HeaderNavButton from "../Buttons/HeaderNavButton";
import HeaderLogoButtonGroup from "../Buttons/HeaderLogoButtonGroup";
import WishlistButtonGroup from "../Buttons/WishlistButtonGroup";
import CartUserButtonGroup from "../Buttons/CartUserButtonGroup";

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
  return (
    <header className="min-w-full flex justify-between items-stretch font-bold overflow-hidden">
      {/* Left Side Header */}
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
        <HeaderLogoButtonGroup />
        <div className="w-full flex justify-between items-center">
          <div className="flex space-x-1 sm:space-x-0 px-4 sm:px-2 overflow-hidden">
            {HEADER_LINKS.map((item, index) => (
              <HeaderNavButton key={item.title} item={item} delay={index} />
            ))}
          </div>
          <WishlistButtonGroup />
        </div>
      </motion.div>

      {/* Right Side Header */}
      <CartUserButtonGroup />
    </header>
  );
}

export default Header;
