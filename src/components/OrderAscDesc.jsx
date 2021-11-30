// import React, { useState } from 'react';

// export default function OrderAscDesc({ column, sort }) {
//   const { funcAscDesc } = useContext(PlanetsContext);
//   const [orderColumn, setOrderColumn] = useState();
//   const [orderSort, setOrderSort] = useState();

//   const handleFilterColumn = (column) => {
//     setOrderColumn(column);
//     funcAscDesc(orderColumn);
//     const columnFilter = thePlanets.filter(({ name: nameValue }) => (
//       nameValue.toLowerCase() === orderColumn
//     ));
//     setPlanetsFilter(searchInputFilter);
//   };

//   const handleFilterSort = (sort) => {
//     setOrderSort(sort);
//     funcAscDesc(orderColumn, orderSort);
//     const sortFilter = thePlanets.filter(({ name: nameValue }) => (
//       nameValue.toLowerCase().includes(value.toLowerCase())
//     ));
//     setPlanetsFilter(searchInputFilter);
//   }

//   return (
//     <select name="" id=""></select>
//       onClick={ ({ target: { value } }) => handleFilter(value) }
//   );
// }
