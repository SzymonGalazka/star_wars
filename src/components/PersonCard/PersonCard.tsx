import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { PersonDataType } from '../../utils/playerModels';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  winner: {
    color: '#2E8B57',
  },
});

const PersonCard = (props: PersonDataType & { isWinner: boolean } ) => {
  const classes = useStyles();

  return (
    <div style={{ display: "inline-block" }}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            <b>Name: </b> {props.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <b>Gender: </b> {props.gender}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <b>Mass: </b> {props.mass}
          </Typography>
          {props.isWinner && <Typography className={classes.winner} color="textSecondary">
            <b> Wins! </b>
          </Typography>}
        </CardContent>
      </Card>
    </div>
  );
}

export default PersonCard;