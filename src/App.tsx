import './App.css';
import Card from '../components/Card';
import CardDeck from './lib/CardDeck';

function App() {
  const test = new CardDeck();
  test.getCards(5);

  return (
    <div className="playingCards faceImages">
      <Card rank="k" suit="hearts" symbol="♥"></Card>
    </div>
  );
}

export default App;
