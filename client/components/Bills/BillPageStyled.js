import React from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { formatDate } from '../Functions';
import BillVotes from './BillVotes';
import Button from '@mui/material/Button';


const BillCard = ({bill}) => {

    console.log("bill", bill)
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
      { bill?
      <div>
        <Box sx={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Typography variant="h5" sx={{fontWeight: 'bold',
    marginBottom: '8px',
    textAlign: 'center',
}}>
        {bill.short_title}
      </Typography>
      <Divider />
      <Typography variant="body1" sx={{
        margin: '10px',
            textAlign: 'center'     
      }}>
        
      Sponsor: {bill.sponsor_name || bill.sponsor} ({bill.sponsor_party}) 
      </Typography>
<Button variant="contained" sx={{        margin: '5px'
, width: "150px" }} color="primary" href={`#/congressmembers/${bill.sponsor_id}`}>
                  Visit Page
                </Button>

      <Typography variant="body2" sx = {{
            fontStyle: 'italic',
            textAlign: 'center', 
            margin: '5px'

      }}>
      Introduced on {formatDate(bill.introduced_date)}
      <br></br>
    
      </Typography>
      </Box>
      
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
            </div>
:
"null"
}
    </Paper> 
  );
};

export default BillCard;
