import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Input from './Input';

function Form({ filterByName }) {
  const [textSearch, setTextSearch] = useState('');

  const handleFilterByName = ({ target }) => {
    setTextSearch(target.value);
  };

  useEffect(() => {
    filterByName(textSearch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textSearch]);

  return (
    <form className="form">
      <Input
        className="btn-search"
        inputName="search"
        onChange={ (event) => handleFilterByName(event) }
        placeholder="Ex: Tatoonie"
        type="text"
        value={ textSearch }
      >
        Faça sua pesquisa:
      </Input>
    </form>
  );
}

Form.propTypes = {
  filterByName: PropTypes.func.isRequired,
};

export default Form;
