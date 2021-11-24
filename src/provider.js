import React from 'react';
import PropTypes from 'prop-types';
import { ApiProvider } from './hook';

export default function Providers({ children }) {
  return (
    <ApiProvider>
      {children}
    </ApiProvider>
  );
}

Providers.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
