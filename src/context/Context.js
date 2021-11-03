import { createContext } from 'react';

const initialState = {
  filters:
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    },
};

const AppContext = createContext(initialState);

export default AppContext;
