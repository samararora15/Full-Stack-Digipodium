import React from 'react'

const EventHandling = () => {
  return (
    <div className='container'>
        <h1 className='text-center'>Event Handling</h1>
        <hr />

        <button className='btn btn-secondary' onClick={ () => {alert('button was clicked')} }>Click Button</button>

        <input type="text" className='form-control' onChange={ (e) => {console.log(e.target.value);} } />
    </div>  
  )
}
export default EventHandling