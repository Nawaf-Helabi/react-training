import React from 'react'

const Home = () => {
    const handleClick=(e) => {
        console.log('hello nawaf',e);
      }
      const handleClickAgain=(name,e)=>{
        console.log('hello'+name, e.target)
      }
  return (
    <div className='home'>
     <h2>home page</h2>
      <button onClick={handleClick}>click me</button>
      <button onClick={(e)=>{handleClickAgain('ahmed',e)}}>click</button>
    </div>
    
  )
}

export default Home
