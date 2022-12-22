import { useContext, useEffect } from "react";
import { ShowAlertContext } from "../../hooks/ShowAlertContext";

import { motion } from "framer-motion";
import { useIsMedium, useIsSmall } from "../../hooks/MediaQuery";

export default function Alert({isMobile = false}){

  const {alertOpen, setAlertOpen, setCloseModal} = useContext(ShowAlertContext); 
  const isSmall = useIsSmall(); 
  const isMedium = useIsMedium(); 

  let animation = isMobile ? {
    open: {
      opacity: 1,
      zIndex: 9999,
      left: 0,
      right: 0,
      marginLeft:"auto",
      marginRight:"auto",
      bottom: 0
    },
    close: {
      opacity: 0,
      display: "none"
    }
  } : 
  {
    open: {
      opacity: 1,
      zIndex: 9999,
      left: 0,
      right: 0,
      top: '50%',
      marginLeft:"auto",
      marginRight:"auto"
    },
    close: {
      opacity: 0,
      display: "none"
    }
  };
  
 
  const variants = animation;

  useEffect(() => {
    setTimeout(() => {
      setAlertOpen(false);

    }, 2500);
  }, [alertOpen]);

  return (
  <motion.div  className="text-[#9900CC] absolute w-full md:max-w-sm  p-8 ml-auto mr-auto  left-0 right-0   bg-[#d9cadd] shadow-lg rounded-lg"
      animate={alertOpen ? 'open' : 'close'}
      variants={variants}
      transition={{ ease: "easeOut", duration: 0.5 }}>
    <span className="font-bold">
      Dados enviados com sucesso!
    </span>
  </motion.div>
  );
}