import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import ImageUploadPopup from '../myprofile/ImageUploadPopup';

const EditProfile = () => {
  const [imageFile, setImageFile] = useState(null);
  let userId = JSON.parse(localStorage.getItem('userdata'))?.userId;

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    let formdata = new FormData();
    formdata.append('userId',userId)
    formdata.append('image', file);
    let response = await axios.post(`${process.env.REACT_APP_BaseURL}/app/updateUserProfile`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  };

  const [userData, setUserData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BaseURL}/app/viewProfile/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [imageFile]);

  const [openPopup, setOpenPopup] = useState(false);


  const handleUpload = async (file) => {
    try {
      const formData = new FormData();
      file.forEach((fil, index) => {
        formData.append(`image`, fil);
      });
  
      const response = await axios.post(`${process.env.REACT_APP_BaseURL}/app/addGallery/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log('Files uploaded successfully:', response.data);
      setOpenPopup(false);   
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

  const { user, userDetails } = userData;

  return (
    <>
      <div className='w-[85%] mt-7 mx-auto'>
        <ImageUploadPopup open={openPopup} onClose={() => setOpenPopup(false)} onUpload={handleUpload} />
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
                  <img
                    src={userDetails.profilePhoto ? ("https://sapthapadhi.bloomitsolutions.co.in/"+userDetails?.profilePhoto[0]?.path ): 'https://th.bing.com/th/id/OIP.SAcV4rjQCseubnk32USHigHaHx?w=131&h=180&c=7&r=0&o=5&pid=1.7'}
                    width="150"
                    height="150"
                    alt="Profile"
                  />
                </Box>
                <Box sx={{ textAlign: 'center', lineHeight: '25px', backgroundColor: '#f1f1f1', paddingTop: '5px' }}>
                  <label htmlFor="image-upload" style={{ cursor: 'pointer' }}>Add / Edit Photo</label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                  />
                </Box>
              </Box>
              {/* Profile Details */}
              <Box flex={1} sx={{ textAlign: 'left', paddingLeft: '15px' }}>
                <Typography variant="h5" component="div">
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: '2px' }}>
                  Profile created for {userDetails.profileCreatedFor ? userDetails.profileCreatedFor : 'My Self'}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '10px' }}>
                  {userDetails.age} Yrs, {userDetails.height} / 163 Cms
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '15px' }}>
                  {userDetails.religion}, {userDetails.caste ? userDetails.caste : 'Caste No Bar'}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '15px' }}>
                  {userDetails.residingCityDistrict}, {userDetails.countryLivingIn}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '15px', lineHeight: '23px' }}>
                  {userDetails.HighestEducation ? userDetails.HighestEducation : 'BCA'}, {userDetails.Occupation ? userDetails.Occupation : 'Software Professional'}
                </Typography>
                <Box sx={{ marginTop: '10px' }}>
                  <Typography
                    variant="body2"
                    sx={{ backgroundImage: 'url(https://imgs.bharatmatrimony.com/bmimgs/edit-phonetxt-mobile.gif)', backgroundRepeat: 'no-repeat', paddingLeft: '13px', fontWeight: 'bold', display: 'inline-block' }}
                  >
                    +91-{user.phone}&nbsp;
                   
                  </Typography>
                </Box>
              </Box>


              <Box sx={{ textAlign: 'center', paddingLeft: '20px' }}>
                <Typography variant="body2" color="textSecondary" sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
                  How your profile looks to others
                </Typography>
                <Link to={`/profile/${userId}`}
                  variant="outlined"
                
                  sx={{ display: 'inline-block', padding: '7px 10px 7px 40px', borderRadius: '5px', background: 'url(https://imgs.bharatmatrimony.com/bmimgs/edit-profile-preview-may15.gif) no-repeat 10px 8px', marginTop: '5px', textDecoration: 'none' }}
                >
                  Profile Preview
                </Link>
              </Box>
            </Box>
          </Box>
          <div>
            <AddPhotosSection  setOpenPopup={setOpenPopup}/>
          </div>
        </div>
        <h2 className='text-[#44a54d] text-[30px] font-sans font-medium mt-2'>Personal Information</h2>
        <OwnWordsSection userDetails={userDetails} userId={userId} />
        <BasicDetailsSection userDetails={userDetails} user={user} userId={userId} />
        <ReligionInfoSection userDetails={userDetails} user={user} userId={userId} />
        <GroomsLocationSection userDetails={userDetails} userId={userId} />
        <ProfessionalInformationSection userDetails={userDetails} userId={userId} />
        <FamilyDetailsSection userDetails={userDetails} userId={userId} />
        <AboutMyFamilySection userDetails={userDetails} userId={userId} />
        <HobbiesInterestsSection userDetails={userDetails} userId={userId} />
        <Box
          sx={{
            float: 'left',
            width: '100%',
            marginTop: '32px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #dadada',
            backgroundColor: '#ffffff',
            padding: '20px',
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column'
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
