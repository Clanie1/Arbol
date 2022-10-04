import Bisabuelo from "./Bisabuelo";
import { motion } from "framer-motion";

const Capsule = ({ bisabuelo, bisabuela, img1, img2 }) => {
  return (
    <motion.div
      className="flex rounded-xl gap-10 p-5 bg-light-50 text-dark-50 w-[500px] h-[300px] items-center justify-center"
      whileHover={{ scale: 1.1 }}
    >
      <Bisabuelo name={bisabuelo} img={img1} />
      <Bisabuelo name={bisabuela} img={img2} />
    </motion.div>
  );
};

export default Capsule;
