import { FiFilter } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { useState, useRef, useContext } from "react";
import { useRouter } from "next/router";

import { FilterMobileContext } from "../../hooks/FilterMobileContext";
import { TabContext } from "../../hooks/TabContext";

export default function BottomMenu() {
  const { setFilterMobileOpen, filterMobileOpen, setItemOpen } =
    useContext(FilterMobileContext);
  const { tabOpen, setTabOpen } = useContext(TabContext);

  const heightBottom = useRef(null);

  const toggleChangeView = (item) => {
    if (tabOpen == item) {
      setItemOpen("services");
      setTabOpen(null);
      setFilterMobileOpen(false);

      document.body.style.overflow = "unset";
    } else {
      setTabOpen(item);
      setFilterMobileOpen(item == "filter");
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div
      ref={heightBottom}
      className="fixed bottom-0 w-full bg-white py-3 md:hidden z-20"
    >
      <div className="grid grid-cols-3">
        <div
          onClick={(_) => {
            document.body.style.overflow = "unset";
            setFilterMobileOpen(false);
            window.location.href = "/#filterBTN";
          }}
          className={`flex flex-col text-center justify-center ${
            filterMobileOpen && "text-purple-500"
          }`}
        >
          <FiFilter size={20} className="self-center" />
          Filtro
        </div>
        <div
          onClick={() => {
            window.location.href = "/profiles#favorites";
            toggleChangeView("favorites");
          }}
          className={`
          flex flex-col text-center justify-center
          ${tabOpen == "favorites" && "text-purple-500"}
        `}
        >
          <AiOutlineHeart size={20} className="self-center" />
          Favoritas
        </div>
        <div
          onClick={(_) => toggleChangeView("contact")}
          className={`flex flex-col text-center justify-center ${
            tabOpen == "contact" && "text-purple-500"
          }`}
        >
          <BsPeople size={20} className="self-center" />
          Contato
        </div>
      </div>
    </div>
  );
}
