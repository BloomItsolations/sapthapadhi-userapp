import React from 'react'
import ProfilePage from './ProfilePage'
import RelatedProfile from './RelatedProfile'

const Profile = () => {
  return (
    <>
      <div className='profilebgimage w-full h-[220px] md:h-[420px] lg:h-[595px] flex flex-col justify-end items-center'>
        <h1 className='text-[30px] md:text-[38px] lg:text-[48px] font-medium text-white text-center'>ANGELINA</h1>
        <div className='flex justify-center gap-5 mt-4 mb-3 md:mb-5 lg:mb-8'>
          <div className='w-[121px] h-[19px] rounded-[15px] bg-[#DBBB4A] text-[15px] font-medium flex justify-center items-center'>Online</div>
          <div className='w-[121px] h-[19px] rounded-[15px] bg-[#50B22D] text-[15px] font-medium flex justify-center items-center'>Offline</div>
        </div>
        <div className='flex justify-center gap-5 mt-2 md:mt-3 lg:mt-4 mb-4 md:mb-10 lg:mb-14'>
          <button className='w-[120px] md:w-[200px] lg:w-[281px] h-[35px] md:h-[40px] lg:h-[44px] rounded-[10px] bg-[#183D9E] text-white text-[13px] md:text-[20px] lg:text-[30px] font-medium font-[Inter] flex justify-center items-center '>CHAT NOW</button>
          <button className='w-[120px] md:w-[200px] lg:w-[281px] h-[35px] md:h-[40px] lg:h-[44px] rounded-[10px] bg-[#D39800] text-white text-[13px] md:text-[20px] lg:text-[30px] font-medium font-[Inter] flex justify-center items-center '>SEND INTEREST</button>
        </div>
      </div>
      <ProfilePage />
      <div className='w-[90%] mx-auto mt-4 md:mt-5 lg:mt-8'>
        <h3 className='text-[25px] md:text-[30px] lg:text-[36px] font-normal text-black font-serif'>ABOUT</h3>
        <p className='text-[15px] md:text-[18px] lg:text-[24px] font-normal '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
      </div>

      <div className='w-[90%] mx-auto mt-6'>
        <h3 className='text-[25px] md:text-[30px] lg:text-[36px] font-normal font-serif'>PHOTO GALLERY</h3>
        <div className='flex flex-wrap gap-5 mt-6 justify-center'>
             <div>
              <img src='/images/Rectangle 249.jpg' className='w-[380px] md:w-[300px] lg:w-[380px] h-[280px] md:h-[300px] lg:h-[355px] rounded-[15px] '/>
             </div>
             
             <div>
              <img src='/images/Rectangle 249.jpg' className='w-[380px] md:w-[300px] lg:w-[380px] h-[280px] md:h-[300px] lg:h-[355px] rounded-[15px] '/>
             </div>
             
             <div>
              <img src='/images/Rectangle 249.jpg' className='w-[380px] md:w-[300px] lg:w-[380px] h-[280px] md:h-[300px] lg:h-[355px] rounded-[15px] '/>
             </div>
             
             
        </div>
      </div>
      <RelatedProfile/>
    </>

  )
}

export default Profile