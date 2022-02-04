import PropTypes from 'prop-types';
import React from 'react';
import Keys from './Keys';

export default function Footer({ input }) {
  return <Keys />;
}

Footer.propTypes = {
  input: PropTypes.string.isRequired,
};
