import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ input, setInput, handleSubmit }) => (
  <button className="buttonLetter" style={buttonStyle} onClick={onClick}>
    {value}
  </button>
);

const buttonStyle = {
  width: '43px',
  height: '58px',
};
const onClick = (value) => {
  if (value.target.value === 'ENTER') {
    handleSubmit();
  } else if (value.target.value === 'DEL') {
    setInput(input.slice(0, -1));
  } else setInput((prev) => prev + value.target.value);
  console.log(input);
};

return (
  <div>
    <Button />
  </div>
);

Button.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
