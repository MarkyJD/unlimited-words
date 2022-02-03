import useDarkMode from '../../hooks/useDarkMode';

export default function Footer() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <div className="border">
      <h1>Hi I am footer</h1>
      <button type="button" onClick={toggleDarkMode}>
        toggle
      </button>
    </div>
  );
}
