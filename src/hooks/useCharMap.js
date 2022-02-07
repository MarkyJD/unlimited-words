import { useState, useEffect } from 'react';

export default function useCharMap(gameWord) {
  const [charMap, setCharMap] = useState([]);
  const chars = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    'DEL',
  ];

  const updateCharMap = (guess, gameWord) => {
    const correctWord = gameWord.toUpperCase().split('');
    const newCharMap = [...charMap];

    for (let i = 0; i < gameWord.length; i += 1) {
      /* Flags */
      const foundIndex = charMap.findIndex(
        ({ char }) => char.toUpperCase() === guess[i].toUpperCase()
      );

      const correct = guess[i].toUpperCase() === correctWord[i].toUpperCase();
      const present = gameWord.toUpperCase().includes(guess[i].toUpperCase());
      if (
        newCharMap[foundIndex].status !== 'correct' ||
        newCharMap[foundIndex].status === ''
      ) {
        if (correct) {
          newCharMap[foundIndex].status = 'correct';
        } else if (present) {
          newCharMap[foundIndex].status = 'present';
        } else {
          newCharMap[foundIndex].status = 'absent';
        }
      }
    }
    setCharMap(newCharMap);
  };

  useEffect(() => {
    function buildCharMap() {
      const temp = [];
      chars.forEach((char) => {
        temp.push({
          char,
          status: '',
        });
      });
      setCharMap(temp);
    }

    if (charMap.length === 0) {
      buildCharMap();
    }
  }, [gameWord]);

  return { charMap, updateCharMap };
}
