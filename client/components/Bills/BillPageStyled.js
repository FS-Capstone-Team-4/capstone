import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { formatDate } from '../Functions';
import BillVotes from './BillVotes';
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



const BillCard = ({bill}) => {

    
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
        {bill.short_title}
      </Typography>
      <Divider />
      <Typography variant="body1" className={classes.summary}>
      Sponsor: {bill.sponsor} ({bill.sponsor_party}) <Button variant="contained" color="primary" href={`#/congressmembers/${bill.sponsor_id}`}>
                  Visit Page
                </Button>
      </Typography>
      <Typography variant="body2" className={classes.status}>
      Introduced on {formatDate(bill.introduced_date)}
      <br></br>
    
      </Typography>
      
      <Typography variant="body1" className={classes.summary}>
      <b>Full title of bill:</b> {bill.title}
      <br /><br />
      <b>What's the latest?</b>   
      <br />
       On {formatDate(bill.latest_major_action_date)}, the below happened:
       <br />
       {bill.latest_major_action}  
       </Typography>

       <div>
                {latestVote() ?  <BillVotes bill={bill}/> : ''}
            </div>

    
    </Paper>
  );
};

export default BillCard;
