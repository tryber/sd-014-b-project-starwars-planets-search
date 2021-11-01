/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import Table from '../components/Table';

function Main() {
  const { planetsList, getPlanets } = useContext(MyContext);
  // console.log(data);

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <Table data={ planetsList } />
  );
}

export default Main;
