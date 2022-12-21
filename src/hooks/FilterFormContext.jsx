import { createContext, useState } from "react";


export const FilterFormContext = createContext({});


export default function FilterFormProvider({children}){

  const [checkSelected, setCheckSelected] = useState(null);
  const [choosedOption, setChoosedOption] = useState("diarista");


  return (
    <FilterFormContext.Provider value={{
      checkSelected, 
      setCheckSelected,
      choosedOption, 
      setChoosedOption
    }}>
      {children}
    </FilterFormContext.Provider>
  );
}