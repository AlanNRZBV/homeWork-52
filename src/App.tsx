import './App.css';
import Card from '../components/Card';
import { Card as PlayCard } from './lib/Card';
import CardDeck from './lib/CardDeck';
import { useState } from 'react';

function App() {
  const [cards, setCards] = useState<PlayCard[]>([]);

  const createHand = () => {
    const newDeck = new CardDeck();
    const newCards = newDeck.getCards(5);
    setCards(newCards);
  };

  return (
    <div>
      {cards.length === 0 ? (
        <div>
          <button onClick={createHand}>Get cards!</button>
        </div>
      ) : (
        <div className="playingCards faceImages">
          {cards.map((card, index) => (
            <Card
              key={index}
              rank={card.rank}
              suit={card.suit}
              symbol={card.symbol}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
