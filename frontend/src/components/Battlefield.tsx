import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { winGold, loseGold, gameOver } from '../store/hero/actions';
import { EquipmentType } from '../store/equipment/types';
import HeroStats from './HeroStats';
import DragonStats from './DragonStats';
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
  herosHit: number;
  dragonsLife: number;
  dragonsHit: number;
  maxHitForHero: number;
  minHitForHero: number;
  maxHitForDragon: number;
  minHitForDragon: number;
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
      herosLife: 100,
      herosHit: 0,
      dragonsLife: 100,
      dragonsHit: 0,
      maxHitForHero: 30,
      minHitForHero: 0,
      maxHitForDragon: 40,
      minHitForDragon: 0
    }
  }

  componentDidMount() {
    // @TODO Better solution for maxHit calculations, now duplicates
    let attack = 0, defense = 0, maxHitForHero = 30, maxHitForDragon = 40;
    this.props.herosEquipment.map(equip => {
      return (
        equip.stats.map(stat => {
          if (stat.title.toLowerCase() === "attack") {
            return attack += stat.points;
          } else if (stat.title.toLowerCase() === "defense") {
            return defense += stat.points;
          }
          return null;
        })
      );
    });

    this.setState({
      herosLife: this.props.herosLife,
      maxHitForHero: maxHitForHero + attack,
      minHitForHero: attack,
      maxHitForDragon: maxHitForDragon - defense
    });
  }

  startFight = async () => {
    await this.setState({
      fightOn: true,
      herosLife: this.props.herosLife,
      dragonsLife: 100,
      herosHit: 0,
      dragonsHit: 0
    });
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
    await this.wait(1000);
    this.animation('hero-character', 'translateX(10px)', 'translateX(-10px)');
    const herosHit = await Math.floor(Math.random() * (+this.state.maxHitForHero - +this.state.minHitForHero) + +this.state.minHitForHero);
    let dragonsLife = await this.state.dragonsLife - herosHit;
    if (dragonsLife < 0) {
      dragonsLife = 0;
    }
    await this.setState({
      dragonsLife: dragonsLife,
      herosHit
    });

    if (this.state.dragonsLife > 0) {
      await this.wait(1000);
      this.animation('dragon-character', 'translateY(-10px)', 'translateY(10px)');
      const dragonsHit = await Math.floor(Math.random() * (+this.state.maxHitForDragon - +this.state.minHitForDragon) + +this.state.minHitForDragon);
      let herosLife = await this.state.herosLife - dragonsHit;
      if (herosLife < 0) {
        herosLife = 0;
      }
      await this.setState({
        herosLife: herosLife,
        dragonsHit
      });
    }
    this.fight();
  }

  battleOver = () => {
    let heroWon: boolean;
    this.state.herosLife > 0 ? heroWon = true : heroWon = false;
    this.setState({
      fightOn: false,
      fightOver: true,
      heroWon: heroWon
    });
    heroWon ? this.battleWon() : this.battleLost();
  }

  battleWon = () => {
    this.winGold();
  }

  winGold = () => {
    this.props.winGold(this.state.winAmount);
  }

  battleLost = () => {
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

            <div className="battlefield-characters">
              <div className="battlefield-character hero-character">
                <div className="battlefield-hero-stats">
                  <p>Gold: {gold}</p>
                  <HeroStats equipment={herosEquipment} />
                </div>
                <LifeBar life={this.state.herosLife} />
                <div className="battlefield-damage hero-damage">
                  {this.state.fightOn || this.state.fightOver
                  ? -this.state.dragonsHit
                  : null}
                </div>
                <img src="/images/hero.png" alt="hero" className="battlefield-character-image" id="hero-character" />
              </div>
              <div className="battlefield-character dragon-character">
                <div className="battlefied-dragon-stats">
                  <DragonStats
                    maxHit={this.state.maxHitForDragon}
                    minHit={this.state.minHitForDragon}
                  />
                </div>
                <LifeBar life={this.state.dragonsLife} />
                <div className="battlefield-damage dragon-damage">
                  {this.state.fightOn || this.state.fightOver
                  ? -this.state.herosHit
                  : null}
                </div>
                <img src="/images/dragon.png" alt="dragon" className="battlefield-character-image" id="dragon-character" />
              </div>
            </div>

            <div className="battlefield-actions">
              <button className="button battlefield-fight-button" onClick={this.startFight}>Fight</button>
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