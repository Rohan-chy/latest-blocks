import React, { useRef } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import photo from '../assets/growth-hacking.jpg'
import Scroller from '../global/Scroller';
import Setting from '../global/Setting';

const HeadingSection = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -250, // Adjust scroll amount as needed
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 250, // Adjust scroll amount as needed
                behavior: 'smooth'
            });
        }
    };

    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


    return (
        <main>
           <section className='relative mx-5 px-[100px] py-10 flex flex-col gap-10 border-b'>

            <div>
                <h1 className='font-semibold text-[32px]'>Heading of sections</h1>
                <div className='flex items-center justify-between'>
                        <p className='text-[20px] text-[#6F727B]'>Description of sections</p>
                        <div className='flex items-center gap-4'>
                            <div 
                                className='w-[40px] h-[40px] rounded-full border-2 flex items-center justify-center cursor-pointer hover:border-2 hover:border-[#6F727B]'
                                onClick={scrollLeft}
                            >
                                <FaAngleLeft className='text-[#6F727B]'/>
                            </div>
                            <div 
                                className='w-[40px] h-[40px] rounded-full border-2 flex items-center justify-center cursor-pointer hover:border-2 hover:border-[#6F727B]'
                                onClick={scrollRight}
                            >
                                <FaAngleRight className='text-[#6F727B]'/>
                            </div>
                        </div>
                </div>
                <Setting className='absolute right-[40px] top-[110px]'/>
            </div>

            <div 
                ref={scrollContainerRef}
                className="w-full flex items-center gap-10 overflow-x-auto scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {
                    a.map((i)=>(
                    <div key={i} className='w-[250px] flex-none gap-4'>
                        <img src={photo} alt="" className='w-full h-[300px] rounded-xl '/>
                        <p className='text-[20px] font-semibold mt-4'>New York</p>
                        <p className='text-[#6F727B] mt-4'>188,288 properties</p>
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
