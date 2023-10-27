import React, { useState } from 'react'
// Simple example for Twoway Databinding
const TwoWayDataBinding = () => {
const [value, setvalue] = useState('');

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(value)
}
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={(e)=>setvalue(e.target.value)} />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default TwoWayDataBinding
