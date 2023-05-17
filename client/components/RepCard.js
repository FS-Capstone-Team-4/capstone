import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const RepCard = props => {
  function extractIdFromUrl(url) {
    if(url){
      const parts = url.split('/');
      return parts.pop().split('.')[0];
    }
    return null;
  }
  let backgroundColor

  props.member.party === "Democratic Party" ? 
  backgroundColor="#2539ed"
  :
  props.member.party=== "Republican Party" ?
  backgroundColor="#d63333"
  :
  backgroundColor="#595b60"




  return (
    <Card sx={{ flex: 1 }}>
    <CardMedia
      component="img"
      title={props.member.name}
      image={props.member.photoUrl}
      sx={{ objectFit: 'cover',
    height: '220px' }}
    />
    <CardContent>
    <Typography gutterBottom variant='h5' component='h2' sx={{ fontSize: '25px', height: '10vh' }}>
              {`${props.member.name}`}
              </Typography>
             <Button
                  variant='contained'
                  sx={{
                    backgroundColor: backgroundColor,
                  }}
                  href={`#/congressmembers/${extractIdFromUrl(props.member.photoUrl)}`}
                >
                  Visit Page
                </Button>
    </CardContent>
  </Card>

      
  );
};

export default RepCard;
