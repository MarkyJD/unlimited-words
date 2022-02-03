import PropTypes from 'prop-types';

export default function Word({ word }) {
  return (
    <>
      <div className="letter">{word || ' '}</div>
      <div className="letter">{word || ' '}</div>
      <div className="letter">{word || ' '}</div>
      <div className="letter">{word || ' '}</div>
      <div className="letter">{word || ' '}</div>
    </>
  );
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
};
