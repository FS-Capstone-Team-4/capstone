import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import BillCard from "./BillPageStyled";


const MenuList = ({bill}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    bill?
    <List
      component="nav"
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
          <BillCard bill={bill}></BillCard>
        </List>
      </Collapse>
    </List>:
    ""
  );
};

export default MenuList;
