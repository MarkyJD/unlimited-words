/* eslint-disable  */
import { useState } from 'react';
import Home from './pages/Home';
import ThemeContext from './context/ThemeContext';
import useDarkMode from './hooks/useDarkMode';
import CharMapContext from './context/CharMapContext';

function App() {
  const chars = [];

  for (let i = 65; i < 91; i++) {
    chars.push({ char: String.fromCharCode(i), status: '' });
  }
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [charMap, setCharMap] = useState(chars);

  const updateCharMap = (word, correctWord) => {
    console.log(word);
    console.log(correctWord);
    const wordLetters = word.split('');
    const correctWordLetters = correctWord.split('');
    const copyOfCharsMap = [...charMap];

    for (let i = 0; i < word.length; i++) {
      const foundIndex = charMap.findIndex(
        (cvp) => cvp.char === wordLetters[i]
      );
      const currentChar = { ...copyOfCharsMap[foundIndex] };

      if (wordLetters[i] === correctWordLetters[i]) {
        currentChar.status = 'correct';
        copyOfCharsMap[foundIndex] = currentChar;
      } else if (word.includes(correctWordLetters[i])) {
        currentChar.status = 'present';
        copyOfCharsMap[foundIndex] = currentChar;
      } else {
        currentChar.status = 'absent';
        copyOfCharsMap[foundIndex] = currentChar;
      }
    }
    setCharMap(copyOfCharsMap);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <CharMapContext.Provider value={{ charMap, updateCharMap }}>
        <div className="antialiased px-2 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
          <Home />
        </div>
      </CharMapContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
