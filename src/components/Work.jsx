import React from 'react'
import photo from '../assets/growth-hacking.jpg'
import Setting from '../global/Setting';


const Work = () => {
    const a=[1,2,3];

  return (
    <section className='px-[100px] py-10 flex flex-col  gap-14 border-b '>
                <div className='relative flex flex-col items-center justify-center'>

                    <h1 className='font-semibold text-[32px]'>How it works</h1>
                    <p className='text-[20px text-[#6F727B]'>keep calm & travel on</p>
                    <Setting className='absolute right-0 top-12'/>
             </div>

        <div className='flex items-center justify-between'>
            {
                a.map((i)=>(
                <div key={i} className='w-[300px] flex flex-col items-center gap-4'>
                    <img src={photo} alt="" className='w-[3000px] h-[200px] rounded-xl '/>
                    <p className='text-[20px] font-semibold'>Book & relax</p>
                    <p className='text-[#6F727B]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eum.</p>
            </div>
                ))
            }
        </div>
    </section>
  )
}

export default Work