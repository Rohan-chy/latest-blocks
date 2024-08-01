import React from 'react';

const Scroller = ({ onLineClick }) => {
  return (
    <div className='flex justify-center gap-2 mt-4'>
      {[0, 1, 2].map((_, index) => (
        <div
          key={index}
          onClick={() => onLineClick(index)}
          className={`cursor-pointer w-[100px] h-[6px] ${
            index === 1 ? 'bg-black' : 'bg-gray-300'
          } rounded-full`}
        ></div>
      ))}
    </div>
  );
};

export default Scroller;
