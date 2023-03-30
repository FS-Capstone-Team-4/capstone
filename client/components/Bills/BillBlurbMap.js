import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Link from '@mui/material/Link';
import BillBlurb from './BillBlurbStyled';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const BillBlurbMap = ({bill}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  console.log("bill" , bill)

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    bill?
    <List
      component="nav"
      className={classes.root}
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
          <BillBlurb bill={bill}></BillBlurb>
        </List>
      </Collapse>
    </List>:
    ""
  );
};

export default BillBlurbMap;
