import React from 'react'

const Login = () => {
  return (
      <div className = 'mainsection'>
        <img className='mylogo' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Spotify" />
        <div className='mycard'>
          <div className='infotype'>
            <button className='mybtn'>SIGN IN</button>
            <button className='mybtn'>SIGN UP</button>
          </div>
          <hr />
          <div className='entry'>
            <div className='entryfields'>
            <h1 className='fieldname'>Email or Username</h1>
            <input className='ipbox' type="text" placeholder='Email or Username' />
            <h1 className='fieldname'>Password</h1>
            <input className='ipbox' type="password" placeholder='Password' />
            </div>
          </div>
          <div className='switchboxcontent'>  
          <div className='switchbox'> 
          <label class="switch">
          <input type="checkbox"/>
          <span class="slider round"></span>
          </label>
          </div>
          <div className='switchboxtext'>
          <h1>Remember Me <br /></h1>
          </div>
          </div>
          <div className='loginbtnsection'>
            <button className='loginbtn'>Log In</button>
          </div>
          <h1 id='lasthead'>Forgot your Password?</h1>
        </div>
      </div>
  )
}

export default Login