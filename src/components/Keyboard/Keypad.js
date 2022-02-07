import PropTypes from 'prop-types';
import Key from './Key';

export default function Keypad({
  input,
  setInput,
  handleSubmit,
  gameWord,
  charMap,
  setMessage,
}) {
  const onClick = (value) => {
    if (value.target.value === 'ENTER' && input.length === gameWord.length) {
      handleSubmit();
    } else if (value.target.value === 'DEL' && input.length > 0) {
      setInput((prev) => {
        const tempArray = [...prev];
        tempArray.pop();
        return tempArray;
      });
      setMessage('');
    } else if (
      input.length < gameWord.length &&
      value.target.value !== 'ENTER' &&
      value.target.value !== 'DEL'
    ) {
      setInput((prev) => [...prev, value.target.value]);
    }
  };

  return charMap.length !== 0 ? (
    <>
      <div className="container justify-center flex space-x-1">
        {charMap.slice(0, 10).map((char, i) => (
          <Key
            key={`${i}-${char}`}
            value={char.char}
            status={char.status}
            onClick={onClick}
          />
        ))}
      </div>
      <div className="container justify-center flex space-x-1">
        {charMap.slice(10, 19).map((char, i) => (
          <Key
            key={`${i}-${char}`}
            value={char.char}
            status={char.status}
            onClick={onClick}
          />
        ))}
      </div>
      <div className="container justify-center flex space-x-1">
        {charMap.slice(19, 28).map((char, i) => (
          <Key
            key={`${i}-${char}`}
            value={char.char}
            status={char.status}
            onClick={onClick}
          />
        ))}
      </div>
    </>
  ) : (
    <div>error with charmap</div>
  );
}

Keypad.propTypes = {
  input: PropTypes.array.isRequired,
  setInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  gameWord: PropTypes.string.isRequired,
  charMap: PropTypes.array.isRequired,
  setMessage: PropTypes.func.isRequired,
};
