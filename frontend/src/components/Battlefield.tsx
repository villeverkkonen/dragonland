import React, { Dispatch } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { winGold, loseGold, gameOver, incrementRoundsFought, incrementHits } from '../store/hero/actions';
import { switchFightOn } from '../store/battlefield/actions';
import { EquipmentType } from '../store/equipment/types';
import HeroStats from './HeroStats';
import DragonStats from './DragonStats';
import LifeBar from './LifeBar';
import highscores from '../services/highscores';

interface BattlefieldProps {
  name: string;
  roundsFought: number;
  hits: number;
  gold: number;
  fightOn: boolean;
  fightOver: boolean;
  heroWon: boolean;
  winAmount: number;
  loseAmount: number;
  herosLife: number;
  attack: number;
  defense: number;
  maxHitForHero: number;
  everyEquipmentCollected: boolean;
  herosEquipment: EquipmentType[];
  winGold: (amount: number) => void;
  loseGold: (amount: number) => void;
  gameOver: () => void;
  incrementRoundsFought: () => void;
  incrementHits: () => void;
  switchFightOn: () => void;
}

interface BattlefieldState {
  fightOn: boolean;
  fightOver: boolean;
  heroWon: boolean;
  winAmount: number;
  loseAmount: number;
  gameOver: boolean;
  gameWin: boolean;
  herosHit: number;
  herosLife: number;
  dragonsLife: number;
  dragonsHit: number;
  maxHitForDragon: number;
  extraHitForGreenDragon: number;
  showWinner: boolean;
}

interface MapStateProps {
  heroReducer: {
    name: string;
    roundsFought: number;
    hits: number;
    gold: number;
    life: number;
    equipment: EquipmentType[];
    attack: number;
    defense: number;
    maxHit: number;
    everyEquipmentCollected: boolean;
  }
}

