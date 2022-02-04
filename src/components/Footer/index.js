import PropTypes from 'prop-types';
import React from 'react';
import './footer.css';

export default function Footer({ input }) {
  const onClick = (value) => {
    console.log(value);
  };

  // const buttonStyle =
  //   'flex items-center justify-center rounded-2xl mx-0.5 text-xs font-bold cursor-pointer select-none bg-gray-300 dark:text-black hover:bg-purple-500';

  return (
    <div id="keyboard">
      <div className="flex justify-center mb-1">
        <button type="button" value="Q" onClick={onClick}>
          Q
        </button>
        <button type="button" className="buttonLetter ">
          W
        </button>
        <button type="button">E</button>
        <button type="button">R</button>
        <button type="button">T</button>
        <button type="button">Y</button>
        <button type="button">U</button>
        <button type="button">I</button>
        <button type="button">O</button>
        <button type="button">P</button>
      </div>
      <div className="flex justify-center mb-1">
        <button type="button">A</button>
        <button type="button">S</button>
        <button type="button">D</button>
        <button type="button">F</button>
        <button type="button">G</button>
        <button type="button">H</button>
        <button type="button">J</button>
        <button type="button">K</button>
        <button type="button">L</button>
      </div>
      <div className="flex justify-center mb-3">
        <button type="button" style={{ width: `70px`, height: '58px' }}>
          ENTER
        </button>
        <button type="button">Z</button>
        <button type="button">X</button>
        <button type="button">C</button>
        <button type="button">V</button>
        <button type="button">B</button>
        <button type="button">N</button>
        <button type="button">M</button>
        <button type="button" style={{ width: `70px`, height: '58px' }}>
          DEL
        </button>
      </div>
    </div>
  );
}

Footer.propTypes = {
  input: PropTypes.string.isRequired,
};
