import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PriceCard from './PriceCard';

const PricePlan = ({ setSelected }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const freeFeatures = [
    { icon: '/images/cross.png', text: '5 Premium Profiles view /mo' },
    { icon: '/images/righttick.png', text: 'Free user profile can view' },
    { icon: '/images/cross.png', text: 'View contact details' },
    { icon: '/images/cross.png', text: 'Send interest' },
  ];

  const goldFeatures = [
    { icon: '/images/righttick.png', text: '20 Premium Profiles view /mo' },
    { icon: '/images/righttick.png', text: 'Free user profile can view' },
    { icon: '/images/righttick.png', text: 'View contact details' },
    { icon: '/images/righttick.png', text: 'Send interest' },
    { icon: '/images/righttick.png', text: 'Start Chat' },
  ];

  const platinumFeatures = [
    { icon: '/images/righttick.png', text: '50 Premium Profiles view /mo' },
    { icon: '/images/righttick.png', text: 'Free user profile can view' },
    { icon: '/images/righttick.png', text: 'View contact details' },
    { icon: '/images/righttick.png', text: 'Send interest' },
    { icon: '/images/righttick.png', text: 'Start Chat' },
  ];
  const navigate = useNavigate();
  const handlePlanSelect = (plan, planname) => {
    setSelected(plan);
    navigate(`/priceplan/${planname}`)
  };

  return (
    <>
    <div
      className='h-[200px] md:h-[400px] lg:h-[640px] w-full'
      style={{
        backgroundImage: "url(/images/priceplanimage.jpg)",
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >        <div className='ml-16 pt-2 md:pt-10 lg:pt-10'>
          <h3 className='text-[35px] md:text-[40px] lg:text-[48px] font-semibold text-white font-sans'>PRICING</h3>
          <h4 className='text-[20px] md:text-[28px] lg:text-[32px] mt-2 md:mt-4 lg:mt-5 ml-4 text-white m-0 p-0 font-medium font-sans'>Get Started </h4>
          <p className='text-[15px] md:text-[20px] lg:text-[24px] m-0 p-0 text-white font-medium font-sans'>Pick your plan now</p>
        </div>
      </div>
      <div className='flex flex-col gap-y-6 md:gap-y-0 lg:gap-y-0 md:flex-row lg:flex-row justify-between px-0 md:px-2 lg:px-10 mt-[1px] md:mt:-[-100px] lg:mt-[-100px] pb-5'>
        <PriceCard
          title="FREE"
          description="Printer took a type and scrambled"
          buttonText="Select Plan"
          features={freeFeatures}
          onclikfun={() => handlePlanSelect({
            id: 1, title: 'FREE', description: 'Printer took a type and scrambled', price: '0', features: [
              '5 Premium Profiles view /mo',
              'Free user profile can view',
              'View contact details',
              'Send interest',
              'Start Chat'
            ]
          }, 'FREE')}
        />
        <PriceCard
          title="GOLD"
          description="Printer took a type and scrambled"
          buttonText="Select Plan"
          features={goldFeatures}
          isMiddle={true}
          onclikfun={() => handlePlanSelect({
            id: 2, title: 'GOLD', description: 'Printer took a type and scrambled', price: '50', features: [
              'Unlimited Profiles view /mo',
              'Priority customer support',
              'View contact details',
              'Send interest',
              'Start Chat'
            ]
          }, 'GOLD')}
        />
        <PriceCard
          title="PLATINUM"
          description="Printer took a type and scrambled"
          buttonText="Select Plan"
          features={platinumFeatures}
          onclikfun={() => handlePlanSelect({
            id: 3, title: 'PLATINUM', description: 'Printer took a type and scrambled', price: '100', features: [
              'All GOLD features',
              'Personal matchmaker',
              'Exclusive events',
              'View contact details',
              'Send interest',
              'Start Chat'
            ]
          }, 'PLATINUM')}
        />
      </div>
    </>
  );
};

export default PricePlan;
