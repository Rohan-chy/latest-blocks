import React from 'react'
import { FaArrowRight,FaStar } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import photo from '../assets/growth-hacking.jpg'
import { FaRegHeart } from "react-icons/fa";
import Scroller from '../global/Scroller';
import Setting from '../global/Setting';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../index.css';

// import required modules
import { Pagination } from 'swiper/modules';

const TopComponent = () => {
    var a=[1,2,3]
  return (
    <main>
     <section className='bg-[#F3F4F6] mx-5 px-[100px] py-8 flex flex-col gap-10 border-b '>
        <h1 className='text-[24px] text-[#6C727E]'>Popular places to stay that Chisfis recommends for you</h1>
        <div className=''>
            {/* up part */}
            <div className='flex flex-col gap-5'>
                <div className='flex items-center justify-between'>
                    {/* city part */}
                    <div className='flex items-center gap-5 text-[18px] font-semibold'>
                    <p className='px-4 py-2 bg-[#0F5E58] text-white rounded-full'>New York</p>
                    <p  className='px-4 py-2  rounded-full text-[#6C727E]'>Tokyo</p>
                    <p className='px-4 py-2   rounded-full text-[#6C727E]'>Paris</p>
                    <p className='px-4 py-2   rounded-full text-[#6C727E]'>London</p>
                    </div>
                    {/* view part */}
                    <div className='flex items-center gap-5 bg-white border rounded-full px-5 py-2'>
                        <p className='text-[20px]'>View All</p>
                        <FaArrowRight />
                    </div>
                    <Setting className='absolute right-[50px]'/>
                </div>

                <div className='flex items-center justify-between'>
                   
                   {
                    a.map((i)=>(
                        <div key={i} className='flex flex-col gap-5 bg-white rounded-xl w-[350px] h-[450px] relative'>

                            <button className='bg-[#B81C1D] w-[110px] h-[30px] text-white rounded-full absolute top-4 left-4'>-10% today</button>
                            <div className='absolute right-4 top-4 w-[40px] h-[40px] rounded-full bg-[#695952] flex items-center justify-center'>
                             <FaRegHeart className='text-white'/>
                            </div>
                            <Swiper
                                spaceBetween={30}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide><img src={photo} alt="" className='w-full h-[250px] rounded-t-xl'/></SwiperSlide>
                                <SwiperSlide><img src={photo} alt="" className='w-full h-[250px] rounded-t-xl'/></SwiperSlide>
                                <SwiperSlide><img src={photo} alt="" className='w-full h-[250px] rounded-t-xl'/></SwiperSlide>
                                
                            </Swiper>
                        
                      <div className='p-4  flex flex-col gap-5 '>
                      <p className='text-[18px] text-[#6C727E]'>Entire cabin . 10 beds</p>
                        <p className='text-[24px]'>Best Western Ceddars</p>
                        <div className='flex items-center gap-2'>
                            <CiLocationOn className='text-[24px]'/>
                            <p className='text-[18px] text-[#6C727E]'>1 Anzinger Court</p>
                        </div>

                        <div className='flex items-center justify-between'>
                            <p className='text-[18px]'> <b>$26</b> <span className='text-[#6C727E]'>/night</span></p>
                            <div className='flex items-center gap-2 text-[18px] text-[#6C727E]'>
                                <FaStar className='text-[orange]'/>
                                <p>4.8</p>
                                <p>(28)</p>
                            </div>
                        </div>
                      </div>

                    </div>
                    ))
                   }
                </div>
            </div>


            {/* down part */}
            <div></div>
        </div>
    </section>

   <Scroller/>
    
    </main>
   
  )
}

export default TopComponent