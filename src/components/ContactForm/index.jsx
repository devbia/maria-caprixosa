
import { CheckBox } from "../Form";
import InputMask from "react-input-mask";
import { motion } from "framer-motion";



export default function ContactForm({ isMobile = false, isOpen = false, bottomHeight = 0}){
  const variants = {
    open: { opacity: 1,  top: -500 - bottomHeight },
    closed: { opacity: 0,  top: -3000 },
  }

  return (
    <motion.div 
     animate={isMobile && isOpen ? "open" : "closed"}
     variants={isMobile ? variants : {}}
     transition={{ease: "easeOut", duration: .5}}
    className={`flex flex-col bg-[#B9A1B7] w-full p-5 justify-start max-w-full md:max-w-sm rounded-lg 

              ${isMobile && 'absolute'}
            `}>

            <div className="flex flex-col mb-6">
              <span className="uppercase font-extrabold mb-2">CONTATE-nos</span>
              <p>Queremos falar mais com você, informe seus dados!</p>
            </div>

            <div className="form-control w-full max-w-xs mb-2">
              <label className="label">
                <span className="label-text font-bold">Seu nome</span>
              </label>
              <input type="text" placeholder="Digite seu nome aqui..." className="input input-bordered w-full md:max-w-xs" />
            </div>
            <p>Apenas informe, por onde nós podemos entrar em contato?</p>
            <div className="form-control w-full max-w-xs mb-2">
              <label className="label">
                <span className="label-text font-bold">Telefone</span>
              </label>
              <InputMask mask={"(99) 9999-99999"} type="text" placeholder="EX: (xx) xxxx-xxxxx" className="input input-bordered w-full md:max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs mb-4">
              <label className="label">
                <span className="label-text font-bold">E-mail</span>
              </label>
              <input type="email" placeholder="Ex: seuemail@email.com" className="input input-bordered w-full md:max-w-xs" />
            </div>
            <div className="mb-4">
              <CheckBox label={"Concordo em receber comunicações"} checkboxClass="checkbox-info" />
            </div>

            <button className="btn btn-info font-bold">
              Enviar
            </button>
    </motion.div>
  );
}