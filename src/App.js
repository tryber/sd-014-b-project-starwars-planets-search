import React from 'react';
import './App.css';
import Header from './components/Header';
import NumberSearch from './components/NumberSearch';
import Search from './components/Search';
import Table from './components/Table';
import Provider from './context/MyProvider';

function App() {
  return (
    <Filter
    <Provider>
      <div>
        <Header />
        <Search />
        <NumberSearch />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
