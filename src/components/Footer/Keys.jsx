import React from 'react';
import PropTypes from 'prop-types';

export default function Keys({ value, width = 40, onClick }) {
  const buttonClass =
    'flex-1 items-center justify-center rounded-xl mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-black bg-gray-200 dark:bg-slate-200 hover:bg-purple-200 dark:hover:bg-blue-200';
  // {
  //   'bg-gray-200 dark:bg-slate-200 hover:bg-purple-200 dark:hover:bg-blue-200': !status,
  //   'bg-gray-400 dark:bg-slate-300': status === 'absent',
  //   'bg-amber-400 dark:bg-amber-300 dark:text-slate-900': status === 'present',
  //   'bg-green-400 dark:bg-green-300': status === 'correct',
  // });

  return (
    <button
      type="button"
      style={{ width: `${width}px`, height: '53px' }}
      className={buttonClass}
      onClick={onClick}
      name={value}
      status="correct"
    >
      {value}
    </button>
  );
}

Keys.propTypes = {
  value: PropTypes.string.isRequired,
  width: PropTypes.number,
  onClick: PropTypes.func,
};
