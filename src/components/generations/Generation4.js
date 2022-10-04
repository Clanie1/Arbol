import Capsule from "../generation4/capsule";
import Mercedes from "../../img/bisabuela.jpg";
import anonimus from "../../img/anonimo.jpg";
import anonimusW from "../../img/anonimoMujer.jpg";

const Generation4 = () => {
  return (
    <div className="h-full bg-secondary-50 text-white flex flex-col items-center justify-around py-10 gap-5">
      <h1 className=" font-bold uppercase text-[50px] ">Bisabuelos</h1>
      <div className="w-3/4 max-w-[2000px] flex flex-col border-black gap-10 ">
        <div className="flex items-center justify-center gap-5">
          <Capsule
            bisabuelo={"Valentin Valdez Valda"}
            bisabuela={"Mercedes Redondo"}
            img1={anonimus}
            img2={anonimusW}
          />
          <Capsule
            bisabuelo={"Alfredo Patzy"}
            bisabuela={"Elvira Calvimontes Lizarazu"}
            img1={anonimus}
            img2={Mercedes}
          />
        </div>
        <div className="flex items-center justify-center gap-10">
          <Capsule
            bisabuelo={"Tomás Barocio"}
            bisabuela={"Consuelo Guajardo"}
            img1={anonimus}
            img2={anonimusW}
          />
          <Capsule
            bisabuelo={"Melchor León Rivera"}
            bisabuela={"Berenice Ramos Lozano"}
            img1={anonimus}
            img2={anonimusW}
          />
        </div>
      </div>
    </div>
  );
};

export default Generation4;
