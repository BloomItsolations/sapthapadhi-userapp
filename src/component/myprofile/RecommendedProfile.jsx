import React from 'react';

const RecommendedProfile = ({ image, age, height }) => {
  return (
    <div
      className='w-[165px] h-[165px] rounded-[10px]'
      style={{
        backgroundImage: `url(${image})`, 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover' 
      }}
    >
      <div className='flex flex-col justify-end w-full h-full p-2  text-white'>
        <p>Age: {age}</p>
        <p>Height: {height}</p>
      </div>
    </div>
  );
}

export default RecommendedProfile;
