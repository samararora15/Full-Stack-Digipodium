import React, { useState } from 'react'

const Statemanagement = () => {

  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState(10);

  return (
    <div className='container'>
      <h1 className='text-center'>State Management</h1>
      <hr />

      <button className='btn btn-primary mt-4' onClick={() => { setLikes(likes+1) }}>{likes} Likes</button>
      <button className='btn btn-success mt-4' onClick={() => { setComment(comment+2) }}>{comment} Comment</button>

    </div>
  )
}

export default Statemanagement