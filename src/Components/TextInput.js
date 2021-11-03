import React from 'react';
import PropTypes from 'prop-types';

// const onChange = ({ target: { value } }) => {
//   console.log(value);
//   const INITIAL_STATE = {
//     filters: {
//       filterByName: {
//         name: 'Tatoo',
//       },
//     },
//   };
//   const { data, setData } = useData();
//   const filterData = data.filter((planet) => planet.name === value);
//   setData(filterData);
// };
const TextInput = ({ testId }) => (
  <input type="text" data-testid={ testId } />
);
TextInput.propTypes = {
  testId: PropTypes.string.isRequired,
};
export default TextInput;
