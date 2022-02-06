/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';

export default function PrevGuess({ guess, gameWord, gameWordCharCount }) {
  const charCount = { ...gameWordCharCount };

  guess.forEach((letter, i) => {
    const isCorrect = gameWord[i] === letter;
    if (isCorrect) {
      charCount[letter] -= 1;
    }
  });

  return (
    <div className="flex justify-center items-center space-x-2">
      {guess.map((letter, i) => {
        const isCorrect = letter.toUpperCase() === gameWord[i].toUpperCase();
        if (isCorrect) {
          charCount[letter] -= 1;
        }

        let isPresent = false;
        if (!isCorrect && charCount[letter.toUpperCase()]) {
          isPresent = true;
          charCount[letter] -= 1;
        }

        let classes = '';
        if (isCorrect) {
          classes = 'correct';
        } else if (isPresent) {
          classes = 'present';
        } else {
          classes = 'absent';
        }

        return (
          <div
            className={`letter transition-all border-solid ${classes}`}
            key={`${i}`}
          >
            {letter}
          </div>
        );
      })}
    </div>
  );
}

PrevGuess.propTypes = {
  guess: PropTypes.array.isRequired,
  gameWord: PropTypes.string.isRequired,
  gameWordCharCount: PropTypes.object.isRequired,
};
