import { useContext, useEffect } from "react";
import { ShowAlertContext } from "../../hooks/ShowAlertContext";

import { motion } from "framer-motion";
import { useIsMedium, useIsSmall } from "../../hooks/MediaQuery";

export default function Alert(){

  const {alertOpen, setAlertOpen, setCloseModal} = useContext(ShowAlertContext); 
  const isSmall = useIsSmall(); 
  const isMedium = useIsMedium(); 

  let animation = {
    open: {
      opacity: 1,
      zIndex: 9999,
      bottom: 10,
      left: 10,
      display: "flex"
    },
    close: {
      opacity: 0,
      display: "none"
    }
  }
  
  if(isSmall){
    animation["open"]["left"] = 0;
    animation["open"]["right"] = 0;
    animation["open"]["bottom"] = 0;
  }
  if(isMedium){
    animation["open"]["left"] = 10;
    animation["open"]["right"] = 10;
    animation["open"]["bottom"] = 10;
  }

  const variants = animation;

  useEffect(() => {
    setTimeout(() => {
      setAlertOpen(false);

    }, 2500);
  }, [alertOpen]);

  return (
  <motion.div  className="text-[#9900CC] absolute
 w-full md:max-w-sm  p-8  bg-[#d9cadd] shadow-lg rounded-lg"
      animate={alertOpen ? 'open' : 'close'}
      variants={variants}
      transition={{ ease: "easeOut", duration: 0.5 }}>
    <span className="font-bold">
      Dados enviados com sucesso!
    </span>
  </motion.div>
  );
}