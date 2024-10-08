import { motion } from "framer-motion";

export default function SubFilter({ isOpen, children, close, title = "" }) {

  const variants = {
    open: {
      opacity: 1,
      height: "auto",
    },
    close: {
      height: 0,
      opacity: 0,
      top: 800,
    },
  };

  return (
    <motion.div
      animate={isOpen ? "open" : "close"}
      variants={variants}
      transition={{ ease: "easeOut", duration: 0.3 }}
      className={`
        flex	flex-col    w-full left-0   rounded-lg p-3 border-t-gray-500
      `}
    >
      <hr />
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
