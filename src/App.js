import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Products from './components/Products';
import Toolbar from './components/Toolbar';
import './App.css';

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    currency: state.currency
  }
}


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pizzas: [
        { id: 1, name: 'Salami', price: 5, description: 'With tomatoes and olives.', photo: 'p1' },
        { id: 2, name: 'Margherita', price: 5, description: 'Neapolitan pizza, made with tomatoes, fresh basil and olive oil.', photo: 'p2' },
        { id: 3, name: 'Pepperoni', price: 5, description: 'A great crust, gooey cheese, and tons of pepperoni.', photo: 'p3' },
        { id: 4, name: 'Sausages', price: 5, description: 'Sausages', photo: 'p4' },
        { id: 5, name: 'Mushrooms', price: 5, description: 'Mushrooms', photo: 'p5' },
        { id: 6, name: 'Chicken', price: 5, description: 'Chicken mushroom bell peppers cheese', photo: 'p6' },
        { id: 7, name: 'Green', price: 5, description: 'Sausages greens and parmesan', photo: 'p7' },
        { id: 8, name: 'Shrimp', price: 5, description: 'With shrimp, salmon and olives', photo: 'p8' },
      ]
    }
  }
  
  render() {
    // console.log(this.props.cart);

    const { pizzas } = this.state;
    return (
      <Router>
        <div className="main">
          <Toolbar />
          <div className="box">
            <Switch>
              <Route path="/cart">
                <div style={{ margin: '100px' }}>cart</div>
              </Route>
              <Route path="/orders">
                <div style={{ margin: '100px' }}>orders</div>
              </Route>
              <Route path="/products">
                {pizzas.map((o, i) => 
                  <Products key={i} {...o} amount={this.props.cart[o.id]} />
                )}
              </Route>
              <Route path="/">
                <Button
                  variant="contained" color="secondary" size="large"
                  id="order-now"
                >
                  <Link to="/products" className="no-link">Order now</Link>
                </Button>
              </Route>
            </Switch>
          </div>
          {/* <a href="http://www.freepik.com" id="bg-owner-info">Background designed by Freepik</a> */}
        </div>
      </Router>
    )
  }
}

export default connect(mapStateToProps)(App);