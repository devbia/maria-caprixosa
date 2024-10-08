
import { motion } from "framer-motion";

export default function InvalidFilterMessage({show = false, message = false}){


  return (
    <motion.div  className={`flex w-full justify-center  text-[#FF7070] mb-8 font-bold ${!show && 'invisible'}`}>
      <p>
        {message ? message : 'Selecione mais informações pra a gente encontrar sua Maria.'}
      </p>
    </motion.div>
  );
}