import { motion } from "framer-motion";
import mama from "../../img/mamaJoven.jpg";
import papa from "../../img/papa.jpg";
import invierno from "../../img/invierno.jpg";
import { Parallax } from "react-parallax";

const Generation2 = () => {
  return (
    <div className="flex h-screen bg-slate-100 snap-start">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="order-1 shrink-0 m-auto shadow-secondary-50 shadow-lg hover:shadow-none h-96 w-96 bg-no-repeat bg-center bg-cover rounded-full bg-[url('./img/mamaJoven.jpg')] cursor-pointer"
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="order-1 shrink-0 m-auto shadow-secondary-50 shadow-lg hover:shadow-none h-96 w-96 bg-no-repeat bg-center bg-cover border-white rounded-full bg-[url('./img/papa.jpg')] cursor-pointer"
      />
    </div>
  );
};

export default Generation2;
