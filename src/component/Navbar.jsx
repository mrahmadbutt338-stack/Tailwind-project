import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }} // ✅ smoother animation
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-5"
    >
      <div
        className="max-w-7xl mx-auto flex justify-between items-center
        bg-white/10 backdrop-blur-md border border-white/20
        rounded-full px-6 md:px-8 py-3 shadow-xl"
      >
        {/* Logo */}
        <h1 className="text-white text-xl md:text-2xl font-bold tracking-widest">
          AQUA-X
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-white text-sm uppercase">
          <li className="hover:text-cyan-300 cursor-pointer transition-colors duration-300">
            Home
          </li>
          <li className="hover:text-cyan-300 cursor-pointer transition-colors duration-300">
            About
          </li>
          <li className="hover:text-cyan-300 cursor-pointer transition-colors duration-300">
            Gallery
          </li>
          <li className="hover:text-cyan-300 cursor-pointer transition-colors duration-300">
            Contact
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;