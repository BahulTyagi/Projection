import React, { useState } from 'react'


const Login = () => {
  const [student, setStudent] = useState({ email: "", password: "" })


  const handleInputs = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value })
  };


  const handleSubmit = async (e) => {
    e.preventDefault();  // for no reload of our page
  
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: student.email, password: student.password })
    });
    const json = await response.json();
    console.log(json);
  }


  return (
    <>
      <div className='container mt-5'>
        <section className='d-flex justifier-content-between'>
          <div className='left_data mt-3 p-3' style={{ width: "100%" }}>
            <h3 className='text-center col-lg-9'>SIGNIN</h3>

            <form onSubmit={handleSubmit} >

              <div className="form-group mb-3 col-lg-9">
                <label htmlFor="email" className="form-label">EMAIL</label>
                <input type="email" name="email" className="form-control" id="email" value={student.email} onChange={handleInputs} aria-describedby="emailHelp" />
              </div>

              <div className="form-groups mb-3 col-lg-9">
                <label htmlFor="password" className="form-label">PASSWORD</label>
                <input type="password" name="password" className="form-control" value={student.password} onChange={handleInputs} id="password" />
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
export default Login