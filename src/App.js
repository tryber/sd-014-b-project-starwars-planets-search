import React, { useState, useEffect } from 'react';
import './App.css';
import Context from './context/context';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const api = async () => {
    const response = await fetch(url);
    const obj = await response.json();
    const result = obj.results;
    setData(result);
    return result;
  };

  const contextValue = {
    data,
    setData,
  };
  // ajuda do Diogo Fiuza
  // consultei também o site https://pt-br.reactjs.org/docs/hooks-reference.html
  useEffect(() => {
    api();
  }, []);

  return (
    <Context.Provider value={ contextValue }>
      <Table />
    </Context.Provider>
  );
}

export default App;
