/* eslint-disable */
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Word({ word, guess, submitted }) {
  const letters = guess ? guess.split('') : [];
  const correctLetters = word.split('');
  const borderStyle = ' border-solid';

  function compareLetters(letter, correctLetter, word) {
    if (letter.toLowerCase() === correctLetter.toLowerCase()) {
      return ' bg-green-400 dark:bg-green-300 dark:text-slate-900';
    } else if (word.includes(letter.toLowerCase())) {
      return ' bg-amber-400 dark:bg-amber-300 dark:text-slate-900';
    } else {
      return ' bg-slate-200 dark:bg-slate-300 dark:text-slate-900';
    }
  }

  return (
    <>
      <div
        className={`letter delay1 ${letters[0] ? borderStyle : ''} ${
          submitted && compareLetters(letters[0], word[0], word)
        }`}
      >
        {letters[0] || ' '}
      </div>
      <div
        className={`letter delay2 ${letters[1] ? borderStyle : ''} ${
          submitted && compareLetters(letters[1], word[1], word)
        }`}
      >
        {letters[1] || ' '}
      </div>
      <div
        className={`letter delay3 ${letters[2] ? borderStyle : ''} ${
          submitted && compareLetters(letters[2], word[2], word)
        }`}
      >
        {letters[2] || ' '}
      </div>
      <div
        className={`letter delay4 ${letters[3] ? borderStyle : ''} ${
          submitted && compareLetters(letters[3], word[3], word)
        }`}
      >
        {letters[3] || ' '}
      </div>
      <div
        className={`letter delay5 ${letters[4] ? borderStyle : ''} ${
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
