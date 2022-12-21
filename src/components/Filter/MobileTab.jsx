import InputMask from 'react-input-mask';
import { TiPlus } from 'react-icons/ti';
import { TiMinus } from 'react-icons/ti';
import { CheckBox } from "../Form";
import { TabTemplateMobile } from "./TabTemplate";
import { useState } from "react";
import SubFilter from "./SubFilter";
import axios from "axios";

export const Services = ({beforeItem, id="services"}) => {
   const items = [
        "Varrição dos ambientes;",
        "Limpeza de pisos e paredes;",
        "Retirada de pó e outras sujeiras de móveis e cômodos;",
        "Limpeza de vidros (quando não oferece riscos à profissional);",
        "Limpeza de banheiro;",
        "Aspiração de cortinas e carpetes.",
        "Limpeza na cozinha."
  ];

  return (
    <TabTemplateMobile title={"Serviços"} id={id} beforeItem={beforeItem} subtitle={"Descrição dos serviços realizados nessa categoria selecionada."}>
        <div className="flex h-full flex-col py-2 md:mt-6">
          <ul className="flex flex-col">
            {items.map((item, i)=> <li key={i}>{item}</li>)}
          </ul>
      </div>
    </TabTemplateMobile>
  );
}

export const Periodo = ({beforeItem, id="periodo"}) => {
  const [periodo, setPeriodo] = useState(1);
  const [periodoDia, setPeriodoDia] = useState("manha"); // manha || tarde
  const [showTimes, setShowTimes] = useState(false); // manha || tarde
  const [horaDoDia, setHoraDoDia] = useState("manha"); // manha || tarde

  const add = () => {
    if(periodo < 3)
      setPeriodo(periodo + 1);
    else 
      setPeriodo(3);
  }
  const remove = () => {
    if(periodo > 1)
      setPeriodo(periodo - 1);
    else 
      setPeriodo(1);
  }
  const closeSubMenu = () => {
    setShowTimes(!showTimes);
  }


  function blockTime(title, start = "", end = "", selected = false, selecionarItem) {

    return (
      <div className="flex justify-between w-full">
        <div onClick={selecionarItem} className={`flex flex-col w-full gap-3  rounded-lg p-3 hover:bg-[#d3c5d6] ${selected && "bg-[#d3c5d6]"}`}>
              <div className="flex w-full justify-center">
                <span className="font-bold self-center">
                {title}
              </span>
              </div>
              <div className="flex w-full justify-between">
                <span>
                  {start}
                </span>
                <span>
                  {end}
                </span>
              </div>
        </div>
      </div>
    );
  }

  return (
     <TabTemplateMobile title={"Periodos"} id={id} beforeItem={beforeItem} subtitle={"Quantos dias na semana?"}>
      <div className="flex w-full py-2 relative">
        <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col justify-end w-full h-full py-3 gap-3">
              <div className="flex justify-center w-full gap-3">
                  <button className="btn btn-sm btn-ghost btn-outline" onClick={remove}>
                    <TiMinus size={15}/>
                  </button>
                  <span className="text-center flex flex-col justify-center h-full">
                    {periodo < 9 ? `0${periodo}` : periodo}x por semana
                  </span>
                  <button className="btn btn-sm btn-ghost btn-outline" onClick={add}>
                    <TiPlus size={15}/>
                  </button>
              </div>
              <div className="span text-gray-500 font-bold">
                  Modalidade diarista no máximo 3 x por semana
              </div>
            </div>
            <div className="flex flex-col justify-end w-full h-full py-3 gap-3">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center w-full gap-5 mb-2">
                    <div className="flex gap-3">
                      <input 
                          type="checkbox" 
                          className="checkbox checkbox-primary" 
                          checked={periodoDia == "manha"} 
                          onClick={_=>setPeriodoDia("manha")}/>
                      Manhã
                    </div>
                    <div className="flex gap-3">
                      <input type="checkbox" 
                      className="checkbox checkbox-primary" 
                      checked={periodoDia == "tarde"} 
                      onClick={_=>setPeriodoDia("tarde")}/>
                      Tarde
                    </div>
                  </div>
                  <div className="span font-bold">
                    Quais os horários?
                  </div>
                  <a onClick={() => setShowTimes(!showTimes)} className="span text-gray-500 font-bold cursor-pointer">
                    Clique e veja.
                  </a>
                </div>
            </div>
        </div>

          <SubFilter isMobile={true} isOpen={showTimes} close={closeSubMenu} title="Os horários">
            <div className="grid grid-cols-1 gap-5">
                <div className="flex justify-between mt-3">
                  {blockTime('Manhã', "07:00", "13:00", horaDoDia == "manha", () => setHoraDoDia("manha"))}
                  {blockTime('Tarde', "13:00", "18:00", horaDoDia == "tarde", () => setHoraDoDia("tarde"))}
                </div>
                 <div className={`flex h-full justify-cente rounded-lg hover:bg-[#d3c5d6] p-5 ${horaDoDia == "combinar" && "bg-[#d3c5d6]"}`} onClick={_ => setHoraDoDia("combinar")}  >
                  <span className="self-center">A combinar com a Diarista</span>
                </div>
            </div>
          </SubFilter>
      </div>

     </TabTemplateMobile>
    );
}

