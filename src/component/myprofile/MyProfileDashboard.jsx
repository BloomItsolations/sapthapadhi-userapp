import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useIsMobile from '../../hooks/useIsMobile';
import Dashobard from './Dashobard';
import EditIcon from '@mui/icons-material/Edit';
import { LuClipboardEdit } from "react-icons/lu";
import axios from 'axios';
import NavigationLinks from '../../admin/NavigationsLink';
import { CssBaseline, Drawer, Grid } from '@mui/material';
import MyProfileSideBar from './MyProfileSideBar';


const MyProfileDashboard = ({setSidebarOpen, sidebarOpen}) => {
  let userId = JSON.parse(localStorage.getItem('userdata'))?.userId;
  const [userData, setuserData] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
       if(!userId){
        // navigate('/')            
       }
  },[])
  useEffect(() => {
    const fetchData = async (userId) => {
      try {
        let data = await axios.get(`${process.env.REACT_APP_BaseURL}/app/viewProfile/${userId}`)
        data = await data.data;
        setuserData(data);
      } catch (error) {
        console.log("Error MyDashboard", error)
      }
    }
    if (userId) {
      fetchData(userId);
    }
  }, [])

  console.log("userData", userData);
  const location = useLocation();
  let isChatBoxPage = location.pathname.includes('/myprofile/chatlist/')

  const isMobile = useIsMobile();
  if (!isMobile) {
    isChatBoxPage = false;
  }
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [selectedPage, setSelectedPage] = useState(null);
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
    <div className='flex justify-center '>
      <div className="flex flex-col md:flex-row w-[90%]">
       <MyProfileSideBar userData={userData} setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>

        <div className="w-full md:w-[70%]  md:mt-0 ml-auto ">
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
          {!selectedPage && (location.pathname == "/myprofile") && isSidebarVisible && !isMobile ? <Dashobard userData={userData} /> : <Outlet />}
        </div>
      </div>
    </div>

  );
};

export default MyProfileDashboard;
