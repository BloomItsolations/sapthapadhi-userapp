import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import AddPhotosSection from './AddPhotosSection';
import OwnWordsSection from './OwnWordSection';
import BasicDetailsSection from './BasicDetailsSection';
import ReligionInfoSection from './ReligionInfoSection';
import GroomsLocationSection from './GroomsLocationSection';
import ProfessionalInformationSection from './ProfessionalInformationSection';
import FamilyDetailsSection from './FamilyDetailsSection';
import AboutMyFamilySection from './AboutMyFamilySection';
import HobbiesInterestsSection from './HobbiesInterestsSection';
import { Link } from 'react-router-dom';
import PhotoUploadPopup from './PhotoUploadPopup';

const EditProfile = () => {
  return (
     <>
     <div className='w-[85%] mt-7 mx-auto'>
    <div className='  flex gap-x-3  '>
       <Box
      sx={{
        backgroundColor: '#ffffff',
        border: '1px solid #e7e7e7',
        width: '700px',
        padding: '20px 0 20px 20px',
        position: 'relative',
      }}
    >
      <Box display="flex">
        {/* Photo  Part */}
        {/* <PhotoUploadPopup/> */}
        <Box
          sx={{
            backgroundColor: '#f1f1f1',
            width: '150px',
            height: '170px',
            marginRight: '15px',
          }}
        >
          <Box sx={{ width: '150px', height: '150px' }}>
            <a href="https://image.bharatmatrimony.com/photo/photoupload.php?gaact=ADDPH&gasrc=EDPR">
              <img
                src="https://th.bing.com/th/id/OIP.SAcV4rjQCseubnk32USHigHaHx?w=131&h=180&c=7&r=0&o=5&pid=1.7"
                width="150"
                height="150"
                alt="Profile"
              />
            </a>
          </Box>
          <Box sx={{ textAlign: 'center', lineHeight: '25px', backgroundColor: '#f1f1f1', paddingTop: '5px' }}>
            <a href="https://image.bharatmatrimony.com/photo/photoupload.php?gaact=ADDP&gasrc=EDPR">Add / Edit Photos</a>
          </Box>
        </Box>

        {/* Profile Details */}
        <Box flex={1} sx={{ textAlign: 'left', paddingLeft: '15px' }}>
          <Typography variant="h5" component="div">
            Shubham Kumar
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: '2px' }}>
            Profile created for My Self
          </Typography>
          <Typography variant="body2" sx={{ marginTop: '10px' }}>
            23 Yrs, 5 Ft 4 In / 163 Cms
          </Typography>
          <Typography variant="body2" sx={{ marginTop: '15px' }}>
            Hindu, Yadav (Caste No Bar)
          </Typography>
          <Typography variant="body2" sx={{ marginTop: '15px' }}>
            Purnia, Bihar, India
          </Typography>
          <Typography variant="body2" sx={{ marginTop: '15px', lineHeight: '23px' }}>
            BCA, Software Professional
          </Typography>
          <Box sx={{ marginTop: '10px' }}>
            <Typography
              variant="body2"
              sx={{ backgroundImage: 'url(https://imgs.bharatmatrimony.com/bmimgs/edit-phonetxt-mobile.gif)', backgroundRepeat: 'no-repeat', paddingLeft: '13px', fontWeight: 'bold', display: 'inline-block' }}
            >
              +91-9608213718&nbsp;
              <span style={{ color: '#4baa26' }}>
                <img src="https://imgs.bharatmatrimony.com/bmimgs/myhome-tickicon.gif" width="14" height="11" alt="" title="" style={{ verticalAlign: 'middle' }} />
                Verified
              </span>
              &nbsp;&nbsp;
              <Button href="" style={{ textDecoration: 'none' }}>
                Edit Mobile No
              </Button>
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', paddingLeft: '20px' }}>
          <Typography variant="body2" color="textSecondary" sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
            How your profile looks to others
          </Typography>
          <Button
            variant="outlined"
            href=""
            target="_blank"
            sx={{ display: 'inline-block', padding: '7px 10px 7px 40px', borderRadius: '5px', background: 'url(https://imgs.bharatmatrimony.com/bmimgs/edit-profile-preview-may15.gif) no-repeat 10px 8px', marginTop: '5px', textDecoration: 'none' }}
          >
            Profile Preview
          </Button>
        </Box>
      </Box>
    </Box>
    <div>
      <AddPhotosSection/>
    </div>
    </div>
    <h2 className='text-[#44a54d] text-[30px] font-sans font-medium mt-2'>Personal Information</h2>
    <OwnWordsSection/>
    <BasicDetailsSection/>
    <ReligionInfoSection/>
    <GroomsLocationSection/>
    <ProfessionalInformationSection/>
    <FamilyDetailsSection/>
    <AboutMyFamilySection/>
    <HobbiesInterestsSection/>
    <Box
      sx={{
        float: 'left',
        width: '100%',
        marginTop: '32px',
        cursor: 'pointer',
        display:'flex',
        alignItems:'center',
        border: '1px solid #dadada',
        backgroundColor: '#ffffff',
        padding: '20px',
        marginBottom:'20px',
        display:'flex',
        flexDirection:'column'
      }}
    >
      <p className='text-black text-[20px] font-sans font-medium'>Edit your Patner Preferences to get relevant matches.</p>
      <Link to={"/editpreferences"} underline="none">
        <button className='bg-yellow-500 px-5 py-2 rounded-[15px] text-white text-[20px] font-sans font-medium '>Edit Preferences</button>
      </Link>
    </Box>
    </div>
    </>
  );
};

export default EditProfile;
