import PropTypes from 'prop-types';
import React from 'react';
import Keypad from './Keypad';

export default function Keyboard({ input, setInput, handleSubmit }) {
  return (
    <Keypad input={input} setInput={setInput} handleSubmit={handleSubmit} />
  );
}

Keyboard.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
