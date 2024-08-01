import React from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import photo from '../assets/growth-hacking.jpg'
import Scroller from '../global/Scroller';
import Setting from '../global/Setting';

const HeadingSection = () => {
    const a=[1,2,3,4]

  return (
    <main>
       <section className='relative mx-5 px-[100px] py-10 flex flex-col gap-10 border-b'>

        <div>
            <h1 className='font-semibold text-[32px]'>Heading of sections</h1>
            <div className='flex items-center justify-between'>
                    <p className='text-[20px] text-[#6F727B]'>Description of sections</p>
                    <div className='flex items-center gap-4'>
                        <div className='w-[40px] h-[40px] rounded-full border flex items-center justify-center'>
                            <FaAngleLeft className='text-[#6F727B]'/>
                        </div>
                        <div className='w-[40px] h-[40px] rounded-full border flex items-center justify-center'>
                            <FaAngleRight className='text-[#6F727B]'/>
                        </div>
                    </div>
            </div>
            <Setting className='absolute right-[40px] top-[110px]'/>
        </div>

        <div className='flex items-center justify-between'>
            {
                a.map((i)=>(
                    <div key={i} className='flex flex-col gap-4'>
                <img src={photo} alt="" className='w-[250px] h-[300px] rounded-xl '/>
                <p className='text-[20px] font-semibold'>New York</p>
                <p className='text-[#6F727B]'>188,288 properties</p>
            </div>
                ))
            }
        </div>

       </section>

       <Scroller/>
    </main>
  )
}

export default HeadingSection