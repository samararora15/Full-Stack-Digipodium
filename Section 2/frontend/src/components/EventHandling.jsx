import React from 'react'

const EventHandling = () => {

  let count = 0;

  return (
    <div className='container'>
        <h1 className='text-center'>Event Handling</h1>
        <hr />

        <button className='btn btn-secondary' onClick={ () => {alert('button was clicked')} }>Click Button</button>

        <input type="text" className='form-control' onChange={ (e) => {console.log(e.target.value);} } />
        {/* e denotes event information */}

        <input type="color" className='mt-5' onChange={ (e) => {document.body.style.backgroundColor = e.target.value} }/>

        <button className='btn btn-primary mt-4' onClick={ ()=> {count++; console.log(count);} }/>Add Count

        <h1>{count++}</h1>
    </div>  
  )
}
export default EventHandling