import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useIsMobile from '../../hooks/useIsMobile';
import Dashobard from './Dashobard';
import EditIcon from '@mui/icons-material/Edit';
import { LuClipboardEdit } from "react-icons/lu";
import axios from 'axios';


const MyProfileDashboard = () => {
  let userId=JSON.parse(localStorage.getItem('userdata'))?.userId;
  const [userData,setuserData]=useState(null) 
  useEffect(()=>{
       const fetchData=async ()=>{
        let data=await axios.get(`${process.env.REACT_APP_BaseURL}/app/viewProfile/${userId}`)
        data=await data.data;
        setuserData(data);
       }
       fetchData();
  },[])

  console.log("userData",userData);
  const location=useLocation();
  let isChatBoxPage=location.pathname.includes('/myprofile/chatlist/')
  
  const isMobile = useIsMobile();
  if(!isMobile){
    isChatBoxPage=false;
  }
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [selectedPage, setSelectedPage] = useState(null);
  const navigate = useNavigate();
  const handleLinkClick = (to) => {
    setSelectedPage(to);
    if (isMobile) setSidebarVisible(false);
    navigate(to);
  };

  const handleBackClick = () => {
    setSidebarVisible(true);
    navigate('/myprofile')
    setSelectedPage(null);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div
        className={`sidebar-container  transform transition-transform duration-300 ${
          !isChatBoxPage && isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
          } fixed md:static w-full md:w-[20%] h-[100vh] md:h-[85vh] lg:h-[85vh]  pb-8  rounded-tr-[20px] rounded-bl-[20px] mt-2 z-10`}
          >
        <img src={`https://sapthapadhi.bloomitsolutions.co.in/${userData?.userDetails.profilePhoto[0].path}`} className="w-[100px] mx-auto h-[100px] rounded-full" />
        <div className='flex flex-col items-center gap-[2px] mt-2'>
        <h3 className='text-[17px] font-semibold font-sans '>{userData?.user?.firstName} {userData?.user?.lastName}</h3>
         <div className='flex gap-1 items-baseline'>
          <h3 className='text-[14px] font-sans font-medium'>Membership : </h3>
          <p className='text-[12px] font-sans font-normal'>Free</p>
         </div>
         <p className='text-[14px] font-sans font-normal'>Become a paid member now</p>
         <button className='w-[120px] h-[35px] mt-[2px] border-yellow-600 rounded-[20px] text-yellow-500 border-[1px] hover:bg-yellow-500 hover:text-white'>Upgrade</button>
        </div>
        <div className="w-[90%] mx-auto mt-3 flex flex-col items-baseline gap-3">
          <div onClick={() => handleLinkClick("/myprofile/dashboard")} className="cursor-pointer flex gap-x-3 items-center">
            <img src="/images/dashboard.png" className="w-[34px] h-[34px] rounded-full" />
            <h3 className="text-[16px] md:text-[28px] font-normal text-black">Dashboard</h3>
          </div>
      
          <div onClick={() => handleLinkClick("/myprofile")} className={`cursor-pointer w-full flex gap-x-3 items-center ${location.pathname==='/myprofile' ? ' bg-bg-gray-200 rounded-[10px] px-1 ': null}`}>
            <img src="/images/profile.png" className={`w-[34px] h-[34px]  text-black ${location.pathname==='/myprofile' ? ' text-white': 'text-black'}` }/>
            <h3 className={`text-[16px] md:text-[28px]  font-normal  ${location.pathname==='/myprofile' ? ' text-black': 'text-black'}`}>Profile</h3>
          </div>
          <div onClick={() => handleLinkClick("/editprofile")} className={`cursor-pointer w-full flex gap-x-3 items-center ${location.pathname==='/myprofile/editprofile' ? ' bg-gray-200 rounded-[10px] px-1 ': null}`}>
            {/* <img src="/images/profile-icon-design-free-vector-removebg-preview 1.png" className={`w-[34px] h-[30px]  text-black ${location.pathname==='/myprofile/editprofile' ? ' text-white': 'text-black'}` }/> */}
            <div><EditIcon/></div>
            <h3 className={`text-[16px] md:text-[28px] font-normal font-sans ml-2  ${location.pathname==='/myprofile/editprofile' ? ' text-black': 'text-black'}`}>Edit profile</h3>
          </div>
          <div onClick={() => handleLinkClick("/editpreferences")} className={`cursor-pointer w-full flex gap-x-3 items-center ${location.pathname==='/myprofile/editpreferences' ? ' bg-gray-200 rounded-[10px] px-1 ': null}`}>
            {/* <img src="/images/profile-icon-design-free-vector-removebg-preview 1.png" className={`w-[34px] h-[30px]  text-black ${location.pathname==='/myprofile/editprofile' ? ' text-white': 'text-black'}` }/> */}
            <div className='text-[27px]'><LuClipboardEdit /></div>
            <h3 className={`text-[16px] md:text-[26px]  font-normal font-sans ml-1  ${location.pathname==='/myprofile/editpreferences' ? ' text-black': 'text-black'}`}> Edit Preferences</h3>
          </div>
         
          <div onClick={() => handleLinkClick("plan")} className={`cursor-pointer flex w-full gap-x-3 items-center ${location.pathname.includes('/myprofile/plan') ? ' bg-gray-200 rounded-[10px] px-1 ': null } `}>
            <img src="/images/afas.png" className="w-[32px] h-[32px] rounded-full" />
            <h3 className={`text-[16px] md:text-[28px] font-normal font-sans ${location.pathname.includes('/myprofile/plan') ? ' text-black ': 'text-black' } `}>Plan</h3>
          </div>

          <div onClick={() => handleLinkClick("setting")} className={`cursor-pointer w-full flex gap-x-3 items-center ${location.pathname.includes('/myprofile/setting') ? ' bg-gray-200 rounded-[10px] px-1 ': null } `}>
            <img src="/images/setting.png" className="w-[32px] h-[32px] rounded-full" />
            <h3 className={`text-[16px] md:text-[28px] font-normal font-sans ${location.pathname.includes('/myprofile/setting') ? ' text-black ': 'text-black' } `}>Settings</h3>
          </div>

          
        </div>
      </div>
      <div className="w-full md:w-[75%]  md:mt-0 ml-auto ">
        {selectedPage && !isSidebarVisible && isMobile && (
          <div className="flex justify-end">
            <IconButton
              onClick={handleBackClick}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
        )}
        {!selectedPage && (location.pathname=="/myprofile") && isSidebarVisible && !isMobile ? <Dashobard userData={userData} /> : <Outlet />}
      </div>
    </div>
  );
};

export default MyProfileDashboard;
