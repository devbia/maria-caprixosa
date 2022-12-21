
import { useContext, useEffect, useState } from "react";
import { FilterMobileContext } from "../../hooks/FilterMobileContext";
import { TabContext } from "../../hooks/TabContext";

import { motion } from 'framer-motion'; 

import { Comodos, Location, LocationCity, Periodo, Services } from "./MobileTab";

import { MdNavigateNext } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from "next/router";

export default function MobileFilter(){
  const [ready, setReady] = useState(false); 
  const { filterMobileOpen, itemOpen, setItemOpen } = useContext(FilterMobileContext); 
  const { setTabOpen } = useContext(TabContext); 
   
  const router = useRouter(); 
  const [current, setCurrent] = useState(0);  
  const [isLast, setLast] = useState(false);  
  const [isFetching, setIsFetching] = useState(false);  

  const sequence = ["services", "periodo", "locationCity", "comodos", "location"];

  const variants = {
      open: {height:"100%"},
      close: {
        height: 0
      }
    }
  
  const goNext = () => {
    const newTab = sequence.indexOf(itemOpen) + 1; 

    if(newTab == 5){
      setCurrent(newTab);
      setItemOpen(sequence[4]);
    }else {
      setCurrent(newTab);
      setItemOpen(sequence[newTab]);
      console.log(sequence[newTab]);
    }
  }


  const goToSearch = () => {
    setTabOpen(null); 

    setIsFetching(() => {
  
      router.push("/profiles")
    },999);
    
  }

  useEffect(() => {
    setInterval(() => setReady(true), 1999);
  }, []);
    
  useEffect(() => {
    setLast(itemOpen == "location");
  }, [itemOpen]);



  return (
    <motion.div className={`fixed h-full -bottom-3 md:-bottom-20 w-full py-10 z-10   ${ready ? "lg:hidden" : "hidden"}`}  
       animate={filterMobileOpen ? 'open' : "close"} 
       variants={variants}
       transition={{ease: "easeOut", duration: 0.7}}>
        <div className="flex justify-between h-full flex-col bg-[#E4DFE0] px-2 rounded-tr-lg rounded-tl-lg">
            <motion.div className="flex justify-between flex-col h-full pb-12">
                <div className="flex flex-col w-full flex-1">
                  <Services beforeItem={"services"}/>
                  <Periodo beforeItem={"services"}/>
                  <LocationCity beforeItem={"periodo"}/>
                  <Comodos beforeItem={"locationCity"}/>
                  <Location beforeItem={"comodos"}/>
                </div>
                <div className="flex md:justify-center">
                    <button onClick={_ => !isLast ? goNext() : goToSearch() } className="btn z-40 btn-primary w-full md:w-1/2">
                      <div className="flex w-full md:justify-center">
                          <div className="flex flex-1 justify-center text-lg">
                            {isLast ? "Buscar" : "Avançar"}
                          </div>
                          <div className="flex self-center flex-col h-full justify-center ">
                            {isLast ? <FaSearch size={20}/> : <MdNavigateNext size={25}/>} 
                          </div>
                      </div>
                    </button>
                </div>
            </motion.div>
        </div>
    </motion.div>
  );
}