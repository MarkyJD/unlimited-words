import PropTypes from 'prop-types';

export default function CurrentGuess({ length, input }) {
  return (
    <div className="flex justify-center items-center space-x-2">
      {[...new Array(length)].map((_, i) => (
        <div
          className={`letter ${input[i] && ' border-solid animate-wiggle'}`}
          key={i}
        >
          {input[i] || ' '}
        </div>
      ))}
    </div>
  );
}

CurrentGuess.propTypes = {
  length: PropTypes.number.isRequired,
  input: PropTypes.array.isRequired,
};
