import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import BeerListPage from './pages/beers/beers';
import BeerDetailsPage from './pages/beer-details/beerDetails';

class App extends Component {
    render() {
      return (
          <div className="container">
            <div className="ui two item menu">
              <NavLink className="item" activeClassName="active" exact to="/">Beers</NavLink>
            </div>
            <Route exact path="/" component={BeerListPage}/>
			<Route exact path="/beers/:id" component={BeerDetailsPage}/>
          </div>
      );
   }
}

export default App;
