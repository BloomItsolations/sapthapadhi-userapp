import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const SuccessStoryCard = ({ image, title }) => {
    return (
        <>
            <Card sx={{ margin: '10px', position: 'relative', overflow: 'hidden' }}>
                <CardActionArea>
                    <Box
                        component="img"
                        src={image}
                        alt={title}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />

                </CardActionArea>
            </Card>
            <CardContent sx={{color: 'black', width: '100%', textAlign: 'center' }}>
                <Typography variant="h5" component="div" gutterBottom >
                    {title}
                </Typography>
                <Link href="#" variant="body2" className='border-[1px] border-black rounded-bl-[10px] rounded-tr-[10px] p-[10px] text-white ' style={{ color: "black" }}>
                    MORE DETAILS
                </Link>
            </CardContent>
        </>
    )
}

export default SuccessStoryCard