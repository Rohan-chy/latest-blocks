import React from 'react'
import photo from '../assets/growth-hacking.jpg'
import { FaRegHeart } from 'react-icons/fa'
import Scroller from '../global/Scroller'
import Setting from '../global/Setting'

const SecondTop = () => {
    const a=[1,2,3]
  return (
   <main>
         <section className='relative flex items-center gap-10 mx-5 px-[100px] py-5 border-b border-t'>
        {/* left part */}
        <div className='flex flex-col gap-6'>
            <img src={photo} alt="" className='w-[600px] h-[450px] rounded-xl'/>
            <p className='w-[500px] font-bold text-[28px] '>Lenovo`s smarter devices stoke  professional passions</p>
            <p className='w-[500px] text-[#6F727B]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Atque quod repellat dolorum nulla, fugiat doloribus sed minus ad error autem.
             </p>
             <div className='flex items-center gap-5'>
                <img src={photo} alt="" className='w-[40px] h-[40px] rounded-full'/>
                <p className='text-[#4D5562]'>Foulcher Nathanil</p>
                <p className='text-[#6F727B]'>. May 20, 2021</p>
             </div>
        </div>


        {/* right part */}
        <div className='flex flex-col gap-10'>
           {
            a.map((i)=>(
                <div key={i} className='flex items-center justify-between'>

                {/* how AI */}
                <div className='flex flex-col gap-5 w-[400px]'>
                    <h1 className='text-[20px] font-bold '>How AI and Teams are benefitting the littlest of patients</h1>
                    <p className='text-[#6F727B]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, nobis?</p>
                    <div className='flex items-center gap-5'>
                        <img src={photo} alt="" className='w-[40px] h-[40px] rounded-full'/>
                        <p className='text-[#4D5562]'>Foulcher Nathanil</p>
                        <p className='text-[#6F727B]'>. May 20, 2021</p>
                     </div>
                </div>


                {/* image part */}
                <div className='relative '>
                    <img src={photo} alt="" className='w-[200px] h-[200px] rounded-xl'/>
                    <div className='absolute left-2 bottom-2 w-[40px] h-[40px] rounded-full bg-[#695952] flex items-center justify-center border border-white'>
                             <FaRegHeart className='text-white'/>
                    </div>
                </div>
            </div>
            ))
           }
        </div>
        <Setting className='absolute right-[50px] top-[100px]'/>
    </section>
   <Scroller/>
   </main>
  )
}

export default SecondTop