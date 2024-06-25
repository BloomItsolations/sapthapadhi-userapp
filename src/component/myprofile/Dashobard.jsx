import React from 'react'
import ProfileViewGraph from './ProfileViewGraph'

const Dashobard = ({userData}) => {
    const calculateFilledPercentage = (userData) => {
        let totalFields = 0;
        let filledFields = 0;
      
        const countFields = (obj) => {
          for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
              totalFields++;
              if (obj[key] !== null && obj[key] !== "" && obj[key] !== "null") {
                filledFields++;
              }
              if (typeof obj[key] === "object" && obj[key] !== null) {
                countFields(obj[key]);
              }
            }
          }
        };
      
        countFields(userData);
      
        const percentageFilled = (filledFields / totalFields) * 100;
        return percentageFilled.toFixed(2); 
      };
      
      const percentageFilled = calculateFilledPercentage(userData);
      


    console.log("UserData",userData);
  return (
    <div className='flex  items-center flex-col gap-5  h-[85vh] overflow-y-scroll '>
    <div className='w-[95%] lg:w-[740px] h-auto lg:h-[420px] bg-[#EDEDED] flex justify-center items-center mt-2'>
       <img src={`https://sapthapadhi.bloomitsolutions.co.in/${userData?.userDetails.profilePhoto[0].path}`} className='w-[100%] lg:w-[700px] h-auto lg:h-[380px] rounded-[15px] ' />
    </div>
       <div className='w-[95%] lg:w-[543px] h-auto lg:h-[158px] rounded-[10px]  border-[1px] border-black '>
        <h3 className='text-[24px] font-medium text-black text-center'>Profile Completion</h3>
            <div className='flex justify-center flex-col md:flex-row p-2 lg:p-0 lg:flex-row gap-2 lg:gap-10  items-center mb-2'>
            <div className='w-[70px] h-[70px] rounded-full flex justify-center text-[30px] items-center text-yellow-600 border-[2px] border-black'>{Math.round(percentageFilled)}%</div>
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