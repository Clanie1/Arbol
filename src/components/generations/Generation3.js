import { Parallax } from "react-parallax";
import imagen from "../../img/winter.jpg";
import Column from "../generation3/Column";
import abueloNano from "../../img/abueloNano.jpg";
import abuelo from "../../img/abuelo.jpg";
import abuelaViqui from "../../img/abuelaVictoria.jpg";
import abuelaMagda from "../../img/abuelaMagda.jpg";

const Generation3 = () => {
  return (
    <div className="h-screen bg-slate-700 flex flex-col items-center justify-around py-10 gap-10">
      <h1 className="font-bold uppercase text-[50px]">Abuelos</h1>
      <div className="flex m-auto max-w-[2000px] px-10 w-full gap-8 items-center">
        <Column name="Hernando Valdez Redondo" image={abueloNano}>
          Nacido el 25 de septiembre de 1945, Hernando Valdez fue mi abuelo
          paterno. Es recordado como el abuelo Nano por mucha de su familia. El
          se dedico a la medicina, área en la cual llego a un muy alto nivel.
        </Column>
        <Column name="Magda Graciela Patzy Calvimontes" image={abuelaMagda}>
          Nacida el 20 de junio de 1952, Magda Patzy fue mi abuela materna. Es
          recordada por ser una persona muy calida y social. Lamentablemente
          falleció a edad muy temprana a causa de una enfermedad autoinmune.
        </Column>
        <Column name="Victoria Leon Ramos" image={abuelaViqui}>
          <p>
            Nacida el 18 de noviembre de 1935, Victoria León Ramos fue mi abuela
            paterna. Es recordada como la abuela Vicky y fue con la que mas pase
            tiempo de todos mis abuelos. Falleció en mi cuidad natal cuando yo
            tenia 9 años.
          </p>
        </Column>

        <Column name="Humberto Barocio Guajardo" image={abuelo}>
          Nacido el 23 de febrero de 1901, Humberto Barocio fue mi abuelo
          paterno. Es recordado por ser un excelente ingeniero el cual trabajó
          en la construcción del metro linea 1 y 2 en la cuidad de México.
        </Column>
      </div>
    </div>
  );
};

export default Generation3;
