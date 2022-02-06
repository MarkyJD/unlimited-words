import PropTypes from 'prop-types';
import React from 'react';
import Keypad from './Keypad';

export default function Keyboard({ input, setInput, handleSubmit, gameWord }) {
  return (
    <Keypad
      input={input}
      setInput={setInput}
      handleSubmit={handleSubmit}
      gameWord={gameWord}
    />
  );
}

Keyboard.propTypes = {
  input: PropTypes.array.isRequired,
  setInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  gameWord: PropTypes.string.isRequired,
};
