/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect, useState } from 'react';
import UnlimitedWords from './pages/UnlimitedWords';
import ThemeContext from './context/ThemeContext';
import useDarkMode from './hooks/useDarkMode';
import useWord from './hooks/useWord';

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [gameWord, setGameWord] = useState('');
  const [gameWordList, setGameWordList] = useState([]);
  const { word, wordList } = useWord();

  useEffect(() => {
    setGameWord(word);
    setGameWordList(wordList);
  }, [word, wordList]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className="antialiased px-2 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        {gameWord && gameWordList && (
          <UnlimitedWords gameWord={gameWord} wordList={gameWordList} />
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
