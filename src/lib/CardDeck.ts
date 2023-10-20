import Card from './Card';

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

  createDesk: ()=> void;

  constructor() {

    this.createDesk = () => {
      this.ranks.forEach((rank) => {
        this.suit.forEach((suit) => {
          const card = new Card(rank, suit.name, suit.symbol);
          this.deck.push(card);
        });
      });
    };
  }
}

export default CardDeck;
