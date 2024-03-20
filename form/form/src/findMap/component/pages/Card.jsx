import React from 'react'

function Card({img, name, population, region, capital}) {
  // console.log(name, population, region)
  return (
        <div>
            <img src={img} alt="" />
            <div className='border-2 solid border-l-neutral-500'>
                <div className='m-3'>
                <p className='text-xl font-semibold'>{name}</p>
                <p> <span className='font-bold'>Population: </span>{population}</p>
                <p> <span className='font-bold'>Region: </span>{region}</p>
                <p> <span className='font-bold'>Capital: </span>{capital}</p>
                </div>
            </div>
                    </div>
  )
}

export default Card