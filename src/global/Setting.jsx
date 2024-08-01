import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";

const Setting = ({className}) => {
  return (
    <div className={`${className} w-10 h-10 rounded-xl bg-white border flex items-center justify-center cursor-pointer `}>
        <IoSettingsOutline className='text-[18px]'/>
    </div>
  )
}

export default Setting