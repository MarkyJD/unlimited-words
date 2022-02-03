import { BiCog, BiMoon, BiSun } from 'react-icons/bi';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div className="container border-b border-purple-200 h-12 flex justify-between items-center">
      <h1 className="font-hand text-xl underline cursor-pointer hover:text-purple-500 decoration-purple-500 underline-offset-2">
        Wordle Unlimited
      </h1>
      <div className="flex items-center space-x-4">
        {isDarkMode ? (
          <BiSun className="icon" onClick={toggleDarkMode} />
        ) : (
          <BiMoon className="icon" onClick={toggleDarkMode} />
        )}
        <BiCog className="icon" />
      </div>
    </div>
  );
}
