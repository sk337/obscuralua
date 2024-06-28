import "./index.css";
import { motion } from "framer-motion";

function App() {
  return (
    <main className="sf-pro w-full h-full flex flec-col items-top p-10 justify-center bg-slate-950 text-white">
      <motion.div
        whileHover={{ scale: 1.5, rotate: 5, transition: { duration: 0.75 } }}
        className="text-4xl h-fit font-bold hover-shadow"
      >
        ObscuraLua
      </motion.div>
    </main>
  );
}

export default App;
