import React, { useEffect, useContext } from 'react';
import DataContext from '../context/DataContext';

export default function Table() {
  const { data } = useContext(DataContext);
  console.log(data)
  return (
    <div>
      
    </div>
  )
}
