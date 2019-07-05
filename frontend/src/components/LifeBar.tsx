import React from 'react';

interface LifeBarProps {
  life: number;
}

interface LifeBarState {
  life: number;
}

export class LifeBar extends React.Component<LifeBarProps, LifeBarState> {
  constructor(props: LifeBarProps) {
    super(props);
    this.state = {
      life: 0
    }
  }

  componentDidMount() {
    this.setState({ life: this.props.life });
  }

  render() {
    const lifeBarStyles = {
      width: `${this.props.life}%`
    }
    return (
      <div className="lifebar">
        <div className="lifebar-background">
          <span className="lifebar-number">{this.props.life}</span>
          <div className="lifebar-life" style={lifeBarStyles}></div>
        </div>
      </div>
    );
  };
}

export default LifeBar;