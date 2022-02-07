import PropTypes from 'prop-types';

export default function Message({ message, input, isGameOver, gameWord }) {
  let output = '';
  let classes = 'text-purple-600 dark:text-purple-400';

  if (message === 'not in word list') {
    output = `${input.join('').toLowerCase()} is not in the word list`;
    classes = ' text-rose-600 dark:text-rose-400';
  } else if (message === 'correct') {
    output = `${gameWord} is the correct answer!`;
    classes = ' text-green-600 dark:text-green-400';
  }

  return (
    <h2
      className={`h-10 text-center text-shadow font-hand text-3xl ${classes}`}
    >
      {output}
    </h2>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  input: PropTypes.array.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  gameWord: PropTypes.string.isRequired,
};
