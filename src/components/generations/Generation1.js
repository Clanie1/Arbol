import { motion } from "framer-motion";
import hermana from "../../img/hermana.jpg";
import americano from "../../img/americano.jpg";
import { useState } from "react";
import bandera from "../../img/bandera.png";
import yo from "../../img/yo2.jpg";

const Generation1 = () => {
  const [view, setView] = useState(false);

  return (
    <div className="h-screen flex flex-col snap-center justify-start bg-[#1a181b]">
      <div className=" flex items-center justify-center">
        <h1 className="uppercase font-bold text-8xl">
          Daniel <label className="text-secondary-50">Barocio</label>
        </h1>
      </div>

      <div className="border- border-white relative m-auto flex justify-center items-center w-11/12 max-w-[1800px] min-h-[617px] overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="order-1 shrink-0 m-auto shadow-secondary-50 shadow-lg hover:shadow-none h-96 w-96 bg-no-repeat bg-center border- bg-contain border-white rounded-full bg-[url('./img/yo.jpg')] cursor-pointer"
          onClick={() => setView(!view)}
        />
        {view ? (
          <>
            <motion.div
              animate={{
                scale: [0, 1, 1, 1],
                x: [300, 0, 0, 0],
                borderRadius: [40, 40, 40, 10, 10],
              }}
              transition={{
                duration: 2,
                times: [0, 0.5, 1, 2],
              }}
              className="absolute left-10 center p-5 rounded-md flex flex-col text-sm border-2 border-secondary-50 max-w-sm"
            >
              <h1 className="mb-4 font-bold text-3xl">YO</h1>
              <p>
                Daniel Barocio, nacido el 14 de agosto del 2003, hijo de Oscar
                Barocio y Gabriela Valdez. Actual estudiante de ingenieria,
                ex-deportista
              </p>
            </motion.div>
            <div className="absolute right-20 order-3 flex flex-col items-center space-between gap-5">
              <motion.div
                className=" overflow-hidden max-w-[270px] bg-contain bg-no-repeat rounded-lg"
                animate={{
                  x: [-350, 0],
                  y: [150, 0],
                  scale: [0, 1],
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <img src={hermana} />
              </motion.div>
              <motion.div
                className="border- border-white overflow-hidden max-w-[270px] bg-contain bg-no-repeat rounded-lg"
                animate={{
                  x: [-300, 0],
                  y: [-50, 0],
                  scale: [0, 1],
                }}
                transition={{
                  duration: 1,
                }}
              >
                <img src={americano} />
              </motion.div>
              <motion.div
                className="border- border-white overflow-hidden max-w-[270px] bg-contain bg-no-repeat rounded-lg"
                animate={{
                  x: [-520, -520, 0, 0],
                  y: [-20, 0, 0, 0],
                  scale: [0, 1],
                }}
                transition={{
                  duration: 1.5,
                }}
              >
                <img src={yo} />
              </motion.div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Generation1;