interface DispatchProps {
  winGold: (amount: number) => void;
  loseGold: (amount: number) => void;
  gameOver: () => void;
  incrementRoundsFought: () => void;
  incrementHits: () => void;
  switchFightOn: () => void;
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
      gameWin: false,
      herosHit: 0,
      herosLife: 100,
      dragonsLife: 100,
      dragonsHit: 0,
      maxHitForDragon: 30,
      extraHitForGreenDragon: 9,
      showWinner: false
    }
  }

  componentDidMount() {
    // Stats for Green Dragon if all equipment have been collected
    if (this.props.everyEquipmentCollected) {
      this.setState({
        maxHitForDragon: this.state.maxHitForDragon - this.props.defense + this.state.extraHitForGreenDragon
      });
    } else {
      this.setState({
        maxHitForDragon: this.state.maxHitForDragon - this.props.defense
      });
    }
  }

  startFight = async () => {
    await this.setState({
      fightOn: true,
      herosLife: this.props.herosLife,
      dragonsLife: 100,
      herosHit: 0,
      dragonsHit: 0
    });
    this.props.switchFightOn();
    this.props.incrementRoundsFought();
    this.fight();
  }

  fight = () => {
    if (this.state.herosLife <= 0 || this.state.dragonsLife <= 0) {
      this.battleOver();
    } else {
      this.dealDamage();
    }
  }

  wait = (ms: number) => new Promise(res => setTimeout(res, ms));

  showWinnerForTwoSec = async () => {
    this.setState({ showWinner: true });
    await this.wait(2000);
    this.setState({ showWinner: false });
  }

  animation = (elementId: string, transformParams1: string, transformParams2: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.animate({
          transform: [transformParams1, transformParams2],
      }, {
          duration: 500,
          iterations: 1,
      });
    }
  }

  dealDamage = async () => {
    // Hero hits first after 1 second
    await this.wait(1000);
    this.props.incrementHits();
    this.animation('hero-character', 'translateX(10px)', 'translateX(-10px)');
    const herosHit = Math.floor(Math.random() * (this.props.maxHitForHero + 1));
    let dragonsLife = this.state.dragonsLife - herosHit;
    if (dragonsLife < 0) {
      dragonsLife = 0;
    }
    this.setState({
      dragonsLife,
      herosHit
    });

    // Dragon hits 1 second after Hero
    if (this.state.dragonsLife > 0) {
      await this.wait(1000);
      this.animation('dragon-character', 'translateY(-10px)', 'translateY(10px)');
      const dragonsHit = Math.floor(Math.random() * (this.state.maxHitForDragon + 1));
      let herosLife = this.state.herosLife - dragonsHit;
      if (herosLife < 0) {
        herosLife = 0;
      }
      this.setState({
        herosLife,
        dragonsHit
      });
    }
    this.fight();
  }

  battleOver = async () => {
    await this.props.switchFightOn();
    let heroWon: boolean;
    this.state.herosLife > 0 ? heroWon = true : heroWon = false;
    await this.setState({
      fightOn: false,
      fightOver: true,
      heroWon
    });
    heroWon ? this.battleWon() : this.battleLost();
  }

  battleWon = async () => {
    if (this.props.everyEquipmentCollected) {
      await this.newHighscore();
      await this.gameWin();
    } else {
      this.winGold();
      this.showWinnerForTwoSec();
    }
  }

  newHighscore = async () => {
    const highscore = {
      name: this.props.name,
      roundsFought: this.props.roundsFought,
      hits: this.props.hits,
      gold: this.props.gold
    }
    await highscores.newHighscore(highscore);
  }

  winGold = () => {
    this.props.winGold(this.state.winAmount);
  }

  battleLost = async () => {
    if ((this.props.gold - this.state.loseAmount < 0) || this.props.everyEquipmentCollected) {
      this.gameOver();
    } else {
      this.loseGold();
      this.showWinnerForTwoSec();
    }
  }

  loseGold = () => {
    this.props.loseGold(this.state.loseAmount);
  }

  gameWin = async () => {
    await this.setState({
      gameWin: true,
      gameOver: true
    });
    await this.props.gameOver();
  }

  gameOver = async () => {
    await this.setState({
      gameOver: true
    });
    await this.props.gameOver();
  }

  render() {
    if (!this.props.name) {
      return <Redirect to="/" />;
    }
    if (this.state.gameWin) {
      return <Redirect to="/gamewin" />;
    }
    if (this.state.gameOver) {
      return <Redirect to="/gameover" />
    }
    return (
      <div className="battlefield">
        <h1>Battlefield</h1>

        <div className="battlefield-characters">
          <div className="battlefield-character hero-character">
            <div className="battlefield-hero-stats">
              <HeroStats />
            </div>
            <LifeBar
              life={this.state.herosLife}
              fightOn={this.state.fightOn}
              fightOver={this.state.fightOver}
              hitAmount={this.state.dragonsHit}
            />
            {this.state.fightOver && !this.state.fightOn
            ?
              this.state.heroWon
              ? <img src="/images/hero.png" alt="hero" className="battlefield-character-image" id="hero-character" />
              : <img src="/images/hero.png" alt="hero" className="battlefield-character-image invisible-img" id="hero-character" />
            : <img src="/images/hero.png" alt="hero" className="battlefield-character-image" id="hero-character" />}
          </div>
          <div className="battlefield-character dragon-character">
            <div className="battlefied-dragon-stats">
              <DragonStats
                maxHit={this.state.maxHitForDragon}
              />
            </div>
            <LifeBar
              life={this.state.dragonsLife}
              fightOn={this.state.fightOn}
              fightOver={this.state.fightOver}
              hitAmount={this.state.herosHit}
            />
            {this.state.fightOver && !this.state.fightOn
            ?
              !this.state.heroWon
              ?
                this.props.everyEquipmentCollected
                ? <img src="/images/dragon-boss.png" alt="dragon" className="battlefield-character-image" id="dragon-character" />
                : <img src="/images/dragon.png" alt="dragon" className="battlefield-character-image" id="dragon-character" />
              : <img src="/images/dragon.png" alt="dragon" className="battlefield-character-image invisible-img" id="dragon-character" />
            :
              this.props.everyEquipmentCollected
              ? <img src="/images/dragon-boss.png" alt="dragon" className="battlefield-character-image" id="dragon-character" />
              : <img src="/images/dragon.png" alt="dragon" className="battlefield-character-image" id="dragon-character" />
            }
          </div>
        </div>

        <div className="battlefield-actions">
          {!this.state.fightOn
          ? <button className="button battlefield-fight-button" onClick={this.startFight}>Fight</button>
          : null}
          {this.state.fightOver && !this.state.fightOn  && this.state.heroWon && this.state.showWinner
          ? <p>You won!</p>
          : null}
          {this.state.fightOver && !this.state.fightOn  && !this.state.heroWon && this.state.showWinner
          ? <p>You lost!</p>
          : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: MapStateProps) => ({
  name: state.heroReducer.name,
  roundsFought: state.heroReducer.roundsFought,
  hits: state.heroReducer.hits,
  gold: state.heroReducer.gold,
  herosLife: state.heroReducer.life,
  attack: state.heroReducer.attack,
  defense: state.heroReducer.defense,
  maxHitForHero: state.heroReducer.maxHit,
  everyEquipmentCollected: state.heroReducer.everyEquipmentCollected,
  herosEquipment: state.heroReducer.equipment
})

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  winGold: (amount: number) => dispatch(winGold(amount)),
  loseGold: (amount: number) => dispatch(loseGold(amount)),
  gameOver: () => dispatch(gameOver()),
  incrementRoundsFought: () => dispatch(incrementRoundsFought()),
  incrementHits: () => dispatch(incrementHits()),
  switchFightOn: () => dispatch(switchFightOn())
});

export default connect(mapStateToProps, mapDispatchToProps)(Battlefield);