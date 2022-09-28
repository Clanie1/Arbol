import { motion } from "framer-motion";

const GenerationCircle = ({ number }) => {
  return (
    <motion.div
      className="font-bold h-16 w-16 flex text-black items-center justify-center border-white overflow-hidden bg-slate-100 border-3 shadow-md cursor-pointer"
      style={{ borderRadius: "100%" }}
      whileHover={{
        borderRadius: "20%",
        shadow: "100px",
        border: "3px solid white",
      }}
      transition={{}}
    >
      {number}
    </motion.div>
  );
};
export default GenerationCircle;
