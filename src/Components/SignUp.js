import React, { useState } from 'react'
// import { IconName } from "react-icons/md";
export default function SignUp() {
         
         const [user,setUser]=useState({username:"",email:"",password:""})
        let  name ,value;
         const handleInputs =(e)=>{
            console.log(e);
            name=e.target.name;
            value =e.target.value;

            setUser({...user,[name]:value})
         };
  return (
    <>
   <div className='container mt-5'>
        <section className='d-flex justifier-content-between'>
          <div className='left_data mt-3 p-3' style={{ width: "100%" }}>
            <h3 className='text-center col-lg-9'>SIGNUP</h3>
            {/* <li>MdAccountcircle</li> */}
            <form >
              <div className=" form-group mb-3 col-lg-9">
                <label htmlFor="username" className="form-label">USERNAME</label>
                <input type="username" 
                className="form-control" 
                name ="username"
                 value={user.name}
                 onChange={handleInputs}
                id="username" />

              </div>
              <div className="form-group mb-3 col-lg-9">
                <label htmlFor="email" className="form-label">EMAIL</label>
                <input type="email" 
                name="email"
                className="form-control" 
                id="email" 
                value={user.email}
                onChange={handleInputs}
                aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="form-groups mb-3 col-lg-9">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" 
                name="password"
                className="form-control" 
                value={user.password}
                onChange={handleInputs}
                id="password" />
              </div>
              <button type="submit" className="btn btn-primary col-lg-9">Submit</button>
            </form>
          </div>
          < div className='right_data mt-3' style={{ width: "100%" }}>
            <div className='sign_img mt-3'>
              <img src='./bg.webp' style={{ maxWidth: 600 }} alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
