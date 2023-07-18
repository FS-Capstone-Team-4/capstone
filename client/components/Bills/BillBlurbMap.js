import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import BillBlurb from './BillBlurbStyled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BillPage from './BillPage';
import BillCard from './BillPageStyled';


const BillBlurbMap = ({bill}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    bill?
    <List
      component="nav"
      sx={{
          width: '100%',
          backgroundColor: "primary",
      }}
      aria-label="menu list"
    >
      <ListItem button onClick={handleClick}>
        <ListItemText primary={`${bill.short_title}`} />
        <ListItemIcon>
          <ExpandMoreIcon />
        </ListItemIcon>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <BillCard bill={bill} />
        </List>
      </Collapse>
    </List>:
    ""
  );
};

export default BillBlurbMap;
