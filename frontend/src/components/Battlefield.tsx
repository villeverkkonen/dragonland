import React from 'react';

export class Battlefield extends React.Component {

  fight = () => {
    const heroElement = document.getElementById('hero-charater');
    const dragonElement = document.getElementById('dragon-character');
    if (heroElement && dragonElement) {
      heroElement.animate({ transform: [ 'rotate(0deg)', 'rotate(360deg)' ] },
        { duration: 1000, iterations: 2 });

      dragonElement.animate({ transform: [ 'translateY(0px)', 'translateY(10px)' ] },
        { duration: 1000, iterations: 2 });
    }
  }

  render() {
    return (
      <div className="battlefield">
        <h3>Battlefield</h3>

        <div className="battlefield-characters">
          <div className="battlefield-character" id="hero-charater">
            <img src="/images/hero.png" alt="hero" className="battlefield-character-image" />
          </div>
          <div className="battlefield-character" id="dragon-character">
            <img src="/images/dragon.png" alt="dragon" className="battlefield-character-image" />
          </div>
        </div>
        <div>
          <button className="button battlefield-fight-button" onClick={this.fight}>Fight</button>
        </div>
      </div>
    );
  };
}

export default Battlefield;