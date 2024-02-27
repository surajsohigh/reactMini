import React from 'react'
import country from '../../../static/CountryData'
import Card from './Card'

function CountryList({query}) {
    
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10'>
        {
            country.filter( (item) => item.name.common.toLowerCase().includes(query))
            .map( (item)=> {
            return <Card 
                id={item.id}
                img={item.flags.png}
                name={item.name.common}
                population={item.population}
                capital={item.capital}
                region={item.region}
            />})
        }
    </div>
  )
}

export default CountryList