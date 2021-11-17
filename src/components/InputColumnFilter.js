import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';
import SetRemoveFilterNumericValues from '../Hooks/SetRemoveFilterNumericValues';

function InputColumnFilter() {
  const {
    data,
    setFilterByNumericValues,
    setShowFilter,
    objKeys,
    setObjKeys,
    setCopyData,
    filters,
    setFilters,
  } = useContext(MyContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [inputValue, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const handleClick = () => {
    setFilterByNumericValues(column, comparison, inputValue);
    setShowFilter(true);
    setOptions([...options, column]);
    const newColumn = objKeys.filter((optionColumn) => optionColumn !== column);
    setObjKeys(newColumn);
  };
  const handleChangeNumericValues = ({ target }, callback) => {
    const { value } = target;
    callback(value);
  };

  const handleCloseOption = (params) => {
    SetRemoveFilterNumericValues(params, filters, setFilters);
    setOptions(options.filter((option) => option !== params));
    setObjKeys([...objKeys, params]);
    setCopyData([...data]);
  };
  return (
    <>
      <form>
        <label htmlFor="column">
          <select
            data-testid="column-filter"
            name="column"
            id="column"
            onChange={ (e) => handleChangeNumericValues(e, setColumn) }
          >
            {
              objKeys.map((optionColumn, index) => (
                <option
                  key={ index }
                  name="column"
                  value={ optionColumn }
                >
                  {optionColumn}
                </option>))
            }
          </select>
        </label>
        <label htmlFor="comparison">
          <select
            data-testid="comparison-filter"
            name="comparison"
            id="comparison"
            onChange={ (e) => handleChangeNumericValues(e, setComparison) }
          >
            <option name="comparison" value="maior que">maior que</option>
            <option name="comparison" value="menor que">menor que</option>
            <option name="comparison" value="igual a">igual a</option>
          </select>
        </label>
        <input
          data-testid="value-filter"
          name="value"
          type="number"
          onChange={ (e) => handleChangeNumericValues(e, setValue) }
        />
        <button
          onClick={ handleClick }
          data-testid="button-filter"
          type="button"
        >
          Enviar
        </button>
      </form>
      <div>
        {
          options.map((option, index) => (
            <div
              data-testid="filter"
              key={ index }
            >
              {option}
              <button
                onClick={ () => handleCloseOption(option) }
                type="button"
              >
                X
              </button>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default InputColumnFilter;
