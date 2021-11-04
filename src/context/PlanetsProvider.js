import React from 'react';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  return(
    <PlanetsContext.Provider>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
