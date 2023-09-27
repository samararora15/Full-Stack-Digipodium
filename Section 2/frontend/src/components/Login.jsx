import React from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import Swal from "sweetalert2";
import useAppContext from "../AppContext";

const Login = () => {

  const { setloggedin } = useAppContext();

  // initialize formik

  const loginForm = useFormik({
    initialValues : {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      console.table(values);

      const res = await fetch('http://localhost:5000/user/authenticate',{

      method: 'POST',
      body: JSON.stringify(values),
      headers:{
        'Content-Type' : 'application/json'
      }
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Login Success'
        })
        setloggedin(true);
      }else if(res.status === 400)
      {
        Swal.fire({
          icon : 'error',
          title : 'Login Failed',
          text: 'Invalid email or password'
        })
      }

    }
  });

  return (
    <div className="vh-100 bg-body-secondary">
      <div className="col-md-3 mx-auto pt-5">
        <div className="card mt-5">
          <div className="card-body">
            <h3 className="text-center my-5">Login Account</h3>

            <form onSubmit={loginForm.handleSubmit}>

              <label>Email</label>
              <input id="email" onChange={loginForm.handleChange} value={loginForm.values.email} type="text" className="form-control mb-4" />

              <label>Password</label>
              <input id="password" onChange={loginForm.handleChange} value={loginForm.values.password} type="password" className="form-control mb-4" />

              <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
