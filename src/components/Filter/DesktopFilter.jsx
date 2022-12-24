import { FiFilter } from "react-icons/fi";

import { useContext, useEffect, useState } from "react";
import {
  Services,
  Periodo,
  LocationCity,
  Comodos,
  Location,
} from "./DesktopTab";
import InvalidFilterMessage from "../InvalidFilterMessage";
import { DataFilterContext } from "../../hooks/DataFilterContext";




export default function DesktopFilter() {
  const { filtroValido, tipoCaprixosa} = useContext(DataFilterContext);

  const [invalidMessage, setInvalidMessage ] = useState();

  function toggleClick(){
    if(!filtroValido())
    {
      setInvalidMessage(true);

      setTimeout(() => {
        setInvalidMessage(false);
      }, 2500);
      return;
    }
   window.location.href = "/profiles";
  }

  return (
   <div>
     <InvalidFilterMessage show={invalidMessage}/>
     <div className="mx-14 hidden lg:flex rounded py-4 bg-[#f0ecf1]  w-full px-4">
      <div className="flex w-full">
        <div className="flex flex-col justify-center">
          <FiFilter size={30} />
        </div>
        <div className="flex flex-1  w-full justify-between px-24 relative">
          <Services />
          <Periodo />
          <LocationCity />
          <Comodos />
          <Location />
        </div>
        <div className="flex flex-col justify-center">
          <button
            onClick={() => toggleClick()}
            className="btn btn-primary w-40 btn-sm"
          >
            buscar
          </button>
        </div>
      </div>
    </div>
   </div>
  );
}
