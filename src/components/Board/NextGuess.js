import PropTypes from 'prop-types';

export default function NextGuess({ length }) {
  return (
    <div className="flex justify-center items-center space-x-2">
      {[...new Array(length)].map((_, i) => (
        <div className="letter" key={i}>
          {' '}
        </div>
      ))}
    </div>
  );
}

NextGuess.propTypes = {
  length: PropTypes.number.isRequired,
};
