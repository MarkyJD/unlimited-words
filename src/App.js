/* eslint-disable react/jsx-no-constructed-context-values */
import Home from './pages/Home';
import ThemeContext from './context/ThemeContext';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const { isDarkMode } = useDarkMode();
  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      <div className="antialiased min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
