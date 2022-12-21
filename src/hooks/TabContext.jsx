import React, { createContext, useState } from 'react';

export const TabContext = createContext({});

export default function TabContextProvider({children}){

  const [tabOpen, setTabOpen] = useState(null);

  return (
    <TabContext.Provider value={{
      tabOpen, 
      setTabOpen 
    }}>
      {children}
    </TabContext.Provider>
  );
};