import PropTypes from 'prop-types';
import React from 'react';
import Keyboard from './Keyboard';
import Numpad from './Numpad';

export default function Footer({ input, setInput, handleSubmit }) {
  return (
    <Numpad input={input} setInput={setInput} handleSubmit={handleSubmit} />
  );
}

Footer.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
