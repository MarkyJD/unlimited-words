import PropTypes from 'prop-types';
import React from 'react';
import Keyboard from './Keyboard';

export default function Footer({ input, setInput, handleSubmit }) {
  return (
    <Keyboard input={input} setInput={setInput} handleSubmit={handleSubmit} />
  );
}

Footer.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
