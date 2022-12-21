import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SubFilter({isMobile, isOpen, children, close, title= ""}) {


  const [showContent, setShowContent] = useState(false);

  const variants = {
    open: {
      opacity: 1,
      height: 'auto'
    },
    close: {
      height: 0, 
      opacity: 0,
      left: 2000
    }
  }

  return (
    <motion.div  
      animate={isOpen ? 'open' : 'close'}  
      variants={variants}
      transition={{ease: "easeOut", duration: 0.3}} 
      className={`
        flex	flex-col left-0   w-full    rounded-lg p-3 border-t-gray-500
        
        ${isMobile && 'absolute bg-[#efebf0] h-full -bottom-full'}
      `}>
        <hr />
        <div className="flex w-full justify-end">
          <button className="btn btn-ghost" onClick={close}>
              X
          </button>
        </div>
        <div className="flex w-full flex-col" >
          <div className="flex justify-start">
            <span className="font-bold">
              {title}
            </span>
          </div>
          {children}
        </div>
    </motion.div>
  );
}