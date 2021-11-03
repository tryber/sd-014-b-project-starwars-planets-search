import { createContext } from 'react';

// Retirado de: https://medium.com/@dai_shi/a-thought-on-react-context-default-value-fb3283cb5788#:~:text=When%20you%20create%20a%20context,in%20isolation%20without%20wrapping%20them.
const warningObject = {
  get foo() {
    throw new Error('You probably forgot to put <MyProvider>.');
  },
};

const Context = createContext(warningObject);

export default Context;
