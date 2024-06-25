import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme, useMediaQuery } from '@mui/material';

const WorkProcess = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const cardData = [
    {
      type: 'image',
      content: 'images/workprocessimage.jpg', // Replace with your image URL
    },
    {
      type: 'text',
      title: 'REGISTER',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    },
    {
      type: 'text',
      title: 'FIND YOUR MATCH',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    },
    {
        type: 'image',
        content: 'images/workprocessimagettwo.jpg', 
    },
    {
        type: 'image',
        content: 'images/workprocessimagethree.jpg', 
    },
   
    {
        type: 'text',
        title: 'SEND INTEREST',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
      },
      {
        type: 'text',
        title: 'GET PROFILE INFORMATION',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
      },
      {
        type: 'image',
        content: 'images/workprocessimagefour.jpg', 
      },
      {
        type: 'image',
        content: 'images/workprocessimagefifth.jpg', 
      },
      {
        type: 'text',
        title: 'START MEETUPS',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
      },
      
      {
        type: 'text',
        title: 'GETTING MARRIAGE',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
      },
      {
        type: 'image',
        content: 'images/workprocesssix.jpg', 
      },
      
  ];

  return (
    <>
        <Typography sx={{borderRadius: '0px 10px 0 10px', display:'flex', justifyContent:'center',marginInline:'auto',marginTop:'60px', border: '1px solid black', width:{ xs: 'auto', sm: '300px', md: '526px' },fontSize:{xs:'25px',md:"40px"}, backgroundColor: '#f9f9f9',}}  variant="h4" component="div">HOW IT WORKS</Typography>
     <Box sx={{ padding: 2, position: 'relative', minHeight: '400px',paddingTop:'70px' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '50%',
          width: '4px',
          bgcolor: 'black',
          transform: 'translateX(-50%)',
        }}
      />
      <Grid container spacing={0}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} key={index} sx={{ position: 'relative' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                position: 'relative',
              }}
            >
              <Card
                sx={{
                  width: { xs: '100%', sm: `${card.type === 'image' ? "260px" : "500px"}` },
                  borderRadius: '0px 10px 0 10px',
                  border: `1px ${card.type=='image' ? 'none' :'dashed'} black`,
                  margin: '10px',
                  textAlign: 'left',
                  transform: index % 2 === 0 ? 'translateX(-5%)' : 'translateX(5%)',
                  marginTop:`${card.type!=='image' ? '20px' :'0px'}`
                }}
              >
                <CardContent>
                  {card.type === 'image' ? (
                    <Box
                      component="img"
                      sx={{ width: '100%', height: 'auto',border:'0px', maxHeight: '300px', objectFit: 'cover' }}
                      alt="Genuine Profiles"
                      src={card.content}
                    />
                  ) : (
                    <>
                      <Typography variant="h5" component="div" gutterBottom>
                        {card.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2, fontSize:'24px' }}>
                        {card.content}
                      </Typography>
                    </>
                  )}
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>

  );
};

export default WorkProcess;
