import React from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';


const CreateTeam =()=> {

  // let navigate=useNavigate();
  const Tid=uuidv4()

  const handleClick=async(e)=>{
    e.preventDefault(); 
    
     const sid=localStorage.getItem('sid')
    


  const response = await fetch("http://localhost:5000/api/auth/createteam", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Tid, sid})
          });


        console.log("Team created")

        }



  return (
    <>
    <br />
<br/><br />
<br/>
        <h3>Your Team ID is :</h3>
        <div>{Tid}</div>
<br />
<br/>
        <h4>Click submit to create your team:</h4>
        <button type="submit" onClick={handleClick}>Submit</button>
        <br />
<br/>
<p>
  After submit, share this team id with your teammates
</p>

    
    </>
  )
}

export default CreateTeam