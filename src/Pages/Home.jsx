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
      const filterBiggerThen = data.filter((planet) => (
        Number(planet[textColumnSelect]) > Number(valueFilter)
      ));
      return setDataFilter(filterBiggerThen);
    }

    if (textComparisonSelect === 'menor que') {
      const filterLessThan = data.filter((planet) => (
        Number(planet[textColumnSelect]) < Number(valueFilter)
      ));
      return setDataFilter(filterLessThan);
    }

    if (textComparisonSelect === 'igual a') {
      const filterEqualTo = data.filter((planet) => (
        Number(planet[textColumnSelect]) === Number(valueFilter)
      ));
      return setDataFilter(filterEqualTo);
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
