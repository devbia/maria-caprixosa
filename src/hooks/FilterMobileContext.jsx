import React, { createContext, useState } from 'react';

export const FilterMobileContext = createContext({
  filterMobileOpen: false
});

export default function FilterMobileProvider({children}){

  const [filterMobileOpen, setFilterMobileOpen] = useState(false);
  const [itemOpen, setItemOpen] = useState("services");

  return (
    <FilterMobileContext.Provider value={{
      filterMobileOpen, 
      setFilterMobileOpen,
      itemOpen, 
      setItemOpen
    }}>
      {children}
    </FilterMobileContext.Provider>
  );
};