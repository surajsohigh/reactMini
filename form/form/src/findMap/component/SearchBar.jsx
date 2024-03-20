import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";


function SearchBar({setQuery}) {
  return (
    <div>
        <div className='flex gap-3 border-2 border-opacity-20'>
        <FaMagnifyingGlass className='m-3 ml-8 ' />
        <input className='m-2 w-full ' type="text" 
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          placeholder='Search For a Country...'/>
        </div>
    </div>
  )
}

export default SearchBar