import React, { useState } from 'react'

const Home = () => {
    const [name, setName] = useState('NAWAF')
    const [age,setAge]=useState(25)
    const handleClick=() => {
        setName('AHMED')
        setAge(30)
    }
      
      
  return (
    <div className='home'>
     <h2>home page</h2>
      <button onClick={handleClick}>click me</button>
      <p>name is {name} and age is {age}</p>
    </div>
    
  )
}

export default Home
