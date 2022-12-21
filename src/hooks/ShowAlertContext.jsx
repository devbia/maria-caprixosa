

import React, { createContext, useState } from 'react';

export const ShowAlertContext = createContext({
  show: false
});

export default function ShowAlertProvider({children}){

  const [alertOpen, setAlertOpen] = useState(false);
  const [closeModalState, setCloseModal] = useState(false);
  
  return (
    <ShowAlertContext.Provider value={{
      alertOpen, setAlertOpen,
      closeModalState, setCloseModal
    }}>
      {children}
    </ShowAlertContext.Provider>
  );
};