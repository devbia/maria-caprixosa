import { motion } from "framer-motion";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../hooks/FilterContext";
import { FilterFormContext } from "../../hooks/FilterFormContext";
import { FilterMobileContext } from "../../hooks/FilterMobileContext";
import { TextTracking } from "../Typography";

export const TabTemplateMobile = ({
  title,
  id,
  subMenuIsOpen = false,
  beforeItem = "",
  subtitle = "",
  children,
}) => {
  

  const { choosedOption } = useContext(FilterFormContext);

  const checkSelected = () => {
    if (choosedOption == "faxineira") return "Faxineira";
    else if (choosedOption == "diarista") return "Diarista";
    else if (choosedOption == "domestica") return "Doméstica";
  };
  const { itemOpen, setItemOpen, setFilterMobileOpen } =
    useContext(FilterMobileContext);

  function changeView() {
    if (itemOpen == "services") {
      setFilterMobileOpen(false);
      document.body.style.overflow = "unset";
      setItemOpen("services");
    } else {
      setItemOpen(beforeItem);
      console.log(beforeItem);
    }
  }

  if (itemOpen != id) return null;

  return (
    <motion.div  className="flex flex-col w-full h-full  z-20 " tabIndex={99}>
      <div className={`flex flex-col gap-3 ${subMenuIsOpen && 'hidden'}`}>
        <div
          className="flex mb-2 pt-2 text-lg font-bold"
          onClick={(_) => changeView()}
        >
          <div className="flex h-full flex-col justify-center">
            <MdArrowBackIos size={15} />
          </div>
          {title}
        </div>
        <div className="flex w-full justify-center md:mb-8">
          <TextTracking>Você escolheu {checkSelected()}</TextTracking>
        </div>
        <div className="flex font-bold">{subtitle}</div>
      </div>
      <div className={`flex w-full ${subMenuIsOpen ? 'h-full' : "h-auto"}`}>{children}</div>
    </motion.div>
  );
};

export default function TabTemplate({
  title,
  subtitle,
  id,
  children,
  showChoosedOption = false,
}) {
  const { itemOpen, setItemOpen } = useContext(FilterContext);
  const { choosedOption } = useContext(FilterFormContext);

  const checkSelected = () => {
    if (choosedOption == "faxineira") return "Faxineira";
    else if (choosedOption == "diarista") return "Diarista";
    else return "Doméstica";
  };

  return (
    <div className="flex w-auto px-2">
      <div className="flex h-full flex-col justify-center relative">
        <label
          className="text-neutral flex cursor-pointer gap-3 font-bold"
          onClick={(_) => setItemOpen(itemOpen == id ? null : id)}
        >
          {title}
          <div className="flex flex-col h-full justify-center ">
            {itemOpen == id ? (
              <motion.span
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.6 }}
              >
                <IoIosArrowUp size={15} />
              </motion.span>
            ) : (
              <motion.span
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.6 }}
              >
                <IoIosArrowDown size={15} />
              </motion.span>
            )}
          </div>
        </label>
        {itemOpen == id && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className="span w-full -bottom-8 border border-gray-300 border-b-0 rounded-tl-full rounded-tr-full bg-[#f0ecf1] h-6 absolute"
          ></motion.div>
        )}
      </div>
      {itemOpen == id && (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className="flex flex-col absolute left-0 top-14 w-11/12 bg-[#f0ecf1]  rounded-lg shadow-md p-3 border-t-gray-500"
        >
          <div className="flex flex-col w-full">
            <span className="font-bold">{subtitle}</span>
            {children}
          </div>
          {showChoosedOption && (
            <div className="flex w-full">
              <span className="font-bold text-gray-300">
                Você escolheu {checkSelected()}
              </span>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
