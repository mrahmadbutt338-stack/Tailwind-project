import Navbar from "./component/Navbar";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">

      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-bg"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1669748157617-a3a83cc8ea23?q=80&w=1740&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <Navbar />

      {/* Hero */}
      <div className="relative z-10 h-screen flex justify-center items-center px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotateX: 30 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.2 }}
          whileHover={{
            rotateY: 10,
            rotateX: 10,
            scale: 1.03,
          }}
          className="max-w-3xl text-center p-10 rounded-3xl
          bg-white/10 backdrop-blur-xl border border-white/20
          shadow-2xl"
        >

          <motion.h1
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white text-5xl md:text-7xl font-bold mb-6"
          >
            3D Water Motion
          </motion.h1>

          <p className="text-gray-200 text-lg mb-8 leading-8">
            Premium futuristic landing page with 3D hover effects,
            animated water background and glassmorphism UI.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-4 rounded-full bg-cyan-500 text-white
            font-semibold shadow-lg hover:bg-cyan-600 duration-300"
          >
            Explore Now
          </motion.button>

        </motion.div>
      </div>

    </div>
  );
}

export default App;