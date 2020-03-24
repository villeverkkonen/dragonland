import React, { MouseEvent } from 'react'
import { connect } from 'react-redux'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Hero from '../components/Hero'
import EquipmentShop from '../components/EquipmentShop'
import Battlefield from '../components/Battlefield'
import GameOver from '../components/GameOver'
import GameWin from '../components/GameWin'

interface RoutesProps {
  name: string
  fightOn: boolean
}

interface RoutesState {
  heroReducer: {
    name: string
  }
  battlefieldReducer: {
    fightOn: boolean
  }
}

class Routes extends React.Component<RoutesProps, any> {
  // Prevent click if fight is on
  checkIfFightOn = (e: MouseEvent) => {
    if (this.props.fightOn) {
      e.preventDefault()
    }
  }

  render() {
    const { name } = this.props as RoutesProps

    return (
      <Router>
        <header className="header">
          <Link to="/" onClick={this.checkIfFightOn}>
            <img src="favicon.png" alt="logo" className="logo" />
          </Link>
          <div className="container">
            <nav className="nav">
              <ul className="nav-ul">
                <li className="nav-li">
                  <Link
                    to="/hero"
                    className="nav-link"
                    onClick={this.checkIfFightOn}
                  >
                    Hero
                  </Link>
                </li>
                {name ? (
                  <li className="nav-li">
                    <Link
                      to="/shop"
                      className="nav-link"
                      onClick={this.checkIfFightOn}
                    >
                      Shop
                    </Link>
                  </li>
                ) : null}
                {name ? (
                  <li className="nav-li">
                    <Link
                      to="/battlefield"
                      className="nav-link"
                      onClick={this.checkIfFightOn}
                    >
                      Battlefield
                    </Link>
                  </li>
                ) : null}
              </ul>
            </nav>
          </div>
        </header>
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/hero" component={Hero} />
            <Route path="/shop" component={EquipmentShop} />
            <Route path="/battlefield" component={Battlefield} />
            <Route path="/gameover" component={GameOver} />
            <Route path="/gamewin" component={GameWin} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state: RoutesState) => ({
  name: state.heroReducer.name,
  fightOn: state.battlefieldReducer.fightOn,
})

export default connect(mapStateToProps)(Routes)
