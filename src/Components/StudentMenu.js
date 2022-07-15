import React from 'react'

import { useNavigate } from 'react-router-dom'







const StudentMenu = () => {

    let navigate=useNavigate();


    const handleClick=()=>{
        console.log(localStorage.token)
        navigate("/CreateTeam");
    }

    return (
        <>
            <button type="button" className="btn btn-lg btn-primary mx-5 my-5" onClick={handleClick}>Create Team</button>
            <button type="button" className="btn btn-lg btn-secondary mx-5">Join Team</button>
            <button type="button" className="btn btn-lg btn-success mx-5">My Team</button>
        </>
    )
}

export default StudentMenu