import React, { useEffect, useState } from 'react'
// import ClassMount from './ClassMount'; 

export default function FunctionLifecycle() {
    const [count, setCount] = useState(0);
    function incrementCount(){
        setCount(preState => preState+1);
    }

    // The dependency array is an array of values that the effect depends on. If one of these values changes between renders, React will re-run the effect. If the values have not changed, React will skip the effect.

     // componentDidMount()
    // useEffect(()=>{
    //     console.log("Mount Phase")
    // },[])

     // componentDidUpdate()
    // useEffect(()=>{
    //     console.log("Update Phase")
    // })

    // componentWillUnmount()  /. Just remove the component that has been imported
    //   useEffect(()=>{  
    //     return ()=>{
    //         console.log("Unmount Phase")
    //     }
    // }, [count])


  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=> incrementCount()}>Increment Count</button>
      {/* <ClassMount/> */}
    </div>
  )
}
