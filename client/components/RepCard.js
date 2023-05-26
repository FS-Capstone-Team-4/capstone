import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
// import fillerImage from '../../public/vector-users-icon.jpeg'

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
  backgroundColor="primary"
  :
  props.member.party=== "Republican Party" ?
  backgroundColor="#d63333"
  :
  backgroundColor="#595b60"


  let image 


  props.member.photoUrl ? 
  image = true :
  image = false





  return (
    <Card sx={{ flex: 1 }}>
    <CardMedia
      component="img"
      title={props.member.name}
      image={
        image ? 
        props.member.photoUrl : 
        '/public/vector-users-icon.jpeg'}
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
