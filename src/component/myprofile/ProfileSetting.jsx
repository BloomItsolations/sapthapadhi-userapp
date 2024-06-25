import { Box, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProfileSetting = () => {

    const [selectUser, setSelectuser] = useState('');
    const [isUserSendReqest, setIsUserSendRequest] = useState('')
    const handleChangeUser = (event) => {
        setSelectuser(event.target.value);
    };
    const handleChangeUserCanSendRequest = (event) => {
        setIsUserSendRequest(event.target.value);
    }

    const [isOn, setIsOn] = useState(false);

    const handleToggle = (event) => {
        setIsOn(event.target.checked);
    };


    return (
        <div className='bg-[#EDEDED] h-[85vh] overflow-y-scroll pb-6'>
            <nav className='flex justify-between px-1 md:px-7 lg:px-10 pt-3'>
                <div className='text-[23px] md:text-[25px] lg:text-[32px] font-normal font-serif '>PROFILE</div>
                <button className='w-[90px] md:w-[120px] lg:w-[169px] h-[30px]  md:h-[35px] lg:h-[44px] bg-[#5D6BB4] text-white rounded-bl-[10px] lg:rounded-bl-[15px] rounded-tr-[10px] lg:rounded-tr-[15px] text-[15px] md:text-[20px] lg:text-[24px] font-semibold'>SIGN OUT</button>
            </nav>
            <div className='px-2 md:px-7 lg:px-10'>
                <div className='flex gap-6 mt-4 '>
                    <img src='/images/userprofile.jpg' className='w-[90px] md:w-[120px] lg:w-[163px] h-[90px] md:h-[120px] lg:h-[163px] rounded-full ' />
                    <div className='mt-3 md:mt-5 lg:mt-6'>
                        <h3 className='text-[20px] md:text-[25px] lg:text-[32px] font-medium '>ANGELINA</h3>
                        <p className='text-[10px] md:text-[14px] lg:text-[16px] font-normal'>Premium User</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-between px-2 md:px-6 lg:px-10 items-center mt-1 md:mt-5 lg:mt-7'>
                <h3 className='text-[18px] md:text-[20px] lg:text-[24px] font-medium'>Profile Visible</h3>
                <Box sx={{ minWidth:{xs:90,sm:110,md:180} }}>
                    <FormControl fullWidth>
                        <InputLabel id="user-select-label">Select User</InputLabel>
                        <Select
                            labelId="user-select-label"
                            id="user-select"
                            value={selectUser}
                            label="Select User"
                            onChange={handleChangeUser}
                        >
                            <MenuItem value="Premium">
                                Premium
                            </MenuItem>
                            <MenuItem value="Free">
                                Free
                            </MenuItem>
                            <MenuItem value="no-more-visible">
                                No more visible
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <p className='text-[12px] md:text-[14px] lg:text-[16px] font-normal font-sans px-2 md:px-7 lg:px-10'>You can set-up who can able to view your profile.</p>

            <div className='flex justify-between px-1 md:px-7 lg:px-10 items-center mt-2 md:mt-5 lg:mt-7'>
                <h3 className='text-[15px] md:text-[18px] lg:text-[24px] font-medium'>Who can send you interest requests ?</h3>
                <Box sx={{minWidth:{xs:90,sm:110,md:180} }}>
                    <FormControl fullWidth>
                        <InputLabel id="user-Requestsend-label">Select User</InputLabel>
                        <Select
                            labelId="user-Reqestsend-label"
                            id="user-send-request"
                            value={isUserSendReqest}
                            label="Select User"
                            onChange={handleChangeUserCanSendRequest}
                        >
                            <MenuItem value="Premium">
                                Premium
                            </MenuItem>
                            <MenuItem value="Free">
                                Free
                            </MenuItem>
                            <MenuItem value="Free">
                                Both
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <p className='text-[10px] md:text-[13px] lg:text-[16px] font-normal font-sans px-2 md:px-7 lg:px-10 mt-2 lg:mt-0'>You can set-up who can able to make Interest request here.</p>

            <div className='flex justify-between px-2 md:px-7 lg:px-10  mt-6'>
                <div className='text-[25px] md:text-[28px] lg:text-[32px] font-normal font-serif '>ACCOUNT</div>
                <Link to="/editprofile" className='w-[75px] md:w-[85px] lg:w-[111px] h-[30px] md:h-[34px] lg:h-[39px]  flex text-black rounded-[10px] items-center border-[1px] border-black justify-center text-[15px] md:text-[20px] lg:text-[24px] font-semibold'>
                    <img src="/images/edit.png" />
                    <h3>Edit</h3>
                </Link>
            </div>
            <div className='flex justify-between px-2 md:px-7 lg:px-10 mt-6 w-[90%] md:w-[80%] lg:w-[80%] items-baseline'>
                <h3 className='text-[23px] md:text-[28px] lg:text-[32px] font-medium '>Full Name:</h3>
                <p className='text-[20px] md:text-[20px] lg:text-[24px] font-normal'>Angelia</p>
            </div>
            <div className='flex justify-between px-2 md:px-7 lg:px-10 mt-1 md:mt-3 lg:mt-3 w-[90%] md:w-[80%] lg:w-[80%] items-baseline'>
                <h3 className='text-[23px] md:text-[28px] lg:text-[32px] font-medium '>Mobile:</h3>
                <p className='text-[20px] md:text-[20px] lg:text-[24px] font-normal'>0000000000</p>
            </div>
            <div className='flex justify-between px-2 md:px-7 lg:px-10 mt-3 w-[90%] md:w-[80%] lg:w-[80%] items-baseline'>
                <h3 className='text-[20px] md:text-[28px] lg:text-[32px] font-medium '>Email Id</h3>
                <p className='text-[17px] md:text-[22px] lg:text-[24px] font-normal'>loremipsum@gmail.com</p>
            </div>
            <div className='flex justify-between items-baseline px-2 md:px-7 lg:px-10 mt-3 w-[90%] md:w-[80%] lg:w-[80%]'>
                <h3 className='text-[24px] md:text-[28px] lg:text-[32px] font-medium '>Password:</h3>
                <p className='text-[19px] md:text-[22px] lg:text-[24px] font-normal'>******</p>
            </div>
            <div className='flex justify-between px-2 md:px-7 lg:px-10 mt-3 w-[90%] md:w-[80%] lg:w-[80%]'>
                <h3 className='text-[22px] md:text-[28px] lg:text-[32px] font-medium '>Profile Type:</h3>
                <p className='text-[19px] md:text-[22px] lg:text-[24px] font-normal'>Platinum</p>
            </div>

            <div className='text-[25px] md:text-[28px] lg:text-[36px] font-normal font-serif px-2 md:px-7 lg:px-10 mt-5 lg:mt-7 '>NOTIFICATION</div>
            <div className='flex justify-between px-2 md:px-7 lg:px-10 items-center mt-2'>
                <h3 className='text-[19px] md:text-[22px] lg:text-[24px] font-medium'>Interest Requests</h3>
                <Box sx={{  minWidth: {xs:90,sm:90,md:180} , display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: {xs:1, sm:1 , md:4} }}>
                    <FormControlLabel
                        control={<Switch checked={isOn} onChange={handleToggle} />}
                        label={isOn ? 'On' : 'Off'}
                    />
                </Box>
            </div>
            <p className='text-[10px] md:text-[14px] lg:text-[16px] font-normal font-sans px-2 md:px-7 lg:px-10'>Interest request email notificatios</p>
           
            <div className='flex justify-between px-2 md:px-7 lg:px-10 items-center mt-2'>
                <h3 className='text-[19px] md:text-[20px] lg:text-[24px] font-medium'>Interest Requests</h3>
                <Box sx={{  minWidth: {xs:90,sm:90,md:180} , display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: {xs:1,sm:1,md:4} }}>
                    <FormControlLabel
                        control={<Switch checked={isOn} onChange={handleToggle} />}
                        label={isOn ? 'On' : 'Off'}
                    />
                </Box>
            </div>
            <p className='text-[12px] md:text-[14px] lg:text-[16px] font-normal font-sans px-2 md:px-7 lg:px-10'>Interest request email notificatios</p>
             
            <div className='flex justify-between px-2 md:px-7 lg:px-10 items-center mt-2'>
                <h3 className='text-[20px] md:text-[22px] lg:text-[24px] font-medium'>Profile Views</h3>
                <Box sx={{  minWidth: {xs:90,sm:90,md:180} , display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: {xs:1,sm:1,md:4} }}>
                    <FormControlLabel
                        control={<Switch checked={isOn} onChange={handleToggle} />}
                        label={isOn ? 'On' : 'Off'}
                    />
                </Box>
            </div>
            <p className='text-[12px] md:text-[14px] lg:text-[16px] font-normal font-sans px-2 md:px-7 lg:px-10'>If any one view your profile means you get the notifications at end of the day</p>
            <div className='flex justify-between px-2 md;px-7 lg:px-10 items-center mt-2'>
                <h3 className='text-[18px] md:text-[20px] lg:text-[24px] font-medium'>New Profile Match</h3>
                <Box sx={{  minWidth:{xs:90,sm:90, md:180} , display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: {xs:1,sm:1,md:4} }}>
                    <FormControlLabel
                        control={<Switch checked={isOn} onChange={handleToggle} />}
                        label={isOn ? 'On' : 'Off'}
                    />
                </Box>
            </div>
            <p className='text-[12px] md:text-[14px] lg:text-[16px] font-normal font-sans px-2 md:px-7 lg:px-10'>You get the profile match emails</p>
        </div>
    )
}

export default ProfileSetting