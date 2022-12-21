
import { motion } from "framer-motion";

export default function SubFilterMobile({ isOpen, children, close, title = "" }) {

  const variants = {
    open: {
      opacity: 1,
      height: "100%",
    },
    close: {
      height: 0,
      opacity: 0,
      bottom: 0,
      display: 'none'
    },
  };

  return (
    <motion.div
      animate={isOpen ? "open" : "close"}
      initial={{opacity:0}}
      variants={variants}
      transition={{ ease: "easeOut", duration: 0.3 }}
      className={`
        flex	flex-col    w-full 
        absolute h-full  
        bg-[#E4DFE0]
        -bottom-9
      `}>
      <div className="flex w-full justify-end">
        <button className="btn btn-ghost" onClick={close}>
          X
        </button>
      </div>
      <div className="flex w-full flex-col">
        <div className="flex justify-start">
          <span className="font-bold">{title}</span>
        </div>
        {children}
      </div>
    </motion.div>
  );
}
