import React from 'react'
import ProfileViewGraph from './ProfileViewGraph'

const Dashobard = () => {
  return (
    <div className='flex  items-center flex-col gap-5  h-[85vh] overflow-y-scroll '>
    <div className='w-[95%] lg:w-[740px] h-auto lg:h-[420px] bg-[#EDEDED] flex justify-center items-center mt-2'>
       <img src="images/Rectangle 312.jpg" className='w-[100%] lg:w-[700px] h-auto lg:h-[380px] rounded-[15px] ' />
    </div>
       <div className='w-[95%] lg:w-[543px] h-auto lg:h-[158px] rounded-[10px]  border-[1px] border-black '>
        <h3 className='text-[24px] font-medium text-black text-center'>Profile Completion</h3>
            <div className='flex justify-center flex-col md:flex-row p-2 lg:p-0 lg:flex-row gap-2 lg:gap-10  items-center mb-2'>
            <div className='w-[70px] h-[70px] rounded-full flex justify-center items-center text-yellow-500 border-[2px] border-black'>90%</div>
            <div>
                <div className='flex items-center gap-1 '>
                    <img src='images/likes.png' className='w-[30px] h-[20px] '/>
                    <h3 className='text-[24px] font-normal'>Likes</h3>
                </div>
                <div className='flex items-center gap-1 '>
                    <img src='images/interest.png' className='w-[30px] h-[20px] '/>
                    <h3 className='text-[24px] font-normal'>Interests</h3>
                </div>
            </div>
            <div>
            <div className='flex items-center gap-1 '>
                    <img src='images/view.png' className='w-[30px] h-[20px] '/>
                    <h3 className='text-[24px] font-normal'>Views</h3>
                </div>
                <div className='flex items-center gap-1 '>
                    <img src='images/click.png' className='w-[30px] h-[20px] '/>
                    <h3 className='text-[24px] font-normal'>Clicks</h3>
                </div>

            </div>
            </div>
       </div>
  <ProfileViewGraph/>
  </div>
  )
}

export default Dashobard