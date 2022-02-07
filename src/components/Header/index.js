import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import { BiCog, BiMoon, BiSun } from 'react-icons/bi';
import { GiMedal, GiMedalSkull } from 'react-icons/gi';
import ThemeContext from '../../context/ThemeContext';

export default function Header({ changeMode, reset }) {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [mode, setMode] = useState('normal');
  return (
    <div className="container border-b border-purple-200 h-12 md:h-14 lg:h-16 flex justify-between items-center">
      <h1 className="font-hand text-shadow-lg text-xl md:text-2xl lg:text-3xl underline cursor-pointer hover:text-purple-500 decoration-purple-500 underline-offset-2">
        Words Unlimited
      </h1>
      <div className="flex items-center space-x-4">
        {isDarkMode ? (
          <BiSun className="icon" onClick={toggleDarkMode} />
        ) : (
          <BiMoon className="icon" onClick={toggleDarkMode} />
        )}
        {mode === 'normal' ? (
          <GiMedalSkull
            className="icon"
            onClick={() => {
              setMode('hard');
              changeMode();
              reset();
            }}
          />
        ) : (
          <GiMedal
            className="icon"
            onClick={() => {
              setMode('normal');
              changeMode();
              reset();
            }}
          />
        )}

        <BiCog className="icon" />
      </div>
    </div>
  );
}

Header.propTypes = {
  changeMode: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
