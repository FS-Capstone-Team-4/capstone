import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { formatDate } from '../Functions';
import Button from '@mui/material/Button';


const BillBlurb = ({bill}) => {

    
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
      margin: '16px'}
    }>
      <Typography variant="h5" sx={{
          fontWeight: 'bold',
          marginBottom: '8px',
          textAlign: 'center'}
      }>
        {bill.title}
      </Typography>
      <Divider />
      <Typography variant="body2" sx={{  fontStyle: 'italic'}}>
      Introduced on {formatDate(bill.introduced_date)}
      <br></br>
    
      </Typography>
      

       <div>
                <Button variant="contained" color="primary" href={`#/bills/${bill.bill_id}`}>
                  Visit Page
                </Button>
            </div>

    
    </Paper>
  );
};

export default BillBlurb;
