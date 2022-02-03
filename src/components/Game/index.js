import Word from './Word';
import useWord from '../../hooks/useWord';

export default function Game() {
  const { gameWord } = useWord();
  return (
    <div className="border flex items-center justify-center flex-1">
      <div className="grid grid-cols-5 grid-rows-6 gap-2">
        <Word word="" />
        <Word word="" />
        <Word word="" />
        <Word word="" />
        <Word word="" />
        <Word word="" />
      </div>
    </div>
  );
}
