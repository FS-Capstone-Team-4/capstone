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
