import { Typography } from '@mui/material'
import React from 'react'

const OurProfession = () => {
    return (
        <>
            <div className='flex justify-center items-center mt-8 md:mt-16 lg:mt-20 '>
                <Typography sx={{ borderRadius: '0px 10px 0 10px', display: 'flex', justifyContent: 'center', marginLeft: { xs: '0px', md: '64px' }, border: '1px solid black',paddingInline:{xs: '20px',  md: '0px', lg:'0px'}, width: { xs: 'auto', sm: '300px', md: '526px' }, fontSize: { xs: '25px', md: "40px" }, backgroundColor: '#f9f9f9', }} variant="h4" component="div">OUR PROFESSIONALS</Typography>
            </div>
            <div className='flex flex-wrap gap-7 justify-around px-6 mt-7 md:mt-16 lg:mt-16 pb-16'>
                {
                    [3223, 2, 12].map((vlaue) => (
                        <div className='w-[368px] shadow-2xl p-4 rounded-[10px] '>
                            <img src='images/ourprofession.jpg' className='w-[368px] h-[400px] rounded-[5px] ' />
                            <div className='border-[1px] border-black mx-auto mt-2 rounded-[15px] text-[24px] w-[227px] h-[39px] flex justify-center items-center '>Jack danial</div>
                            <p className='text-[16px] px-1 mx-auto mt-4 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default OurProfession