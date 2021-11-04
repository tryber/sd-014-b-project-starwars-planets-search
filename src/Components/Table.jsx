import React from "react";
import PlanetContext from "../Context/PlanetContext";

function Table () {
  return (
  <PlanetContext.Consumer>
    { (value) => (
      <h1>{ `PlanetContext - Aqui deverá haver uma tabela listando os planetas: ${value.placeholder}` }</h1>
    ) }
  </PlanetContext.Consumer>
  )
}

export default Table;
