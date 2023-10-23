import React from 'react';

interface Props {
  rank: string;
  suit: string;
  symbol: string;
}

const Card: React.FC<Props> = ({ rank, suit, symbol }) => {
  const cardWrapperClasses = `card rank-${rank} ${suit}`;

  return (
    <span className={cardWrapperClasses}>
      <span className="rank">{rank.toUpperCase()}</span>
      <span className="suit">{symbol}</span>
    </span>
  );
};

export default Card;
