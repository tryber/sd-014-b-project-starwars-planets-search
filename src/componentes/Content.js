import React from 'react';
import Table from './Table';
import DataProvider from '../context/DataProvider';
import Header from './Header';

const Content = () => (
  <DataProvider>
    <Header />
    <Table />
  </DataProvider>
);

export default Content;
