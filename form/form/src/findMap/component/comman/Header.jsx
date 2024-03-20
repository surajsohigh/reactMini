import React from 'react'
import { FiMoon } from "react-icons/fi";

function Header() {
  return (
    <>
    <div className='mt-6'>
        <h2 className='text-4xl font-semibold p-6 text-center'>Where in the World?</h2>
        <div className='gap-3 flex items-center justify-end p-5 mx-[9rem] font-semibold '>
            <FiMoon className='mt-1 text-xl' />
            <p>Dark Mode</p>
        </div>
    </div>
    </>
  )
}

export default Header