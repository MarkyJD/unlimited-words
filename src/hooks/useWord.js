import { useEffect, useState } from 'react';

export default function useWord() {
  const [word, setWord] = useState(null);

  useEffect(() => {
    async function getRandomWord() {
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

      fetch('/assets/data/word-list.txt')
        .then((r) => r.text())
        .then((wordsList) => {
          const wordsArray = wordsList.split('\n');
          const randomWord = wordsArray[getRandomInt(wordsArray.length - 1)];

          setWord(randomWord);
        });
    }

    getRandomWord();
  }, []);

  return word;
}
