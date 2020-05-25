import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Tooltip from '@material-ui/core/Tooltip';

import ButtonGroup from '@material-ui/core/ButtonGroup';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  
  render() {
    return (
      <div className="main">
        <AppBar>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              The Pizza Task
            </Typography>
            <ButtonGroup variant="contained" color="secondary" aria-label="outlined primary button group" id="currency">
              <Button> EURO </Button>
              <Button> USD </Button>
            </ButtonGroup>
            <Tooltip title="Cart" aria-label="cart">
              <IconButton color="inherit" aria-label="cart">
                <ShoppingCartIcon />
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
          <Button
            variant="contained" color="secondary" size="large"
            id="order-now">Order now</Button>
        </div>
        <a href="http://www.freepik.com" id="bg-owner-info">Background designed by Freepik</a>
      </div>
    )
  }
}

export default App;