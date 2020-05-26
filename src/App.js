import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Tooltip from '@material-ui/core/Tooltip';

import ButtonGroup from '@material-ui/core/ButtonGroup';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { Button } from '@material-ui/core';
import Products from './components/Products'
import './App.css';
import { setCurrency } from './actions';

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    cartTotal: Object.values(state.cart).reduce((t, v) => v + t, 0),
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

    const handleCurrency = code => {
      return () => {
        this.props.setCurrency(code);
      }
    }
    const getVariant = code => {
      return code===this.props.currency.code ? undefined : "outlined";
    }
    const { pizzas } = this.state;
    return (
      <Router>
        <div className="main">
          <AppBar>
            <Toolbar>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                <Link to="/" className="no-link">
                  The Pizza Task
                </Link>
              </Typography>
              <ButtonGroup variant="contained" aria-label="outlined primary button group" id="currency">
                <Button variant={getVariant('EUR')} onClick={handleCurrency('EUR')}> EURO </Button>
                <Button variant={getVariant('USD')} onClick={handleCurrency('USD')}> USD </Button>
              </ButtonGroup>
              <Tooltip title="Cart" aria-label="cart">
                
                  <IconButton color="inherit" aria-label="cart">
                    <Badge badgeContent={this.props.cartTotal} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
              </Tooltip>
              <Tooltip title="Orders" aria-label="orders">
                <IconButton color="inherit" aria-label="orders">
                  <ListAltIcon />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>
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

export default connect(mapStateToProps, { setCurrency })(App);