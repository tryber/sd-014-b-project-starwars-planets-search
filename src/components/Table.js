import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

function Table() {
  const { data, name, comparison, column, value, showFilter } = useContext(MyContext);
  const [fetchTrue, setFetchTrue] = useState(false);

  useEffect(() => {
    if (data.length > 0) setFetchTrue(true);
  }, [data]);

  const filterDataNumbers = () => {
    if (comparison === 'maior que') {
      return data.filter((obj) => Number(obj[column]) > Number(value));
    }
    if (comparison === 'menor que') {
      return data.filter((obj) => Number(obj[column]) < Number(value));
    }
    if (comparison === 'igual a') {
      return data.filter((obj) => Number(obj[column]) === Number(value));
    }
    return [];
  };

  return (
    <div>
      <table border="1">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {
            !name && !showFilter && fetchTrue && data.map((obj, index) => (
              <TableBody key={ index } obj={ obj } />))
          }
          {
            name && !showFilter
            && data.filter((obj) => obj.name.includes(name)).map((obj, index) => (
              <TableBody key={ index } obj={ obj } />))
          }
          {
            filterDataNumbers().map((obj, index) => (
              <TableBody key={ index } obj={ obj } />))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
