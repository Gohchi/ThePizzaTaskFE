import React, { Component } from 'react';
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


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pizzas: [
        { name: 'Salami', description: 'With tomatoes and olives.', photo: 'p1' },
        { name: 'Margherita', description: 'Neapolitan pizza, made with tomatoes, fresh basil and olive oil.', photo: 'p2' },
        { name: 'Pepperoni', description: 'A great crust, gooey cheese, and tons of pepperoni.', photo: 'p3' },
        { name: 'Sausages', description: 'Sausages', photo: 'p4' },
        { name: 'Mushrooms', description: 'Mushrooms', photo: 'p5' },
        { name: 'Chicken', description: 'Chicken mushroom bell peppers cheese', photo: 'p6' },
        { name: 'Green', description: 'Sausages greens and parmesan', photo: 'p7' },
        { name: 'Shrimp', description: 'With shrimp, salmon and olives', photo: 'p8' },
      ]
    }
  }
  
  render() {
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
              <ButtonGroup variant="contained" color="secondary" aria-label="outlined primary button group" id="currency">
                <Button> EURO </Button>
                <Button> USD </Button>
              </ButtonGroup>
              <Tooltip title="Cart" aria-label="cart">
                
                  <IconButton color="inherit" aria-label="cart">
                    <Badge badgeContent={8} color="secondary">
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
                  <Products key={i} {...o} />
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

export default App;