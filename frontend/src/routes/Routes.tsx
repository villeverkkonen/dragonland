import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Hero from '../components/Hero';
import EquipmentShop from '../components/EquipmentShop';
import Battlefield from '../components/Battlefield';

interface RoutesProps {
  name: string,
}

interface RoutesState {
  heroReducer: {
    name: string
  }
}

class Routes extends React.Component<RoutesProps> {
  render() {

    const { name } = this.props;
    return (
      <Router>
        <header className="header">
          <Link to="/"><img src="favicon.png" alt="logo" className="logo" /></Link>
          <div className="container">
            <nav className="nav">
              <ul className="nav-ul">
                <li className="nav-li"><Link to="/hero" className="nav-link">Hero</Link></li>
                {name ? <li className="nav-li"><Link to="/shop" className="nav-link">Shop</Link></li> : null}
                {name ? <li className="nav-li"><Link to="/battlefield" className="nav-link">Battlefield</Link></li> : null}
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
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state: RoutesState) => ({
  name: state.heroReducer.name
});

export default connect(mapStateToProps)(Routes);