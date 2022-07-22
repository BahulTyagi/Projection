import React from 'react'
import { v4 as uuidv4 } from 'uuid';


const CreateTeam =()=> {

  // let navigate=useNavigate();
  const Tid=uuidv4()

  const handleClick=async(e)=>{
    e.preventDefault(); 
    
     const token=localStorage.getItem('token')
    
  const response = await fetch("http://localhost:5000/api/auth/createteam", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': token
            },
            body: JSON.stringify({Tid})
          });

          const json = await response.json();
          if(json.success)
          alert('Team Created..!')

        }



  return (
    <>
      <div className="container-fluid  mt-1 top:10px  shadow- mb-1  pd-3 bg-body rounded center" >
        <div className="row row-cols-1 row-cols-md-3 g-4">

        <div div className="col">           
          </div>

        <div div className="col">
            <div className="card h-100" style={{ width: '30rem' }}>
              <img src="./p1.webp" className="card-img-top" alt="" />
              <div className="card-body border-info mb-3 g-4 text-center text-bg-dark">
                <h1 className="card-title">CREATE YOUR TEAM</h1>
                <p className="card-text">Click "CREATE" to Create your team with this team id.</p>
                <div className="form-group">
                  <label htmlFor="teamid">{Tid}</label>
                </div>
                <br/>
                <button type="submit" className='btn btn-primary' onClick={handleClick}>CREATE</button>
                <br/>
                <br/>
                <p>Note: Once you create a team, you will be added to that team automatically</p>
                <p>You can share this team ID with your team members, so that they can join this team.</p>
              </div>
            </div>
          </div>

          </div>
          </div>

    </>
  )
}

export default CreateTeam