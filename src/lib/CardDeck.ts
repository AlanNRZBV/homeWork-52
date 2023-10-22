import {Card} from './Card';

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

  getCard(): Card {
    const rndNumber: number = Math.floor(Math.random() * 52);
    const removedCard: Card[] = this.deck.splice(rndNumber, 1);
    return removedCard[0];
  }

  getCards(howMany: number): Card[] {
    const cardsToHand: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      cardsToHand.push(this.getCard());
    }
    return cardsToHand;
  }
}

export default CardDeck;
