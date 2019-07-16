import React from 'react';
import { connect } from 'react-redux';

interface HeroStatsProps {
  roundsFought: number;
  hits: number;
  gold: number;
  attack: number;
  defense: number;
  maxHit: number;
}

interface HeroStatsState {
  heroReducer: {
    roundsFought: number;
    hits: number;
    gold: number;
    attack: number;
    defense: number;
    maxHit: number;
  }
}

export class HeroStats extends React.Component<HeroStatsProps, HeroStatsState> {
  render() {
    let { roundsFought, hits, gold, attack, defense, maxHit } = this.props;

    return (
      <div className="hero-stats">
        <p>
          <span className="left-column">Rounds:</span>
          <span className="right-column">{roundsFought}</span>
        </p>
        <p>
          <span className="left-column">Hits:</span>
          <span className="right-column">{hits}</span>
        </p>
        <p>
          <span className="left-column">Gold:</span>
          <span className="right-column">{gold}</span>
        </p>
        <p>
          <span className="left-column">Attack:</span>
          <span className="right-column">{attack}</span>
        </p>
        <p>
          <span className="left-column">Defense:</span>
          <span className="right-column">{defense}</span>
        </p>
        <p>
          <span className="left-column">Max hit:</span>
          <span className="right-column">{maxHit}</span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state: HeroStatsState) => ({
  gold: state.heroReducer.gold,
  attack: state.heroReducer.attack,
  defense: state.heroReducer.defense,
  maxHit: state.heroReducer.maxHit,
  roundsFought: state.heroReducer.roundsFought,
  hits: state.heroReducer.hits
});

export default connect(mapStateToProps)(HeroStats);