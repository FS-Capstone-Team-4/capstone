import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { blue, red } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
        backgroundColor: theme.palette.background.paper,
  },
  republican: {
    backgroundColor: red[500],
  },
  democrat: {
    backgroundColor: blue[500],
  },
}));

const senators = [
  {
    name: 'Elizabeth Warren',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Elizabeth_Warren%2C_official_portrait%2C_114th_Congress.jpg/480px-Elizabeth_Warren%2C_official_portrait%2C_114th_Congress.jpg',
  },
  {
    name: 'Bernie Sanders',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bernie_Sanders.jpg/480px-Bernie_Sanders.jpg',
  },
  {
    name: 'Kamala Harris',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Kamala_Harris_in_2019.jpg/480px-Kamala_Harris_in_2019.jpg',
  },
];

const SenatorList = ({rep}) => {
  const classes = useStyles();


  return (
          rep? <ListItem className={classes.root} key={rep.name} button component={Link} to={`/congressmembers/${rep.CongressId}`}>
            <ListItemAvatar>
            <Avatar className={rep.party === 'D' ? classes.democrat : rep.party === 'R'? classes.republican: null} />
            </ListItemAvatar>
            <ListItemText primary={`${rep.name}`} />
          </ListItem>
          :
          "loading"
          
  );
};

export default SenatorList;
