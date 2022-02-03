import Game from '../components/Game';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md min-h-screen mx-auto flex flex-col justify-between">
      <Header />
      <div className="flex-1">
        <Game />
      </div>
      <Footer />
    </div>
  );
}
