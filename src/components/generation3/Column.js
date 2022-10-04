import { motion } from "framer-motion";
import imagenPrueba from "../../img/papa.jpg";

const Column = ({ name, image, children, number }) => {
  return (
    <motion.div
      className="flex flex-col bg-white w-full border-2 items-center rounded-xl px-5 py-3 gap-3 h-[500px]"
      whileHover={{ scale: 1.04 }}
    >
      <h1 className="text-black font-bold uppercase center text-center text-[1.3rem]">
        {name}
      </h1>
      <img
        src={image ? image : imagenPrueba}
        className="rounded-full w-32 h-32 object-cover shadow-secondary-50 shadow-lg shrink-0"
      />
      <div className="h-full  w-full rounded-3xl border-2 border-blue-100 shadow-xl text-black p-3 text-base text-[1.2vw]">
        <p className="text-justify"> {children}</p>
      </div>
    </motion.div>
  );
};

export default Column;
