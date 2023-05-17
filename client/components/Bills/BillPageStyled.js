import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { formatDate } from '../Functions';
import BillVotes from './BillVotes';
import Button from '@mui/material/Button';


const BillCard = ({bill}) => {

    
  let vote = null;
  const latestVote = () => {
    if (bill.votes && bill.votes.length > 0) {
        vote = bill.votes[0];
    }
    return vote;
}

  return (
    <Paper sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      margin: '16px',
    }}>
      <Typography variant="h5" sx={{fontWeight: 'bold',
    marginBottom: '8px',
    textAlign: 'center',
}}>
        {bill.short_title}
      </Typography>
      <Divider />
      <Typography variant="body1" sx={{
            marginTop: '8px',
            marginBottom: '16px',        
      }}>
      Sponsor: {bill.sponsor} ({bill.sponsor_party}) <Button variant="contained" color="primary" href={`#/congressmembers/${bill.sponsor_id}`}>
                  Visit Page
                </Button>
      </Typography>
      <Typography variant="body2" sx = {{
            fontStyle: 'italic',
         
      }}>
      Introduced on {formatDate(bill.introduced_date)}
      <br></br>
    
      </Typography>
      
      <Typography variant="body1">
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
