import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { winGold, loseGold, gameOver } from '../store/hero/actions';
import { EquipmentType } from '../store/equipment/types';
import HeroStats from './HeroStats';
import GameOver from './GameOver';
import LifeBar from './LifeBar';

interface BattlefieldProps {
  fightOn: boolean;
  fightOver: boolean;
  heroWon: boolean;
  winAmount: number;
  loseAmount: number;
  gold: number;
  herosLife: number;
  herosEquipment: EquipmentType[];
  winGold: (amount: number) => void;
  loseGold: (amount: number) => void;
  gameOver: () => void;
}

interface BattlefieldState {
  fightOn: boolean;
  fightOver: boolean;
  heroWon: boolean;
  winAmount: number;
  loseAmount: number;
  gameOver: boolean;
  herosLife: number;
}

interface MapStateProps {
  heroReducer: {
    gold: number;
    life: number;
    equipment: EquipmentType[];
  }
}

interface DispatchProps {
  winGold: (amount: number) => void;
  loseGold: (amount: number) => void;
  gameOver: () => void;
}

export class Battlefield extends React.Component<BattlefieldProps, BattlefieldState> {
  constructor(props: BattlefieldProps) {
    super(props);
    this.state = {
      fightOn: false,
      fightOver: false,
      heroWon: false,
      winAmount: 3,
      loseAmount: 2,
      gameOver: false,
      herosLife: 0
    }
  }

  componentDidMount() {
    this.setState({ herosLife: this.props.herosLife });
  }

  fight = () => {
    this.setState({ fightOn: true });
    const heroElement = document.getElementById('hero-charater');
    const dragonElement = document.getElementById('dragon-character');
    if (heroElement && dragonElement) {
      heroElement.animate({
        transform: ['rotate(0deg)', 'rotate(360deg)'],
      }, {
          duration: 1000,
          iterations: 2,
      });

      dragonElement.animate({
        transform: [ 'translateY(0px)', 'translateY(10px)' ]
        }, {
          duration: 1000,
          iterations: 2
        });
    }

    const randomNum = Math.floor(Math.random() * 101);
    let heroWon: boolean;
    randomNum % 2 === 0 ? heroWon = true : heroWon = false;

    setTimeout(() => {
      this.setState({
        fightOn: false,
        fightOver: true,
        heroWon: heroWon
      });
      heroWon ? this.battleWon() : this.battleLost();
    }, 2000);
  }

  battleWon = () => {
    this.setState({ herosLife: 100 });
    this.winGold();
  }

  winGold = () => {
    this.props.winGold(this.state.winAmount);
  }

  battleLost = () => {
    this.setState({ herosLife: 0 });
    if (this.props.gold - this.state.loseAmount <= 0) {
      this.gameOver();
    } else {
      this.loseGold();
    }
  }

  loseGold = () => {
    this.props.loseGold(this.state.loseAmount);
  }

  gameOver = () => {
    this.setState({
      gameOver: true
    });
    this.props.gameOver();
  }

  render() {
    const { gold, herosEquipment } = this.props;

    return (
      <div>
        {this.state.gameOver
        ? 
          <GameOver />
        :
          <div className="battlefield">
            <h1>Battlefield</h1>
            <div className="battlefield-hero-stats">
              <p>Gold: {gold}</p>
              <HeroStats equipment={herosEquipment} />
              <LifeBar life={this.state.herosLife} />
            </div>

            <div className="battlefield-characters">
              <div className="battlefield-character" id="hero-charater">
                <img src="/images/hero.png" alt="hero" className="battlefield-character-image" />
              </div>
              <div className="battlefield-character" id="dragon-character">
                <img src="/images/dragon.png" alt="dragon" className="battlefield-character-image" />
              </div>
            </div>

            <div className="battlefield-actions">
              <button className="button battlefield-fight-button" onClick={this.fight}>Fight</button>
              {this.state.fightOver && !this.state.fightOn  && this.state.heroWon
              ? <p>You won!</p>
              : null}
              {this.state.fightOver && !this.state.fightOn  && !this.state.heroWon
              ? <p>You lost!</p>
              : null}
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state: MapStateProps) => ({
  gold: state.heroReducer.gold,
  herosLife: state.heroReducer.life,
  herosEquipment: state.heroReducer.equipment
})

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  winGold: (amount: number) => dispatch(winGold(amount)),
  loseGold: (amount: number) => dispatch(loseGold(amount)),
  gameOver: () => dispatch(gameOver())
});

export default connect(mapStateToProps, mapDispatchToProps)(Battlefield);