import { CheckBox } from "../Form";
import InputMask from "react-input-mask";
import { motion } from "framer-motion";

import { TabContext } from "../../hooks/TabContext";
import { useContext, useEffect, useState } from "react";
import { ShowAlertContext } from "../../hooks/ShowAlertContext";

export default function ContactForm({ isMobile = false, bottomHeight = 0 }) {
  const { tabOpen, setTabOpen } = useContext(TabContext);
  const { alertOpen, setAlertOpen } = useContext(ShowAlertContext);

  const [name, setName] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [checkBoxOK, setCheckBoxOk] = useState(false);

  const [telefoneInvalido, setTelefoneInvalido] = useState(false);
  const [nomeInvalido, setNomeInvalido] = useState(false);
  const [emailInvalido, setEmailInvalido] = useState(false);
  const [checkBoxInvalido, setCheckBoxInvalido] = useState(false);

  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const variants = {
    open: { height: "100%" },
    closed: {
      height: isMobile ? 0 : "100%",
      bottom: -100
    },
  };

  useEffect(() => {
    resetForm();
    setTimeout(() => setIsReady(true), 2999);
  }, []);

  useEffect(() => {
    setIsOpen(tabOpen == "contact");
  }, [tabOpen]);

  function resetForm(){
    setNomeInvalido(false);
    setTelefoneInvalido(false);
    setEmailInvalido(false);

    setName("");
    setTelefone("");
    setEmail("");
    setCheckBoxOk(false); 
    document.body.style.overflow = "unset";
  }

  function handleForm() {
    
    setNomeInvalido(name.length < 2);
    setTelefoneInvalido(telefone.length < 2);
    setEmailInvalido(email.length < 2);

    if(nomeInvalido || emailInvalido || telefoneInvalido)
      return;
      setIsFetching(true);
      
      setTimeout(() => {
        
        setIsFetching(false);
        setAlertOpen(true);
        resetForm();

      setTimeout(() => setTabOpen(null), 1999);
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
            bottom-0
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
        
          className={`input input-bordered bg-transparent focus:outline-none border-black  w-full md:max-w-xs ${nomeInvalido && 'border-red-500'}`}
          onInput={(ev) => setName(ev.target.value)}
          maxLength={150}
          value={name}
        />
      </div>
      <p>Apenas informe, por onde nós podemos entrar em contato?</p>
      <div className="form-control w-full max-w-xs mb-2">
        <label className="label">
          <span className="label-text font-bold">Telefone</span>
        </label>
        <InputMask
          mask={"(99) 9999-99999"}
          value={telefone}
          onInput={(ev) => setTelefone(ev.target.value)}
          type="text"
          className={`input input-bordered bg-transparent focus:outline-none border-black  w-full md:max-w-xs ${telefoneInvalido && 'border-red-500'}`}
        />

      </div>
      <div className="form-control w-full max-w-xs mb-4">
        <label className="label">
          <span className="label-text font-bold">E-mail</span>
        </label>
        <input
          value={email}
          type="email"
          onInput={(ev) => setEmail(ev.target.value)}
          className={`input input-bordered bg-transparent focus:outline-none border-black  w-full md:max-w-xs ${emailInvalido && 'border-red-500'}`}
        />
      </div>
      <div className="mb-4">
        <CheckBox
          label={"Concordo em receber comunicações"}
          checkboxClass={`checkbox-primary ${checkBoxInvalido && 'border-red-500'}`}
          onClick={_=> setCheckBoxOk(!checkBoxOK)}
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
