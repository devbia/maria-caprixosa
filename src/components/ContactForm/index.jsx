import { CheckBox } from "../Form";
import InputMask from "react-input-mask";
import { motion } from "framer-motion";

import { TabContext } from "../../hooks/TabContext";
import { useContext, useEffect, useState } from "react";

export default function ContactForm({ isMobile = false, bottomHeight = 0 }) {
  const { tabOpen } = useContext(TabContext);

  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const variants = {
    open: { height: "100%" },
    closed: {
      height: isMobile ? 0 : "100%",
    },
  };

  useEffect(() => {
    setTimeout(() => setIsReady(true), 2999);
  }, []);

  useEffect(() => {
    setIsOpen(tabOpen == "contact");
  }, [tabOpen]);

  function handleForm() {
    setIsFetching(true);

    setTimeout(() => {
      setIsFetching(false);
    }, 2000);
  }
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className={`
            ${isMobile && isReady ? "fixed" : "hidden"}
            ${
              isMobile &&
              `
            h-full
            -bottom-10
            pb-20`
            }

            md:py-5
            md:h-auto
            md:flex 
            flex-col bg-[#B9A1B7] 
            w-full 
            p-5 
            justify-start 
            max-w-full 
            md:max-w-sm rounded-lg
          `}
    >
      <div className="flex flex-col mb-6">
        <span className="uppercase font-extrabold mb-2">CONTATE-nos</span>
        <p>Queremos falar mais com você, informe seus dados!</p>
      </div>

      <div className="form-control w-full max-w-xs mb-2 justify-center md:justify-start">
        <label className="label">
          <span className="label-text font-bold">Seu nome</span>
        </label>
        <input
          type="text"
          placeholder="Digite seu nome aqui..."
          className="input input-bordered w-full md:max-w-xs"
        />
      </div>
      <p>Apenas informe, por onde nós podemos entrar em contato?</p>
      <div className="form-control w-full max-w-xs mb-2">
        <label className="label">
          <span className="label-text font-bold">Telefone</span>
        </label>
        <InputMask
          mask={"(99) 9999-99999"}
          type="text"
          placeholder="EX: (xx) xxxx-xxxxx"
          className="input input-bordered w-full md:max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs mb-4">
        <label className="label">
          <span className="label-text font-bold">E-mail</span>
        </label>
        <input
          type="email"
          placeholder="Ex: seuemail@email.com"
          className="input input-bordered w-full md:max-w-xs"
        />
      </div>
      <div className="mb-4">
        <CheckBox
          label={"Concordo em receber comunicações"}
          checkboxClass="checkbox-primary"
          defaultChecked={false}
        />
      </div>
      <button
        disabled={isFetching}
        onClick={handleForm}
        className={`btn btn-info w-full md:w-auto font-bold ${
          isFetching && "loading"
        }`}
      >
        Enviar
      </button>
    </motion.div>
  );
}
