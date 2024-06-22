import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea, CardContent, Link } from '@mui/material';

const CategoryCard = ({ image, title }) => {
  return (
    <Card sx={{ margin: '10px', position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
      <CardActionArea>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <CardContent sx={{ position: 'absolute', bottom: 0, background: 'rgba(0, 0, 0, 0.5)', color: 'white', width: '100%', textAlign: 'center' }}>
          <Typography variant="h5" component="div" gutterBottom >
            {title}
          </Typography>
          <Link href="#" variant="body2" className='border-[1px] border-black rounded-bl-[10px] rounded-tr-[10px] p-[10px] text-white ' style={{color:"white"}}>
          MORE DETAILS
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
