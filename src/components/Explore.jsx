import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import photo from '../assets/growth-hacking.jpg'
import Setting from '../global/Setting'

const Explore = () => {
    const a=[1,2,3,4]

  return (
    <section className='px-[100px] mx-5 py-10 flex flex-col gap-10 border-b border-t'>
         <div className='relative'>
            <h1 className='font-semibold text-[32px]'>Explore by types of stays</h1>
            <Setting className='absolute top-0 right-[-50px]'/>
            <div className='flex items-center justify-between'>
                    <p className='text-[18px] text-[#6F727B]'>Explore houses based on 10 types of stays</p>
                    <div className='flex items-center gap-4'>
                        <div className='w-[40px] h-[40px] rounded-full border flex items-center justify-center'>
                            <FaAngleLeft className='text-[#6F727B]'/>
                        </div>
                        <div className='w-[40px] h-[40px] rounded-full border flex items-center justify-center'>
                            <FaAngleRight className='text-[#6F727B]'/>
                        </div>
                    </div>
            </div>
        </div>

        <div className='flex items-center justify-between'>
            {
                a.map((i)=>(
                    <div key={i} className='flex flex-col gap-4'>
                <img src={photo} alt="" className='w-[250px] h-[200px] rounded-xl '/>
                <p className='text-[20px] font-semibold'>Nature House</p>
                <p className='text-[#6F727B]'>188,288 properties</p>
            </div>
                ))
            }
        </div>

    </section>
  )
}

export default Explore