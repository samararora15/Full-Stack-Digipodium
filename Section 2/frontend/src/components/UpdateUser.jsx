import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';

const UpdateUser = () => {

  const navigate = useNavigate();

    const {id} = useParams();
    const [userData, setuserData] = useState(null);

    const fetchUserData = async() => {
        const res = await fetch('http://localhost:5000/user/getbyid/'+id);

        const data = await res.json();

        console.log(data);
        setuserData(data);
    }

    useEffect(() => {
      fetchUserData();
    }, [])

    const submitForm = async (values) => {
      const res = await fetch('http://localhost:5000/user/update'+id,{
        method: 'PUT',
        body : JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
      console.log(res.status);
  
      if(res.status === 200)
      {
        Swal.fire({
          icon : 'success',
          title : 'User Updated'
        })
        navigate('/manageuser');
      }
    }

    

  return (
    <div>
      <div className="col-md-3 mx-auto pt-5">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center my-5">Create Account</h3>
            {
              userData !== null ? (
                <Formik
                initialValues={userData}
                onSubmit={submitForm}
              >
                { (signupForm) => (
                  <form onSubmit={signupForm.handleSubmit}>
                  <label>Name</label>
    
                  <span style={{color : "red", fontSize:10, marginLeft: 10}}>{signupForm.errors.name}</span>
                  <input id="name" onChange={signupForm.handleChange} value={signupForm.values.name} type="text" className="form-control mb-4" />
    
                  <label>Email</label>
                  <input id="email" onChange={signupForm.handleChange} value={signupForm.values.email} type="text" className="form-control mb-4" />
    
                  <label>Password</label>
                  <input id="password" onChange={signupForm.handleChange} value={signupForm.values.password} type="password" className="form-control mb-4" />
                  
                  <label>Confirm Password</label>
                  <input id="confirm" onChange={signupForm.handleChange} value={signupForm.values.confirm} type="password" className="form-control mb-4" />
    
                  <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
                ) }
              </Formik>
              ) : <h1 className='text-center my-5'>Update User</h1>
            }

            

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateUser