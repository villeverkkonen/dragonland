import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { winGold, loseGold, gameOver, incrementRoundsFought } from '../store/hero/actions';
import { EquipmentType } from '../store/equipment/types';
import HeroStats from './HeroStats';
import DragonStats from './DragonStats';
import GameOver from './GameOver';
import GameWin from './GameWin';
import LifeBar from './LifeBar';
import highscores from '../services/highscores';

interface BattlefieldProps {
  name: string;
  roundsFought: number;
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
    this.props.incrementRoundsFought();
    this.fight();
  }

  fight = async () => {
    if (this.state.herosLife <= 0 || this.state.dragonsLife <= 0) {
      await this.battleOver();
    } else {
      await this.dealDamage();
    }
  }

  wait = (ms: number) => new Promise(res => setTimeout(res, ms));

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
    this.animation('hero-character', 'translateX(10px)', 'translateX(-10px)');
    const herosHit = await Math.floor(Math.random() * (this.props.maxHitForHero + 1));
    let dragonsLife = await this.state.dragonsLife - herosHit;
    if (dragonsLife < 0) {
      dragonsLife = 0;
    }
    await this.setState({
      dragonsLife,
      herosHit
    });

    // Dragon hits 1 second after Hero
    if (this.state.dragonsLife > 0) {
      await this.wait(1000);
      this.animation('dragon-character', 'translateY(-10px)', 'translateY(10px)');
      const dragonsHit = await Math.floor(Math.random() * (this.state.maxHitForDragon + 1));
      let herosLife = await this.state.herosLife - dragonsHit;
      if (herosLife < 0) {
        herosLife = 0;
      }
      await this.setState({
        herosLife,
        dragonsHit
      });
    }
    this.fight();
  }

  battleOver = async () => {
    let heroWon: boolean;
    this.state.herosLife > 0 ? heroWon = true : heroWon = false;
    this.setState({
      fightOn: false,
      fightOver: true,
      showWinner: true,
      heroWon
    });
    heroWon ? this.battleWon() : this.battleLost();
    await this.wait(2000);
    this.setState({ showWinner: false });
  }

  battleWon = async () => {
    this.winGold();
    if (this.props.everyEquipmentCollected) {
      await this.newHighscore();
      await this.gameWin();
    }
  }

  newHighscore = () => {
    const highscore = {
      name: this.props.name,
      roundsFought: this.props.roundsFought,
      gold: this.props.gold
    }
    return highscores.newHighscore(highscore);
  }

  winGold = () => {
    this.props.winGold(this.state.winAmount);
  }

  battleLost = () => {
    if ((this.props.gold - this.state.loseAmount <= 0) || this.props.everyEquipmentCollected) {
      this.gameOver();
    } else {
      this.loseGold();
    }
  }

  loseGold = () => {
    this.props.loseGold(this.state.loseAmount);
  }

  gameWin = async () => {
    await this.wait(500);
    this.setState({ gameWin: true });
    this.gameOver();
  }

  gameOver = async () => {
    this.setState({
      gameOver: true
    });
    this.props.gameOver();
  }

  render() {
    return (
      <div>
        {this.state.gameWin
        ?
          <GameWin />
        :
          this.state.gameOver
          ? 
            <GameOver />
          :
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
                  <img src="/images/hero.png" alt="hero" className="battlefield-character-image" id="hero-character" />
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
                  {this.props.everyEquipmentCollected
                  ?
                    <img src="/images/dragon-boss.png" alt="dragon" className="battlefield-character-image" id="dragon-character" />
                  :
                    <img src="/images/dragon.png" alt="dragon" className="battlefield-character-image" id="dragon-character" />
                  }
                </div>
              </div>

              <div className="battlefield-actions">
                {this.state.fightOn
                ?
                  <button className="button battlefield-fight-button disabled" disabled>Fight</button>
                :
                  <button className="button battlefield-fight-button" onClick={this.startFight}>Fight</button>
                }
                {this.state.fightOver && !this.state.fightOn  && this.state.heroWon && this.state.showWinner
                ? <p>You won!</p>
                : null}
                {this.state.fightOver && !this.state.fightOn  && !this.state.heroWon && this.state.showWinner
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
  name: state.heroReducer.name,
  roundsFought: state.heroReducer.roundsFought,
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
  incrementRoundsFought: () => dispatch(incrementRoundsFought())
});

export default connect(mapStateToProps, mapDispatchToProps)(Battlefield);