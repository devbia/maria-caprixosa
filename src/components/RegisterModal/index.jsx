import Modal from "../Modal";
import { TextTracking } from "../Typography";
import { Input, Select, TextArea } from "../Form";
import { createRef, useContext, useEffect, useState } from "react";
import { ShowAlertContext } from "../../hooks/ShowAlertContext";
import CurrencyInput from 'react-currency-input-field';

export default function RegisterModal({ id }) {

  const {setAlertOpen, closeModalState, setCloseModal } = useContext(ShowAlertContext);
  const fileRef = createRef();
  const [isLoading, setIsLoading] = useState(false);

  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [ano, setAno] = useState(2022);
  const [telefone, setTelefone] = useState("");
  const [valor, setValor] = useState("");
  const [cep, setCEP] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [mensagem, setMensagem] = useState("");


  const [invalidName, setInvalidName] = useState(false);
  const [invalidCategoria, setInvalidCategoria] = useState(false);
  const [invalidAno, setInvalidAno] = useState(false);
  const [invalidTelefone, setInvalidTelefone] = useState(false);
  const [invalidValor, setInvalidValor] = useState(false);

  function reset(){
    setNome("");
    setCategoria("");
    setAno("");
    setTelefone("");
    setValor("");
    setCEP("");
    setEstado("");
    setCidade("");
    setMensagem();
    setCloseModal(false);
  }


  const estados = [
    { text: "Acre", value: "AC" },
    { text: "Alagoas", value: "AL" },
    { text: "Amapá", value: "AP" },
    { text: "Amazonas", value: "AM" },
    { text: "Bahia", value: "BA" },
    { text: "Ceará", value: "CE" },
    { text: "Distrito Federal", value: "DF" },
    { text: "Espírito Santo", value: "ES" },
    { text: "Goiás", value: "GO" },
    { text: "Maranhão", value: "MA" },
    { text: "Mato Grosso", value: "MT" },
    { text: "Mato Grosso do Sul", value: "MS" },
    { text: "Minas Gerais", value: "MG" },
    { text: "Pará", value: "PA" },
    { text: "Paraíba", value: "PB" },
    { text: "Paraná", value: "PR" },
    { text: "Pernambuco", value: "PE" },
    { text: "Piauí", value: "PI" },
    { text: "Rio de Janeiro", value: "RJ" },
    { text: "Rio Grande do Norte", value: "RN" },
    { text: "Rio Grande do Sul", value: "RS" },
    { text: "Rondônia", value: "RO" },
    { text: "Roraima", value: "RR" },
    { text: "Santa Catarina", value: "SC" },
    { text: "São Paulo", value: "SP" },
    { text: "Sergipe", value: "SE" },
    { text: "Tocantins", value: "TO" },
  ];

  useEffect(() => {
    setAno((new Date()).getFullYear());
  }, []);

  function handleForm() {
    let hasInvalidFields = false;


    if(nome.length <= 3){
      hasInvalidFields = true;
      setInvalidName(true);
    }

    if(categoria.length < 3){
      hasInvalidFields = true;
      setInvalidCategoria(true);
    }

    const currentYear = (new Date()).getFullYear();
    if(ano < 1990 || ano > currentYear){
      setInvalidAno(true);
      hasInvalidFields = true;
    }

    if(telefone.replace(/[^0-9]/gi,'').length < 7){
      setInvalidTelefone(true);
      hasInvalidFields = true;
    }

    if(valor.length == 0){
      setInvalidValor(true);
      hasInvalidFields = true;
    }

    if(hasInvalidFields)
      return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setAlertOpen(true); 
      setCloseModal(true);

      setTimeout(() =>  reset(), 999);
    }, 1999);
  }

  return (
    <Modal id={id} className=" bg-[#F0ECF1]  w-11/12 max-w-4xl" closeIcon>
      <div className="flex justify-center mb-8">
        <TextTracking>Boas-vindas a maria caprixosa</TextTracking>
      </div>
      <div className="flex md:justify-center mb-3">
        <span className="font-bold text-sm">
          Quer sua agenda organizada e mais flexivél?
        </span>
      </div>
      <div className="flex justify-start mb-3">
        <span>Cadastra-se informando seus dados</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
        <div className="flex flex-col gap-2">
          <Input obrigatorio label="Nome" isInvalid={invalidName} value={nome} onInput={(ev) => {
            setNome(ev.target.value);
            setInvalidName(false);
          }} placeholder="Informe seu nome e sobrenome" />
          <Input
            obrigatorio
            isInvalid={invalidCategoria}
            label="Categoria"
            placeholder="Se você é diarista, faxineira, doméstica"
            value={categoria} 
            onInput={(ev) => {
              setInvalidCategoria(false);
              setCategoria(ev.target.value)
            }}
          />
          <Input
            obrigatorio
            mask="9999"
            isInvalid={invalidAno}
            label="Desde que ano atua na área:"
            placeholder="Informe o ano"
            type="text"
            value={ano} onInput={(ev) => {
              setInvalidAno(false);
              setAno(ev.target.value);
            }}
          />
          <Input
            obrigatorio
            isInvalid={invalidTelefone}
            label="Telefone"
            mask="(99) 99999-9999"
            placeholder="Informe o telefone para contato"
            value={telefone} onInput={(ev) => {
              setInvalidTelefone(false);
               setTelefone(ev.target.value)
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
         
           <div className="form-control w-full max-w-xs">
            <label className="label m-0 pb-0">
              <span className="label-text bold mb-0 font-bold ">Valor do serviço <span className="text-red-500">*</span></span>
            </label>
             <CurrencyInput
              className={`input input-bordered w-full max-w-xs ${invalidValor && 'border-red-500'}`}
              placeholder="Informe o valor do seu serviço"
              value={valor}
              decimalsLimit={2}
              decimalSeparator="," 
              onValueChange={(value, name) => {
                setValor(value);
                setInvalidValor(false);
              }}
              intlConfig={{ locale: 'pt-br', currency: 'BRL' }}
            />  
          </div>
         
          <Input 
          label="Cep:" 
          mask="99999-999" 
          placeholder="Informe seu CEP" 
          value={cep} onInput={(ev) => setCEP(ev.target.value)}/>
          <Select 
            label="Estado" 
            items={estados} 
            defaultValue="1" 
            onChange={(ev) => setEstado(ev.target.value)}/>

          <Select 
          label="Cidade" 
          items={[{text: "Selecione uma cidade", value: '0'}]} 
          defaultValue="1" />
          <div className="flex flex-col cursor-pointer">
            <label className="font-bold">Selecione a sua foto favorita</label>
            <input type="file" className="hidden" name="" id="" ref={fileRef} />
            <img
              src={"/images/home/icons/file.png"}
              className="w-8 h-8"
              onClick={() => fileRef.current.click()}
            />
          </div>
        </div>
      </div>
      <div className="w-full mb-3">
        <TextArea
          placeholder="Queremos lhe ouvir nos fale um pouco da sua trajetória e experiência por que atuar nessa área."
          label="Mensagem:"
          value={mensagem}
          onChange={ev => setMensagem(ev.target.value)}
        />
      </div>
      <div className="flex w-full justify-center">
        <button
          onClick={handleForm}
          disabled={isLoading}
          className={`btn btn-primary md:w-1/2 lg:w-1/4 ${
            isLoading && "loading"
          }`}
        >
          Enviar
        </button>
      </div>
    </Modal>
  );
}
