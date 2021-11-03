import React, { useContext } from 'react';

import { MyContext } from '../Context/MyContext';

import Table from '../Components/Table';

import '../Styles/home.css';

function Home() {
  const { data } = useContext(MyContext);
  return (
    <div className="home-page">
      <section className="form-container">
        Formulario
      </section>
      { data.length ? <Table /> : <h2>...carregando</h2> }
    </div>
  );
}

export default Home;
