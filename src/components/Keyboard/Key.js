import React from 'react';
import PropTypes from 'prop-types';

export default function Key({ value, onClick, status }) {
  let classes = '';

  if (status === 'correct') {
    classes = ' correct ';
  } else if (status === 'present') {
    classes = ' present ';
  } else if (status === 'absent') {
    classes = ' absent ';
  }

  return (
    <button
      type="button"
      value={value}
      className={`buttonLetter ${classes} ${
        value === 'ENTER' || value === 'DEL' ? ' w-24' : ''
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

Key.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};
