import PropTypes from 'prop-types';
import React from 'react';
import Keys from './Keys';

export default function Footer({ input, setInput, handleSubmit }) {
  return <Keys input={input} setInput={setInput} handleSubmit={handleSubmit} />;
}

Footer.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
