import React from 'react';
import './footer.css';
import PropTypes from 'prop-types';
import Keys from './Keys';

export default function Numpad({ input, setInput, handleSubmit }) {
  const onClick = (value) => {
    console.log(value);
    if (value.target.value === 'ENTER') {
      handleSubmit();
    } else if (value.target.value === 'DEL') {
      setInput(input.slice(0, -1));
    } else setInput((prev) => prev + value.target.value);
    console.log(input);
  };

  return (
    <div id="numpad">
      <div className="flex justify-center mb-1">
        <Keys value="7" onClick={onClick} />
        <Keys value="8" onClick={onClick} />
        <Keys value="9" onClick={onClick} />
      </div>
      <div className="flex justify-center mb-1">
        <Keys value="4" onClick={onClick} />
        <Keys value="5" onClick={onClick} />
        <Keys value="6" onClick={onClick} />
      </div>
      <div className="flex justify-center mb-1">
        <Keys value="1" onClick={onClick} />
        <Keys value="2" onClick={onClick} />
        <Keys value="3" onClick={onClick} />
      </div>
      <div className="flex justify-center mb-5">
        <Keys value="ENTER" onClick={onClick} />
        <Keys value="0" onClick={onClick} />
        <Keys value="DEL" onClick={onClick} />
      </div>
    </div>
  );
}

Numpad.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
