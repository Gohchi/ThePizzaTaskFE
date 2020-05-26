import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';

import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 445,
    margin: '20px',
    display: 'inline-block',
    textAlign: 'left'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));


export default function ( props ) {
  const { name, description, photo } = props;
  // const url = require(`../../images/${photo}.jpg`);
  const urlSmall = require(`../../images/${photo}-small.jpg`);
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the Chip.');
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        title={name}
      />
      <CardMedia
        className={classes.media}
        image={urlSmall}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" color="secondary">
          <AddCircle />
        </IconButton>
        <IconButton aria-label="share">
          <RemoveCircle />
        </IconButton>
        <Chip
          label="1"
          className={classes.expand}
          onDelete={handleDelete}
          color="secondary"
        />
      </CardActions>
    </Card>
  );
}