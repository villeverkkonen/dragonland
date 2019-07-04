import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Hero from '../components/Hero';
import EquipmentShop from '../components/EquipmentShop';

const Routes = () => {
  return (
    <Router>
      <header className="header">
        <Link to="/"><img src="favicon.png" alt="logo" className="logo" /></Link>
        <div className="container">
          <nav className="nav">
            <ul className="nav-ul">
              <li className="nav-li"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-li"><Link to="/hero" className="nav-link">Hero</Link></li>
              <li className="nav-li"><Link to="/shop" className="nav-link">Shop</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hero" component={Hero} />
          <Route path="/shop" component={EquipmentShop} />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes;