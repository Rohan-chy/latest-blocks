import React from 'react';

const Scroller = ({ onLineClick }) => {
  return (
    <div className='flex items-center justify-center gap-2 mt-2'>
      <div onClick={() => onLineClick(0)} className='w-[240px] h-[6px] bg-[#F3F4F6] rounded-full cursor-pointer'></div>
      <div onClick={() => onLineClick(1)} className='w-[480px] h-[6px] rounded-full bg-black cursor-pointer'></div>
      <div onClick={() => onLineClick(2)} className='w-[240px] h-[6px] bg-[#F3F4F6] rounded-full cursor-pointer'></div>
    </div>
  );
};

export default Scroller;
