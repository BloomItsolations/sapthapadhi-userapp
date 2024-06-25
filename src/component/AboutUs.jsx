import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import OurProfession from './OurProfession';


const useStyles = styled((theme) => ({
    container: {
        padding: theme.spacing(4),
    },
    heading: {
        fontFamily: 'serif',
        fontWeight: 400,
        lineHeight: '110.88px',
        textAlign: 'center',
    },
    subheading: {
        fontFamily: 'Inter',
        fontSize: '36px',
        fontWeight: 500,
        lineHeight: '43.57px',
        textAlign: 'center',
        marginTop: theme.spacing(2),
    },
    section: {
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(4),
    },

    sectionContent: {
        marginLeft: theme.spacing(4),
    },
    sectionHeading: {
        fontFamily: 'New Rocker',
        fontSize: '36px',
        fontWeight: 400,
        lineHeight: '44.24px',
        textAlign: 'left',
    },
    sectionParagraph: {
        fontFamily: 'Inter',
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '46.12px',
        textAlign: 'left',
        marginTop: theme.spacing(2),
    },
    imageContainer: {
        border: '2px dashed #000',
        padding: theme.spacing(2),
        borderRadius: '8px',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 'auto',
        display: 'block',
    }
}));

const AboutUs = () => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.container}>
                <Typography variant="h1" className={classes.heading} sx={{ display: 'flex', fontFamily: 'serif', fontSize: { xs: '32px', sm: '48px', md: '64px', lg: '80px', xl: '96px' }, fontWeight: 400, justifyContent: 'center', marginTop: '20px' }}>
                    ABOUT US
                </Typography>
                <Typography variant="h6" className={classes.subheading} sx={{ display: 'flex', justifyContent: 'center', fontFamily: 'sans-serif', fontSize: { xs: '18px', sm: '23px', md: '30px', lg: '32px', xl: '32px' }, marginTop: '5px' }}>
                    Most trusted & genuine service in internet
                </Typography>
                <Grid container className={classes.section} sx={{ paddingInline: { xs: '15px', sm: '25px', md: '35px', lg: '60px', xl: '80px' }, marginTop: '50px', display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <img
                            src="images/aboutusimage.jpg"
                            alt="About Us"
                            className={classes.image}
                            sx={{ width: '514px', height: '600px' }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.sectionContent}>
                        <Typography variant="h4" className={classes.sectionHeading} sx={{ fontFamily: 'New Rocker', color: '#E5026B', fontSize: { xs: '24px', sm: '24px', lg: '32px', xl: '42px' } }}>
                            WELCOME TO SAPTHAPADHI.IN
                        </Typography>
                        <Typography variant="body1" className={classes.sectionParagraph} sx={{ marginTop: '20px', fontSize: { xs: '12px', md: '20px', lg: '30px' } }}>
                            Best wedding matrimony It is a long established fact that a reader
                            will be distracted by the readable content of a page when looking at
                            its layout.
                            <br />
                            <br />
                            There are many variations of passages of Lorem Ipsum available, but
                            the majority have alteration in some form, by injected humor, or
                            randomized words which don't look even slightly believable.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <div className='flex flex-wrap justify-around gap-y-4 mt-10 md:mt-24  lg:mt-24'>
                <div className='border-[3px] border-black border-dashed w-[300px] h-[360px] md:h-[500px] lg:h-[500px] rounded-[10px] flex justify-center items-center'>
                    <img
                        src="images/aboutuspage.jpg"
                        alt="Image 1"
                    />
                </div>
                <div className='border-[3px] border-black border-dashed w-[300px] h-[360px] md:h-[500px] lg:h-[500px] rounded-[10px] flex justify-center items-center'>
                    <img
                        src="images/aboutUsSecondImagge.jpg"
                        alt="Image 1"
                    />
                </div>
                <div className='border-[3px] border-black border-dashed w-[300px] h-[360px] md:h-[500px] lg:h-[500px] rounded-[10px] flex justify-center items-center'>
                    <img
                        src="images/aboutusimagefour.jpg"
                        alt="Image 1"
                    />
                </div>
                
                
            </div>
           <OurProfession/>
        </>
    );
};

export default AboutUs;
