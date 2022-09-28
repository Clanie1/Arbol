import Navigator from "./components/navigation/Navigator";
import Generation1 from "./components/generations/Generation1";
import Generation2 from "./components/generations/Generation2";
import Generation3 from "./components/generations/Generation3";
import { motion, useScroll } from "framer-motion";

function App() {
  return (
    <div className="relative text-white text-3xl snap-mandatory snap-y w-screen h-screen">
      <Generation1 />
      <Generation2 />
      <Generation1 />
      <Navigator />
    </div>
  );
}

export default App;
