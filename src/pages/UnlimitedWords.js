import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Keyboard from '../components/Keyboard';
import Board from '../components/Board';
import NextGuess from '../components/Board/NextGuess';
import CurrentGuess from '../components/Board/CurrentGuess';
import PrevGuesses from '../components/Board/PrevGuesses';

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
  const [usedChars, setUsedChars] = useState([]);

  function updateChars(currentGuess) {
    const correctWord = gameWord.toUpperCase().split('');
    const newChars = [];

    for (let i = 0; i < gameWord.length; i += 1) {
      /* Flags */
      const correct =
        currentGuess[i].toUpperCase() === correctWord[i].toUpperCase();
      const present = gameWord
        .toUpperCase()
        .includes(currentGuess[i].toUpperCase());

      if (correct) {
        newChars.push({
          char: currentGuess[i],
          status: 'correct',
        });
      } else if (present) {
        newChars.push({
          char: currentGuess[i],
          status: 'present',
        });
      } else {
        newChars.push({
          char: currentGuess[i],
          status: 'absent',
        });
      }
    }
    setUsedChars([...newChars]);
  }

  const handleSubmit = () => {
    // Set flags
    const isInWordList = wordList.includes(input.join('').toLowerCase());
    const gameOver = totalGuesses === guesses.length;
    const isCorrectWord =
      input.join('').toLowerCase() === gameWord.toLowerCase();

    if (isInWordList) {
      setGuesses((prevGuesses) => [...prevGuesses, input]);
      updateChars(input);
      if (gameOver) {
        setIsGameOver(true);
      }

      if (isCorrectWord) {
        alert('Congratulations!!!');
      }

      setInput([]);
    } else {
      alert('Not in Word List!');
    }
  };

  useEffect(() => {
    function handleKeyDown({ key: char }) {
      // Set flags depending on pressed key
      const key = char.toUpperCase();
      const isValidKey = /^[a-zA-Z]$/i.test(key);
      const isEnter = key === 'ENTER' && input.length === gameWord.length;
      const isBackspace = key === 'BACKSPACE';
      console.log(key);

      // Submit guess and append guesses
      if (isEnter) {
        handleSubmit();

        // Functional backspace
      } else if (isBackspace) {
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

  return (
    <div className="max-w-screen-sm md:max-w-screen-md min-h-screen mx-auto flex flex-col justify-between">
      <Header changeMode={changeMode} />
      <Board>
        <PrevGuesses guesses={guesses} usedChars={usedChars} />

        {!isGameOver && <CurrentGuess length={gameWord.length} input={input} />}

        {/* Remaining Guesses */}
        {totalGuesses - guesses.length > 0
          ? [...new Array(totalGuesses - guesses.length)].map((_, i) => (
              <NextGuess key={i} length={gameWord.length} />
            ))
          : null}
      </Board>
      <Keyboard
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        gameWord={gameWord}
      />
    </div>
  );
}

UnlimitedWords.propTypes = {
  gameWord: PropTypes.string.isRequired,
  wordList: PropTypes.array.isRequired,
  totalGuesses: PropTypes.number,
  changeMode: PropTypes.func.isRequired,
};
