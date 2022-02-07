/* eslint-disable no-prototype-builtins */
/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { useState, useEffect, useMemo, useContext } from 'react';
import Header from '../components/Header';
import Keyboard from '../components/Keyboard';
import Keypad from '../components/Keyboard/Keypad';
import Board from '../components/Board';
import NextGuess from '../components/Board/NextGuess';
import CurrentGuess from '../components/Board/CurrentGuess';
import PrevGuesses from '../components/Board/PrevGuesses';
import CharMapContext from '../context/CharMapContext';
import Message from '../components/Board/Message';

export default function UnlimitedWords({
  gameWord,
  wordList,
  totalGuesses = 6,
  changeMode,
}) {
  console.log(gameWord);
  const [input, setInput] = useState([]);
  const [guesses, setGuesses] = useState([[]]);
  const [isGameOver, setIsGameOver] = useState(false);
  const { charMap, updateCharMap } = useContext(CharMapContext);
  const [message, setMessage] = useState('');

  const reset = () => {
    setInput([]);
    setGuesses([[]]);
    setIsGameOver(false);
  };

  const handleSubmit = () => {
    // Set flags
    const isInWordList = wordList.includes(input.join('').toLowerCase());
    const gameOver = totalGuesses === guesses.length;
    const isCorrectWord =
      input.join('').toLowerCase() === gameWord.toLowerCase();

    if (isInWordList) {
      setGuesses((prevGuesses) => [...prevGuesses, input]);

      updateCharMap(input.join('').toUpperCase(), gameWord);

      if (gameOver) {
        setIsGameOver(true);
      }

      if (isCorrectWord) {
        setMessage('correct');
      }
      setInput([]);
    } else {
      setMessage('not in word list');
    }
  };

  useEffect(() => {
    function handleKeyDown({ key: char }) {
      // Set flags depending on pressed key
      const key = char.toUpperCase();
      const isValidKey = /^[a-zA-Z]$/i.test(key);
      const isEnter = key === 'ENTER' && input.length === gameWord.length;
      const isBackspace = key === 'BACKSPACE';

      // Submit guess and append guesses
      if (isEnter) {
        handleSubmit();

        // Functional backspace
      } else if (isBackspace) {
        setMessage('');
        setInput((prev) => {
          const tempArray = [...prev];
          tempArray.pop();
          return tempArray;
        });

        // Append input
      } else if (isValidKey && input.length < gameWord.length) {
        setInput((prev) => [...prev, key]);
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [input.length]);

  const gameWordCharCount = useMemo(() => {
    return gameWord
      .toUpperCase()
      .split('')
      .reduce((accumulator, char) => {
        if (!accumulator.hasOwnProperty(char)) {
          accumulator[char] = 1;
        } else {
          accumulator[char] += 1;
        }
        return accumulator;
      }, {});
  }, [gameWord]);

  return (
    <div className="max-w-screen-sm md:max-w-screen-md min-h-screen mx-auto flex flex-col justify-between">
      <Header changeMode={changeMode} reset={reset} />
      <Board>
        <Message
          message={message}
          input={input || ['']}
          isGameOver={isGameOver}
          gameWord={gameWord}
        />
        <PrevGuesses
          guesses={guesses}
          gameWord={gameWord}
          gameWordCharCount={gameWordCharCount}
        />

        {!isGameOver && <CurrentGuess length={gameWord.length} input={input} />}

        {/* Remaining Guesses */}
        {totalGuesses - guesses.length > 0
          ? [...new Array(totalGuesses - guesses.length)].map((_, i) => (
              <NextGuess key={i} length={gameWord.length} />
            ))
          : null}
      </Board>
      <Keyboard>
        <Keypad
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          gameWord={gameWord}
          charMap={charMap}
        />
      </Keyboard>
    </div>
  );
}

UnlimitedWords.propTypes = {
  gameWord: PropTypes.string.isRequired,
  wordList: PropTypes.array.isRequired,
  totalGuesses: PropTypes.number,
  changeMode: PropTypes.func.isRequired,
};
