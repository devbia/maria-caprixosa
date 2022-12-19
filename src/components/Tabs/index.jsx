
import TabTemplate from "./TabTemplate";

import { TiPlus } from 'react-icons/ti';
import { TiMinus } from 'react-icons/ti';
import { useState } from "react";

import { CheckBox } from "../Form";

export const Services = ({services = []}) => {

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
     <TabTemplate title={"Serviços"} id={"teste"} subtitle={"Descrição dos serviços realizados nessa categoria selecionada"}>
      <div className="flex h-full flex-col py-2">
        <ul className="flex flex-col">
          {items.map((item, i)=> <li key={i}>{item}</li>)}
        </ul>
      </div>
     </TabTemplate>
    );
}


export const Periodo = ({ periods = []}) => {

  const [periodo, setPeriodo] = useState(1);
  const max = 3;

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

  return (
     <TabTemplate title={"Periodos"} id={"periodos"} subtitle={"Quantos dias na semana?"}>
      <div className="flex w-full py-2">
        <div className="grid grid-cols-2 gap-24">
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
                  <div className="flex w-full gap-5 mb-2">
                    <div className="flex gap-3">
                      <input type="checkbox" className="checkbox" />
                      Manhã
                    </div>
                    <div className="flex gap-3">
                      <input type="checkbox" className="checkbox" />
                      Tarde
                    </div>
                  </div>
                  <div className="span font-bold">
                    Quais os horários?
                  </div>
                  <a className="span text-gray-500 font-bold cursor-pointer">
                    Clique e veja.
                  </a>
                </div>
               
            </div>
        </div>
      </div>
     </TabTemplate>
    );
}

export const LocationCity = ({ periods = []}) => {
  return (
     <TabTemplate title={"Moro em"} id={"location_city"} subtitle={"Qual o tipo da sua moradia?"}>
          <div className="flex flex-col justify-center h-full pt-8">
            <div className="flex justify-around mb-3">
              <div className="flex gap-3">
                <input type="checkbox" className="checkbox" />
                Apartamento Padrão
              </div>
              <div className="flex gap-3">
                <input type="checkbox" className="checkbox" />
                Casa
              </div>
              <div className="flex gap-3">
                <input type="checkbox" className="checkbox" />
                Outros
              </div>
            </div>
            <div className="flex">
              <span className="font-bold text-gray-500">
                Escolha uma opção.
              </span>
            </div>
        </div>
     </TabTemplate>
    );
}

export const Comodos = ({ comodos = []}) => {

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
       <div className="flex w-full gap-3 max-w-1/2 justify-between mb-3">
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
     <TabTemplate title={"Comodos"} id={"comodos"} subtitle={"Quantos comodos?"}>
      <div className="w-full flex-col h-full flex pt-8">
          <div className="grid grid-cols-2">
            <div className="flex flex-col w-1/2 gap-8">
              {inputQuantity(quartos, "Quarto", addQuarto, removeQuarto)}
              {inputQuantity(cozinha, "Cozinha", addCozinha, removeCozinha)}
              <CheckBox label="Com área externa" checkboxClass="checkbox-primary" labelClass="font-bold"/>
              <CheckBox label="Outros" checkboxClass="checkbox-primary" labelClass="font-bold"/>
            </div>
            <div className="flex flex-col w-1/2 gap-8">
              {inputQuantity(banheiro, "Banheiro", addBanheiro, removeBanheiro)}
              <CheckBox label="Sala e cozinha (Integrada)" checkboxClass="checkbox-primary" labelClass="font-bold"/>
              <CheckBox label="Sem área externa" checkboxClass="checkbox-primary" labelClass="font-bold"/>
            </div>
          </div>
      </div>
     </TabTemplate>
    );
}

export const Location = ({ location = []}) => {
  return (
     <TabTemplate title={"Localização"} id={"location"} subtitle={"Qual local para presta o serviço?"}>
      <div className="flex justify-between py-8">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold text-lg">Informe seu cep:</span>
            </label>
            <input type="text" placeholder="00000-000" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="flex flex-col h-full justify-center w-56">
            <span className="text-gray-400">
              Veja a diarista mais proxima informando o seu cep.
            </span>
          </div>
      </div>
     </TabTemplate>
    );
}