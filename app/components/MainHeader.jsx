"use client";

import React, { useContext } from 'react'
import {FaBars} from "react-icons/fa"
import { MenuContext } from '../context/MenuContext';

const MainHeader = () => {
    const { toggle } = useContext(MenuContext)
  return (
    <div className='bg-white flex justify-between items-center px-4 h-12 mb-4'>
      <h2 className='font-semibold'>WAED(We Are Ethiopian Developer)</h2>
     <div className='flex justify-center items-center gap-4'>
     <div onClick={toggle} className="lg:hidden">
        <FaBars className='cursor-pointer'/>
     </div>
     <div>
        UserArea
     </div>
     </div>
    </div>
  )
}

export default MainHeader
