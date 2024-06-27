import React, { useEffect, useState } from 'react'

export default function UseEffectEg1() {
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(false);

    function incrementCount(){
        setCount(count+1)
    }

    // useEffect(()=>{
    //     console.log("Hello World")
    // })


     useEffect(()=>{
        console.log("Hello World")
    }, [])

    useEffect(()=>{
        if (count === 5){
            setShowText(true);
        }
    }, [count])


  return (
    <div>
      <h1>UseEffect Hook Eg1 </h1>
      <h2>{count}</h2>
      {
        showText ? <p>Hello World</p> : null
      }
      <button onClick={incrementCount}>Increase</button>

    </div>
  )
}