export const LocationCity = ({ beforeItem, id="locationCity"}) => {
  const [checked, setChecked] =  useState("apartamento_padrao");

  const changeItem = (item) => {
    setChecked(item);
  }
  return (
     <TabTemplateMobile title={"Moro em"} beforeItem={beforeItem} id={id} subtitle={"Qual o tipo da sua moradia?"}>
          <div className="flex flex-col justify-center h-full pt-8">
            <div className="flex  flex-col justify-around gap-4 mb-8">
              <div className="flex  gap-3">
                <input type="checkbox" className="checkbox checkbox-primary"
                    checked={checked == "apartamento_padrao"}
                       onClick={_=>changeItem("apartamento_padrao")} />
                Apartamento Padrão
              </div>
              <div className="flex gap-3">
                <input type="checkbox" className="checkbox checkbox-primary"
                checked={checked == "casa"}
                       onClick={_=>changeItem("casa")} />
                Casa
              </div>
              <div className="flex gap-3">
                <input type="checkbox" className="checkbox checkbox-primary" 
                       checked={checked == "outros"}
                       onClick={_=>changeItem("outros")}/>
                Outros
              </div>
            </div>
            <div className="flex">
              <span className="font-bold text-gray-500">
                Escolha uma opção.
              </span>
            </div>
        </div>
     </TabTemplateMobile>
    );
}

export const Comodos = ({beforeItem, id="comodos" }) => {

  const [quartos, setQuartos] = useState(1);
  const [cozinha, setCozinha] = useState(1);
  const [banheiro, setBanheiro] = useState(1);

  const addQuarto = () => setQuartos(quartos + 1);
  const removeQuarto = () => setQuartos(quartos > 1 ? quartos - 1 : 1);
  const addCozinha = () => setCozinha(cozinha + 1);
  const removeCozinha = () => setCozinha(cozinha > 1 ? cozinha - 1 : 1);
  const addBanheiro = () => setBanheiro(banheiro + 1);
  const removeBanheiro = () => setBanheiro(banheiro > 1 ? banheiro - 1 : 1);

  const inputQuantity = (value, text, add, remove) => {
    return (
       <div className="flex w-full gap-3  justify-between mb-3">
          <button className="btn btn-sm btn-ghost btn-outline" onClick={remove}>
            <TiMinus size={15}/>
          </button>
          <span className="text-center flex flex-col justify-center h-full font-bold">
            {value < 9 ? `0${value}` : value} {text}
          </span>
          <button className="btn btn-sm btn-ghost btn-outline" onClick={add}>
            <TiPlus size={15}/>
          </button>
      </div>
    )
  }

  return (
     <TabTemplateMobile title={"Comodos"} id={"comodos"} beforeItem={beforeItem} subtitle={"Quantos comodos?"}>
      <div className="w-full  flex-col md:flex-row h-full flex pt-3 max-h-80 md:max-h-full overflow-auto">
          <div className="flex md:max-w-sm flex-col px-16 justify-center w-full">
              {inputQuantity(quartos, "Quarto", addQuarto, removeQuarto)}
              {inputQuantity(cozinha, "Cozinha", addCozinha, removeCozinha)}
              {inputQuantity(banheiro, "Banheiro", addBanheiro, removeBanheiro)}
          </div>
          <div className="flex flex-col gap-6 mt-6 py-3">
             <CheckBox label="Com área externa" checkboxClass="checkbox-primary" labelClass="font-bold"/>
              <CheckBox label="Outros" checkboxClass="checkbox-primary" labelClass="font-bold"/>
              <CheckBox label="Sala e cozinha (Integrada)" checkboxClass="checkbox-primary" labelClass="font-bold"/>
              <CheckBox label="Sem área externa" checkboxClass="checkbox-primary" labelClass="font-bold"/>
          </div>
      </div>
     </TabTemplateMobile>
    );
}


