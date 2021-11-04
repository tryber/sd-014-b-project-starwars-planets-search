import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Loading from '../components/Loading';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';

function Site() {
  const { data } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  // DidUpdate - espera vir o resultado da API e seta o loading pra false
  useEffect(() => {
    if (data.length) {
      setLoading(false);
    }
  }, [data]);

  if (!loading) {
    return (
      <main>
        <Header />
        <SearchBar />
        <Table />
      </main>
    );
  }
  return (
    <Loading />
  );
}

export default Site;
