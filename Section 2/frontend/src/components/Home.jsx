import React from 'react'

const Home = () => {
  return (
    <div>
        <h1>Welcome to Home Page</h1>
        <h1 style={{color : 'blue', backgroundColor : 'yellow'}}>Using Inline CSS in JSX</h1> 
        <h2 className='myclass'>Using ClassName</h2>
    </div>
  )
}

export default Home;