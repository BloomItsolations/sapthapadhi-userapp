import React from 'react'

const RelatedProfileCard = ({image,title}) => {
  return (
    <div>
        <div className='w-[250px] mx-auto md:w-[300px] lg:w-[387px] h-[350px] md:h-[380px] lg:h-[400px] relative flex justify-center '>
        <img src={image} className='w-[360px] h-[351px]'/>
        <div className='bg-white shadow-2xl left-[28%] flex justify-center items-center flex-col gap-2 absolute bottom-0 w-[140px] lg:w-[183px] h-[80px] lg:h-[109px] rounded-tr-[20px] rounded-bl-[20px] '>
            <h3 className='text-[12px] md:text-[15px] lg:text-[16px] font-medium '>Cristina</h3>
            <p className='text-[18px] md:text-[20px] lg:text-[24px] font-medium'>CITY : India</p>
        </div>

    </div>
    </div>
  )
}

export default RelatedProfileCard