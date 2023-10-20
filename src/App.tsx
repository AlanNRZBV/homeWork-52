import './App.css';
import Card from '../components/Card';
import CardDeck from './lib/CardDeck';

function App() {
  const test = new CardDeck();
  test.createDesk();
  console.log(test.deck)

  return (
    <div className="playingCards faceImages">
      <Card rank="k" suit="hearts" symbol="♥"></Card>
    </div>
  );
}

export default App;
