import PropTypes from 'prop-types';
import React from 'react';
import { Charmap } from '../../helpers/charMap';

export default function Keys({ value, width = 40, height = 53 }) {
  const handleClick = (value) => {
    console.log(value.target.innerText);
  };

  const buttonClass =
    'flex-1 items-center justify-center rounded-xl mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-black bg-gray-200 dark:bg-slate-200 hover:bg-purple-200 dark:hover:bg-blue-200';
  // {
  //   'bg-gray-200 dark:bg-slate-200 hover:bg-purple-200 dark:hover:bg-blue-200':
  //     !status,
  //   'bg-gray-400 dark:bg-slate-300': status === 'absent',
  //   'bg-green-400 dark:bg-green-300':
  //     status === 'correct',
  //   'bg-amber-400 dark:bg-amber-300 dark:text-slate-900':
  //     status === 'present',
  // });

  return (
    <button
      type="button"
      style={{ width: `${width}px`, height: `${height}px` }}
      className={buttonClass}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

Keys.propTypes = {
  value: PropTypes.array.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};
