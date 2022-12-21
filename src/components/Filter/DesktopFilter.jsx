import { FiFilter } from "react-icons/fi";

import {
  Services,
  Periodo,
  LocationCity,
  Comodos,
  Location,
} from "./DesktopTab";

export default function DesktopFilter() {
  return (
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
            onClick={() => (window.location.href = "/profiles")}
            className="btn btn-primary w-40 btn-sm"
          >
            buscar
          </button>
        </div>
      </div>
    </div>
  );
}
