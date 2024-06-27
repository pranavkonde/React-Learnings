import React, { useEffect, useRef } from 'react'

export default function UseRef() {
    const constValue = useRef(0)
    const divReference = useRef();
    const inputReference = useRef();

    function handleClick(){
        constValue.current++;
        console.log(constValue.current);
    }


    useEffect(()=>{
        const getDivReference = divReference.current;
        console.log(getDivReference)
    },[])

    useEffect(()=>{
        inputReference.current.focus();
    },[])

    console.log(inputReference.current)

    return (
        <div>
            <h1>UseRef Hook</h1>
            <button onClick={handleClick}>Increase</button>
            <div ref={divReference} className="hello">Hello World</div>
            <input ref={inputReference} type="text" placeholder='Enter points'/>
        </div>
    )
}
