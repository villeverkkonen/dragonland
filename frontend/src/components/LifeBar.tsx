import React from 'react';

interface LifeBarProps {
  life: number;
  fightOn: boolean;
  fightOver: boolean;
  hitAmount: number;
}

interface LifeBarState {
  life: number;
}

export class LifeBar extends React.Component<LifeBarProps, LifeBarState> {
  render() {
    const lifeBarStyles = {
      width: `${this.props.life}%`
    }

    return (
      <div>
        <div className="lifebar">
          <div className="lifebar-background">
            <span className="lifebar-number">{this.props.life}</span>
            <div className="lifebar-life" style={lifeBarStyles}></div>
          </div>
        </div>

        <div className="battlefield-damage">
          {this.props.fightOn || this.props.fightOver
          ? -this.props.hitAmount
          : null}
        </div>
      </div>
    );
  };
}

export default LifeBar;