import React from 'react';
import PropTypes from 'prop-types';
import Keys from './Keys';

export default function Keyboard({ input, setInput, handleSubmit }) {
  const onClick = (value) => {
    console.log(value);
    if (value.target.name === 'ENTER') {
      handleSubmit();
    } else if (value.target.name === 'DEL') {
      setInput(input.slice(0, -1));
    } else setInput((prev) => prev + value.target.name);
    console.log(input);
  };

  return (
    <div id="keyboard">
      <div className="flex justify-center mb-1">
        <Keys value="Q" onClick={onClick} />
        <Keys value="W" onClick={onClick} />
        <Keys value="E" onClick={onClick} />
        <Keys value="R" onClick={onClick} />
        <Keys value="T" onClick={onClick} />
        <Keys value="Y" onClick={onClick} />
        <Keys value="U" onClick={onClick} />
        <Keys value="I" onClick={onClick} />
        <Keys value="O" onClick={onClick} />
        <Keys value="P" onClick={onClick} />
      </div>
      <div className="flex justify-center mb-1">
        <Keys value="A" onClick={onClick} />
        <Keys value="S" onClick={onClick} />
        <Keys value="D" onClick={onClick} />
        <Keys value="F" onClick={onClick} />
        <Keys value="G" onClick={onClick} />
        <Keys value="H" onClick={onClick} />
        <Keys value="J" onClick={onClick} />
        <Keys value="K" onClick={onClick} />
        <Keys value="L" onClick={onClick} />
      </div>
      <div className="flex justify-center mb-5">
        <Keys
          value="ENTER"
          onClick={onClick}
          style={{ width: `70px`, height: '58px' }}
          handleSubmit={handleSubmit}
        />
        <Keys value="Z" onClick={onClick} />
        <Keys value="X" onClick={onClick} />
        <Keys value="C" onClick={onClick} />
        <Keys value="V" onClick={onClick} />
        <Keys value="B" onClick={onClick} />
        <Keys value="N" onClick={onClick} />
        <Keys value="M" onClick={onClick} />
        <Keys
          value="DEL"
          onClick={onClick}
          style={{ width: `70px`, height: '58px' }}
        />
      </div>
    </div>
  );
}

Keyboard.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
