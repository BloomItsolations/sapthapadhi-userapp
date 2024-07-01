
import { Link, useNavigate } from 'react-router-dom';
import PriceCard from './PriceCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PaymentDetailsPage from './PaymentDetailsPage';

const PricePlan = () => {
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get('https://sapthapadhi.bloomitsolutions.co.in/app/listplan');
        setPlans(response.data);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };

    fetchPlans();
  }, []);

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showpaymentpopup, setShowpamentpopup] = useState(false);
  const navigate = useNavigate();
  const handlePlanSelect = (plan, planname) => {
    console.log("plan",plan);
    setSelectedPlan(plan);
    setShowpamentpopup(!showpaymentpopup)
  };

  return (
    <>
      {
        showpaymentpopup ? <div className='absolute top-0 left-0 bg-white  h-screen w-full flex justify-center items-center overflow-hidden'>
          <PaymentDetailsPage  selectedPlan={selectedPlan} showpaymentpopup={showpaymentpopup} setShowpamentpopup={setShowpamentpopup}/>
        </div> : <>

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
          <div className='flex flex-wrap justify-between px-0 md:px-2 lg:px-10 mt-[1px] md:mt:-[-100px] lg:mt-[-100px] gap-3 pb-5'>

            {
              plans && plans.map((value) => (
                <PriceCard
                  title={value.name}
                  planValidity={value.planValidity}
                  buttonText="Select Plan"
                  features={value?.features}
                  price={value.amount}
                  onclikfun={() => handlePlanSelect({
                    id: value.id, title: value.name, planValidity: value.planValidity, price: value.amount, features: value.features
                  }, value.name)}
                />
              ))
            }

          </div>

        </>
      }

    </>
  );
};

export default PricePlan;
