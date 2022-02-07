import { useEffect, useState } from 'react';

export default function useWord(mode) {
  const [word, setWord] = useState(null);
  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    async function getRandomWord() {
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      let filename = 'words-list.txt';
      if (mode === 'normal') {
        filename = 'word-list.txt';
      }

      if (mode === 'hard') {
        filename = 'seven.txt';
      }

      fetch(`/assets/data/${filename}`)
        .then((r) => r.text())
        .then((wordsList) => {
          const wordsArray = wordsList.split('\r\n');
          setWordList(wordsArray);
          const randomWord = wordsArray[getRandomInt(wordsArray.length - 1)];
          console.log(randomWord);
          setWord(randomWord);
        });
    }

    getRandomWord();
  }, [mode]);

  return { word, wordList };
}
