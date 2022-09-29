import { Parallax } from "react-parallax";
import imagen from "../../img/winter.jpg";
import Column from "../generation3/Column";

const Generation3 = () => {
  return (
    <div className="h-screen bg-slate-700 p-10 ">
      <div className="flex m-auto w-full h-full gap-10">
        <Column />
        <Column />
        <Column />
        <Column />
      </div>
    </div>
  );
};

export default Generation3;
