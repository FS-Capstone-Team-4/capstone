import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const CardGrid = ({ data }) => {

  return (
      <Grid container spacing={2} sx={{
        display: 'flex',
        justifyContent:"center"
      }}>
        {data.map(item => (
          <Grid item key={item.id} xs={6} md={12} justifyContent="center" alignItems="center">
            <Card sx={{
              width: "300px",
              height: "400px"
                
            }}>
              <CardMedia
              
                title={item.name}
                image={`http://bioguide.congress.gov/bioguide/photo/${item.name
                  .split(' ')[1][0]
                  .toUpperCase()}/${item.CongressId}.jpg`}
                sx={{
                  height: 0,
                  paddingTop: '100%', // 16:9              
                }}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {`${item.name} (${item.party})`}
                </Typography>
                <Button
                  variant='contained'
                  color='primary'
                  href={`#/congressmembers/${item.CongressId}`}
                >
                  Visit Page
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
  );
};

export default CardGrid;
