import imagen from "../../img/anonimo.jpg";

const Bisabuelo = ({ name, img }) => {
  return (
    <div className="flex flex-col items-center shadow-lg p-5 rounded-xl bg-[#e58d80] border-2 border-white gap-6 justify-center w-56 h-56">
      <img src={img} className="rounded-full w-32 h-32 object-cover shrink-0" />
      <h2 className="text-sm font-bold text-center">{name}</h2>
    </div>
  );
};

export default Bisabuelo;
