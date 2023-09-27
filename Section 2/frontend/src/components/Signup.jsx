import React from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});


const Signup = () => {

  const navigate = useNavigate();

  // initialize formik

  const signupForm = useFormik({
    initialValues : {
      name : '',
      email: '',
      password: '',
      confirm: ''
    },
    onSubmit: async (values) => {
      console.table(values);

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Signup Success',
          text : 'Now Login to Continue'
        })

        navigate('/login');

      }else{
        Swal.fire({
          icon : 'error',
          title : 'something went wrong',
          text : 'try again'
        })
      }

    },
    validationSchema : SignupSchema
  });

  return (
    <div className="vh-100 bg-body-secondary">
      <div className="col-md-3 mx-auto pt-5">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center my-5">Create Account</h3>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
