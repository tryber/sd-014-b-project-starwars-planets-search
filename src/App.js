import React, { useEffect, useState } from 'react';
import './App.css';
import Tabela from './Table';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchData = async () => {
      try {
        const response = await fetch(URL_API);
        const json = await response.json();
        setData(json.results);
      } catch (error) {
        setData(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Tabela state={ data } />
    </div>
  );
};

export default App;
