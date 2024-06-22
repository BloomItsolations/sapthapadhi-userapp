import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoadingBar from './LoadingBar';
import swal from 'sweetalert';

const LoginPage = () => {
         const [Phone,setPhone]=useState('');
         const [passwrod,setPassword]=useState('');
         const [isLoading,setIsLoading]=useState(false);
         const navigate=useNavigate();
         console.log("env",process.env.REACT_APP_BaseURL);
        let handleSubmit=async ()=>{
               try{
                setIsLoading(true);
                let response= await axios.post(`${process.env.REACT_APP_BaseURL}/auth/userLogin`,
                    {
                        phone:Phone,
                        password:passwrod
                    },
                   { 
                    headers:{
                        'Content-Type':'application/json'
                    }}
                )
                if(response.data){
                    console.log(response.data.userDetails)
                    localStorage.setItem("userdata",JSON.stringify(response.data.userDetails));
                    swal('Congratulation',response.data.message,'success')
                    navigate('/myprofile')
                }
               }
               catch(error){
                if(error.response){
                    swal(error.response.data.message,error.response.data.message,"error");
                }
                else{
                    swal("Sorry!",error.message,"error");   
                }
               }
               finally{
                setIsLoading(false);
               }
        }

    return (
        <>
         {isLoading && <LoadingBar/>}
        
        <div className='flex w-[100vw] justify-center items-center h-auto md:h-screen lg:h-screen'>
            <div className=' w-[80%] h-[80%] flex flex-col-reverse gap-4 md:gap-0 lg:gap-0 md:flex-row lg:flex-row  '>
                <div className='bgimage bg-black w-full md:w-[528px] lg:w-[528px] h-[400px] md:h-[100%] lg:h-[100%] flex justify-center items-center flex-col  '>
                    <h2 className='text-white text-[25px] md:text-[48px] lg:text-[48px] self-start ml-2 md:ml-20 lg:ml-20'>NOW</h2>
                    <h3 className='text-[25px] md:text-[40px] lg:text-[40px] text-white ml-2 md:ml-20 lg:ml-20'>CATCH UP YOUR LIFE PARTNER QUICKLY</h3>
                </div>
                <div className='px-[2px] md:px-8 lg:px-8 mt-6 md:mt-0 lg:mt-0 '>
                    <h2 className='font-normal text-[20px] md:text-[36px] lg:text-[36px]'>SIGN IN TO SAPTHAPADHI</h2>
                    <div className='flex gap-1 text-[15px] md:text-[20px] lg:text-[20px] font-medium ml-3 mt-2'>
                        Not a member?{' '}
                        <Link to="#">
                            Sign Up
                        </Link>
                    </div>
                   
                    <div className='flex flex-col mt-3 md:mt-4 lg:mt-6'>
                        <label className=' text-[24px] md:text-[28px] lg:text-[28px]'>Phone</label>
                        <input type='text' value={Phone} onChange={(e)=>setPhone(e.target.value)} className='outline-none border-b-[1px]  mt-0 md:mt-1 lg:mt-1 border-[#79442D] ' />
                    </div>
                    <div className='flex flex-col mt-3 md:mt-4 lg:mt-6'>
                        <label className='text-[24px] md:text-[28px] lg:text-[28px]'>Password</label>
                        <input type='text' value={passwrod} onChange={(e)=>setPassword(e.target.value)} className='outline-none border-b-[1px]  mt-0 md:mt-1 lg:mt-1 border-[#79442D] ' />
                    </div>
                    <button onClick={handleSubmit} className='bg-[#6D7072] w-full py-2 rounded-[10px] mt-5 md:mt-10 lg:mt-14 text-white font-normal '>Login</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginPage