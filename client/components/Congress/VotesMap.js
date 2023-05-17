import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import { formatDate } from '../Functions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

const VoteMenuList = ({vote}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    vote?
    <List
      component="nav"
      aria-label="menu list"
    >
      <ListItem button onClick={handleClick}>
        <ListItemText primary={`${vote.bill.title}`} />
        <ListItemIcon>
          <ExpandMoreIcon />
        </ListItemIcon>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem key={vote.id}>
            <ListItemText
              primary={`The member voted "${vote.position} ${
                vote.question
              }" on ${formatDate(vote.date)}, resulting in "${vote.result}"`}
            />
            <Button variant="contained" color="primary" href={`#/bills/${vote.bill.bill_id}`}>
                  Visit Page
                </Button>
          </ListItem>
          
        </List>

      </Collapse>
    </List>:
    ""
  );
};

export default VoteMenuList;
