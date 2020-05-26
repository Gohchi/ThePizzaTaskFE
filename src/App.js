import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Products from './components/Products';
import Confirm from './components/Confirm';
import ContactInfo from './components/ContactInfo';

import Button from '@material-ui/core/Button';
import Toolbar from './components/Toolbar';

import './App.css';

import { calculateTotalCount } from './tools';

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    cartTotal: calculateTotalCount(state.cart),
    currency: state.currency,
    pizzas: state.pizzas
  }
}

class App extends Component {
  // constructor(props){
  //   super(props)
  // }
  
  render() {
    // console.log(this.props);

    const { pizzas } = this.props;
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
              <Route path="/contactinfo">
                <ContactInfo />
              </Route>
              <Route path="/confirm">
                <Confirm />
              </Route>
              <Route path="/products">
                {this.props.cartTotal > 0 ? 
                  <Link to="/confirm" className="no-link">
                    <Button variant="contained" color="secondary" size="large" id="to-confirm">Proceed</Button>
                  </Link>
                  : undefined}
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