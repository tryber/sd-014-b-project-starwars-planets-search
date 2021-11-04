import React from 'react';
import Table from './Table';
import DataProvider from '../context/DataProvider';
import Filters from './Filters';

const Content = () => (
  <DataProvider>
    <Filters />
    <Table />
  </DataProvider>
);

export default Content;
