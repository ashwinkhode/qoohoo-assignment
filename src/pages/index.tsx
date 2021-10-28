import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { AnimatePresence } from "framer-motion";
import { useButtonAnimation } from "../context/ButtonAnimation";

function HomePage() {
  const { isVisible } = useButtonAnimation();
  return (
    <div className="min-w-full min-h-screen flex flex-col justify-between items-stretch overflow-hidden">
      <AnimatePresence>
        <Header key="header" />

        <Hero key="hero" />
        {isVisible && <Footer key="footer" />}
      </AnimatePresence>
    </div>
  );
}

export default HomePage;
