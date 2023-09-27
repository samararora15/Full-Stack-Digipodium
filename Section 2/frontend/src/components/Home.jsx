import React from 'react';
import logo from './logo192.png';

const Home = () => {
  return (
    <div>
        <h1>Welcome to Home Page</h1>
        <h1 style={{color : 'blue', backgroundColor : 'yellow'}}>Using Inline CSS in JSX</h1> 
        <h2 className='myclass'>Using ClassName</h2>

    <img src="/logo192.png" alt="React" />
    <img src={logo} alt="React1" />

    </div>
  )
}

export default Home;