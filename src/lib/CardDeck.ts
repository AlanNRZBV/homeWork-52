import { Card } from './Card';

interface Suit {
  name: string;
  symbol: string;
}

class CardDeck {
  ranks: string[] = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];
  suit: Suit[] = [
    { name: 'diams', symbol: '♦' },
    { name: 'hearts', symbol: '♥' },
    { name: 'clubs', symbol: '♣' },
    { name: 'spades', symbol: '♠' },
  ];

  deck: Card[] = [];

  constructor() {
    this.ranks.forEach((rank) => {
      this.suit.forEach((suit) => {
        const card = new Card(rank, suit.name, suit.symbol);
        this.deck.push(card);
      });
    });
  }

  getCard(): Card | undefined {
    if (this.deck.length === 0) {
      return undefined;
    }

    const rndNumber: number = Math.floor(Math.random() * this.deck.length);
    const removedCard: Card[] = this.deck.splice(rndNumber, 1);
    return removedCard[0];
  }

  getCards(howMany: number): Card[] {
    const cardsToHand: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      cardsToHand.push(<Card>this.getCard());
    }
    return cardsToHand;
  }
}

export default CardDeck;
