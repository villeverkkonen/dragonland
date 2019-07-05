import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Hero from '../components/Hero';
import EquipmentShop from '../components/EquipmentShop';
import Battlefield from '../components/Battlefield';

const Routes = () => {
  return (
    <Router>
      <header className="header">
        <Link to="/"><img src="favicon.png" alt="logo" className="logo" /></Link>
        <div className="container">
          <nav className="nav">
            <ul className="nav-ul">
              <li className="nav-li"><Link to="/hero" className="nav-link">Hero</Link></li>
              <li className="nav-li"><Link to="/shop" className="nav-link">Shop</Link></li>
              <li className="nav-li"><Link to="/battlefield" className="nav-link">Battlefield</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="content">
        <Switch>
          <Route path="/hero" component={Hero} />
          <Route path="/shop" component={EquipmentShop} />
          <Route path="/battlefield" component={Battlefield} />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes;