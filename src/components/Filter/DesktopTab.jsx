import TabTemplate from "./TabTemplate";
import InputMask from "react-input-mask";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { useContext, useState } from "react";

import { CheckBox } from "../Form";
import SubFilter from "./SubFilter";
import axios from "axios";
import { DataFilterContext } from "../../hooks/DataFilterContext";

export const Services = ({ services = [] }) => {
  const items = [
    "Varrição dos ambientes;",
    "Limpeza de pisos e paredes;",
    "Retirada de pó e outras sujeiras de móveis e cômodos;",
    "Limpeza de vidros (quando não oferece riscos à profissional);",
    "Limpeza de banheiro;",
    "Aspiração de cortinas e carpetes.",
    "Limpeza na cozinha.",
  ];

  return (
    <TabTemplate
      title={"Serviços"}
      id={"teste"}
      subtitle={"Descrição dos serviços realizados nessa categoria selecionada"}
    >
      <div className="flex h-full flex-col py-2">
        <ul className="flex flex-col">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </TabTemplate>
  );
};

export const Periodo = () => {
  const [periodo, setPeriodo] = useState(1);
  const [periodoDia, setPeriodoDia] = useState(null); // manha || tarde
  const [showTimes, setShowTimes] = useState(false); // manha || tarde
  const [horaDoDia, setHoraDoDia] = useState(null); // manha || tarde


  const { setPeriodoForm } = useContext(DataFilterContext);

  const add = () => {
    if (periodo < 3) setPeriodo(periodo + 1);
    else setPeriodo(3);
  };
  const remove = () => {
    if (periodo > 1) setPeriodo(periodo - 1);
    else setPeriodo(1);
  };
  const closeSubMenu = () => {
    setShowTimes(!showTimes);
  };

  function blockTime(
    title,
    start = "",
    end = "",
    selected = false,
    selecionarItem
  ) {
    return (
      <div className="flex justify-between w-full">
        <div
          onClick={selecionarItem}
          className={`flex flex-col w-full gap-3 w-[80%] rounded-lg p-3 hover:bg-[#d3c5d6] ${
            selected && "bg-[#d3c5d6]"
          }`}
        >
          <div className="flex w-full justify-center">
            <span className="font-bold self-center">{title}</span>
          </div>
          <div className="flex w-full justify-between">
            <span>{start}</span>
            <span>{end}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <TabTemplate
      title={"Periodos"}
      id={"periodos"}
      subtitle={"Quantos dias na semana?"}
    >
      <div className="flex w-full py-2 relative">
        <div className="grid grid-cols-2 gap-24 pt-8">
          <div className="flex flex-col  w-full h-full py-3 gap-3">
            <div className="flex justify-center w-full gap-3">
              <button
                className="btn btn-sm btn-ghost btn-outline"
                onClick={remove}
              >
                <TiMinus size={15} />
              </button>
              <span className="text-center flex flex-col justify-center h-full">
                {periodo < 9 ? `0${periodo}` : periodo}x por semana
              </span>
              <button
                className="btn btn-sm btn-ghost btn-outline"
                onClick={add}
              >
                <TiPlus size={15} />
              </button>
            </div>
            <div className="span text-gray-500 font-bold">
              Modalidade diarista no máximo 3 x por semana
            </div>
          </div>
          <div className="flex flex-col justify-end w-full h-full pt-3 gap-3">
            <div className="flex flex-col gap-2">
              <div className="flex w-full gap-5 mb-2 ">
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={periodoDia == "manha"}
                    onClick={(_) => setPeriodoDia("manha")}
                  />
                  Manhã
                </div>
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={periodoDia == "tarde"}
                    onClick={(_) => {
                      setPeriodoDia("tarde")
                    }}
                  />
                  Tarde
                </div>
              </div>
              <div className="span font-bold">Quais os horários?</div>
              <a
                onClick={() => setShowTimes(!showTimes)}
                className="span text-gray-500 font-bold cursor-pointer"
              >
                Clique e veja.
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-end w-full">
        <div className="flex relative">
          <SubFilter
            isOpen={showTimes}
            close={closeSubMenu}
            title="Os horários"
          >
            <div className="grid grid-cols-2">
              <div className="flex justify-between mt-3">
                {blockTime(
                  "Manhã",
                  "07:00",
                  "13:00",
                  horaDoDia == "manha",
                  () =>{
                    let hora = horaDoDia == "manha" ? null : 'manha';
                     setHoraDoDia(hora);
                     setPeriodoForm(hora);
                  }
                )}
                {blockTime(
                  "Tarde",
                  "13:00",
                  "18:00",
                  horaDoDia == "tarde",
                  () => {
                      let hora = horaDoDia == "tarde" ? null : 'tarde';
                     setHoraDoDia(hora);
                     setPeriodoForm(hora);
                  }
                )}
              </div>
              <div
                className={`flex h-full justify-cente rounded-lg hover:bg-[#d3c5d6] p-5 ${
                  horaDoDia == "combinar" && "bg-[#d3c5d6]"
                }`}
                onClick={(_) => setHoraDoDia("combinar")}
              >
                <span className="self-center">A combinar com a Diarista</span>
              </div>
            </div>
          </SubFilter>
        </div>
      </div>
    </TabTemplate>
  );
};

export const LocationCity = ({ periods = [] }) => {
  const [checked, setChecked] = useState(null);
  
  const { setTipoMoradia } = useContext(DataFilterContext);
  
  const changeItem = (item) => {
    setChecked(item);
    setTipoMoradia(item);
  };

  return (
    <TabTemplate
      title={"Moro em"}
      id={"location_city"}
      subtitle={"Qual o tipo da sua moradia?"}
    >
      <div className="flex flex-col justify-center h-full pt-8">
        <div className="flex justify-around mb-3">
          <div className="flex gap-3">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={checked == "apartamento_padrao"}
              onClick={(_) => changeItem("apartamento_padrao")}
            />
            Apartamento Padrão
          </div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={checked == "casa"}
              onClick={(_) => changeItem("casa")}
            />
            Casa
          </div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={checked == "outros"}
              onClick={(_) => changeItem("outros")}
            />
            Outros
          </div>
        </div>
        <div className="flex">
          <span className="font-bold text-gray-500">Escolha uma opção.</span>
        </div>
      </div>
    </TabTemplate>
  );
};

export const Comodos = ({ comodos = [] }) => {
  const [quartos, setQuartos] = useState(1);
  const [cozinha, setCozinha] = useState(1);
  const [banheiro, setBanheiro] = useState(1);

  const {tipoArea, setTipoArea, temSalaCozinhaIntegrada, setTemSalaCozinhaIntegrada} = useContext(DataFilterContext);

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
          <TiMinus size={15} />
        </button>
        <span className="text-center flex flex-col justify-center h-full font-bold">
          {value < 9 ? `0${value}` : value} {text}
        </span>
        <button className="btn btn-sm btn-ghost btn-outline" onClick={add}>
          <TiPlus size={15} />
        </button>
      </div>
    );
  };

  return (
    <TabTemplate title={"Comodos"} id={"comodos"} subtitle={"Quantos comodos?"}>
      <div className="w-full flex-col h-full flex pt-8">
        <div className="grid grid-cols-2">
          <div className="flex flex-col w-1/2 gap-8">
            {inputQuantity(quartos, "Quarto", addQuarto, removeQuarto)}
            {inputQuantity(cozinha, "Cozinha", addCozinha, removeCozinha)}
            <CheckBox
              label="Com área externa"
              checkboxClass="checkbox-primary"
              labelClass="font-bold"
               checked={tipoArea == 'com_externa' }
              onClick={()=>setTipoArea(tipoArea == 'com_externa' ? null : 'com_externa')}
            />
            <CheckBox
              label="Outros"
              checkboxClass="checkbox-primary"
              labelClass="font-bold"
              checked={tipoArea == 'outros' }
              onClick={()=>setTipoArea(tipoArea == 'outros' ? null : 'outros')}
            />
          </div>
          <div className="flex flex-col w-1/2 gap-8">
            {inputQuantity(banheiro, "Banheiro", addBanheiro, removeBanheiro)}
            <CheckBox
              label="Sala e cozinha (Integrada)"
              checkboxClass="checkbox-primary"
              labelClass="font-bold"
              checked={temSalaCozinhaIntegrada}
              onClick={() => {
                setTemSalaCozinhaIntegrada(temSalaCozinhaIntegrada ? null : true);
              }}
            />
            <CheckBox
              label="Sem área externa"
              checkboxClass="checkbox-primary"
              labelClass="font-bold"
              checked={tipoArea == 'sem_externa' }
              onClick={()=>setTipoArea(tipoArea == 'sem_externa' ? null : 'sem_externa')}
            />
          </div>
        </div>
      </div>
    </TabTemplate>
  );
};

