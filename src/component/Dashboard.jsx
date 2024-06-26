import React from 'react'
import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'

const Dashboard = () => {
    let location=useLocation();
    console.log("Location",location.pathname);
    let isUserDashboard=location.pathname.includes('/myprofile')  || location.pathname.includes('/matches') || location.pathname.includes('/chatlist'); 
    return (
        <>
            <Navbar />
            <Outlet/>
            {
                !isUserDashboard && <Footer/>
            }
            
        </>
    )
}

export default Dashboard