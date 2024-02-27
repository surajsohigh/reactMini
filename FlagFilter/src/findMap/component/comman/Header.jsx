import React from 'react'
import { FiMoon } from "react-icons/fi";

function Header() {
  return (
    <>
    <div className='flex justify-between my-8'>
        <h2 className='text-2xl ml-5 font-semibold'>Where in the World?</h2>
        <div className='gap-3 flex mr-16'>
            <FiMoon className='mt-1'/>
            <p>Dark Mode</p>
        </div>
    </div>
    </>
  )
}

export default Header