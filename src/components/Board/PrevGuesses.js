import PropTypes from 'prop-types';
import PrevGuess from './PrevGuess';

export default function PrevGuesses({ guesses, gameWord, gameWordCharCount }) {
  return (
    <>
      {guesses.map((guess, i) => (
        <PrevGuess
          key={`${i}`}
          guess={guess}
          gameWord={gameWord}
          gameWordCharCount={gameWordCharCount}
        />
      ))}
    </>
  );
}

PrevGuesses.propTypes = {
  guesses: PropTypes.array.isRequired,
  gameWord: PropTypes.string.isRequired,
  gameWordCharCount: PropTypes.object.isRequired,
};
