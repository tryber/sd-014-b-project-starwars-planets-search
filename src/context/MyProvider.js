import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import { getPlanets } from '../services';

export default function MyProvider({ children }) {
  // aqui colocamos toda a lógica necessária para obtenção dos dados que vamos prover. Ex: requisições a APIs (fetch), Gerenciamento de estado (useState), etc

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // usar o userEfets e fazer a lógica async da requisição
  useEffect(() => {
    (async () => {
      // setar isLoading para true
      setIsLoading(true);
      // salvar os dados no estado
      setData(await getPlanets());
      // setar o isLoading para false
      setIsLoading(true);
    })();
  }, []);

  return (
    <MyContext.Provider value={ { data, isLoading } }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
