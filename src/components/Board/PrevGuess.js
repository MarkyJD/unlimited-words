import PropTypes from 'prop-types';

export default function PrevGuess({ guess, usedChars }) {
  function getClasses(letter, usedChars, i) {
    const found = usedChars.find(
      ({ char }) => char.toUpperCase() === letter.toUpperCase()
    );

    if (found) {
      if (found.status === 'correct') {
        return ` correct delay${i}`;
      }

      if (found.status === 'present') {
        return ` present delay${i}`;
      }
    }

    return ` absent delay${i}`;
  }

  return (
    <div className="flex justify-center items-center space-x-2">
      {guess.map((letter, i) => {
        const classes = getClasses(letter, usedChars, i);
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
  usedChars: PropTypes.array.isRequired,
};
