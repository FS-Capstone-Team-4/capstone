import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@mui/material/Collapse';
import BillCard from '../Bills/BillPageStyled';
import { formatDate } from '../Functions';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const VoteMenuList = ({vote}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    vote?
    <List
      component="nav"
      className={classes.root}
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
        <ListItem key={vote.id} className={classes.listItem}>
            <ListItemText
              className={classes.listItemText}
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
