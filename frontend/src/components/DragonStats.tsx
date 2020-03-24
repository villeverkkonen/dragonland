import React from 'react'

interface DragonStatsProps {
  maxHit: number
}

const DragonStats = (props: DragonStatsProps) => {
  return (
    <div className="dragon-stats">
      <p>
        <span className="left-column">Max hit: </span>
        <span className="right-column">{props.maxHit}</span>
      </p>
    </div>
  )
}

export default DragonStats
