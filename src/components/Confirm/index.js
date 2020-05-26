import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { calculateTotalCount, roundNumber } from '../../tools';

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    cartTotal: calculateTotalCount(state.cart),
    currency: state.currency,
    pizzas: state.pizzas
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'left',
    // display: 'flex',
    // flexWrap: 'wrap',
    // '& > *': {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(16),
    //   height: theme.spacing(16),
    // },
  },
  item: {
    // height: theme.spacing(6),
    display: 'flex',
    margin: '10px 0',
    padding: '5px'
    // paddingTop: '15px',
    // fontSize: '22px'
  }
}));

export default connect(mapStateToProps)(( props ) => {
  const classes = useStyles();

  const { base, symbol } = props.currency;

  // const calculatePrice = price => {
  //   return `${base * price} ${symbol}`;
  // }
  const calculatePriceByAmount = ( price, amount ) => {
    return `${roundNumber(base * price * amount)} ${symbol}`;
  }

  const items = Object.keys(props.cart).map(key => {
    const amount = props.cart[key];
    const pizza = props.pizzas.filter(o => o.id === parseInt(key))[0];
    return Object.assign({ key, amount }, pizza, { name: 'Pizza: ' + pizza.name });
  })

  items.push({ key: 'd', name: 'Delivery fee', amount: 1, price: 3 });

  return (
    <Container maxWidth="sm" className={classes.root}>
      {items.map(item => {
        return (
          <Paper elevation={3} className={classes.item} key={item.key}>
            <Typography style={{ flexGrow: 1 }}>
              {item.name} ({item.amount})
            </Typography>
            <Typography>
              {calculatePriceByAmount(item.price, item.amount)}
            </Typography>
          </Paper>
        ) 
      })}
      <Button
        variant="contained" color="secondary" size="large"
        id="confirm-button"
      >
        <Link to="/confirmed" className="no-link">Confirm</Link>
      </Button>
    </Container>
  );
});