import React from 'react';
import './footer.css';
import PropTypes from 'prop-types';

export default function Keypad({ input, setInput, handleSubmit, gameWord }) {
  const onClick = (value) => {
    if (value.target.value === 'ENTER') {
      handleSubmit();
    } else if (value.target.value === 'DEL') {
      setInput((prev) => {
        const tempArray = [...prev];
        tempArray.pop();
        return tempArray;
      });
    } else if (input.length < gameWord.length) {
      setInput((prev) => [...prev, value.target.value]);
    }
  };

  return (
    <div id="keyboard">
      {console.log(input)}
      <div className="flex justify-center mb-1">
        <button
          type="button"
          value="Q"
          className="buttonLetter"
          onClick={onClick}
        >
          Q
        </button>
        <button
          type="button"
          value="W"
          className="buttonLetter"
          onClick={onClick}
        >
          W
        </button>
        <button
          type="button"
          value="E"
          className="buttonLetter"
          onClick={onClick}
        >
          E
        </button>
        <button
          type="button"
          value="R"
          className="buttonLetter"
          onClick={onClick}
        >
          R
        </button>
        <button
          type="button"
          value="T"
          className="buttonLetter"
          onClick={onClick}
        >
          T
        </button>
        <button
          type="button"
          value="Y"
          className="buttonLetter"
          onClick={onClick}
        >
          Y
        </button>
        <button
          type="button"
          value="U"
          className="buttonLetter"
          onClick={onClick}
        >
          U
        </button>
        <button
          type="button"
          value="I"
          className="buttonLetter"
          onClick={onClick}
        >
          I
        </button>
        <button
          type="button"
          value="O"
          className="buttonLetter"
          onClick={onClick}
        >
          O
        </button>
        <button
          type="button"
          value="P"
          className="buttonLetter"
          onClick={onClick}
        >
          P
        </button>
      </div>
      <div className="flex justify-center mb-1">
        <button
          type="button"
          value="A"
          className="buttonLetter"
          onClick={onClick}
        >
          A
        </button>
        <button
          type="button"
          value="S"
          className="buttonLetter"
          onClick={onClick}
        >
          S
        </button>
        <button
          type="button"
          value="D"
          className="buttonLetter"
          onClick={onClick}
        >
          D
        </button>
        <button
          type="button"
          value="F"
          className="buttonLetter"
          onClick={onClick}
        >
          F
        </button>
        <button
          type="button"
          value="G"
          className="buttonLetter"
          onClick={onClick}
        >
          G
        </button>
        <button
          type="button"
          value="H"
          className="buttonLetter"
          onClick={onClick}
        >
          H
        </button>
        <button
          type="button"
          value="J"
          className="buttonLetter"
          onClick={onClick}
        >
          J
        </button>
        <button
          type="button"
          value="K"
          className="buttonLetter"
          onClick={onClick}
        >
          K
        </button>
        <button
          type="button"
          value="L"
          className="buttonLetter"
          onClick={onClick}
        >
          L
        </button>
      </div>
      <div className="flex justify-center mb-5">
        <button
          type="button"
          value="ENTER"
          className="buttonLetter"
          onClick={onClick}
          style={{ width: `70px`, height: '58px' }}
        >
          ENTER
        </button>
        <button
          type="button"
          value="Z"
          className="buttonLetter"
          onClick={onClick}
        >
          Z
        </button>
        <button
          type="button"
          value="X"
          className="buttonLetter"
          onClick={onClick}
        >
          X
        </button>
        <button
          type="button"
          value="C"
          className="buttonLetter"
          onClick={onClick}
        >
          C
        </button>
        <button
          type="button"
          value="V"
          className="buttonLetter"
          onClick={onClick}
        >
          V
        </button>
        <button
          type="button"
          value="B"
          className="buttonLetter"
          onClick={onClick}
        >
          B
        </button>
        <button
          type="button"
          value="N"
          className="buttonLetter"
          onClick={onClick}
        >
          N
        </button>
        <button
          type="button"
          value="M"
          className="buttonLetter"
          onClick={onClick}
        >
          M
        </button>
        <button
          type="button"
          value="DEL"
          className="buttonLetter"
          onClick={onClick}
          style={{ width: `70px`, height: '58px' }}
        >
          DEL
        </button>
      </div>
    </div>
  );
}

Keypad.propTypes = {
  input: PropTypes.array.isRequired,
  setInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  gameWord: PropTypes.string.isRequired,
};
