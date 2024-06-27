import { useState } from "react";
const initialState = true;

export default function UseStateEg1() {

  const [toggleText, setToggleText] = useState(initialState);

  console.log(toggleText)

 function handleToggleText(){
    setToggleText(!toggleText)
  }

  return (
    <div>
      <h1>UseState Hook Eg 1</h1>
      {
        toggleText? <p>Hello World</p>: null
      }
      <button onClick={handleToggleText}>Toggle Text</button>
    </div>
  )
}
