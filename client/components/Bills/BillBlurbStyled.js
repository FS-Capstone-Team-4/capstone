import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { formatDate } from '../Functions';
import { Link as RouterLink } from 'react-router-dom';
import BillVotes from './BillVotes';
import Link from '@material-ui/core/Link';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    textAlign: 'center',

  },
  summary: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  status: {
    fontStyle: 'italic',
  },
}));



const BillBlurb = ({bill}) => {

    
  let vote = null;
  const classes = useStyles();
  console.log("bill", bill)
  const latestVote = () => {
    if (bill.votes && bill.votes.length > 0) {
        vote = bill.votes[0];
    }
    return vote;
}

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        {bill.title}
      </Typography>
      <Divider />
      <Typography variant="body2" className={classes.status}>
      Introduced on {formatDate(bill.introduced_date)}
      <br></br>
    
      </Typography>
      
      {/* <Typography variant="body1" className={classes.summary}>
      What's the latest?   
      <br />
       On {formatDate(bill.latest_major_action_date)}, the below happened:
       <br />
       {bill.latest_major_action}  
       </Typography> */}

       <div>
                <Button variant="contained" color="primary" href={`#/bills/${bill.bill_id}`}>
                  Visit Page
                </Button>
            </div>

    
    </Paper>
  );
};

export default BillBlurb;
