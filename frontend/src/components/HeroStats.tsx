import React from 'react';
import { connect } from 'react-redux';

interface HeroStatsProps {
  gold: number;
  attack: number;
  defense: number;
  maxHit: number;
  roundsFought: number;
}

interface HeroStatsState {
  heroReducer: {
    gold: number;
    attack: number;
    defense: number;
    maxHit: number;
    roundsFought: number;
  }
}

export class HeroStats extends React.Component<HeroStatsProps, HeroStatsState> {
  render() {
    let { attack, defense, maxHit, roundsFought, gold } = this.props;

    return (
      <div className="hero-stats">
        <p>
          <span className="left-column">Rounds fought:</span>
          <span className="right-column">{roundsFought}</span>
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
  roundsFought: state.heroReducer.roundsFought
});

export default connect(mapStateToProps)(HeroStats);