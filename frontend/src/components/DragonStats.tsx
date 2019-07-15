import React from 'react';

const DragonStats = (props: any) => {

  return (
    <div className="dragon-stats">
      <p>
        <span className="left-column">Max hit: </span>
        <span className="right-column">{props.maxHit}</span>
      </p>
    </div>
  );
}

export default DragonStats;