import React, { createContext, useState } from 'react';

export const FilterContext = createContext({
  itemOpen: null
});

export default function FilterContextProvider({children}){

  const [itemOpen, setItemOpen] = useState(null);

  return (
    <FilterContext.Provider value={{
      itemOpen, 
      setItemOpen 
    }}>
      {children}
    </FilterContext.Provider>
  );
};