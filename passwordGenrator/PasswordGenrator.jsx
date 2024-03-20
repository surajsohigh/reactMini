import React, { useCallback, useEffect, useRef, useState } from 'react';

const genratePassword = (size, number, char) => {
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    
    if (number) str += "1234567890"
    if (char) str += "~!@#$%^&*()_+"

    console.log(size)
    let pass = ""

    for(let i=0; i<size; i++){
        let res = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(res)
    }
    console.log("h", pass)
    return pass
} 

function PasswordGenerator() {

    const [number, setNumber] = useState(false)
    const [char, setChar] = useState(false)
    const [size, setSize] = useState(14)
    const [password, setpassword] = useState("0000000")
    const passwordRef = useRef(null)


    useEffect( () => {
        const pass = genratePassword(size, number, char)
        setpassword(pass)
        console.log(pass)
    }, [size, char, number])

    const copyHandler = useCallback( () => {
        // to show it is selected 
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0, 999)
        // copy to clipboard 
        window.navigator.clipboard.writeText(password)
    }, [password] )



  return (
    <div className='bg-slate-500 min-h-screen flex items-center justify-center rounded-lg '>
      <div className='text-white text-center'>
        <h2 className='p-3 font-semibold text-2xl'>Password Generator</h2>
        <section className='flex items-center justify-start mt-5'>
          <div className=''>
            <input
            className='px-12 py-1 rounded-md text-center text-black'
            value={password}
            readOnly
            ref={passwordRef}
            type="text" />
          </div>
          <button className='px-5 py-1 border-2 
          rounded-md border-blue-500 
          bg-blue-500'
          onClick={copyHandler}
          >Copy</button>
        </section>

        <section className=' flex items-center justify-center gap-4 mt-5 text-black'>

          <div className=''>
            <input
              type="range"
              min="7" max="20"
              className='cursor-pointer'
              value={size}
              id='length'
              onChange={(e) => setSize(e.target.value)}
            />
            <label htmlFor="length" className='ml-2'>Length - {size}</label>
          </div>

          <div>
            <input type="checkbox" id='number' 
            onChange={(e) => setNumber((prev) => !prev)}
            checked={number}/>
            <label className='px-1' htmlFor="number">Numbers</label>
          </div>

          <div>
            <input type="checkbox" id='char' 
            onChange={() => setChar((prev) => !prev) }
            checked={char}
            />
            <label className='px-1' htmlFor="char">Characters</label>
          </div>

        </section>
      </div>
    </div>
  );
}

export default PasswordGenerator;