export const Location = () => {
  const { setFilterCEP, filterCep, setNumCasa, numCasa} = useContext(DataFilterContext);

  const [showTimes, setShowTimes] = useState(false);
  const [invalidCEP, setInvalidCEP] = useState(false);
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const closeSubMenu = () => {
    setShowTimes(!showTimes);
  };

  const getCep = async (event) => {
    try {
      setInvalidCEP(false);
      let cepInput = event.target.value.replace(/[^0-9]/g, "");
      if (cepInput.length != 8) return;

      const { data } = await axios.get(
        `https://viacep.com.br/ws/${event.target.value}/json/`
      );

      if (data?.cep) {
        setEstado(data.uf);
        setCidade(data.localidade);
        setEndereco(data.logradouro);
        setBairro(data.bairro);
        setCep(data.cep);
        setShowTimes(true);
        setFilterCEP(data?.cep);
      } else {
        setFilterCEP(false);
        setInvalidCEP(true);
        setShowTimes(false);
      }
    } catch (error) {
      setInvalidCEP(true);
      setShowTimes(false);
    }
  };

  return (
    <TabTemplate
      title={"Localização"}
      id={"location"}
      subtitle={"Qual local para presta o serviço?"}
    >
      <div className="flex justify-between py-8">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-bold text-lg">
              Informe seu cep:
            </span>
          </label>
          <InputMask
            onChange={getCep}
            mask="99999-999"
            type="text"
            placeholder="00000-000"
            className={`input input-bordered w-full max-w-xs ${
              invalidCEP && "input-error"
            }`}
          />
          {invalidCEP && (
            <small className="text-red-500">CEP não encontrado</small>
          )}
        </div>
        <div className="flex flex-col h-full justify-center w-56">
          <span className="text-gray-400">
            Veja a diarista mais proxima informando o seu cep.
          </span>
        </div>
      </div>
      <div className="flex flex-col self-end w-full">
        <div className="flex relative">
          <SubFilter isOpen={showTimes} close={closeSubMenu}>
            <div className="grid grid-cols-2">
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-col w-full">
                  <label htmlFor="estado" className="font-bold">
                    Estado
                  </label>
                  <span id="estado">{estado}</span>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="cidade" className="font-bold">
                    Cidade
                  </label>
                  <span id="cidade">{cidade}</span>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="endereco" className="font-bold">
                    Endereço
                  </label>
                  <span id="endereco">{endereco}</span>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="bairro" className="font-bold">
                    Bairro
                  </label>
                  <span id="bairro">{bairro}</span>
                </div>
              </div>
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-col w-full">
                  <label htmlFor="cep" className="font-bold">
                    CEP
                  </label>
                  <span id="cep">{cep}</span>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="numero" className="font-bold">
                    N°
                  </label>
                  <InputMask
                    id="numero"
                    onChange={(ev) => setNumCasa(ev.target.value)}
                    maxLength={15}
                    value={numCasa}
                    type="text"
                    placeholder="Informe o número"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="complemento" className="font-bold">
                    Complemento
                  </label>
                  <InputMask
                    id="complemento"
                    onChange={() => null}
                    maxLength={100}
                    type="text"
                    placeholder="Informe o complemento"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>
            </div>
          </SubFilter>
        </div>
      </div>
    </TabTemplate>
  );
};
