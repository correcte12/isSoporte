import macs from "../assets/macs.jpg";


const Inicio2 = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-800">
        <div>
            <h1 className="text-5xl font-asap text-center m-5 dark:text-white">
            Software a medida
            </h1>
            <h5 className="text-xl font-asap text-center m-10 dark:text-white">
            Software hecho por desarrolladores y pensando para las personas.
            Optimizado para el cloud y adaptado a las últimas novedades.
            Movilidad, web, todas nuestras soluciones están adaptadas a todos los
            dispositivos
            </h5>
        </div>
        
        {/* <div className="flex flex-row gap-20 space-x-40"> */}
        <div className="h-56 grid grid-cols-2 gap-10 content-start">
            <div>
                <img src={macs} border="0" />
            </div>
            <div>
                <img src="https://i.ibb.co/0nQqZ3r/undraw-Online-research-re-9wvr.png" alt="undraw-Online-research-re-9wvr" border="0" />
            </div>
        </div>
    </div>
  );
};

export default Inicio2;
