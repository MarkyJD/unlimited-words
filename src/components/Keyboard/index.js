import PropTypes from 'prop-types';
import React from 'react';

export default function Keyboard({ children }) {
  return (
    <div className="flex flex-col items-center space-y-2 mb-8 md:mb-12 lg:mb-14 xl:mb-16">
      {children}
    </div>
  );
}

Keyboard.propTypes = {
  children: PropTypes.node.isRequired,
};
