import React, { useContext, useEffect, useState } from 'react';

import { MyContext } from '../Context/MyContext';

import Table from '../Components/Table';
import Form from '../Components/Form';

import '../Styles/home.css';

function Home() {
  const [dataFilter, setDataFilter] = useState([]);

  const { data } = useContext(MyContext);

  useEffect(() => {
    setDataFilter(data);
  }, [data]);

  const filterByName = (name) => {
    setDataFilter(data.filter((planet) => planet.name.includes(name)));
  };

  const filterComparasionNumeric = (
    textColumnSelect, textComparisonSelect, valueFilter,
  ) => {
    if (textComparisonSelect === 'maior que') {
      return setDataFilter(
        data.filter((planet) => Number(planet[textColumnSelect]) > Number(valueFilter)),
      );
    }

    if (textComparisonSelect === 'menor que') {
      return setDataFilter(
        data.filter((planet) => Number(planet[textColumnSelect]) < Number(valueFilter)),
      );
    }

    if (textComparisonSelect === 'igual a') {
      return setDataFilter(
        data.filter((planet) => Number(planet[textColumnSelect]) === Number(valueFilter)),
      );
    }
  };

  return (
    <div className="home-page">
      <h1>Projeto Star Wars</h1>
      <section className="form-container">

        <Form
          filterByName={ filterByName }
          filterComparasionNumeric={ filterComparasionNumeric }
        />

      </section>
      { data.length ? <Table data={ dataFilter } /> : <h2>...carregando</h2> }
    </div>
  );
}

export default Home;
