import Game from '../components/Game';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto">
      <Header />
      <Game />
      <Footer />
    </div>
  );
}
