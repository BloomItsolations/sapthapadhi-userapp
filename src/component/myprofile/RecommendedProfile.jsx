import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedProfile = ({ image, age, height, id, firstName, lastName }) => {
  return (
    <Link to={`/SendRequestProfile/${id}`}>
      <div className='relative w-[195px] h-[220px] rounded-[10px] overflow-hidden shadow-lg'>
        <div
          className='w-full h-3/4 rounded-t-[10px]'
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className='relative flex flex-col justify-between h-[25%] p-2 bg-white rounded-b-[10px]'>
          <div className='flex items-center justify-center'>
            <p className='text-lg font-semibold'>{firstName} {lastName}</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-sm text-gray-600'>Age: {age}</p>
            <p className='text-xs text-gray-500'>Height: {height}</p>
          </div>
        </div>
        <div className='absolute inset-0 h-4 bg-gradient-to-b from-black to-transparent opacity-60'></div>
      </div>
    </Link>
  );
}

export default RecommendedProfile;
