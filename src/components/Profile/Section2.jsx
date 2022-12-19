
import { TextTracking } from '../Typography';

import { FaSearch } from 'react-icons/fa'; 
import { HiPlus } from 'react-icons/hi'; 
import CardProfessional from "../Profile/CardProfessional";

export default function Section2() {
  const info = [
    {
      image: "/images/profile/icons/chat.png",
      description: "Agenda mais acessivél aos clientes que procura pelo seu serviço."
    },
    {
      image: "/images/profile/icons/estrela.png",
      description: `Saber que você esta entre as mais de 100 mil diarista 
      e faxineira e doméstica pelo braisl.`
    },
    {
      image: "/images/profile/icons/notificacao.png",
      description: `Horários e agenda organizada e flexivel, dando mais comodidade e confiabilidade ao cliente.`
    },

  ];

  return (
    <div className="flex flex-col w-full bg-[#E4DFE0]">
        <div className="flex flex-col gap-8 md:gap-0  md:flex-row w-full py-8 lg:px-28 lg:py-20  justify-around">
          {info.map((data, index) => <div key={index} className="flex flex-col gap-3">
            <div className="flex justify-center">
              <img src={data.image} className="max-w-[55px]" />
            </div>
            <div className="flex justify-center px-16 md:px-0 text-center md:max-w-[200px]">
              {data.description}
            </div>
          </div>)}
        </div>
        
        <div className="flex flex-col w-full gap-8 md:gap-0 lg:px-28 py-20 justify-around">
          <div className="flex w-full justify-center">
            <TextTracking>Veja outros perfis</TextTracking>
          </div>
         
          <div className="flex w-full justify-center py-5 lg:py-0 lg:justify-end">
            <div className="form-control">
              <div className="input-group  input-group-sm">
                <input type="text" placeholder="Buscar" className="input input-bordered outline-none shadow-none input-sm w-full max-w-x w-56 border-r-0" />
                <button className="btn btn-info btn-sm py-0 border-gray-300 border-l-0">
                  <FaSearch className="text-gray-500 self-center my-0"/>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-2 lg:grid-cols-3 md:mt-10">
            <CardProfessional image={"/images/profile/grid/profile1.png"} name={"Maria conceição"} starts={2} job={"diarista"}/>
            <CardProfessional image={"/images/profile/grid/profile1.png"} name={"Maria conceição"} starts={2} job={"diarista"}/>
            <CardProfessional image={"/images/profile/grid/profile1.png"} name={"Maria conceição"} starts={2} job={"diarista"}/>
          </div>
          <div className="flex w-full justify-center md:mt-20 lg:mt-20 px-24 md:px-0">
            <button className="btn btn-primary gap-3 w-full md:w-1/2 lg:w-1/4">
              <HiPlus size={20}/> Ver mais 
            </button>
          </div>
        </div>
      </div>
  ); 
}