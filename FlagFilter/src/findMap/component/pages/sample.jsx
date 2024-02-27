import React from 'react'
import country from '../../../static/CountryData'
import Card from './Card'

function CountryList({query}) {
    let res = country.filter( (items) => {
        // console.log(items.name.common[0])
        return items.name.common.toLowerCase().includes(query)
    })


    
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10'>
        {
            country.map( (item) => {
                return <>
                    <div key={item.id}>
                        <a href={<Card props={item}/>}>
                        <img src={item.flags.png} alt="" />
                        </a>
                        <div className='border-2 solid border-l-neutral-500'>
                            <div className='m-3'>
                            <p className='text-xl font-semibold'>{item.name.common}</p>
                            <p> <span className='font-bold'>Population: </span>{item.population}</p>
                            <p> <span className='font-bold'>Region: </span>{item.region}</p>
                            <p> <span className='font-bold'>Capital: </span>{item.capital}</p>
                            </div>
                        </div>
                    </div>
                
                </> 
            })
        }
    </div>
  )
}

export default CountryList