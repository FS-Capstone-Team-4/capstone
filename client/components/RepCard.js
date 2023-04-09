import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    paddingLeft: '200px',
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
}));

const RepCard = props => {
  function extractIdFromUrl(url) {
    if(url){
      const parts = url.split('/');
      return parts.pop().split('.')[0];
    }
    return null;
  }

  const classes = useStyles();

  return (
    <div>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                title={props.member.name}
                image={props.member.photoUrl}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {`${props.member.name} (${props.member.party})`}
                </Typography>
                <Button
                  variant='contained'
                  color='primary'
                  href={`#/congressmembers/${extractIdFromUrl(props.member.photoUrl)}`}
                >
                  Visit Page
                </Button>
              </CardContent>
            </Card>
    </div>
  );
};

export default RepCard;
