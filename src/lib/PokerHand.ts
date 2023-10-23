import { Card } from './Card';

class PokerHand {
  playerHand: Card[] = [];
  constructor(cards: Card[]) {
    this.playerHand = cards;
  }

  getOutcome(): string {
    const checkResultRank: number[] = [];
    const checkResultSymbol: number[] = [];
    let endResult: string = 'High card!';
    for (let i = 0; i < this.playerHand.length; i++) {
      const tempVarSymbol = this.playerHand[i].symbol;
      const tempVarRank = this.playerHand[i].rank;
      const countRank = this.playerHand.filter(
        (el) => el.rank === tempVarRank,
      ).length;
      const countSymbol = this.playerHand.filter(
        (el) => el.symbol === tempVarSymbol,
      ).length;
      checkResultRank.push(countRank);
      checkResultSymbol.push(countSymbol);
    }

    for (let i = 0; i < checkResultRank.length; i++) {
      let pairCount = 0;
      let setCount = 0;
      let quadsCount = 0;
      let twoPairs = false;

      if (checkResultSymbol[i] === 5) {
        return (endResult = 'FLASH!');
      }

      if (checkResultRank[i] === 2) {
        pairCount++;
      } else if (checkResultRank[i] === 3) {
        setCount++;
      } else if (pairCount > 1) {
        twoPairs = true;
      } else if (checkResultRank[i] === 4) {
        quadsCount++;
      }

      if (quadsCount === 1) {
        return (endResult = 'QUADS!');
      } else if (setCount === 1 && pairCount === 1) {
        return (endResult = 'FULL HOUSE!');
      } else if (setCount === 1) {
        return (endResult = 'SET!');
      } else if (twoPairs) {
        return (endResult = 'TWO PAIRS!');
      } else if (pairCount === 1) {
        return (endResult = 'PAIR!');
      }
    }
    return endResult;
  }
}
export default PokerHand;
