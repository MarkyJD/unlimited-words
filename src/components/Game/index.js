import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import Word from './Word';

export default function Game({ word, guesses, input }) {
  return (
    <div className="flex items-center justify-center flex-1">
      {word ? (
        <div className="grid grid-cols-5 grid-rows-6 gap-2">
          <Word
            word={word}
            submitted={guesses.length >= 1}
            guess={guesses[0] || input}
          />
          <Word
            word={word}
            submitted={guesses.length >= 2}
            guess={guesses[1] || (guesses[0] ? input : '')}
          />
          <Word
            word={word}
            submitted={guesses.length >= 3}
            guess={guesses[2] || (guesses[1] ? input : '')}
          />
          <Word
            word={word}
            submitted={guesses.length >= 4}
            guess={guesses[3] || (guesses[2] ? input : '')}
          />
          <Word
            word={word}
            submitted={guesses.length >= 5}
            guess={guesses[4] || (guesses[3] ? input : '')}
          />
          <Word
            word={word}
            submitted={guesses.length >= 6}
            guess={guesses[5] || (guesses[4] ? input : '')}
          />
        </div>
      ) : (
        <Skeleton count={5} height={500} width={300} />
      )}
    </div>
  );
}

Game.propTypes = {
  word: PropTypes.string.isRequired,
  guesses: PropTypes.array,
  input: PropTypes.string,
};
