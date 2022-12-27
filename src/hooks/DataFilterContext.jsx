import { createContext, useState } from "react";


export const DataFilterContext = createContext({});



// Arquivo que contém os dados do filtro usado na busca.

export default function DataFilterProvider( {children}){

  const [periodo, setPeriodoForm] = useState(null);
  const [numCasa, setNumCasa] = useState(null);
  const [tipoCaprixosa, setTipoCaprixosa] = useState(null); // FAXINEIRA | DIARISTA | DOMÉSTICA
  const [vezesPorSemana, setVezesPorSemana] = useState(1);
  const [horarioPeriodo, setHorarioPeriodo] = useState(null); // MANHÃ, TARDE, A COMBINAR


  const [tipoMoradia, setTipoMoradia] = useState(null); // apartamento_padrao | casa | outros
  const [tipoArea, setTipoArea] = useState(null); // apartamento_padrao | casa | outros

  const [qtdQuartos, setQtdQuartos] = useState(1);
  const [qtdBanheiro, setQtdBanheiro] = useState(1);
  const [qtdCozinha, setQtdCozinha] = useState(1);
  const [temSalaCozinhaIntegrada, setTemSalaCozinhaIntegrada] = useState(null);
  const [filterCep, setFilterCEP] = useState(false);



  function filtroValido(){
    console.log( (tipoCaprixosa != null) );
    console.log(  (periodo != null));
    console.log(((temSalaCozinhaIntegrada != null) || (tipoArea != null)) );
    console.log(   ((numCasa != null) && (filterCep !=null)));
    return  (tipoCaprixosa != null) &&
            (periodo != null) && 
            ((temSalaCozinhaIntegrada != null) || (tipoArea != null)) && 
            ((numCasa != null) && (filterCep !=null));
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
      setPeriodoForm,
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
      setTipoArea,
      setNumCasa,
      numCasa,
      tipoCaprixosa,
      tipoArea,
      temSalaCozinhaIntegrada,
      filterCep,
      setTemSalaCozinhaIntegrada
    }}>
       {children}
    </DataFilterContext.Provider>
  );
}