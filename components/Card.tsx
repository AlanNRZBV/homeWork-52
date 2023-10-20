import React from 'react';

interface Props {
  rank: string,
  suit: string
}

const Card: React.FC<Props> = ({rank, suit}) => {

  const cardWrapperClasses = `card rank-${rank} ${suit}`

  return (
    <div className='playingCards faceImages'>
      <span className={cardWrapperClasses}>
        <span className="rank">{rank.toUpperCase()}</span>
        <span className="suit">♥</span>
      </span>
    </div>
  );
};

export default Card;