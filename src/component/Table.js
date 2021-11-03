import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import TableBody from './TableBody';
import TableHeader from './TabeHeader';
import HandleFetchData from '../Hooks/HandleFetchData';
import HandleFilterByNumericValues from '../Hooks/HandleFilterByNumericValues';

function Table() {
  const {
    filterName,
    showFilter,
  } = useContext(MyContext);

  const vamosver = HandleFetchData();
  const { data, fetchTrue, dataInOrder } = vamosver;
  const vamosver2 = HandleFilterByNumericValues();
  const { copyData } = vamosver2;

  return (
    <main>
      <table border="1">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          { !filterName && !showFilter && fetchTrue && dataInOrder.map((obj, index) => (
            <TableBody key={ index } obj={ obj } />)) }
          { filterName && !showFilter
            && data.filter((obj) => obj.name.includes(filterName)).map((obj, index) => (
              <TableBody key={ index } obj={ obj } />)) }
          { showFilter && copyData.map((obj, index) => (
            <TableBody key={ index } obj={ obj } />)) }
        </tbody>
      </table>
    </main>
  );
}

export default Table;
