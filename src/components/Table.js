import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

function Table() {
  const {
    data,
    name,
    comparison,
    column,
    value,
    showFilter,
    copyData,
    setCopyData,
    filters,
  } = useContext(MyContext);

  const [fetchTrue, setFetchTrue] = useState(false);

  useEffect(() => {
    if (data.length > 0) {
      setFetchTrue(true);
      setCopyData([...data]);
      console.log('setdata');
    }
  }, [data]);

  useEffect(() => {
    if (comparison === 'maior que') {
      const newArray = copyData.filter((obj) => Number(obj[column]) > Number(value));
      setCopyData(newArray);
    }
    if (comparison === 'menor que') {
      const newArray = copyData.filter((obj) => Number(obj[column]) < Number(value));
      setCopyData(newArray);
    }
    if (comparison === 'igual a') {
      const newArray = copyData.filter((obj) => Number(obj[column]) === Number(value));
      setCopyData(newArray);
    }
  }, [filters]);

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
            showFilter && copyData.map((obj, index) => (
              <TableBody key={ index } obj={ obj } />))
          }
        </tbody>
      </table>
    </div>
  );
}
export default Table;