export const Location = ({beforeItem, id="location"}) => {
  const [showTimes, setShowTimes] = useState(false); 
  const [invalidCEP, setInvalidCEP] = useState(false); 
  const [estado, setEstado] = useState(""); 
  const [cidade, setCidade] = useState(""); 
  const [endereco, setEndereco] = useState(""); 
  const [bairro, setBairro] = useState(""); 
  const [cep, setCep] = useState(""); 
  const closeSubMenu = () => {
      setShowTimes(!showTimes);
  }


  const getCep = async (event) => {
    try {
      setInvalidCEP(false);
      let cepInput = event.target.value.replace(/[^0-9]/g, '');
      console.log(cepInput);
      if(cepInput.length != 8)
        return;

      const { data } = await axios.get(`https://viacep.com.br/ws/${event.target.value}/json/`);

      if(data?.cep){
      
        setEstado(data.uf);
        setCidade(data.localidade);
        setEndereco(data.logradouro);
        setBairro(data.bairro);
        setCep(data.cep);
        setShowTimes(true);  
      }
      else {
        setInvalidCEP(true); 
        setShowTimes(false);
      }
    } catch (error) {
      console.log(error);
      setInvalidCEP(true);
      setShowTimes(false);
    }
  }


  return (
     <TabTemplateMobile title={"Localização"} beforeItem={beforeItem} id={id} subtitle={"Qual local para presta o serviço?"}>
      <div className="flex flex-col md:w-full justify-between py-8">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold text-lg">Informe seu cep:</span>
            </label>
            <div className="flex justify-center">
                <InputMask onChange={getCep} mask="99999-999" type="text" placeholder="00000-000" className={`input input-bordered w-full max-w-xs ${invalidCEP && 'input-error'}`} />
            </div>
             {invalidCEP && <small className="text-red-500 mt-3">CEP não encontrado</small>}
          </div>
          <div className="flex flex-col h-full justify-center w-full mt-3">
            <span className="text-gray-400">
              Veja a diarista mais proxima informando o seu cep.
            </span>
          </div>
           <SubFilter isOpen={showTimes} close={closeSubMenu}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:px-11 w-full overflow-y-scroll max-h-48  md:max-h-auto">
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-col w-full">
                  <label htmlFor="estado" className="font-bold">Estado</label>
                  <span id="estado">{estado}</span>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="cidade" className="font-bold">Cidade</label>
                  <span id="cidade">{cidade}</span>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="endereco" className="font-bold">Endereço</label>
                  <span id="endereco">{endereco}</span>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="bairro" className="font-bold">Bairro</label>
                  <span id="bairro">{bairro}</span>
                </div>
              </div>
              <div className="flex flex-col w-full gap-5">
                 <div className="flex flex-col w-full">
                  <label htmlFor="cep" className="font-bold">CEP</label>
                  <span id="cep">{cep}</span>
                 </div>
                 <div className="flex flex-col w-full">
                  <label htmlFor="numero"  className="font-bold">N°</label>
                  <InputMask id="numero" onChange={ () => null}  maxLength={15} type="text" placeholder="Informe o número" className="input input-bordered w-full max-w-xs" />
                 </div>
                 <div className="flex flex-col w-full">
                  <label htmlFor="complemento" className="font-bold">Complemento</label>
                  <InputMask id="complemento" onChange={ () => null}  maxLength={100} type="text" placeholder="Informe o complemento" className="input input-bordered w-full max-w-xs" />
                 </div>
              </div>
            </div>
          </SubFilter>
      </div>
     </TabTemplateMobile>
    );
}