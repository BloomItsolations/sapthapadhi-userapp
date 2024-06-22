import React from 'react';

const PriceCard = ({ title, description, buttonText, features, isMiddle, onclikfun }) => {
  return (
    <div className={`bg-white shadow-2xl  p-3 w-[90%] mx-auto lg:mx-0 md:mx-0 md:w-[245px] lg:w-[371px] h-auto  md:h-auto lg:h-[450px] rounded-[10px] flex flex-col items-center md:mt-[${!isMiddle ? "-200px" : "-100px"}] lg:mt-[${!isMiddle ? "-200px" : "-100px"}]`}>
      <h3 className='text-[25px] md:text-[30px] lg:text-[36px] font-sans font-semibold'>{title}</h3>
      <p className='text-[10px] md:text-[13px] lg:text-[16px] font-normal font-sans mt-1 lg:mt-2'>{description}</p>
      <button onClick={onclikfun} className='text-[15px] md:text-[20px] lg:text-[24px] hover:bg-black hover:text-white font-medium font-sans w-[223px] mt-5 md:mt-6 lg:mt-10 h-[32px] rounded-[10px] border-[1px] border-black flex justify-center items-center'>
        {buttonText}
      </button>
      {features?.map((feature, index) => (
        <div key={index} className='flex justify-center self-start px-1 md:px-2 lg:px-4 gap-x-1 md:gap-x-4 lg:gap-x-5 items-center mt-6'>
          <img src={feature.icon} className='w-[22px] h-[22px]' alt="feature icon" />
          <p className='text-[15px] md:text-[17px] lg:text-[20px] font-normal font-sans'>{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;
