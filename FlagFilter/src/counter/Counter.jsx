import React, { useState } from 'react'

function Counter({children}) {

  const [basket1, setBasket1] = useState(10)
  const [basket2, setBasket2] = useState(0)

  console.log("Start")

  let leftBtn = () => {
    if (basket1 >= 0 & basket1 < 10){
      setBasket1(basket1+1)
      setBasket2(basket2-1)
    }
  }

  let rightBtn = () => {
    if (basket2 >= 0 & basket2 < 10){
      setBasket2(basket2+1)
      setBasket1(basket1-1)
    }
  }

  return (
    <div>
      <h1>Counter</h1>

      <div className='flex justify-between m-6'>
        <article>
          <p className='ml-10'>{basket1}</p>
        </article>

          <div className='flex justify-between gap-10'>
            <button className='border-2 border-black p-3' onClick={leftBtn}>Left</button>
            <button className='border-2 border-black p-3' onClick={rightBtn} >Right</button>
          </div>
        <article>
          <p>{basket2}</p>
        </article>
      </div>

    </div>
  )
}

export default Counter