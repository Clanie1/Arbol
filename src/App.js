import Navigator from "./components/navigation/Navigator";
import Generation1 from "./components/generations/Generation1";
import Generation2 from "./components/generations/Generation2";
import Generation3 from "./components/generations/Generation3";
import Generation4 from "./components/generations/Generation4";
import { motion, useScroll } from "framer-motion";

function App() {
  return (
    <div className="relative text-white text-3xl   w-full h-screen font-mono">
      <Generation1 />
      <Generation2 />
      <Generation3 />
      <Generation4 />
      {/* <Navigator /> */}
    </div>
  );
}

export default App;
