import { createContext, useState } from "react";


export const DataFilterContext = createContext({});



// Arquivo que contém os dados do filtro usado na busca.

export default function DataFilterProvider( {children}){

  const [periodo, setPeriodo] = useState("manha");
  const [tipoCaprixosa, setTipoCaprixosa] = useState(null); // FAXINEIRA | DIARISTA | DOMÉSTICA
  const [vezesPorSemana, setVezesPorSemana] = useState(1);
  const [horarioPeriodo, setHorarioPeriodo] = useState("manha"); // MANHÃ, TARDE, A COMBINAR


  const [tipoMoradia, setTipoMoradia] = useState("apartamento_padrao"); // apartamento_padrao | casa | outros

  const [qtdQuartos, setQtdQuartos] = useState(1);
  const [qtdBanheiro, setQtdBanheiro] = useState(1);
  const [qtdCozinha, setQtdCozinha] = useState(1);
  const [temSalaCozinhaIntegrada, setTemSalaCozinhaIntegrada] = useState(false);
  const [filterCep, setFilterCEP] = useState(false);

  function filtroValido(){

    return  tipoCaprixosa != null;
  }

  function filterDados(){

    return {
      periodo,
      vezesPorSemana,
      horarioPeriodo,
      tipoMoradia,
      qtdQuartos,
      qtdBanheiro,
      qtdCozinha,
      temSalaCozinhaIntegrada,
      tipoCaprixosa
    };
  }
  return (
    <DataFilterContext.Provider value={{
      setPeriodo,
      setVezesPorSemana,
      setHorarioPeriodo,
      setTipoMoradia,
      setQtdQuartos,
      setQtdBanheiro,
      setQtdCozinha,
      setTemSalaCozinhaIntegrada,
      setFilterCEP,
      filtroValido,
      filterDados, 
      setTipoCaprixosa,
      tipoCaprixosa
    }}>
       {children}
    </DataFilterContext.Provider>
  );
}