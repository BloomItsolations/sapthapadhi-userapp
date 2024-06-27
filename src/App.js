import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Home from './component/home/Home';
import RegisterPage from './component/RegisterPage';
import LoginPage from './component/LoginPage';
import AboutUs from './component/AboutUs';
import Profile from './component/profile/Profile';
import MyProfileDashboard from './component/myprofile/MyProfileDashboard';
import Dashobard from './component/myprofile/Dashobard';
import ProfileSetting from './component/myprofile/ProfileSetting';
import PricePlan from './component/PricePlan';
import OurService from './component/ourservice/OurService';
import OurGallery from './component/ourgallery/OurGallery';
import EditProfilePage from './component/editprofile/EditProfilePage';
import InterestedUser from './component/myprofile/interesteduser/InterestedUser';
import ChatListPage from './component/myprofile/ChatListPage';
import ChatBox from './component/myprofile/ChatBox';
import CurrentPlanPage from './component/myprofile/CurrentPlanPage';
import PlanCancellationPage from './component/myprofile/PlanCancellationPage';
import InquiryPage from './component/InquiryPage';
import AllProfilesPage from './component/ProfileContainer';
import PaymentPage from './component/PaymentPage';
import PaymentDetailsPage from './component/PaymentDetailsPage';
import PaymentSuccessPage from './component/PaymentSuccessPage';
import { useState } from 'react';
import MathcesProfile from './component/matches/MathcesProfile';
import UserDashboard from './component/myprofile/UserDashboard';
import EditPreference from './component/myprofile/EditPreference';
import EditProfile from './component/editprofile/EditProfile';
import AdminApp from './admin/AdminApp';
import AdminDashboardLayout from './admin/AdminDashboardLayout';
import AdminLogin from './admin/AdminLogin';
import UserList from './admin/UserList';
import UserProfilePage from './admin/UserList';
import UserPlanAndPayment from './admin/UserPlanAndPayment';
import AddCouplePage from './admin/AddCouplePage';
import AdminBannerUploadPage from './admin/BannerUploadPage';
import SendRequestProfile from './component/profile/SendRequestProfile';
import ViewNewRequestProfile from './component/profile/ViewNewRequestProfile';
import ViewAcceptedProfile from './component/profile/ViewAcceptedProfile';


function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path='/admin' element={<AdminDashboardLayout />}>
        <Route path='userslist' element={<UserProfilePage />} />
        <Route path='usersplandetails' element={<UserPlanAndPayment />} />
        <Route path='uploadcouplepage' element={<AddCouplePage />} />
        <Route path='uploadbanner' element={<AdminBannerUploadPage />} />
      </Route>

      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<Dashboard sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>}>
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/SendRequestProfile/:id' element={<SendRequestProfile />} />
        <Route path='/ViewNewRequestProfile/:id' element={<ViewNewRequestProfile />} />
        <Route path='/ViewAcceptedProfile/:id' element={<ViewAcceptedProfile />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/priceplan' element={<PricePlan setSelected={setSelectedPlan} />} />
        <Route path="/priceplan/:plan" element={<PaymentDetailsPage selectedPlan={selectedPlan} />} />
        <Route path="/priceplan/success/:plan" element={<PaymentSuccessPage selectedPlan={selectedPlan} />} />
        <Route path='/allprofile' element={<AllProfilesPage />} />
        <Route path='/ourgallery' element={<OurGallery />} />
        <Route path='/ourservice' element={<OurService />} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='/paymentpage' element={<PaymentPage />} />
        <Route path='/matches' element={<InterestedUser />} />
        <Route path='/inquary' element={<InquiryPage />} />
        <Route path='/chatlist' element={<ChatListPage />} />
        <Route path='/chatlist/:id' element={<ChatBox />} />
        <Route path='/editpreferences' element={<EditPreference />} />
        {/* <Route path='/edituserprofile' element={<EditProfilePage/>}/> */}
        <Route path='/myprofile' element={<MyProfileDashboard setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>}>
          <Route path="/myprofile" element={<Dashobard />} />
          <Route path='setting' element={<ProfileSetting />} />
          <Route path='plan' element={<CurrentPlanPage />} />
          <Route path='plan/cencle' element={<PlanCancellationPage />} />
          <Route path='intersted' element={<InterestedUser />} />
          <Route path="dashboard" element={<UserDashboard />} />
        </Route>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App;
