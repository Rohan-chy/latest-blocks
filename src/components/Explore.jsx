import React, { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import photo from '../assets/growth-hacking.jpg';
import Setting from '../global/Setting';

const Explore = () => {
  const scrollContainerRef = useRef(null);
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -250, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 250, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="px-[100px] mx-5 py-10 flex flex-col gap-10 border-b border-t">
      <div className="relative">
        <h1 className="font-semibold text-[32px]">Explore by types of stays</h1>
        <Setting className="absolute top-0 right-[-50px]" />
        <div className="flex items-center justify-between">
          <p className="text-[18px] text-[#6F727B]">Explore houses based on 10 types of stays</p>
          <div className="flex items-center gap-4">
            <div
              className="w-[40px] h-[40px] rounded-full border-2 flex items-center justify-center cursor-pointer hover:border-2 hover:border-[#6F727B]"
              onClick={scrollLeft}
            >
              <FaAngleLeft className="text-[#6F727B] " />
            </div>
            <div
              className="w-[40px] h-[40px] rounded-full border-2 flex items-center justify-center cursor-pointer hover:border-2 hover:border-[#6F727B]"
              onClick={scrollRight}
            >
              <FaAngleRight className="text-[#6F727B] " />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="w-full flex items-center gap-5 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {a.map((i, index) => (
          <div key={index} className="flex-none w-[250px]">
            <img src={photo} alt="" className="w-full h-[200px] object-cover rounded-xl" />
            <p className="text-[20px] font-semibold mt-2">Nature House</p>
            <p className="text-[#6F727B]">188,288 properties</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
