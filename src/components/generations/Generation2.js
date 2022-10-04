import { motion } from "framer-motion";
import mama from "../../img/mamaJoven.jpg";
import papa from "../../img/papa.jpg";
import invierno from "../../img/planet-581239.jpg";
import { Parallax } from "react-parallax";
import { useEffect, useState } from "react";

const Generation2 = () => {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    console.log(windowDimenion);
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  return (
    <div className="h-screen bg-slate-100 snap-start overflow-y-clip">
      <div className="w-full h-full flex justify-center items-center gap-20 border-3">
        <Parallax
          bgImage={invierno}
          strength={250}
          className=" border-black w-full h-full flex"
          renderLayer={(percentage) => {
            return (
              <>
                <div className="flex justify-between m-auto w-full max-w-[1800px]">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    style={{
                      translateX: percentage * (windowDimenion.winWidth / 10),
                    }}
                    className="shrink-0  shadow-secondary-50 shadow-lg hover:shadow-none h-96 w-96 bg-no-repeat bg-center bg-cover rounded-full bg-[url('./img/mamaJoven.jpg')] cursor-pointer"
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className=" shrink-0 shadow-secondary-50 shadow-lg hover:shadow-none h-96 w-96 bg-no-repeat bg-center bg-cover rounded-full bg-[url('./img/papa.jpg')] cursor-pointer"
                    style={{
                      translateX: -percentage * (windowDimenion.winWidth / 15),
                    }}
                  />
                </div>
              </>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Generation2;
