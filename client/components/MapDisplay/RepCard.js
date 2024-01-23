import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
// import photo from './AltPhoto2.jpeg'

const RepCard = props => {
  function extractIdFromUrl(url) {
    if(url){
      console.log("url", url)
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
    {image? <CardMedia
      component="img"
      title={props.member.name}
      image={ props.member.photoUrl}
      sx={{ objectFit: 'cover',
    height: '220px' }}
    /> :
    <PersonIcon sx= {{
      height: "200px",
      width: "auto",
    }
    }
    />}
    <CardContent>
    <Typography gutterBottom variant='h5' component='h2' sx={{ fontSize: '25px', height: '100px' }}>
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
