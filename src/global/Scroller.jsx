import React from 'react';

const Scroller = ({scrollRight,scrollLeft}) => {
  return (
    <div className='flex items-center justify-center gap-2 mt-2'>
      <div onClick={scrollLeft} className='w-[240px] h-[6px] bg-[#F3F4F6] rounded-full cursor-pointer'></div>
      <div className='w-[480px] h-[6px] rounded-full bg-black cursor-pointer'></div>
      <div onClick={scrollRight} className='w-[240px] h-[6px] bg-[#F3F4F6] rounded-full cursor-pointer'></div>
    </div>
  );
};

export default Scroller;
