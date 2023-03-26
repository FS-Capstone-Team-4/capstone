import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import MapIcon from '@mui/icons-material/Map';
import { Link } from '@mui/material';


// have to fix link on this page
export const MainListItems = () => {

    return (
        <div>
    <Link href ='#' color="inherit" underline = "none">
    <ListItemButton>
      <ListItemIcon>
        <MapIcon />
      </ListItemIcon>
      <ListItemText primary="Map" />
    </ListItemButton>
    </Link>
    <Link href = '#/bills' color="inherit" underline = "none">
    <ListItemButton>
      <ListItemIcon>
      <HistoryEduIcon />
      </ListItemIcon>
      <ListItemText primary="Bills" />
    </ListItemButton>
    </Link>
    <Link href = '#/congressmembers' color="inherit" underline = "none">
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Members of Congress" />
    </ListItemButton>
    </Link>
    </div>
    )
};