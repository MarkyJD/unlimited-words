import PropTypes from 'prop-types';
import { BiCog, BiGame, BiMoon, BiSun } from 'react-icons/bi';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

export default function Header({ changeMode, reset }) {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div className="container border-b border-purple-200 h-12 md:h-14 lg:h-16 flex justify-between items-center">
      <h1 className="font-hand text-shadow-lg text-xl md:text-2xl lg:text-3xl underline cursor-pointer hover:text-purple-500 decoration-purple-500 underline-offset-2">
        Wordle & More
      </h1>
      <div className="flex items-center space-x-4">
        {isDarkMode ? (
          <BiSun className="icon" onClick={toggleDarkMode} />
        ) : (
          <BiMoon className="icon" onClick={toggleDarkMode} />
        )}
        <BiGame
          className="icon"
          onClick={() => {
            changeMode();
            reset();
          }}
        />
        <BiCog className="icon" />
      </div>
    </div>
  );
}

Header.propTypes = {
  changeMode: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
