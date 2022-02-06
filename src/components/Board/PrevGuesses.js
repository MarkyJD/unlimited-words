import PropTypes from 'prop-types';
import PrevGuess from './PrevGuess';

export default function PrevGuesses({ guesses, usedChars }) {
  return (
    <>
      {guesses.map((guess, i) => (
        <PrevGuess key={`${i}`} guess={guess} usedChars={usedChars} />
      ))}
    </>
  );
}

PrevGuesses.propTypes = {
  guesses: PropTypes.array.isRequired,
  usedChars: PropTypes.array.isRequired,
};
