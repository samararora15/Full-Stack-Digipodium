import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
// import { Await } from 'react-router-dom';

const ManageUser = () => {

  const [userList, setuserList] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/user/getall');
    console.log(res.status);

    const data = await res.json();
    console.table(data);

    setuserList(data);
  };

  useEffect(() => {

    //on component open/page open
    fetchUserData()
  
    return () => {

      //second runs when u just want to run something before page closes
      // alert('Do you want to save changes');
    }

    //third auto save types
  }, [])

  const deleteUser = async (id) => {
    console.log(id);

    const res = await fetch('http://localhost:5000/user/delete/'+id, {method : 'DELETE'})
    console.log(res.status);

    if(res.status === 200)
    {
      fetchUserData();
      toast.success('User Data Deleted');
    }
  }
  

  return (
  <div className='vh-100 bg-body-secondary'>

    <div className='conatiner'>
      <h1 className='text-center py-4'>Manage Users</h1>
    </div>

    <div>
            <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th colSpan={2} scope="col" className='text-center'>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      userList.map( (user,index) => (
        <tr key={user._id}>
          <td>{index+1}</td>
          <td>{user._id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>
            <Link to={'/updateuser/'+user._id} className='btn btn-primary'>Edit</Link>
          </td>
          <td>
            <button className='btn btn-danger' onClick={() => {deleteUser(user._id)}}>Delete</button>
          </td>
        </tr>
      ) )
    }
  </tbody>
</table>
    </div>
  </div>
  )
}

export default ManageUser