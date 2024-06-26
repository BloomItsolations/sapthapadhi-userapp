import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfilePage from './ProfilePage';
import RelatedProfile from './RelatedProfile';
import swal from 'sweetalert';

const ViewAcceptedProfile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [galleryImage, setGalleryImage] = useState([]);

  let myid = JSON.parse(localStorage.getItem('userdata'))?.userId;

  useEffect(() => {
    const userId = getUserIdFromUrl();
    if (userId) {
      fetchUserDetails(userId);
    }
  }, []);
  
  const sendRequest=async ()=>{
        try {
            const userId = getUserIdFromUrl();

              let response=await axios.post(`${process.env.REACT_APP_BaseURL}/app/sendrequest`,
                {
                    "fromUserId":myid,
                    "toUserId":userId
                }
              )
              let data=await response.data;
              console.log('Data',data);
              swal("Congratulations! ", data.message, "success");

        } catch (error) {
             console.log("Error",error);
             swal("Sorry! ", error.response.data.message, "error");

        }
  }

  useEffect(() => {
    const userId = getUserIdFromUrl();

    const fetchGalleryImage = async (userId) => {
      try {
        let data = await axios.get(`${process.env.REACT_APP_BaseURL}/app/gallery/${userId}`);
        setGalleryImage(data.data);
      } catch (error) {
        console.log("Error from gallery image", error)
      }

    }
    if (userId) {
      fetchGalleryImage(userId);
    }
  }, [])

  const fetchUserDetails = async (userId) => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_BaseURL}/app/viewProfile/${userId}`);
      setUserDetails(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    } finally {
      setLoading(false);
    }
  };

  const getUserIdFromUrl = () => {
    const path = window.location.pathname;
    const parts = path.split('/');
    const userId = parseInt(parts[parts.length - 1]);
    return userId;
  };

  return (
    <>
      {/* Profile Banner */}
      <div className=' w-full h-[220px] md:h-[420px] lg:h-[595px] flex flex-col justify-end items-center' style={{
        backgroundImage: `url(${userDetails?.userDetails?.profilePhoto ?
            `https://sapthapadhi.bloomitsolutions.co.in/${userDetails?.userDetails?.profilePhoto[0]?.path}` :
            "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png"})`,
     
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}>
        <h1 className='text-[30px] md:text-[38px] lg:text-[48px] font-medium text-white text-center'>{userDetails.user?.firstName}</h1>
        <div className='flex justify-center gap-5 mt-4 mb-3 md:mb-5 lg:mb-8'>
          <div className={`w-[121px] h-[19px] rounded-[15px] ${userDetails.user?.isActive ? 'bg-[#50B22D]' : 'bg-[#DBBB4A]'} text-[15px] font-medium flex justify-center items-center`}>{userDetails.user?.isActive ? 'Online' : 'Offline'}</div>
        </div>
        <div className='flex justify-center gap-5 mt-2 md:mt-3 lg:mt-4 mb-4 md:mb-10 lg:mb-14'>
         
              <button onClick={sendRequest} className='w-[120px] md:w-[200px] lg:w-[281px] h-[35px] md:h-[40px] lg:h-[44px] rounded-[10px] bg-[#183D9E] text-white text-[13px] md:text-[20px] lg:text-[30px] font-medium font-[Inter] flex justify-center items-center '>Chat Now</button>
          
        </div>
      </div>

      <ProfilePage userDetails={userDetails} loading={loading} />

      <div className='w-[90%] mx-auto mt-4 md:mt-5 lg:mt-8'>
        <h3 className='text-[25px] md:text-[30px] lg:text-[36px] font-normal text-black font-serif'>ABOUT</h3>
        <p className='text-[15px] md:text-[18px] lg:text-[24px] font-normal '>{userDetails.user?.firstName} {userDetails.user?.lastName} is {userDetails.user?.isActive ? 'currently online.' : 'currently offline.'}</p>
      </div>

      <div className='w-[90%] mx-auto mt-6'>
        <h3 className='text-[25px] md:text-[30px] lg:text-[36px] font-normal font-serif'>PHOTO GALLERY</h3>
        <div className='flex flex-wrap gap-5 mt-6 justify-center'>
          {galleryImage && galleryImage?.map((value, index) => (
            <div key={index}>
              <img src={`${process.env.REACT_APP_BaseURL}/${value.photos[0].path}`} className='w-[380px] md:w-[300px] lg:w-[380px] h-[280px] md:h-[300px] lg:h-[355px] rounded-[15px]' alt={`Photo ${index}`} />
            </div>
          ))}
        </div>
      </div>

      <RelatedProfile />
    </>
  );
};

export default ViewAcceptedProfile;
