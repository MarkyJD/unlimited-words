import Game from '../components/Game';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useWord from '../hooks/useWord';

export default function Home() {
  const word = useWord();

  return (
    <div className="max-w-screen-sm md:max-w-screen-md min-h-screen mx-auto flex flex-col justify-between">
      <Header />
      <Game />
      <Footer />
    </div>
  );
}
