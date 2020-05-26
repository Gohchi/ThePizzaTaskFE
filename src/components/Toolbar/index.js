import React from 'react';
import { connect } from 'react-redux';
import {
  Link
} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

import ButtonGroup from '@material-ui/core/ButtonGroup';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';

import { setCurrency } from '../../actions';


const mapStateToProps = (state) => {
  return {
    cartTotal: Object.values(state.cart).reduce((t, v) => v + t, 0),
    currency: state.currency
  }
}

export default connect( mapStateToProps, { setCurrency })(function ( props ) {

  const handleCurrency = code => {
    return () => {
      props.setCurrency(code);
    }
  }
  const getVariant = code => {
    return code===props.currency.code ? undefined : "outlined";
  }
  
  return (
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
              <Badge badgeContent={props.cartTotal} color="secondary">
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
  );
});