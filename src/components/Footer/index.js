import PropTypes from 'prop-types';
import React from 'react';
import Keys from './Keys';

export default function Footer({ input, setInput }) {
  return <Keys input={input} setInput={setInput} />;
}

Footer.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
};
