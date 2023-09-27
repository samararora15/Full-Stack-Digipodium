import React from 'react'
import Login from './Login'

const Todo = () => {

    const addNewTodo = (e) =>{
        // console.log(e.code);

        if(e.code === 'Enter')
        {
            console.log(e.target.value);
        }
    }

  return (
    <div>

        <div className='container'>

            <h1 className='text-center mb-5'>ToDo App</h1>

            <div className='card'>

                <div className='card-header'>
                    <input type="text" className='form-control' onKeyDown={addNewTodo}/>
                </div>

                <div className='card-body'>



                </div>

            </div>

        </div>

    </div>
  )
}

export default Todo