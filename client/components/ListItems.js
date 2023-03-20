import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import MapIcon from '@mui/icons-material/Map';
import { Link } from 'react-router-dom';


// have to fix link on this page
export const MainListItems = () => {

    return (
        <div>
    <Link to ='/' color="inherit">
    <ListItemButton>
      <ListItemIcon>
        <MapIcon />
      </ListItemIcon>
      <ListItemText primary="Map" />
    </ListItemButton>
    </Link>
    <Link to = '/bills'>
    <ListItemButton>
      <ListItemIcon>
      <HistoryEduIcon />
      </ListItemIcon>
      <ListItemText primary="Bills" />
    </ListItemButton>
    </Link>
    <Link to = '/representatives'>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Representatives" />
    </ListItemButton>
    </Link>
    </div>
    )
};