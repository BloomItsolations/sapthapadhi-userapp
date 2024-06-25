import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from '@mui/material';
import Container from '@mui/material/Container';
import Slider from 'react-slick';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const WelcomePage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        slidesToShow: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className=' mt-16'>
            <Container >
                <Box sx={{ textAlign: 'center', padding: '20px' }}>
                    <Typography
                        variant="h4"
                        component="div"
                        gutterBottom
                        sx={{
                            fontFamily: 'Metal Mania',
                            fontWeight: 400,
                            fontSize: { xs: '32px', sm: '48px', md: '64px' },
                            lineHeight: { xs: '20px', sm: '25px', md: '30px' }
                        }}
                    >
                        WELCOME TO
                    </Typography>
                    <Typography
                        variant="h4"
                        component="div"
                        gutterBottom
                        sx={{
                            fontFamily: 'Metal Mania',
                            fontWeight: 400,
                            fontSize: { xs: '32px', sm: '48px', md: '64px' },
                            lineHeight: { xs: '40px', sm: '60px', md: '76.16px' },
                            color: '#E5026B'
                        }}
                    >
                        SAPTHAPADHI.IN
                    </Typography>

                    <Typography variant="body1" sx={{ marginTop: '20px', color: 'black', width: { xs: '100%', md: '70%' }, textAlign: 'center', marginInline: 'auto' }}>
                        Best wedding matrimony It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: '20px', color: 'black', width: { xs: '100%', md: '70%' }, textAlign: "center", marginInline: 'auto' }}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some form, by injected humor, or randomized words which don't look even slightly believable.
                    </Typography>
                    <Slider {...settings}>
                        <div>
                        <Box sx={{ marginTop: '40px' }}>
                            <img
                                src="images/welcomepage.jpg"
                                alt="Sample"
                                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                            />
                        </Box>
                        </div>
                        <div>
                        <Box sx={{ marginTop: '40px' }}>
                            <img
                                src="images/welcomepage.jpg"
                                alt="Sample"
                                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                            />
                        </Box>
                        </div>
                        <div>
                        <Box sx={{ marginTop: '40px' }}>
                            <img
                                src="images/welcomepage.jpg"
                                alt="Sample"
                                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                            />
                        </Box>
                        </div>
                        <div>
                        <Box sx={{ marginTop: '40px' }}>
                            <img
                                src="images/welcomepage.jpg"
                                alt="Sample"
                                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                            />
                        </Box>
                        </div>
                    </Slider>
                </Box>
            </Container>
        </div>
    );
};

export default WelcomePage;
