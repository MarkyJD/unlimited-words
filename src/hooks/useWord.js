import { useEffect, useState } from 'react';
import words from '/assets/data/word-list.txt';

export default function useWord() {
  const [word, setWord] = useState('');

  useEffect(() => {
    async function getWord() {
      await getRandomWord(words);
    }
  }, []);

  return { word };
}
