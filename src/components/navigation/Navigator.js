import GenerationCircle from "./GenerationCircle";
import { motion } from "framer-motion";
const Navigator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="rounded-full border-2  flex flex-col px-2 py-4 w-fit fixed right-6 bottom-4 gap-1 bg-slate-200 shadow-slate-500 shadow-lg"
    >
      <GenerationCircle number={1} />
      <GenerationCircle number={2} />
      <GenerationCircle number={3} />
      <GenerationCircle number={4} />
    </motion.div>
  );
};

export default Navigator;
