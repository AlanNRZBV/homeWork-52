import './App.css';
import Card from '../components/Card';
import { Card as PlayCard } from './lib/Card';
import CardDeck from './lib/CardDeck';
import { useState } from 'react';
import PokerHand from './lib/PokerHand';

function App() {
  const [cards, setCards] = useState<PlayCard[]>([]);

  const createHand = () => {
    const newDeck = new CardDeck();
    const newCards = newDeck.getCards(5);
    setCards(newCards);
    console.log(cards);
  };

  const refreshHand = () => {
    createHand();
  };

  let outcomeSpan: string = '';

  if (cards.length > 0) {
    const hand = new PokerHand(cards);
    outcomeSpan = hand.getOutcome();
  }

  return (
    <div>
      {cards.length === 0 ? (
        <div>
          <button onClick={createHand}>Get cards!</button>
        </div>
      ) : (
        <div>
          <div className="playingCards faceImages">
            {cards.map((card, index) => (
              <Card
                key={index}
                rank={card.rank}
                suit={card.suit}
                symbol={card.symbol}
              />
            ))}
            <span className="result">{outcomeSpan}</span>
          </div>
          <button onClick={refreshHand}>Refresh!</button>
        </div>
      )}
    </div>
  );
}

export default App;
