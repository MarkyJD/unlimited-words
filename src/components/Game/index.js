import { useState, useEffect } from 'react';

import Skeleton from 'react-loading-skeleton';
import Word from './Word';
import useWord from '../../hooks/useWord';

export default function Game() {
  const word = useWord();
  const [input, setInput] = useState('');

  useEffect(() => {
    function handleKeyDown(e) {
      console.log(String.fromCharCode(e.keyCode));
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="border flex items-center justify-center flex-1">
      {console.log(input)}
      {word ? (
        <div className="grid grid-cols-5 grid-rows-6 gap-2">
          <Word word="" />
          <Word word="" />
          <Word word="" />
          <Word word="" />
          <Word word="" />
          <Word word="" />
        </div>
      ) : (
        <Skeleton count={5} height={500} width={300} />
      )}
    </div>
  );
}
