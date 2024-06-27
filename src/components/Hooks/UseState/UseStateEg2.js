import { useEffect, useState } from "react";

import React from 'react'

const initialState = {
    name:"",
    city:""
}

export default function UseStateEg2() {
   const [formData, setFormData] = useState(initialState)

//    function handleNameChange(event){
//     setFormData({
//         ...formData,
//         name: event.target.value
//     })
//    }

   function handleCityChange(event){
    setFormData({
        ...formData,
        city: event.target.value
    })
   }

   console.log("name", formData.name)
   console.log("city", formData.city)

  return (
    <div>
      <h1>UseState Hook Eg 2</h1>
      <input onChange={(event)=>{
    setFormData({
        ...formData,
        name: event.target.value
    })}}
     type= "text" placeholder="Enter name"/>
      <select onChange={handleCityChange}>
        <option>Pune</option>
        <option>Mumbai</option>
        <option>Kolkata</option>
      </select>
      <h1>Name is: {formData.name}</h1>
      <h2>City is: {formData.city}</h2>
    </div>
  )
}
