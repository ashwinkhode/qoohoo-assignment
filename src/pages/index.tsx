import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { AnimatePresence } from "framer-motion";
import { useButtonAnimation } from "../context/ButtonAnimationContext";

function HomePage() {
  const { isVisible } = useButtonAnimation();
  return (
    <div className="relative min-w-full min-h-screen flex flex-col justify-between items-stretch overflow-hidden z-10">
      <AnimatePresence>
        <Header key="header" />

        <Hero key="hero" />
        {isVisible && <Footer key="footer" />}
      </AnimatePresence>
    </div>
  );
}

export default HomePage;
