import { useState, useEffect, useContext } from 'react';
import Game from '../components/Game';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useWord from '../hooks/useWord';
import { isAlpha } from '../helpers';
import CharMapContext from '../context/CharMapContext';

const WORD_LENGTH = 5;

export default function Home() {
  const { charMap, updateCharMap } = useContext(CharMapContext);
  const { word, wordList } = useWord();
  const [input, setInput] = useState('');
  const [guesses, setGuesses] = useState([]);
  console.log(charMap);
  console.log(word);

  const handleSubmit = async () => {
    if (wordList.includes(input.toLowerCase())) {
      setGuesses((prevGuesses) => [...prevGuesses, input]);
      updateCharMap(input.toUpperCase(), word.toUpperCase());
      if (input.toLowerCase() === word.toLowerCase()) {
        alert('Congratulations!!!');
      }
      setInput('');
    } else {
      alert('Not in Word List!');
    }
  };

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === 8 && input.length > 0) {
        setInput((prev) => prev.slice(0, -1));
      }

      if (e.keyCode === 13 && input.length === WORD_LENGTH) {
        handleSubmit();
      }

      if (input.length < WORD_LENGTH && isAlpha(e.keyCode)) {
        setInput((prev) => prev + String.fromCharCode(e.keyCode));
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [input, guesses]);

  return (
    <div className="max-w-screen-sm md:max-w-screen-md min-h-screen mx-auto flex flex-col justify-between">
      <Header />
      <Game input={input} word={word || ''} guesses={guesses} />
      <Footer input={input} setInput={setInput} handleSubmit={handleSubmit} />
    </div>
  );
}
