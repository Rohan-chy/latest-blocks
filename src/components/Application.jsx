import React from 'react'
import google from '../assets/google.png'
import apple from '../assets/apple.png'
import photo from '../assets/growth-hacking.jpg'

const Application = () => {
  return (
    <section className='relative h-[450px] mx-[100px] my-5 bg-[#FDF3EB]  p-10' >

        <div className='w-[500px] flex flex-col gap-8 '>
            <h1 className='text-[32px] font-semibold'>Simple Way to Order <br /> Your Food Faster</h1>
            <p className='text-[#6F727B]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quia, qui nostrum omnis, possimus, reprehenderit laborum minima voluptatem rem consectetur corporis dolor officia voluptatibus.
                 Nemo doloremque enim adipisci, veniam ratione optio.
            </p>
            <div className='flex items-center gap-5'>
                <img src={google} alt="google" className='w-[150px]'/>
                <img src={apple} alt="apple" className='w-[150px]'/>
            </div>
        </div>



        <div className=''>
            <img src={photo} alt="" className='absolute top-0 right-[320px] w-[300px] h-[400px] rounded-2xl' />
            <img src={photo} alt="" className='absolute top-[-30px] right-[0px] w-[300px] h-[400px] rounded-2xl' />
        </div>
    </section>
  )
}

export default Application