import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const EditProfile = () => {
  return (
    <Box
      id="myhome"
      sx={{
        backgroundColor: '#ffffff',
        border: '1px solid #e7e7e7',
        width: '700px',
        padding: '20px 0 20px 20px',
        position: 'relative',
      }}
    >
      <Box display="flex">
        {/* Photo Showing Part */}
        <Box
          sx={{
            backgroundColor: '#f1f1f1',
            width: '150px',
            height: '170px',
            marginRight: '15px',
          }}
        >
          <Box sx={{ width: '150px', height: '150px' }}>
            <a href="">
              <img
                src="https://imgs.bharatmatrimony.com/bmimgs/add-photo-Ntxt-m-150-avatar.jpg"
                width="150"
                height="150"
                alt="Profile"
              />
            </a>
          </Box>
          <Box sx={{ textAlign: 'center', lineHeight: '25px', backgroundColor: '#f1f1f1', paddingTop: '5px' }}>
            <a href="">Add / Edit Photos</a>
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

        {/* Profile Preview */}
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
  );
};

export default EditProfile;
