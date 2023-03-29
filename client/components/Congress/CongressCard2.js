import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
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
    paddingTop: '56.25%', // 16:9
  },
}));

const CardGrid = ({data}) => {
  const classes = useStyles();
  console.log("data", data[0])
  
  return (
    <div >
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                title={item.name}
                image='public/vector-users-icon.jpeg'
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {`${item.name} (${item.party})`}
                </Typography>
                <Button variant="contained" color="primary" href={`#/congressmembers/${item.CongressId}`}>
                  Visit Page
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CardGrid;