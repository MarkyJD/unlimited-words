/* eslint-disable */
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Word({ word, guess, submitted }) {
  const letters = guess ? guess.split('') : [];
  const correctLetters = word.split('');

  function compareLetters(letter, correctLetter, word) {
    if (letter.toLowerCase() === correctLetter.toLowerCase()) {
      return ' bg-green-400';
    } else if (word.includes(letter.toLowerCase())) {
      return ' bg-amber-400';
    } else {
      return ' bg-gray-400';
    }
  }

  return (
    <>
      <div
        className={`letter ${
          submitted && compareLetters(letters[0], word[0], word)
        }`}
      >
        {letters[0] || ' '}
      </div>
      <div
        className={`letter ${
          submitted && compareLetters(letters[1], word[1], word)
        }`}
      >
        {letters[1] || ' '}
      </div>
      <div
        className={`letter ${
          submitted && compareLetters(letters[2], word[2], word)
        }`}
      >
        {letters[2] || ' '}
      </div>
      <div
        className={`letter ${
          submitted && compareLetters(letters[3], word[3], word)
        }`}
      >
        {letters[3] || ' '}
      </div>
      <div
        className={`letter ${
          submitted && compareLetters(letters[4], word[4], word)
        }`}
      >
        {letters[4] || ' '}
      </div>
    </>
  );
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
  guess: PropTypes.string,
  submitted: PropTypes.bool,
};
