import React, { useState } from 'react'
import CountryList from './pages/CountryList'
import country from '../../static/CountryData'
import { FaMagnifyingGlass } from "react-icons/fa6";
import RegionFilter from './RegionFilter';



function Filter() {
  const [query, setQuery] = useState("")
  const [regionValue, setRegionValue] = useState("none")

  return (
    <div>
      <section className='flex justify-between p-5 mx-[8rem]'>

        {/* SearchBar */}
        <div>
          <div className='flex w-full border-2 border-opacity-50 border-slate-700 rounded-md'>
            <FaMagnifyingGlass className='m-3 ' />
            <input className='py-2 px-3 text-center rounded-md' type="text"
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              placeholder='Search For a Country...' />
          </div>
        </div>
        {/* SearchBar End*/}


        {/* Region Filter  */}
        <div>
          <select name="region" className='px-7 py-2' 
              onChange={(e) => setRegionValue(e.target.value)} 
              value={regionValue}>
            <option value="">Filter By Region</option>
            {
              country.map((items) => {
                return <>
                  <option key={items.id} value={items.region}>{items.region}</option>
                </>
              })
            }

          </select>
        </div>
        {/* Region Filter End */}

      </section>

      {regionValue === "none" ? <CountryList query={query}/> : (<RegionFilter regionValue={regionValue} />) }

    </div>
  )
}

export default Filter